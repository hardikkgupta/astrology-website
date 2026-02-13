import { NextResponse } from "next/server";

const MenuData = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Services",
    path: "/#services",
    newTab: false,
  },
  
];


const footerData = {
    name: "Stambh AstroVastu",
    tagline: "Build something together?",
    info: [
        {
            icon: "/images/footer/email-arrow.svg",
            link: "Get an Appointment!",
            href: "contact"
        },
        {
            icon: "/images/footer/phone.svg",
            link: "+91-9045089133",
            href: "tel:+919045089133"
        },
        {
            icon: "/images/footer/Location.svg",
            link: "Stambh AstroVastu",
            href: "https://maps.app.goo.gl/Bjx3adTq3DKvwrzE7"
        }
    ],
    links: [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/#services" },
        { name: "Terms", href: "/terms-and-conditions" },
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Error 404", href: "/not-found" }
    ],
    socialLinks: [
        { name: "Facebook", href: "https://www.facebook.com/profile.php?id=100064116277664" },
        { name: "Instagram", href: "https://www.instagram.com/stambhastrovastu/" },
        { name: "Youtube", href: "https://www.youtube.com/@StambhAstroVastu" }
    ],
    copyright: "© Stambh AstroVastu copyright 2026"
};

export const GET = async () => {
    return NextResponse.json({
        footerData,
        MenuData
    });
};