import { NextResponse } from "next/server";

const avatarList = [
    {
        image: "/images/avatar/avatar_1.jpg",
        title: "Sarah Johnson"
    },
    {
        image: "/images/avatar/avatar_2.jpg",
        title: "Olivia Miller"
    },
    {
        image: "/images/avatar/avatar_3.jpg",
        title: "Sophia Roberts"
    },
    {
        image: "/images/avatar/avatar_4.jpg",
        title: "Isabella Clark"
    },
];

const statsFactData = {
    number: '01',
    name: "Stats & facts",
    heading: "Authentic Guidance You Can Trust",
    description: "When seeking advice in astrology, Vastu, or tarot, it's essential to consider the experience and empathy. With dedicated practice, I provide non-destructive, remedial, real-world solutions to help you navigate life's challenges",
    scoreData: [
        {
            number: 15,
            numberValue: '',
            scoreDescp: "years of experience"
        },
        {
            number: 310,
            scoreDescp: "cumulative number of homes and businesses harmonized",
        },
        {
            number: 2,
            numberValue: '',
            scoreDescp: "weeks for the effects to begin showing in your life"
        },
    ]
};

const servicesData = {
    number: '02',
    name: "Services",
    heading: "What we do",
    description: "Unlock and transform your life by understanding how celestial bodies influences your life",
    data: [
        {
            id: 1,
            image: "/images/home/services/services_1.png",
            heading: "Astro Vastu Consultancy",
            descp: "Optimize your energies and control your energies for happier, healthier and more prosperous life"
        },
        {
            id: 2,
            image: "/images/home/services/services_2.png",
            heading: "Tarot Card",
            descp: "Ask your questions, receive answers from the universe, and gain deep insights into your past, present, and future"
        },
        {
            id: 3,
            image: "/images/home/services/services_3.png",
            heading: "Birth Kundli",
            descp: "Understand and amplify your strengths and reduce weakness to give yourself and people around you a happy, healthy and prosperous life"
        },
        {
            id: 4,
            image: "/images/home/services/services_4.jpeg",
            heading: "Palmistry",
            descp: "As they say, destiny is written in your hands. We will help you read it, understand it, amplify the good, and diminish the bad"
        },
    ]
};

const testimonialData = {
    data_1: {
        preTitle: "Hear from them",
        title: "When I first reached out, I was uncertain, but the clarity of your analysis and remedies brought positive changes",
        author: "Harshit Singh",
        company: ""
    },
    data_2: {
        preTitle: "Hear from them",
        title: "I consulted my daughter and she suggested me easy remedy which was available at home. She’s a great astrologer and a kind person. Her remedy worked like a magic",
        author: "Harsha Chugani",
        company: ""
    },
    data_3: {
        preTitle: "Hear from them",
        title: "Her approach is refreshingly practical, she avoids focuses on simple, effective solutions that deliver real clarity",
        author: "Rajan Bakshi",
        company: ""
    },
};

const teamData = {
    number: '06',
    data: [
        {
            image: "/images/home/team/team-img-1.png",
            name: "Martha Finley",
            position: "Creative Director",
            socialLinks: [
                {
                    icon: "/images/socialIcon/twitter.svg",
                    link: "https://twitter.com"
                },
                {
                    icon: "/images/socialIcon/Be.svg",
                    link: "https://www.behance.net/"
                },
                {
                    icon: "/images/socialIcon/linkedin.svg",
                    link: "https://linkedin.com"
                }
            ]
        },
        {
            image: "/images/home/team/team-img-2.png",
            name: "Floyd Miles",
            position: "Marketing Strategist",
            socialLinks: [
                {
                    icon: "/images/socialIcon/twitter.svg",
                    link: "https://twitter.com"
                },
                {
                    icon: "/images/socialIcon/Be.svg",
                    link: "https://www.behance.net/"
                },
                {
                    icon: "/images/socialIcon/linkedin.svg",
                    link: "https://linkedin.com"
                }
            ]
        },
        {
            image: "/images/home/team/team-img-3.png",
            name: "Glenna Snyder",
            position: "Lead Designer",
            socialLinks: [
                {
                    icon: "/images/socialIcon/twitter.svg",
                    link: "https://twitter.com"
                },
                {
                    icon: "/images/socialIcon/Be.svg",
                    link: "https://www.behance.net/"
                },
                {
                    icon: "/images/socialIcon/linkedin.svg",
                    link: "https://linkedin.com"
                }
            ]
        },
        {
            image: "/images/home/team/team-img-4.png",
            name: "Albert Flores",
            position: "UX/UI Developer",
            socialLinks: [
                {
                    icon: "/images/socialIcon/twitter.svg",
                    link: "https://twitter.com"
                },
                {
                    icon: "/images/socialIcon/Be.svg",
                    link: "https://www.behance.net/"
                },
                {
                    icon: "/images/socialIcon/linkedin.svg",
                    link: "https://linkedin.com"
                }
            ]
        },
    ]
};

