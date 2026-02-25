import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > window.innerHeight * 0.1);
        };

        window.addEventListener('scroll', handleScroll);
        // Fire once on mount in case we are already scrolled down
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { path: '/services', label: 'Services' },
        { path: '/resources', label: 'Resources' },
        { path: '/about', label: 'About Me' },
        { path: 'https://blog.kelly-carney.com', label: 'Blog', external: true },
        { path: '/contact', label: 'Contact' },
    ];

    return (
        <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] px-6 py-3 rounded-full flex items-center justify-between gap-8 md:gap-16 w-[95%] md:w-auto max-w-6xl ${isScrolled
            ? 'bg-background/90 backdrop-blur-xl border border-primary/10 text-primary shadow-lg'
            : 'bg-transparent text-textDark'
            }`}>
            <Link to="/" className="font-sans font-bold text-lg tracking-tight whitespace-nowrap hover:text-accent transition-colors flex items-center gap-2">
                {/* Simulated Logo based on live site: Text logo with "M.S., CCC-SLP" */}
                <div className="flex flex-col">
                    <span className="leading-none text-xl">Kelly Carney</span>
                    <span className="text-[0.6rem] uppercase tracking-widest text-primary font-mono opacity-80 mt-0.5">M.S., CCC-SLP</span>
                </div>
            </Link>
            <div className="hidden md:flex items-center gap-6 text-sm font-medium">
                {navLinks.map((link) => {
                    const isActive = location.pathname === link.path;
                    if (link.external) {
                        return (
                            <a
                                key={link.label}
                                href={link.path}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:-translate-y-[1px] hover:text-accent transition-all"
                            >
                                {link.label}
                            </a>
                        );
                    }
                    return (
                        <Link
                            key={link.label}
                            to={link.path}
                            className={`hover:-translate-y-[1px] hover:text-accent transition-all ${isActive ? 'text-accent border-b border-accent/30 pointer-events-none' : ''}`}
                        >
                            {link.label}
                        </Link>
                    )
                })}
            </div>
            <Link to="/contact" className="btn-magnetic bg-accent text-white px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap">
                <span className="relative z-10">Book Consult</span>
            </Link>
        </nav>
    );
}

function Footer() {
    return (
        <footer className="bg-textDark text-background pt-24 pb-12 px-6 md:px-16 lg:px-24 rounded-t-[4rem] relative z-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-20 border-b border-white/10 pb-16">
                <div className="col-span-1 md:col-span-2">
                    <span className="font-sans font-bold text-2xl tracking-tight block mb-4">Kelly Carney</span>
                    <p className="font-sans text-background/60 max-w-md leading-relaxed">
                        Precision advocacy and strategic communication for parents navigating their child's IEP. M.S., CCC-SLP.
                    </p>

                    <div className="mt-8 flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full inline-flex border border-white/10">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_2px_rgba(34,197,94,0.4)]" />
                        <span className="font-mono text-xs text-background/80 uppercase tracking-wider">System Operational</span>
                    </div>
                </div>

                <div>
                    <h4 className="font-bold font-sans text-white mb-6">Navigation</h4>
                    <ul className="space-y-4 font-sans text-background/70">
                        <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
                        <li><Link to="/services" className="hover:text-accent transition-colors">Services</Link></li>
                        <li><Link to="/resources" className="hover:text-accent transition-colors">Resources</Link></li>
                        <li><Link to="/about" className="hover:text-accent transition-colors">About Me</Link></li>
                        <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold font-sans text-white mb-6">Socials</h4>
                    <ul className="space-y-4 font-sans text-background/70">
                        <li><a href="https://www.instagram.com/kellycarney.iep/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
                        <li><a href="https://www.pinterest.com/kellycarneyiep/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Pinterest</a></li>
                        <li><a href="https://www.linkedin.com/in/kelly-carney-3a7965a5" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 font-sans text-xs text-background/40">
                <p>&copy; {new Date().getFullYear()} Kelly Carney. All rights reserved.</p>
                <p>Professional IEP Coaching based in Livermore, California.</p>
            </div>
        </footer>
    );
}

export default function Layout() {
    // Scroll to top on route change
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <main className="app-wrapper min-h-screen bg-background text-textDark selection:bg-accent selection:text-white flex flex-col">
            <Navbar />
            <div className="flex-1">
                <Outlet />
            </div>
            <Footer />
        </main>
    );
}
