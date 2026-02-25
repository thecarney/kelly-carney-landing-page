import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
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

    const packages = [
        {
            title: "1:1 Strategy + Documentation",
            price: "Starting at $400",
            description: "A focused block of time and expertise to review your child's current plan and strategize next steps.",
            features: [
                "3-hour bank of direct consultation minutes (use within 12 months)",
                "Comprehensive document review of most recent IEP",
                "Guaranteed response time within 2 business days",
                "Organized & synthesized feedback on existing documents",
                "Identify biggest red flags worth advocating for",
                "Respectful and effective email or letter-writing assistance"
            ],
            highlight: false
        },
        {
            title: "Full Advocacy + Attendance",
            price: "Custom Quote",
            description: "Comprehensive support from review to the IEP table, ensuring you are never alone in the process.",
            features: [
                "Flat fee for attending ONE of your child's IEP meetings with you (virtual, or in-person if local to Bay Area)",
                "Pre-meeting strategy prep to align on goals",
                "Post-meeting debriefing to review the outcome",
                "Follow-up letter drafted after the meeting",
                "PLUS everything included in the 1:1 Coaching Package"
            ],
            highlight: true
        }
    ];

    return (
        <div ref={pageRef} className="pt-32 pb-24 px-6 md:px-16 lg:px-24">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-24 max-w-3xl mx-auto">
                    <h1 className="animate-in text-5xl md:text-7xl font-sans font-bold text-textDark tracking-tight mb-6">
                        Advocacy <span className="font-drama italic text-primary">Services</span>
                    </h1>
                    <p className="animate-in font-sans text-xl text-textDark/80 leading-relaxed mb-10">
                        Whether you need a strategic document review or someone sitting next to you at the physical IEP table, I have a support package designed to give you clarity and confidence.
                    </p>

                    <div className="animate-in flex flex-col md:flex-row items-center justify-center gap-6 glass-card p-8 bg-primary/5 border border-primary/10">
                        <div className="text-left flex-1 border-b md:border-b-0 md:border-r border-primary/10 pb-6 md:pb-0 md:pr-8">
                            <h3 className="font-sans font-bold text-2xl text-textDark mb-2">Free Initial Consultation</h3>
                            <p className="font-sans text-textDark/70 text-sm">
                                It all starts with a conversation. You share your situation and concerns. I listen, ask questions, and suggest your next priorities. After that? It's up to you if and how you want me to help you move forward.
                            </p>
                        </div>
                        <div className="flex-shrink-0 pt-2 md:pt-0">
                            <Link to="/contact" className="btn-magnetic group bg-textDark text-background px-8 py-4 rounded-full text-base font-medium inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all w-full md:w-auto">
                                <span className="relative z-10 whitespace-nowrap">Schedule Free Call</span>
                                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 animate-in relative">
                    {/* Decorative background blur element */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[100px] rounded-full pointer-events-none -z-10" />

                    {packages.map((pkg, i) => (
                        <div key={i} className={`flex flex-col p-10 md:p-14 rounded-[2rem] border transition-transform duration-500 hover:-translate-y-2 ${pkg.highlight ? 'bg-textDark text-background border-textDark shadow-[0_20px_60px_rgba(44,54,47,0.2)]' : 'bg-white/80 border-primary/10 text-textDark glass-card'}`}>
                            <div className="mb-8">
                                <h3 className={`font-sans font-bold text-3xl mb-4 ${pkg.highlight ? 'text-white' : 'text-textDark'}`}>{pkg.title}</h3>
                                <p className={`font-sans text-sm md:text-base leading-relaxed h-16 ${pkg.highlight ? 'text-background/80' : 'text-textDark/70'}`}>
                                    {pkg.description}
                                </p>
                            </div>

                            <div className={`text-2xl font-bold font-sans mb-10 pb-10 border-b ${pkg.highlight ? 'border-white/10 text-primary' : 'border-primary/10 text-primary'}`}>
                                {pkg.price}
                            </div>

                            <div className="flex-1">
                                <ul className="space-y-5">
                                    {pkg.features.map((feature, j) => (
                                        <li key={j} className="flex items-start gap-4">
                                            <CheckCircle2 className={`w-6 h-6 shrink-0 mt-0.5 ${pkg.highlight ? 'text-primary' : 'text-accent'}`} />
                                            <span className={`font-sans leading-relaxed ${pkg.highlight ? 'text-background/90' : 'text-textDark/80'}`}>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-12 pt-8">
                                <Link to="/contact" className={`w-full group px-8 py-5 rounded-full text-base font-medium inline-flex justify-center items-center gap-2 transition-all ${pkg.highlight ? 'bg-primary text-background hover:bg-white hover:text-textDark' : 'bg-primary/10 text-textDark hover:bg-primary hover:text-white'}`}>
                                    <span className="relative z-10 whitespace-nowrap">Inquire About This Package</span>
                                    <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-24 p-8 md:p-12 text-center border-t border-primary/10 animate-in">
                    <p className="font-sans text-sm text-textDark/50 max-w-4xl mx-auto leading-relaxed">
                        <span className="font-bold text-textDark/70">Friendly Reminder:</span> I'm not an attorney and don't provide legal advice or legal services. Everything I share with you is for general informational purposes only. What I do offer is support to help you understand the special education process, navigate procedures, and strengthen your advocacy for your child. While I'm here to guide you through IEP/504 Plans, I can't guarantee specific outcomes. All advocacy decisions remain yours to make. For legal advice specific to your situation, please consult a qualified attorney.
                    </p>
                </div>
            </div>
        </div>
    );
}
