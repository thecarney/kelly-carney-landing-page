import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

function HeroSection() {
    const heroRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.hero-element', {
                y: 40,
                opacity: 0,
                duration: 1.2,
                stagger: 0.15,
                ease: 'power3.out',
                delay: 0.2, // slight delay on load
            });
        }, heroRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} className="relative h-[100dvh] w-full overflow-hidden flex items-end pb-24 px-6 md:px-16 lg:px-24">
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=3200&auto=format&fit=crop')" }}
            />
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-textDark via-primary/60 to-transparent" />

            <div className="relative z-20 max-w-5xl text-background">
                <h1 className="flex flex-col gap-1 md:gap-2 text-background/90 text-xl md:text-3xl font-sans tracking-wide mb-4">
                    <span className="hero-element">Hey there!</span>
                </h1>
                <h2 className="flex flex-col gap-1 md:gap-2">
                    <span className="hero-element font-sans font-bold text-4xl md:text-7xl tracking-tight">
                        Kelly Carney
                    </span>
                    <span className="hero-element font-drama italic text-3xl md:text-5xl text-accent mt-2">
                        M.S., CCC-SLP
                    </span>
                </h2>
                <p className="hero-element mt-10 md:mt-12 text-xl md:text-3xl font-sans max-w-3xl text-background/95 font-light leading-relaxed">
                    I help anxious and overwhelmed parents organize, prioritize, and advocate for their child and their IEP.
                </p>
                <div className="hero-element mt-10 md:mt-14">
                    <Link to="/contact" className="btn-magnetic group bg-accent text-white px-8 py-4 rounded-full text-lg font-medium inline-flex items-center gap-3 shadow-[0_4px_20px_rgba(212,140,132,0.4)]">
                        <span className="relative z-10">Book a Consult Call</span>
                        <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

function FeatureCard({ title, desc, delay, children }) {
    const cardRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(cardRef.current, {
                y: 40,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: "top 85%",
                }
            });
        }, cardRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={cardRef} className="glass-card p-8 md:p-10 flex flex-col group relative overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2 border border-primary/5 bg-white/60">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-[100px] transition-transform duration-500 group-hover:scale-150" />
            <h3 className="font-sans font-bold text-2xl mb-4 text-primary relative z-10">{title}</h3>
            <p className="font-sans text-textDark/80 text-sm md:text-base leading-relaxed mb-8 relative z-10 min-h-[4rem]">
                {desc}
            </p>
            <div className="mt-auto relative z-10">
                {children}
            </div>
        </div>
    );
}

function ElegantPulseIcon() {
    return (
        <div className="relative w-16 h-16 flex items-center justify-center bg-primary/5 rounded-full">
            <div className="absolute inset-0 rounded-full border border-primary/20 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" />
            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
        </div>
    );
}

function ElegantTimeIcon() {
    return (
        <div className="relative w-16 h-16 flex items-center justify-center bg-accent/10 rounded-full group-hover:rotate-12 transition-transform duration-700">
            <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </div>
    );
}

function ElegantGrowthIcon() {
    return (
        <div className="relative w-16 h-16 flex items-center justify-center bg-primary/5 rounded-full group-hover:-translate-y-1 transition-transform duration-500">
            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
            </svg>
        </div>
    );
}

function FeaturesSection() {
    return (
        <section className="py-32 px-6 md:px-16 lg:px-24 bg-background">
            <div className="max-w-6xl mx-auto">
                <div className="mb-20 text-center">
                    <h2 className="text-4xl md:text-5xl font-sans font-bold text-textDark tracking-tight mb-4">Imagine this...</h2>
                    <p className="font-drama italic text-2xl text-primary/80 max-w-2xl mx-auto">Confidence and clarity in your child's education.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <FeatureCard
                        title="Clear Communication"
                        desc="No more overanalyzing emails trying to respond with just the right tone. I'll teach you how to communicate with your team with the right mix of authority and respect."
                    >
                        <ElegantPulseIcon />
                    </FeatureCard>

                    <FeatureCard
                        title="Consistent Responses"
                        desc="No more waiting for weeks, wondering when it is too soon to reach out. I’ll show you how to use the right keyword to ensure timely responses from the IEP team."
                    >
                        <ElegantTimeIcon />
                    </FeatureCard>

                    <FeatureCard
                        title="Creative Problem-Solving"
                        desc="Your child’s IEP should reflect their individual needs. I’ll teach you how to work WITH your child’s IEP team to get a “yes” more often than “no.”"
                    >
                        <ElegantGrowthIcon />
                    </FeatureCard>
                </div>
            </div>
        </section>
    );
}

