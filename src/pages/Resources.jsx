import React, { useLayoutEffect, useRef } from 'react';
import { ExternalLink, Users, BookOpen } from 'lucide-react';
import gsap from 'gsap';

export default function Resources() {
    const pageRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.animate-in', {
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: 'power3.out',
            });
        }, pageRef);
        return () => ctx.revert();
    }, []);

    const resources = [
        {
            title: "The Connected Parent",
            role: "Vetted Provider",
            description: "A comprehensive directory built by families, for families. Find vetted providers and read real reviews from parents who’ve been there.",
            link: "https://theconnectedparent.net/business/c36c1403-afd8-4b61-b085-e3006ad54cf8",
            icon: Users
        },
        {
            title: "Undivided",
            role: "Vetted Provider Network",
            description: "California's go-to resource for special education support, offering free educational content and family navigation services. I'm honored to be part of their network.",
            link: "https://www.undivided.io",
            icon: BookOpen
        },
        {
            title: "Master IEP Coach Network",
            role: "Certified Coach",
            description: "A directory of trained professionals who have completed the Master IEP Coach® Mentorship program. Find collaborative coaches helping families navigate the IEP process.",
            link: "https://masteriepcoach.com/directory",
            icon: Users
        }
    ];

    return (
        <div ref={pageRef} className="pt-32 pb-24 px-6 md:px-16 lg:px-24">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-24 max-w-3xl mx-auto">
                    <h1 className="animate-in text-5xl md:text-7xl font-sans font-bold text-textDark tracking-tight mb-6">
                        Trusted <span className="font-drama italic text-primary">Resources</span>
                    </h1>
                    <p className="animate-in font-sans text-xl text-textDark/80 leading-relaxed">
                        I’m proud to be a trusted resource with organizations dedicated to supporting families navigating special education.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 relative animate-in">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full bg-accent/5 blur-[120px] rounded-full pointer-events-none -z-10" />

                    {resources.map((res, i) => (
                        <div key={i} className="glass-card p-10 flex flex-col group relative overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2 border border-primary/5 bg-white/60">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] transition-transform duration-500 group-hover:scale-150" />

                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 relative z-10 group-hover:bg-primary transition-colors duration-500">
                                <res.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-500" />
                            </div>

                            <h3 className="font-sans font-bold text-2xl text-textDark mb-2 relative z-10">{res.title}</h3>
                            <p className="font-mono text-xs text-primary uppercase tracking-wider font-bold mb-6 relative z-10">{res.role}</p>
                            <p className="font-sans text-textDark/70 mb-10 leading-relaxed font-light relative z-10 flex-1">
                                {res.description}
                            </p>

                            <a
                                href={res.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex flex-row items-center gap-2 font-sans font-medium text-primary hover:text-accent transition-colors relative z-10 w-max group/link"
                            >
                                <span className="underline-offset-4 group-hover/link:underline">View Profile / Learn More</span>
                                <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                            </a>
                        </div>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto bg-textDark text-background rounded-[3rem] p-12 md:p-16 text-center animate-in shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay" />
                    <h2 className="text-3xl md:text-4xl font-sans font-bold mb-4 relative z-10">More coming soon!</h2>
                    <p className="text-lg md:text-xl font-sans font-light text-background/80 mb-8 max-w-xl mx-auto relative z-10">
                        I'll be rolling out an FAQ and more free resources soon. In the meantime, please check out my newsletter.
                    </p>
                    <button className="btn-magnetic bg-accent text-white px-8 py-4 rounded-full text-base font-medium inline-flex justify-center items-center gap-2 relative z-10 shadow-[0_4px_20px_rgba(212,140,132,0.4)]">
                        <span className="relative z-10 whitespace-nowrap">Sign Up for the Newsletter</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
