"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import shape3 from "@/assets/img/shape/3.png"
import shape8 from "@/assets/img/shape/8.png"
import about1 from "@/assets/img/about/1.jpg"
import about2 from "@/assets/img/about/2.jpg"
import Link from 'next/link';
import FactV1 from '../fact/FactV1';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const AboutV1 = () => {

    // Modal Video
    const [isOpen, setOpen] = useState(false);
    const videoUrl = "https://www.youtube.com/embed/aTC_RNYtEb0?autoplay=1&rel=0";

    // Scroll Animation 
    useEffect(() => {
        const upDown_Scroll = document.querySelector(".upDownScrol");

        if (upDown_Scroll) {
            gsap.set(upDown_Scroll, { yPercent: 105 });

            const scrollAnimation = gsap.to(upDown_Scroll, {
                yPercent: -105,
                ease: "none",
                scrollTrigger: {
                    trigger: upDown_Scroll,
                    end: "bottom center",
                    scrub: 1,
                },
            });

            // Cleanup function to kill the animation on unmount
            return () => {
                scrollAnimation.kill();
                const scrollTriggers = ScrollTrigger.getAll();
                scrollTriggers.forEach((trigger) => trigger.kill());
            };
        }
    }, []);

    useEffect(() => {
        if (!isOpen) {
            return;
        }

        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setOpen(false);
            }
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleEsc);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleEsc);
        };
    }, [isOpen]);


    return (
        <>
            <div id="about" className="about-style-one-area bg-gray default-padding">
                <div className="shape-style-one">
                    <Image src={shape3} alt="Image Not Found" />
                    <Image className="upDownScrol" src={shape8} alt="Image Not Found" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <FactV1 />
                        </div>
                        <div className="col-lg-7 pl-80 pl-md-15 pl-xs-15">
                            <div className="about-style-one-info">
                                <p>
                                    With a creative mindset and a strong focus on content, I thrive in dynamic environments that value adaptability and audience insight. I bring strengths in content development, platform management, and performance optimization. I aim to contribute my expertise to elevate brands and build lasting connections with their audiences.
                                </p>
                                <Link className="btn-style-regular btn-border" href="#portfolio" scroll={true}><span>Learn More</span> <i className="fas fa-arrow-right" /></Link>
                            </div>
                        </div>
                    </div>
                    {/* <div className="about-style-one-bottom-info mt-50">
                        <div className="row">
                            <div className="col-lg-8 pr-60 pr-md-15 pr-xs-15">
                                <div className="img-container">
                                    <Image src={about1} alt="Image Not Found" />
                                    <Link
                                        href="#"
                                        className="popup-youtube video-play-button"
                                        onClick={(event) => {
                                            event.preventDefault();
                                            setOpen(true);
                                        }}
                                        scroll={false}
                                    >
                                        <i className="fas fa-play" />
                                        <div className="effect" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <Image src={about2} alt="Image Not Found" />
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            {isOpen && (
                <div
                    onClick={() => setOpen(false)}
                    style={{
                        position: "fixed",
                        inset: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.85)",
                        zIndex: 9999,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "1rem"
                    }}
                >
                    <button
                        type="button"
                        onClick={() => setOpen(false)}
                        aria-label="Close video modal"
                        style={{
                            position: "absolute",
                            top: "1rem",
                            right: "1rem",
                            width: "2.5rem",
                            height: "2.5rem",
                            border: "none",
                            borderRadius: "50%",
                            backgroundColor: "#fff",
                            fontSize: "1.5rem",
                            lineHeight: 1,
                            cursor: "pointer"
                        }}
                    >
                        ×
                    </button>
                    <div
                        onClick={(event) => event.stopPropagation()}
                        style={{
                            width: "min(100%, 960px)",
                            aspectRatio: "16 / 9",
                            backgroundColor: "#000"
                        }}
                    >
                        <iframe
                            width="100%"
                            height="100%"
                            src={videoUrl}
                            title="About section video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default AboutV1;
