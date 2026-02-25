import React, { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowRight, Mail, Calendar, Instagram, Linkedin, MapPin } from 'lucide-react';

export default function Contact() {
    const pageRef = useRef(null);
    const [formState, setFormState] = useState({ submitted: false, submitting: false });

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

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormState({ submitted: false, submitting: true });

        // Simulate form submission to match original static site feel
        setTimeout(() => {
            setFormState({ submitted: true, submitting: false });
        }, 1500);
    };

    return (
        <div ref={pageRef} className="pt-32 pb-24 px-6 md:px-16 lg:px-24">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <h1 className="animate-in text-5xl md:text-7xl font-sans font-bold text-textDark tracking-tight mb-6">
                        Hello <span className="font-drama italic text-primary">there!</span>
                    </h1>
                    <p className="animate-in font-sans text-xl text-textDark/80 leading-relaxed">
                        Ready to organize, prioritize, and advocate for your child's IEP? Let's talk about how I can help.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 animate-in">

                    {/* Left Column: Direct Links & Info */}
                    <div className="lg:col-span-2 space-y-12">
                        <div className="glass-card p-8 border border-primary/10 bg-white/80 transition-transform hover:-translate-y-1">
                            <h3 className="font-sans font-bold text-2xl text-textDark mb-4 flex items-center gap-3">
                                <Calendar className="w-6 h-6 text-primary" />
                                Let's talk
                            </h3>
                            <p className="font-sans text-textDark/70 mb-8 leading-relaxed">
                                The fastest way to get started is to jump on a quick, free consultation call so I can hear your story.
                            </p>
                            <a href="https://calendly.com/kelly-kelly-carney/30min" target="_blank" rel="noopener noreferrer" className="btn-magnetic group bg-primary text-background px-6 py-4 rounded-full text-base font-medium inline-flex items-center justify-between w-full shadow-lg">
                                <span className="relative z-10 whitespace-nowrap">Book a Consult Call</span>
                                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>

                        <div>
                            <h3 className="font-sans font-bold text-lg text-textDark mb-6 uppercase tracking-wider">Connect Online</h3>
                            <div className="space-y-4">
                                <a href="https://www.instagram.com/kellycarney.iep/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary transition-colors">
                                        <Instagram className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                                    </div>
                                    <span className="font-sans font-medium text-textDark/80 group-hover:text-primary transition-colors">@kellycarney.iep</span>
                                </a>
                                <a href="https://www.linkedin.com/in/kelly-carney-3a7965a5" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary transition-colors">
                                        <Linkedin className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                                    </div>
                                    <span className="font-sans font-medium text-textDark/80 group-hover:text-primary transition-colors">Kelly Carney, M.S., CCC-SLP</span>
                                </a>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-primary/10">
                            <div className="flex items-start gap-4 text-textDark/70">
                                <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                                <div>
                                    <p className="font-sans font-medium text-textDark">Professional IEP Coaching</p>
                                    <p className="font-sans text-sm mt-1">Based in Livermore, California.</p>
                                    <p className="font-sans text-sm mt-1 text-primary italic">Remote & virtual consulting available nationwide.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="lg:col-span-3">
                        <div className="glass-card p-8 md:p-12 relative overflow-hidden bg-textDark text-background rounded-[2rem] shadow-2xl">
                            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-accent/10 blur-[80px] rounded-full pointer-events-none" />

                            <h3 className="font-sans font-bold text-3xl mb-2 flex items-center gap-3 relative z-10">
                                <Mail className="w-8 h-8 text-primary" />
                                Or drop me a note
                            </h3>
                            <p className="font-sans text-background/70 mb-10 relative z-10">
                                Fill out the form below and I'll get back to you as soon as I can.
                            </p>

                            {formState.submitted ? (
                                <div className="bg-primary/20 border border-primary/30 p-8 rounded-2xl text-center relative z-10 animate-fade-in">
                                    <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle2 className="w-8 h-8" />
                                    </div>
                                    <h4 className="font-sans font-bold text-2xl text-white mb-2">Message Received!</h4>
                                    <p className="font-sans text-background/80">Thank you for reaching out. I will review your note and get back to you shortly.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="font-sans text-sm font-medium text-background/80">First Name <span className="text-accent">*</span></label>
                                            <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors font-sans" placeholder="Jane" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="font-sans text-sm font-medium text-background/80">Last Name <span className="text-accent">*</span></label>
                                            <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors font-sans" placeholder="Doe" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="font-sans text-sm font-medium text-background/80">Email <span className="text-accent">*</span></label>
                                        <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors font-sans" placeholder="jane@example.com" />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="font-sans text-sm font-medium text-background/80">What's on your mind?</label>
                                        <textarea rows="5" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors font-sans resize-none" placeholder="Tell me a little bit about your situation..." />
                                    </div>

                                    <button disabled={formState.submitting} type="submit" className={`w-full group bg-accent text-white px-8 py-4 rounded-xl text-base font-medium inline-flex justify-center items-center gap-2 transition-all shadow-[0_4px_20px_rgba(212,140,132,0.2)] hover:shadow-[0_4px_25px_rgba(212,140,132,0.4)] ${formState.submitting ? 'opacity-70 cursor-not-allowed' : ''}`}>
                                        <span className="relative z-10 whitespace-nowrap">{formState.submitting ? 'Sending...' : 'Send Message'}</span>
                                        {!formState.submitting && <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
