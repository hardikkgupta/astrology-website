
"use client";

const reels = [
    "https://www.instagram.com/p/C5qJGkeJj6u/embed?hidecaption=true",
    "https://www.instagram.com/p/CzEdUpYyFoB/embed?hidecaption=true",
    "https://www.instagram.com/reel/DSNFhK7j2gf/embed?hidecaption=true",
    "https://www.instagram.com/reel/DRmd28pj5qz/embed?hidecaption=true",
];

const Team = (props: { teamdataNumber: string }) => {
    const { teamdataNumber } = props;

    return (
        <section className="dark:bg-darkblack py-20 md:py-40">
            <div className="flex flex-col gap-24">
                <div className="container">
                    <div className="flex flex-col gap-14 xl:gap-24">
                        <div className="flex flex-col xl:flex xl:flex-row items-start gap-8">
                            <div className="flex items-center py-3 gap-4 md:gap-8 w-full max-w-xl">
                                <span className="bg-primary text-white py-1.5 px-2.5 text-base font-medium rounded-full">{teamdataNumber}</span>
                                <div className="h-px w-16 bg-black/12 dark:bg-white/12" />
                                <p className="section-bedge py-1.5 px-4 rounded-full">Best works</p>
                            </div>
                            <div className="flex flex-col gap-11">
                                <div className="flex flex-col gap-5 ">
                                    <h2 className="max-w-3xl">Featured Posts</h2>
                                    <p className="max-w-2xl text-secondary/70 dark:text-white/70">Highlights from our instagram page consisting of my best astrological teachings and slice of life</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-7">
                            {reels.map((reelUrl, index) => {
                                return (
                                    <div key={index} className="relative h-[470px] w-full overflow-hidden rounded-sm border border-secondary/12 dark:border-white/12 bg-white dark:bg-secondary">
                                        <iframe
                                            title={`Instagram reel ${index + 1}`}
                                            src={reelUrl}
                                            className="absolute left-0 top-[-78px] h-[635px] w-full border-0"
                                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                            scrolling="no"
                                            allowFullScreen
                                        />
                                    </div>
                                );
                            })}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Team;