function ApproachSection() {
    const textRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.approach-item', {
                y: 30,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top 75%",
                }
            });
        }, textRef);
        return () => ctx.revert();
    }, []);

    const approaches = [
        "Building positive relationships with your child's educational team",
        "Guiding you to work collaboratively with the IEP team",
        "Coordinating efforts between you, teachers, and service providers",
        "Monitoring and celebrating your child's achievements — the big wins and the small"
    ];

    return (
        <section className="relative py-32 md:py-48 px-6 md:px-16 overflow-hidden bg-textDark text-background rounded-t-[3rem] -mt-10 z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
            <div
                className="absolute inset-0 z-0 opacity-20 bg-cover bg-center parallax-bg mix-blend-overlay"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=2000&auto=format&fit=crop')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-textDark via-textDark/90 to-textDark/80 z-10" />

            <div ref={textRef} className="relative z-20 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
                <div>
                    <h2 className="approach-item text-4xl md:text-6xl font-sans font-bold tracking-tight mb-8">
                        My Collaborative <span className="font-drama italic text-accent font-normal">Approach</span>
                    </h2>
                    <p className="approach-item text-lg md:text-2xl font-sans text-background/80 font-light leading-relaxed">
                        With my expertise in communication, collaboration, special education and IEP processes, I'll help you become a confident advocate for your own child's educational rights. We'll focus on:
                    </p>
                </div>

                <div className="flex flex-col gap-6">
                    {approaches.map((text, i) => (
                        <div key={i} className="approach-item flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                            <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-1">
                                <span className="text-accent font-sans font-bold text-sm">{i + 1}</span>
                            </div>
                            <p className="font-sans text-background/90 text-lg leading-relaxed">{text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function SoftGradientCircle() {
    return (
        <div className="w-[120%] h-[120%] rounded-full bg-gradient-to-tr from-accent/20 to-transparent blur-3xl opacity-50" />
    );
}

function ServicesSection() {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const cards = gsap.utils.toArray('.service-card');

            cards.forEach((card, i) => {
                if (i !== cards.length - 1) {
                    gsap.to(card, {
                        scale: 0.9,
                        opacity: 0.3,
                        filter: "blur(10px)",
                        scrollTrigger: {
                            trigger: cards[i + 1],
                            start: "top bottom",
                            end: "top top",
                            scrub: true,
                        }
                    });
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const steps = [
        { num: '01', title: 'Communicate', desc: "Communicate your child's needs clearly to school staff." },
        { num: '02', title: 'Understand', desc: "Understand and respond to school communications confidently and effectively." },
        { num: '03', title: 'Articulate', desc: "Articulate your goals and expectations for your child's education." },
        { num: '04', title: 'Prepare', desc: "Prepare effectively for IEP meetings and follow-ups." }
    ];

    return (
        <section ref={containerRef} className="relative bg-textDark pb-[10vh]">
            <div className="sticky top-0 h-[20vh] w-full flex items-end px-6 md:px-16 z-0 pt-16 -mb-[20vh]">
                <h2 className="text-3xl md:text-5xl font-sans font-bold text-background/20 tracking-tight">What we can do together...</h2>
            </div>
            {steps.map((step, i) => (
                <div key={i} className="service-card sticky top-0 h-[100dvh] w-full flex items-center justify-center bg-textDark text-background border-t border-white/5 overflow-hidden origin-top">
                    <div className="absolute inset-0 z-0 flex items-center justify-center">
                        <SoftGradientCircle />
                    </div>
                    <div className="relative z-10 max-w-6xl w-full px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-24">
                        <div className="font-drama italic text-8xl md:text-[18rem] text-primary tracking-tighter leading-none opacity-40 select-none">
                            {step.num}
                        </div>
                        <div className="flex-1 max-w-2xl text-center md:text-left">
                            <h3 className="font-sans font-bold text-5xl md:text-7xl mb-6">{step.title}</h3>
                            <p className="font-sans text-2xl md:text-4xl text-white/80 leading-relaxed font-light">{step.desc}</p>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}

function TestimonialSection() {
    const clients = [
        {
            name: "Michaela",
            context: "Parent of 5-year-old",
            quote: "I am beyond grateful for the support and guidance provided by Kelly... The progress we've seen is a direct reflection of her expertise and guidance. Kelly has been a true advocate..."
        },
        {
            name: "Catherine",
            context: "Parent of 5-year-old",
            quote: "Kelly is amazing to work with. She has vast insights and communicates so well. I am so thankful for her help in the 504 process... Already recommended her to my friends."
        },
        {
            name: "Karen",
            context: "Parent of 5-year-old",
            quote: "The way Kelly embraced our child and worked so hard with his team to find the right custom supports for him so was appreciated. We look forward to continuing to work with Kelly..."
        }
    ];

    return (
        <section className="py-32 px-6 md:px-16 lg:px-24 bg-textDark text-background rounded-t-[3rem] -mt-10 relative z-20">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20 text-center">
                    <h2 className="text-4xl md:text-5xl font-sans font-bold tracking-tight mb-4">Kind Words from Clients</h2>
                    <p className="font-drama italic text-2xl text-accent/80 max-w-2xl mx-auto">Building trusting relationships and finding the right pathways.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {clients.map((client, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between">
                            <div className="mb-8">
                                <svg className="w-8 h-8 text-accent/50 mb-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                                <p className="font-sans text-background/80 text-lg leading-relaxed md:text-base lg:text-lg">"{client.quote}"</p>
                            </div>
                            <div>
                                <h4 className="font-sans text-xl font-bold tracking-tight text-white">{client.name}</h4>
                                <p className="font-mono text-xs text-accent uppercase tracking-wider mt-1">{client.context}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function GetStartedSection() {
    return (
        <section className="py-32 px-6 md:px-16 lg:px-24 bg-background relative z-10">
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center glass-card p-12 md:p-16 shadow-2xl overflow-hidden relative">
                <div className="absolute top-[-50%] right-[-10%] w-[80%] h-[200%] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

                <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        <span className="font-mono text-xs text-primary uppercase tracking-wider font-bold">A Freebie For You!</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-sans font-bold text-textDark mb-6 tracking-tight">The PAINT Framework</h2>
                    <p className="text-lg md:text-xl font-sans text-primary/80 mb-8 leading-relaxed max-w-lg">
                        Download the PDF to apply my PAINT Framework and learn 5 strategies you can use immediately to increase clarity and communication with your child's IEP team.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="https://kelly-carney-iep.myflodesk.com/placementdecisions" target="_blank" rel="noopener noreferrer" className="btn-magnetic group bg-accent text-white px-8 py-4 rounded-full text-base font-medium inline-flex justify-center items-center gap-2 shadow-[0_4px_20px_rgba(212,140,132,0.4)] w-full sm:w-auto">
                            <span className="relative z-10 whitespace-nowrap">Download Free Guide</span>
                            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>

                <div className="relative z-10 lg:pl-12 flex flex-col gap-8 lg:border-l border-primary/10 mt-8 lg:mt-0 pt-8 lg:pt-0 border-t lg:border-t-0">
                    <h3 className="text-3xl font-sans font-bold text-textDark tracking-tight">Ready to Advocate?</h3>
                    <p className="font-drama italic text-2xl text-primary/80">
                        Take the first step towards clarity, confidence, and collaborative success for your child's IEP.
                    </p>
                    <Link to="/contact" className="btn-magnetic group bg-primary text-background px-8 py-4 rounded-full text-base font-medium inline-flex justify-center items-center gap-2 w-full sm:w-max mt-2">
                        <span className="relative z-10 whitespace-nowrap">Book a Consult Call</span>
                        <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default function Home() {
    return (
        <>
            <HeroSection />
            <FeaturesSection />
            <ApproachSection />
            <ServicesSection />
            <TestimonialSection />
            <GetStartedSection />
        </>
    );
}
