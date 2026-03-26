"use client"
import ServicesData from "@/assets/jsonData/services/ServicesData.json"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import arrow from "@/assets/img/icon/arrow.png";

interface DataType {
    sectionClass?: string;
    hasTitle?: React.ReactNode
}

const ServicesV1 = ({ sectionClass, hasTitle }: DataType) => {

    const [activeIndex, setActiveIndex] = useState(1);

    const handleMouseEnter = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <>
            <div id="services" className={`services-style-one-area bottom-less ${sectionClass ? sectionClass : ""}`}>

                {/* Title  */}
                {hasTitle &&
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="site-heading text-center">
                                    <h4 className="sub-title">Core Skills</h4>
                                    <h2 className="title">My Core Strengths</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                }

                <div className="container">
                    <div className="row align-items-stretch">
                        {ServicesData.map((service, index) => (
                            <div className={`col-xl-3 col-md-6 mb-30 wow fadeInUp d-flex`} key={service.id}>
                                <div
                                    className={`service-style-one-item ${activeIndex === index ? "active" : ""}`}
                                    onMouseEnter={() => handleMouseEnter(index)}
                                >
                                    <div className="service-style-one-icon">
                                        <Image src={`/assets/img/icon/${service.icon}`} alt="Image Not Found" width={82} height={65} />
                                    </div>
                                    <h4>{service.title}</h4>
                                    <p>{service.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesV1;
