"use client";
import React from "react";
import Youtube, { YouTubeProps } from "react-youtube";
import { Button } from "../ui/button";

const Hero = () => {
    const opts: YouTubeProps["opts"] = {
        width: 1280,
        height: 720,
        playerVars: {
            autoplay: 1,
            controls: 0,
            rel: 0,
            showinfo: 0,
            loop: 1,
            playlist: "_S5wV_lDaIw",
            modestbranding: 1,
            iv_load_policy: 3,
            fs: 0,
            disablekb: 1,
            cc_load_policy: 1,
            playsinline: 1,
            autohide: 1,
            mute: 1,
        },
    };

    return (
        <>
            <div className="animate-zoom-fade overflow-hidden transition-none absolute top-0 left-0 h-full w-full">
                <div className="absolute top-0 left-0 h-full w-full">
                    <div className="absolute top-0 left-0 w-full h-full z-[9] group">
                        <div className="absolute top-0 left-0 w-full h-full group-hover:hidden"></div>
                    </div>
                    <Youtube videoId="_S5wV_lDaIw" opts={opts} className="overflow-hidden absolute top-0 -left-full w-[300%] h-full min-[1140px]:-top-full min-[1140px]:left-auto min-[1140px]:w-full min-[1140px]:h-[300%]" />
                </div>
            </div>
            <div className="relative h-[calc(100%_-_94px)] md:h-[calc(100%_-_190px)] text-white">
                <div className="w-full h-full p-[0_40px]">
                    <div className="pt-[10px] text-center align-middle relative w-full h-full">
                        <div className="relative w-full h-full text-center before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0">
                            <h2
                                className="uppercase text-[40px] md:text-[80px] tracking-[0em] animate-ride-up"
                                style={{
                                    fontFamily: "Tiemann, serif",
                                }}
                            >
                                Fall winter 2025
                            </h2>
                            <p className="font-medium uppercase text-xl animate-ride-up">Collection release - shop this season warmest trends</p>
                            <div className="mt-4 animate-ride-up">
                                <Button className="uppercase rounded-none font-bold text-[13px]">Shop now!</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default React.memo(Hero);
