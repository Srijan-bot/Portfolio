import { FaEnvelope, FaPhone, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" style={{ paddingTop: '4rem', paddingBottom: '6rem' }}>
            <div className="container">
                <h2 className="section-title">Let's <span>Connect</span></h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem',
                    maxWidth: '1000px',
                    margin: '0 auto'
                }}>
                    <motion.a
                        href="mailto:srijankumar2605@gmail.com"
                        className="glass-card"
                        whileHover={{ y: -10, borderColor: 'var(--accent)' }}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '1.5rem',
                            cursor: 'pointer',
                            textDecoration: 'none',
                            textAlign: 'center'
                        }}
                    >
                        <div style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '50%',
                            background: 'rgba(6, 182, 212, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.5rem',
                            color: 'var(--accent)'
                        }}>
                            <FaEnvelope />
                        </div>
                        <div>
                            <h4 style={{ color: 'var(--text-primary)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Email</h4>
                            <span style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>srijankumar2605@gmail.com</span>
                        </div>
                    </motion.a>

                    <motion.a
                        href="tel:6307814164"
                        className="glass-card"
                        whileHover={{ y: -10, borderColor: 'var(--primary)' }}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '1.5rem',
                            cursor: 'pointer',
                            textDecoration: 'none',
                            textAlign: 'center'
                        }}
                    >
                        <div style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '50%',
                            background: 'rgba(139, 92, 246, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.5rem',
                            color: 'var(--primary)'
                        }}>
                            <FaPhone />
                        </div>
                        <div>
                            <h4 style={{ color: 'var(--text-primary)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Phone</h4>
                            <span style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>+91 6307814164</span>
                        </div>
                    </motion.a>

                    <motion.a
                        href="https://linkedin.com/in/srijankumar2605"
                        target="_blank"
                        className="glass-card"
                        whileHover={{ y: -10, borderColor: 'var(--secondary)' }}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '1.5rem',
                            cursor: 'pointer',
                            textDecoration: 'none',
                            textAlign: 'center'
                        }}
                    >
                        <div style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '50%',
                            background: 'rgba(236, 72, 153, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.5rem',
                            color: 'var(--secondary)'
                        }}>
                            <FaLinkedin />
                        </div>
                        <div>
                            <h4 style={{ color: 'var(--text-primary)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>LinkedIn</h4>
                            <span style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>in/srijankumar2605</span>
                        </div>
                    </motion.a>

                    <motion.div
                        className="glass-card"
                        whileHover={{ y: -10 }}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '1.5rem',
                            cursor: 'default',
                            textAlign: 'center'
                        }}
                    >
                        <div style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '50%',
                            background: 'rgba(255, 255, 255, 0.05)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.5rem',
                            color: 'var(--text-primary)'
                        }}>
                            <FaMapMarkerAlt />
                        </div>
                        <div>
                            <h4 style={{ color: 'var(--text-primary)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Location</h4>
                            <span style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>Varanasi, Uttar Pradesh</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
