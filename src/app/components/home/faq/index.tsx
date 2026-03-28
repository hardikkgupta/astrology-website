
"use client";

import { useEffect, useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../ui/accordian";


function Faq() {
    const [faqData, setFaqData] = useState<any>(null);
    
        useEffect(() => {
            const fetchData = async () => {
                try {
                    const res = await fetch('/api/page-data')
                    if (!res.ok) throw new Error('Failed to fetch')
                    const data = await res.json()
                    setFaqData(data?.faqData)
                } catch (error) {
                    console.error('Error fetching services:', error)
                }
            }
            fetchData()
        }, [])
    return (
        <section className="bg-lightgray dark:bg-darkblack pt-10 pb-20 md:pt-24 md:pb-40">
            <div className="flex flex-col gap-24">
                <div className="container">
                    <div className="flex flex-col gap-20">
                        <div className="flex flex-col gap-14">
                            <div className="flex flex-col gap-5">
                                <h2 className="max-w-3xl">Frequently asked questions</h2>
                                <p className="max-w-2xl text-secondary/70 dark:text-white/70">We don’t just read the stars; we align them to your ambition. Bespoke strategies for building a life without limits.</p>
                            </div>

                            <div className="flex flex-col items-end">
                                <Accordion type="single" collapsible className="flex flex-col 2xl:max-w-5xl w-full">
                                    {faqData?.data?.map((item:any, index:any) => (
                                        <AccordionItem
                                            key={index}
                                            value={`item-${index}`}
                                        >
                                            <AccordionTrigger>
                                                <h4>{item.faq_que}</h4>
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <p>{item.faq_ans}</p>
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Faq;
