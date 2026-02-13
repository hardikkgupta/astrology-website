import { NextRequest, NextResponse } from "next/server";

const FORM_SUBMIT_EMAIL =
    process.env.FORM_SUBMIT_EMAIL || "stambh.vastu@gmail.com";
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

const sendEmail = async (name: string, email: string, message: string) => {
    const response = await fetch(`https://formsubmit.co/ajax/${FORM_SUBMIT_EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
        cache: "no-store",
    });

    const rawText = await response.text();
    let parsed: any = null;
    try {
        parsed = rawText ? JSON.parse(rawText) : null;
    } catch {
        parsed = { raw: rawText };
    }

    if (!response.ok) {
        throw new Error(`Email notification failed: ${rawText}`);
    }

    return parsed;
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

        const emailResult = await sendEmail(name, email, message);
        const emailSent = Boolean(emailResult?.success ?? true);
        let telegramSent = false;
        let telegramReason: string | null = null;

        try {
            const telegramResult = await sendTelegram(name, email, message);
            telegramSent = Boolean(telegramResult?.sent);
            telegramReason = telegramResult?.reason || null;
        } catch (telegramError) {
            console.error("Telegram notification failed:", telegramError);
            telegramReason = "request_failed";
        }

        return NextResponse.json({
            success: emailSent,
            emailSent,
            telegramSent,
            telegramReason,
        });
    } catch (error) {
        console.error("Contact API error:", error);
        return NextResponse.json(
            { success: false, message: "Unable to submit the form right now." },
            { status: 500 }
        );
    }
}