const pricingData = {
    data: [
        {
            planName: "Launch",
            planPrice: "$699",
            planDescp: "Ideal for startups and small businesses taking their first steps online.",
            planIncludes: ["Competitive research & insights","Wireframing and prototyping","Basic tracking setup (Google Analytics, etc.)","Standard contact form integration"]
        },
        {
            planName: "Scale",
            tag: "Most popular",
            planPrice: "$1,699",
            cancelPrice: "$2,199",
            planDescp: "Perfect for growing brands needing more customization and flexibility.",
            planIncludes: ["Everything in the Launch Plan","Custom design for up to 10 pages","Seamless social media integration","SEO enhancements for key pages"]
        },
        {
            planName: "Elevate",
            planPrice: "$3,499",
            planDescp: "Best suited for established businesses wanting a fully tailored experience.",
            planIncludes: ["Everything in the Scale Plan","E-commerce functionality (if needed)","Branded email template design","Priority support for six months after launch"]
        },
    ],
    partnerLogo: [
        { light: "/images/home/pricing/partner-1.svg", dark: "/images/home/pricing/partner-dark-1.svg" },
        { light: "/images/home/pricing/partner-2.svg", dark: "/images/home/pricing/partner-dark-2.svg" },
        { light: "/images/home/pricing/partner-3.svg", dark: "/images/home/pricing/partner-dark-3.svg" },
        { light: "/images/home/pricing/partner-4.svg", dark: "/images/home/pricing/partner-dark-4.svg" },
        { light: "/images/home/pricing/partner-5.svg", dark: "/images/home/pricing/partner-dark-5.svg" },
      ],
};

const faqData = {
    data: [
        {
            faq_que: "What is Astrology?",
            faq_ans: 'Astrology is a system of cosmic time-keeping and energetic architecture. Just as the moon’s gravitational pull dictates the tides of the ocean, planetary geometries puts specific electromagnetic and archetypal pressures on human consciousness. A professional reading reveals the quality of time you are entering. It allows you to align your free will with cosmic currents, turning resistance into leverage.'
        },
        {
            faq_que: "Why combine Astrology, Vastu, and Tarot?",
            faq_ans: 'These three disciplines form a holistic "Triad of Fate": Astrology diagnoses the Time (When should I act?), Vastu diagnoses the Space (Where should I be, and is my environment supporting me?), Tarot diagnoses the Mind (What is my subconscious blocking or revealing right now?). We need all three of them.'
        },
        {
            faq_que: "Can a difficult Astrology chart be changed?",
            faq_ans: 'Absolutely not. This is the difference between Fate (the hand you are dealt) and Destiny (how you play that hand). We use remedial measures (gemstones, mantras, charitable actions) and strategic planning to mitigate the intensity of the "heat," ensuring you use the crisis for transformation rather than destruction.'
        },
        {
            faq_que: "What are Tarot Cards?",
            faq_ans: 'Tarot operates on the principle of synchronicity, a concept coined by Carl Jung to describe "meaningful coincidences." When we shuffle and draw, we bypass the logical, defensive ego and access the intuitive data that you already possess but cannot articulate.  A master reader uses Tarot to diagnose the hidden psychological currents driving your situation.'
        },
        {
            faq_que: "How do physical remedies affect career or relationships?",
            faq_ans: 'This is called frequency modulation. Human body and your home act as complex energy systems emitting and receiving signals. Gemstones function as amplifiers and Vastu Corrections work on resistance. Get an appointment to learn more about this!'
        }
    ]
};
const contactData = {
    keypoint:["Always-On Customer Support","Service Across the Globe"],
    managerProfile:{
        image:"/images/avatar/avatar_1.jpg",
        name:"Courtney Henry",
        position:"Onboarding & Success Manager"
    }
}

const aboutusStats = [
    {
        number: 15,
        postfix:"+",
        title: 'Years of experience',
        descp: "Focused on improving your health, relationships, and building stronger financial stability"
    },
    {
        number: 310,
        prefix: "",
        postfix: "+",
        title: 'Cumulative homes and businesses harmonized',
        descp: "Supporting a 16-directional focus to create overall harmony and foster joy and happiness"
    },
    {
        number: 2,
        postfix: "+",
        title: 'Weeks for the effects to begin showing in your life',
        descp: "By focusing on all 16 directions and applying non-destructive remedies, positive effects can begin to appear within 48 hours and continue developing over the next two weeks"
    },
]

const servicesSliderData = [
    "Astrology", "Vastu Shastra", "Tarot Card", "Palmistry", "Numerology", "Life Style Coach", "Counselling"
]



export const GET = async () => {
    return NextResponse.json({
        avatarList,
        statsFactData,
        servicesData,
        testimonialData,
        teamData,
        pricingData,
        faqData,
        contactData,
        aboutusStats,
        servicesSliderData
    });
};