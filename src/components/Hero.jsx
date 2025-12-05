import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <section id="home" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            paddingTop: '0'
        }}>
            {/* Background Glows */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 8, repeat: Infinity }}
                style={{
                    position: 'absolute',
                    top: '20%',
                    right: '10%',
                    width: '500px',
                    height: '500px',
                    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(60px)',
                    zIndex: -1
                }}
            />

            <div className="container" style={{ textAlign: 'center', maxWidth: '900px', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        style={{
                            display: 'inline-block',
                            padding: '0.75rem 1.5rem',
                            background: 'rgba(255, 255, 255, 0.03)',
                            backdropFilter: 'blur(10px)',
                            borderRadius: '50px',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            marginBottom: '2.5rem'
                        }}
                    >
                        <span className="text-gradient" style={{ fontWeight: 600, letterSpacing: '0.05em' }}>
                            M.COM STUDENT & ANALYST
                        </span>
                    </motion.div>

                    <h1 style={{
                        fontSize: 'clamp(3rem, 7vw, 6rem)',
                        marginBottom: '1.5rem',
                        lineHeight: 1,
                        fontWeight: 800
                    }}>
                        Hello, I'm <br />
                        <span style={{
                            background: 'linear-gradient(to right, #fff, #94a3b8)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            textShadow: '0 0 30px rgba(255,255,255,0.1)'
                        }}>
                            Srijan Kumar
                        </span>
                    </h1>

                    <p style={{
                        fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                        color: 'var(--text-secondary)',
                        marginBottom: '3rem',
                        maxWidth: '600px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        lineHeight: 1.6
                    }}>
                        Building bridges between <span style={{ color: 'var(--accent)' }}>Data</span>, <span style={{ color: 'var(--primary)' }}>Finance</span>, and <span style={{ color: 'var(--secondary)' }}>Technology</span>.
                    </p>

                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="contact" smooth={true} duration={500} offset={-100}>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn btn-primary"
                            >
                                Get in Touch
                            </motion.button>
                        </Link>
                        <Link to="experience" smooth={true} duration={500} offset={-100}>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn btn-outline"
                            >
                                View Work
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
