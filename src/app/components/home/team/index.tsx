
"use client";

const reels = [
    "https://www.instagram.com/p/C5qJGkeJj6u/embed?hidecaption=true",
    "https://www.instagram.com/p/CzEdUpYyFoB/embed?hidecaption=true",
    "https://www.instagram.com/reel/DSNFhK7j2gf/embed?hidecaption=true",
    "https://www.instagram.com/reel/DRmd28pj5qz/embed?hidecaption=true",
];

const Team = () => {

    return (
        <section className="dark:bg-darkblack pt-10 pb-20 md:pt-24 md:pb-40">
            <div className="flex flex-col gap-24">
                <div className="container">
                    <div className="flex flex-col gap-14">
                        <div className="flex flex-col gap-5">
                            <h2 className="max-w-3xl">Featured Posts</h2>
                            <p className="max-w-2xl text-secondary/70 dark:text-white/70">Highlights from our instagram page consisting of my best astrological teachings and slice of life</p>
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
