import { NextRequest, NextResponse } from "next/server";

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

const sanitizeInput = (value: unknown) => {
    if (typeof value !== "string") return "";
    return value.trim();
};

const buildTelegramMessage = (name: string, email: string, message: string) => {
    return [
        "New contact form submission",
        `Name: ${name}`,
        `Email: ${email}`,
        `Message: ${message}`,
    ].join("\n");
};

const sendTelegram = async (name: string, email: string, message: string) => {
    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
        return { sent: false, reason: "missing_configuration" };
    }

    const response = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: buildTelegramMessage(name, email, message),
            }),
            cache: "no-store",
        }
    );

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Telegram notification failed: ${errorText}`);
    }

    const telegramResponse = await response.json();
    return {
        sent: Boolean(telegramResponse?.ok),
        reason: telegramResponse?.ok ? null : "telegram_api_error",
    };
};

const sendTelegramSafe = async (name: string, email: string, message: string) => {
    try {
        return await sendTelegram(name, email, message);
    } catch (error) {
        console.error("Telegram notification failed:", error);
        return { sent: false, reason: "request_failed" as const };
    }
};

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const name = sanitizeInput(body?.name);
        const email = sanitizeInput(body?.email);
        const message = sanitizeInput(body?.message);

        if (!name || !email || !message) {
            return NextResponse.json(
                { success: false, message: "Please fill all required fields." },
                { status: 400 }
            );
        }

        const telegramResult = await sendTelegramSafe(name, email, message);
        const telegramSent = Boolean(telegramResult?.sent);

        return NextResponse.json({
            success: telegramSent,
            telegramSent,
            telegramReason: telegramResult?.reason || null,
        });
    } catch (error) {
        console.error("Contact API error:", error);
        return NextResponse.json(
            { success: false, message: "Unable to submit the form right now." },
            { status: 500 }
        );
    }
}
