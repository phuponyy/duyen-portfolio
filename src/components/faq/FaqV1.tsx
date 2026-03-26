import Image from 'next/image';
import about3 from "@/assets/img/about/3.png";
import shape12 from "@/assets/img/shape/12.png";
import Link from 'next/link';

const FaqV1 = () => {
    return (
        <>
            <div className="faq-style-one-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="thumb-style-one">
                                <Image src={about3} alt="Image Not Found" />
                                <div className="chat-card">
                                    <p>{`Can't find what your are loking for you?`}</p>
                                    <h5>I would like to chat with you</h5>
                                    <Link href="#" scroll={false}><i className="fab fa-facebook-messenger" /></Link>
                                    <Image src={shape12} alt="Image Not Found" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <div className="faq-style-one-items">
                                <h4 className="sub-title">Faq</h4>
                                <h2>Frequently Asked Questions</h2>
                                <div className="accordion mt-30" id="faqAccordion">
                                    <div className="accordion-item accordion-style-one">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Why should you choose me?
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                <p>
                                                    I’m a multi-tasking, fast-adapting marketer who can both plan and execute. From content creation, social media, design, edit to livestream,... I don’t just come up with ideas — I make them happen.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item accordion-style-one">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                What value can I bring to your team?
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                <p>
                                                    I bring a balance of creativity and execution. I understand trends, know how to turn ideas into engaging content, and focus on results — from growing fanpages to driving interaction and sales.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item accordion-style-one">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                How do I work?
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                <p>
                                                    I work proactively, take ownership, and continuously learn. I’m comfortable working independently or in a team, and always ready to step in front of the camera when needed.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FaqV1;