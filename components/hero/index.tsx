"use client";
import React from "react";
import Youtube, { YouTubeProps, YouTubePlayer } from "react-youtube";
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
        <div className="min-h-[700px]">
            <div className="h-[100vh] relative overflow-hidden bg-background">
                <div className="animate-zoom-fade transition-none absolute top-0 left-0 h-full w-full">
                    <div className="absolute top-0 left-0 h-full w-full hero-media">
                        <div className="absolute top-0 left-0 w-full h-full z-10 group">
                            <div className="absolute top-0 left-0 w-full h-full group-hover:hidden"></div>
                        </div>
                        <Youtube videoId="_S5wV_lDaIw" opts={opts} className="absolute top-0 left-0 right-0 bottom-0" />
                    </div>
                </div>
                <div className="relative h-full text-white">
                    <div className="w-full h-full p-[0_40px] table">
                        <div className="pt-[10px] text-center align-middle table-cell relative">
                            <div className="relative text-center inline-block before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:m-[-100px_-200px]">
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
            </div>
        </div>
    );
};

export default Hero;
