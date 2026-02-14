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
    heading: "High quality web design solutions you can trust.",
    description: "When selecting a web design agency, it's essential to consider its reputation, experience, and the specific needs of your project.",
    scoreData: [
        {
            number: 40,
            numberValue: 'K',
            scoreDescp: "People who have launched their websites"
        },
        {
            number: 238,
            scoreDescp: "Experienced professionals ready to assist"
        },
        {
            number: 3,
            numberValue: 'M',
            scoreDescp: "Support through messages and live consultations"
        },
    ]
};

const servicesData = {
    number: '03',
    name: "Services",
    heading: "What we do",
    description: "A glimpse into our creativity—exploring innovative designs, successful collaborations, and transformative digital experiences.",
    data: [
        {
            id: 1,
            image: "/images/home/services/services_1.png",
            heading: "Brand identity",
            descp: "When selecting a web design agency, it's essential to consider its reputation, experience, and the specific needs of your project."
        },
        {
            id: 2,
            image: "/images/home/services/services_2.png",
            heading: "Web development",
            descp: "When selecting a web design agency, it's essential to consider its reputation, experience, and the specific needs of your project."
        },
        {
            id: 3,
            image: "/images/home/services/services_3.png",
            heading: "Content creation",
            descp: "When selecting a web design agency, it's essential to consider its reputation, experience, and the specific needs of your project."
        },
        {
            id: 4,
            image: "/images/home/services/services_4.png",
            heading: "Motion & 3d modeling",
            descp: "When selecting a web design agency, it's essential to consider its reputation, experience, and the specific needs of your project."
        },
    ]
};

const testimonialData = {
    data_1: {
        preTitle: "Hear from them",
        title: "Our website redesign was flawless. They understood our vision perfectly!",
        author: "Albert Flores",
        company: "MasterCard"
    },
    data_2: {
        preTitle: "Hear from them",
        title: "From concept to execution, they delivered outstanding results. Highly recommend their expertise!",
        author: "Robert Fox",
        company: "Mitsubishi"
    },
    data_3: {
        preTitle: "Hear from them",
        title: "Super smooth process with incredible results. highly recommend!",
        author: "Jenny Wilson",
        company: "Pizza Hut"
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
            faq_que: "Why do I need all three: Astrology, Vastu, and Tarot together?",
            faq_ans: 'These three disciplines form a holistic "Triad of Fate": Astrology diagnoses the Time (When should I act?), Vastu diagnoses the Space (Where should I be, and is my environment supporting me?), Tarot diagnoses the Mind (What is my subconscious blocking or revealing right now?). We need all three of them.'
        },
        {
            faq_que: "If my Astrology chart indicates a difficult period, is it set in stone?",
            faq_ans: 'Absolutely not. This is the difference between Fate (the hand you are dealt) and Destiny (how you play that hand). We use remedial measures (gemstones, mantras, charitable actions) and strategic planning to mitigate the intensity of the "heat," ensuring you use the crisis for transformation rather than destruction.'
        },
        {
            faq_que: "What are Tarot Cards?",
            faq_ans: 'Tarot operates on the principle of synchronicity, a concept coined by Carl Jung to describe "meaningful coincidences." When we shuffle and draw, we bypass the logical, defensive ego and access the intuitive data that you already possess but cannot articulate.  A master reader uses Tarot to diagnose the hidden psychological currents driving your situation.'
        },
        {
            faq_que: "How can a physical remedy can impact my career or relationships?",
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
        number: 45,
        postfix:"+",
        title: 'Presence in global markets',
        descp: "Expanding reach across international regions with localized expertise and worldwide impact."
    },
    {
        number: 15,
        prefix: "$",
        postfix: "M",
        title: 'In strategic investments',
        descp: "Driving growth with curated partnerships and high-performing, audience-driven initiatives."
    },
    {
        number: 158,
        postfix: "+",
        title: 'Trusted brand collaborations',
        descp: "Shaping industry conversations through innovation, creativity, and lasting influence."
    },
]

const servicesSliderData = [
    "Branding", "Web development", "Agency","Content creation","SaaS","Motion & 3d modeling","Photography"
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