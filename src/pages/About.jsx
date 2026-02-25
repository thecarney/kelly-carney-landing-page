import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
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

            gsap.from('.parallax-img', {
                yPercent: 15,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.parallax-container',
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                }
            });
        }, pageRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={pageRef} className="pt-32 pb-24 px-6 md:px-16 lg:px-24 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                    <div>
                        <h1 className="animate-in text-5xl md:text-7xl font-sans font-bold text-textDark tracking-tight mb-8">
                            I'm <span className="font-drama italic text-primary">Kelly!</span>
                        </h1>
                        <p className="animate-in font-sans text-xl md:text-2xl text-textDark/80 leading-relaxed font-light mb-8">
                            You know that feeling when you’re sitting in an IEP meeting and everyone’s using acronyms you barely understand? When your stomach is in knots because you’re not sure if what’s being proposed is really what your child needs?
                        </p>
                        <p className="animate-in font-sans text-lg text-primary italic font-medium">
                            I see you. You're in exactly the right place, and you're definitely not alone.
                        </p>
                    </div>
                    <div className="animate-in relative parallax-container h-[500px] rounded-[3rem] overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 rounded-[3rem]" />
                        <img
                            src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1000&auto=format&fit=crop"
                            alt="Kelly Carney"
                            className="parallax-img absolute w-full h-[120%] -top-[10%] object-cover object-center"
                        />
                    </div>
                </div>

                <div className="max-w-3xl mx-auto space-y-24">
                    <section className="animate-in">
                        <h2 className="text-3xl font-sans font-bold text-textDark mb-6 flex items-center gap-4">
                            <span className="w-12 h-[2px] bg-accent" /> Your Story Matters
                        </h2>
                        <div className="font-sans text-lg text-textDark/80 leading-relaxed space-y-6">
                            <p>
                                Over the years, I have worked with so many parents who started exactly where you are now–overwhelmed, anxious, and tired of overthinking every school interaction. Parents who just want the best for their child, but feel lost in a system that sometimes seems designed to confuse.
                            </p>
                        </div>
                    </section>

                    <section className="animate-in">
                        <h2 className="text-3xl font-sans font-bold text-textDark mb-6 flex items-center gap-4">
                            <span className="w-12 h-[2px] bg-accent" /> Why I'm Your Guide
                        </h2>
                        <div className="font-sans text-lg text-textDark/80 leading-relaxed space-y-6">
                            <p>
                                When I was a school-based Speech-Language Pathologist, juggling an outrageously large caseload, something was always missing. I loved the therapy, seeing my students in different contexts throughout the school day, and chatting with teachers about small wins.
                            </p>
                            <p>
                                But it drove me crazy not being able to make those connections with parents. There just wasn’t enough time in the day to connect with the families of each of my 60+ students!
                            </p>
                            <p>
                                The IEP meetings, though? That’s where we got to connect. I loved watching the relief wash over a mom’s face when we translated a jargon-filled report into plain English. Or seeing a dad’s confidence grow as he realized he could use the same techniques at home that worked in therapy.
                            </p>
                            <div className="p-8 my-8 glass-card border border-primary/20 bg-primary/5 italic text-primary font-medium text-xl shadow-inner">
                                "When parents and schools weren’t getting along, the student’s progress slowed. But when parents and schools truly understood each other and collaborated effectively, kids thrived. When parents pushed for services, their kids got more support. And when parents didn’t push? Their kids got less."
                            </div>
                            <p>
                                That's when I knew my real calling wasn't working <strong>within</strong> the school system—it was working <strong>with</strong> the school system, on behalf of parents, teaching parents not just what to ask for, but how to partner with their school teams to get it.
                            </p>
                        </div>
                    </section>

                    <section className="animate-in">
                        <h2 className="text-3xl font-sans font-bold text-textDark mb-6 flex items-center gap-4">
                            <span className="w-12 h-[2px] bg-accent" /> I Understand Both Worlds
                        </h2>
                        <div className="font-sans text-lg text-textDark/80 leading-relaxed space-y-6">
                            <p>
                                As a parent of two young kids, I live the daily reality of school drop-offs, soccer field sidelines, mom’s group chats, and PTA meetings. These interactions give me invaluable insight into parents' everyday concerns, frustrations, and hopes. Between my professional experiences and personal life, I have developed a unique ability to understand all perspectives at the IEP table, and keep teams grounded in what really matters: the lived experience of the child.
                            </p>
                        </div>
                    </section>

                    <section className="animate-in">
                        <h2 className="text-3xl font-sans font-bold text-textDark mb-6 flex items-center gap-4">
                            <span className="w-12 h-[2px] bg-accent" /> How I Help
                        </h2>
                        <div className="font-sans text-lg text-textDark/80 leading-relaxed space-y-6">
                            <p>
                                Here's what I've learned: the gap between school systems and parents isn't about lack of caring—it's about translation. Schools have their language, processes, and constraints. Parents have their hopes, worries, and intimate knowledge of their child. Understanding both perspectives is essential to true collaboration.
                            </p>
                            <p>
                                As your IEP coach, I stand in that middle ground. I speak both "school system" and "parent," and I love helping these two worlds understand each other better. My approach is always collaborative and solution-focused. I'm not here to create adversaries—I'm here to build bridges that get your child what they need.
                            </p>
                            <p className="font-medium text-textDark">
                                Together, we'll make sense of the paperwork and figure out your next steps. Instead of feeling stuck or lost in the process, you'll walk into meetings more confident, more prepared, and ready to be the advocate your child deserves.
                            </p>
                        </div>
                    </section>
                </div>

                <div className="mt-32 max-w-4xl mx-auto text-center glass-card p-12 md:p-24 shadow-2xl relative overflow-hidden animate-in">
                    <div className="absolute -top-1/2 -right-1/4 w-[150%] h-[150%] bg-accent/10 blur-[100px] rounded-full pointer-events-none -z-10" />
                    <h2 className="text-4xl md:text-5xl font-sans font-bold text-textDark mb-6 tracking-tight">Ready for Change?</h2>
                    <p className="font-drama italic text-2xl md:text-3xl text-primary/80 mb-12 max-w-2xl mx-auto">
                        If you're tired of waiting for things to improve or feeling confused about next steps, let's talk.
                    </p>
                    <p className="font-sans text-lg text-textDark/70 mb-10 max-w-xl mx-auto">
                        I'd love to hear about your child, your concerns, and how we might make this IEP journey smoother for everyone involved. Book a free consultation call and let's talk about your situation–what’s working, what’s not, and how we might work together to make things better.
                    </p>
                    <Link to="/contact" className="btn-magnetic group bg-textDark text-background px-10 py-5 rounded-full text-lg font-medium inline-flex items-center gap-3">
                        <span className="relative z-10 whitespace-nowrap">Schedule Your Free Consult</span>
                        <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
