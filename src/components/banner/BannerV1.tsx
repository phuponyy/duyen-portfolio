"use client";
import SocialShareV1 from '../social/SocialShareV1';
import Image from 'next/image';
import illustration1 from "@/assets/img/illustration/1.png";
import shape1 from "@/assets/img/shape/1.png"
import shape17 from "@/assets/img/shape/17.png"
import { ReactTyped } from 'react-typed';
import hand from "@/assets/img/icon/hand.png";

const BannerV1 = () => {

    const textLines = [
        '<b>Content Creator</b>',
        '<b>Content SEO</b>',
        '<b>Manager Fanpage</b>'
    ]

    return (
        <>
            <div className="banner-style-one-area bg-gray">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="banner-style-one-items">
                                <div className="info">
                                    <h1>Hey <Image src={hand} alt="Icon" /> {`I'm Duyên`} </h1>
                                    <h2>
                                        <span className="header-caption" id="page-top">
                                            <span className="cd-headline clip is-full-width">
                                                <span className="cd-words-wrapper">
                                                    <ReactTyped
                                                        strings={textLines} typeSpeed={35} backSpeed={35} backDelay={2000} loop>
                                                    </ReactTyped>
                                                </span>
                                            </span>
                                        </span>
                                    </h2>
                                    <p>
                                        {`I am a dynamic and versatile marketer with a proactive mindset. I pursue creativity and distinctiveness in building brands. My goal is to create real value and make brands stand out while staying close to their audience.`}
                                    </p>
                                    <div className="flex-social mt-40">
                                        <div className="button">
                                            <a className="btn-style-regular" href="#contact"><span>Hire Me Now</span> <i className="fas fa-arrow-right" /></a>
                                        </div>
                                        <ul className="social-info">
                                            <SocialShareV1 />
                                        </ul>
                                    </div>
                                </div>
                                <div className="thumb">
                                    <Image src={illustration1} alt="Image Not Found" />
                                    <Image src={shape1} alt="Image Not Found" />
                                    <Image src={shape17} alt="Image Not Found" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerV1;