
"use client";

import { useState } from "react";

const content = {
    en: {
        paragraphs: [
            "My journey into astrology began fifteen years ago during a very difficult chapter in my personal life. At that time, I was searching for answers and a way to navigate the challenges I was facing. Astrology became the light that helped me find my way. Once I successfully used these ancient tools to solve my own problems, I felt a deep calling to help others do the same. Today, I use my experience to truly empathize with people, helping them understand their own paths and find the strength they need to grow and succeed.",
            "I was born and raised in Firozabad, India, in an environment where faith and tradition are part of daily life. Like many Indian families, we have a deep devotion to our religion, specifically to Shri Radhavallabh Lal Ji and the Bankey Bihari Temples. This upbringing naturally led me toward a life of spirituality and inner peace. For the last five years, I have also been teaching yoga, using it as a way to connect the body and mind. My practice is rooted in meditation, which helps me stay grounded and focused on serving others.",
            "I truly believe that the universe is our greatest teacher and that we are all here to learn from one another. My mission is to use everything I have learned to help you overcome your obstacles and find a better path forward. I am dedicated to guiding you toward a life that is not only healthier and happier but also more prosperous. By working together, we can unlock the potential the universe has stored for you and create the bright future you deserve.",
        ],
        signoff: "Best,",
        name: "Sarika Gupta",
    },
    hi: {
        paragraphs: [
            "मेरी ज्योतिष की यात्रा पंद्रह साल पहले शुरू हुई थी, जब मैं अपने निजी जीवन में काफी कठिन दौर से गुजर रहा था। उस समय, मैं अपने सवालों के जवाब और मुश्किलों से निकलने का रास्ता ढूंढ रहा था। ज्योतिष वह रोशनी बनी जिसने मुझे सही राह दिखाई। जब मैंने इन प्राचीन विद्याओं की मदद से अपनी समस्याओं को हल कर लिया, तो मुझे दूसरों की मदद करने की प्रेरणा मिली। आज, मैं अपने इसी अनुभव के साथ लोगों की भावनाओं को समझता हूँ और उन्हें जीवन में आगे बढ़ने और सफल होने में मदद करता हूँ।",
            "मेरा जन्म और पालन-पोषण भारत के फिरोजाबाद शहर में हुआ। हर भारतीय परिवार की तरह, मेरा परिवार भी धर्म और परंपराओं से गहराई से जुड़ा हुआ है। श्री राधावल्लभ लाल जी और बांके बिहारी मंदिर के प्रति हमारी अटूट आस्था है। इसी माहौल ने मुझे आध्यात्मिकता की ओर प्रेरित किया। पिछले पांच वर्षों से मैं योग भी सिखा रहा हूं, जो शरीर और मन को जोडने का काम करता है। मेरा झुकाव हमेशा ध्यान और साधना की ओर रहा है, जिससे मुझे दूसरों की सेवा करने की शक्ति मिलती है।",
            "मेरा मानना है कि यह ब्रह्मांड हमारा सबसे बडा शिक्षक है और हम सभी यहां कुछ न कुछ सीखने आए हैं। मेरा उद्देश्य अपनी सीखी हुई विद्याओं से आपकी समस्याओं को सुलझाना और आपको एक बेहतर रास्ता दिखाना है। मैं आपको एक स्वस्थ, खुशहाल और समृद्ध जीवन की ओर ले जाने के लिए समर्पित हूं। हम मिलकर आपके जीवन की बाधाओं को दूर कर सकते हैं और उस उज्ज्वल भविष्य की रचना कर सकते हैं जिसके आप हकदार हैं।",
        ],
        signoff: "शुभकामनाएं,",
        name: "सारिका गुप्ता",
    },
} as const;

const AboutusDetail = () => {
    const [language, setLanguage] = useState<"en" | "hi">("en");

    return (
        <section className="py-10 md:py-20 xl:py-40 dark:bg-secondary">
            <div className='container'>
                <div className='flex flex-col xl:flex-row gap-8'>
                    <div className='max-w-xl w-full'>
                        <h2 className='text-56'>Stambh AstroVastu</h2>
                    </div>
                    <div className='flex flex-col gap-12'>
                        <div className="flex items-center gap-3">
                            <button
                                type="button"
                                onClick={() => setLanguage("en")}
                                className={`rounded-full px-4 py-1.5 text-sm transition ${language === "en"
                                    ? "bg-primary text-white"
                                    : "bg-secondary/10 text-secondary dark:bg-white/10 dark:text-white"
                                    }`}
                            >
                                EN
                            </button>
                            <button
                                type="button"
                                onClick={() => setLanguage("hi")}
                                className={`rounded-full px-4 py-1.5 text-sm transition ${language === "hi"
                                    ? "bg-primary text-white"
                                    : "bg-secondary/10 text-secondary dark:bg-white/10 dark:text-white"
                                    }`}
                            >
                                हिंदी
                            </button>
                        </div>

                        <div className="grid">
                            {(["en", "hi"] as const).map((lang) => (
                                <div
                                    key={lang}
                                    aria-hidden={language !== lang}
                                    className={`col-start-1 row-start-1 flex flex-col gap-6 transition-opacity duration-200 ${language === lang
                                        ? "opacity-100"
                                        : "opacity-0 pointer-events-none select-none"
                                        }`}
                                >
                                    {content[lang].paragraphs.map((paragraph, index) => (
                                        <p key={`${lang}-${index}`} className='text-secondary dark:text-white leading-7'>
                                            {paragraph}
                                        </p>
                                    ))}

                                    <p className='text-secondary dark:text-white leading-7'>
                                        {content[lang].signoff}
                                        <br />
                                        {content[lang].name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutusDetail