import Contact from "@/app/components/home/contact";
import Herobanner from "@/app/components/shared/hero-banner";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Contact | Stambh AstroVastu",
};

export default function Page() {
    return (
        <main>
            <Herobanner
                bannerimage="/images/contact/banner/contact-banner.png"
                heading="Contact"
                desc="Ready to <span>change</span> your future? Reach out to us we’d love to hear from you." />
            <Contact contactdataNumber="01"/>
        </main>
    );
};
