import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', to: 'home' },
        { name: 'About', to: 'about' },
        { name: 'Experience', to: 'experience' },
        { name: 'Education', to: 'education' },
        { name: 'Skills', to: 'skills' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "circOut" }}
                style={{
                    position: 'fixed',
                    top: scrolled ? '1rem' : '0',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: scrolled ? 'min(90%, 800px)' : '100%',
                    zIndex: 1000,
                    padding: scrolled ? '0.75rem 2rem' : '1.5rem 0',
                    background: scrolled ? 'rgba(3, 7, 18, 0.6)' : 'transparent',
                    backdropFilter: scrolled ? 'blur(16px)' : 'none',
                    borderRadius: scrolled ? '100px' : '0',
                    border: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : 'none',
                    boxShadow: scrolled ? '0 10px 40px rgba(0,0,0,0.2)' : 'none',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
            >
                <div className={scrolled ? "" : "container"} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%'
                }}>
                    <Link to="home" smooth={true} duration={500} style={{ cursor: 'pointer', zIndex: 1001 }}>
                        <motion.div
                            className="logo"
                            whileHover={{ scale: 1.05 }}
                            style={{
                                fontFamily: 'Outfit, sans-serif',
                                fontSize: '1.5rem',
                                fontWeight: 800,
                                background: 'linear-gradient(to right, #8b5cf6, #ec4899)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                letterSpacing: '-0.5px'
                            }}
                        >
                            SK.
                        </motion.div>
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="desktop-only" style={{ display: 'flex', gap: '2rem' }}>
                        {navLinks.map((link, index) => (
                            <li key={link.name}>
                                <Link
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    offset={-100}
                                    style={{
                                        color: 'var(--text-secondary)',
                                        fontWeight: 500,
                                        fontSize: '0.9rem',
                                        cursor: 'pointer',
                                        transition: 'color 0.3s ease',
                                        position: 'relative'
                                    }}
                                    activeClass="active-link"
                                    spy={true}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Toggle */}
                    <div className="mobile-only" onClick={() => setIsOpen(!isOpen)} style={{ fontSize: '1.25rem', cursor: 'pointer', color: 'var(--text-primary)', zIndex: 1001 }}>
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        style={{
                            position: 'fixed',
                            top: '1rem',
                            right: '1rem',
                            left: '1rem',
                            padding: '2rem',
                            background: 'rgba(15, 23, 42, 0.95)',
                            backdropFilter: 'blur(20px)',
                            borderRadius: '24px',
                            border: '1px solid rgba(255,255,255,0.1)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.5rem',
                            textAlign: 'center',
                            zIndex: 999
                        }}
                    >
                        <div style={{ height: '2rem' }}></div> {/* Spacer for close button */}
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                smooth={true}
                                duration={500}
                                offset={-100}
                                onClick={() => setIsOpen(false)}
                                style={{
                                    fontFamily: 'Outfit, sans-serif',
                                    color: 'var(--text-primary)',
                                    fontWeight: 600,
                                    fontSize: '1.25rem',
                                    cursor: 'pointer'
                                }}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        .active-link { color: var(--text-primary) !important; text-shadow: 0 0 20px rgba(139, 92, 246, 0.5); }
        @media (max-width: 768px) { .desktop-only { display: none !important; } }
        @media (min-width: 769px) { .mobile-only { display: none !important; } }
      `}</style>
        </>
    );
};

export default Navbar;
