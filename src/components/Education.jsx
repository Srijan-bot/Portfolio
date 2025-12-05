import { motion } from 'framer-motion';

const Education = () => {
    const education = [
        {
            degree: "Master of Commerce (M.Com)",
            school: "Banaras Hindu University",
            year: "2027 (Expected)",
            details: "Varanasi, Uttar Pradesh"
        },
        {
            degree: "Bachelor of Commerce (B.Com) Hons.",
            school: "Banaras Hindu University",
            year: "2025",
            details: "Marketing • First Division"
        },
        {
            degree: "U.G.D.C.A",
            school: "Banaras Hindu University",
            year: "2025",
            details: "First Division with Distinction"
        },
        {
            degree: "O'Level",
            school: "NIELIT, Delhi",
            year: "2025",
            details: "C Grade"
        }
    ];

    return (
        <section id="education">
            <div className="container">
                <h2 className="section-title">Academic <span>Journey</span></h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card"
                            style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
                        >
                            <div style={{ marginBottom: 'auto' }}>
                                <span style={{
                                    fontSize: '0.8rem',
                                    color: 'var(--accent)',
                                    letterSpacing: '0.05em',
                                    textTransform: 'uppercase',
                                    fontWeight: 600
                                }}>
                                    {edu.school}
                                </span>
                                <h3 style={{ fontSize: '1.25rem', marginTop: '0.5rem', marginBottom: '1rem' }}>{edu.degree}</h3>
                            </div>

                            <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '1rem', marginTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{edu.details}</span>
                                <span style={{
                                    background: 'rgba(255,255,255,0.05)',
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '20px',
                                    fontSize: '0.85rem',
                                    color: 'var(--text-primary)'
                                }}>
                                    {edu.year}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
