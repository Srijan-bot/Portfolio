import { motion } from 'framer-motion';

const Skills = () => {
    const technicalSkills = [
        "SQL", "Python", "Web Development", "Tally", "Microsoft Office", "Arduino"
    ];

    const softSkills = [
        "Presentation", "Communication", "Team Leadership", "Analysis", "Decision Making"
    ];

    const certifications = [
        { title: "Data Analyst", issuer: "Infosys Springboard", year: "2023" },
        { title: "Citi - Market Sales & Trading Simulation", issuer: "Forage", year: "2024" },
        { title: "Tally EPR", issuer: "Itronix", year: "2024" },
        { title: "SQL (Basic)", issuer: "HackerRank", year: "2022" },
        { title: "Princial & Practices of Managerial Economics", issuer: "SWAYAM", year: "2024" }
    ];

    return (
        <section id="skills">
            <div className="container">
                <h2 className="section-title">Skills & <span>Certifications</span></h2>

                <div style={{ display: 'grid', md: { gridTemplateColumns: '1fr 1fr' }, gap: '4rem', marginBottom: '5rem' }}>
                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--accent)' }}>Technical Arsenal</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                            {technicalSkills.map((skill, index) => (
                                <motion.span
                                    key={index}
                                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(6, 182, 212, 0.2)' }}
                                    style={{
                                        background: 'rgba(6, 182, 212, 0.1)',
                                        color: 'var(--text-primary)',
                                        padding: '0.75rem 1.5rem',
                                        borderRadius: '100px',
                                        fontSize: '1rem',
                                        border: '1px solid rgba(6, 182, 212, 0.2)',
                                        cursor: 'default',
                                        backdropFilter: 'blur(5px)'
                                    }}
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </div>

                    <div style={{ marginTop: '2rem' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--secondary)' }}>Core Competencies</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                            {softSkills.map((skill, index) => (
                                <motion.span
                                    key={index}
                                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(236, 72, 153, 0.2)' }}
                                    style={{
                                        background: 'rgba(236, 72, 153, 0.1)',
                                        color: 'var(--text-primary)',
                                        padding: '0.75rem 1.5rem',
                                        borderRadius: '100px',
                                        fontSize: '1rem',
                                        border: '1px solid rgba(236, 72, 153, 0.2)',
                                        cursor: 'default',
                                        backdropFilter: 'blur(5px)'
                                    }}
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card"
                            style={{ display: 'flex', flexDirection: 'column', padding: '2rem' }}
                        >
                            <div style={{
                                fontSize: '0.8rem',
                                color: 'var(--text-muted)',
                                marginBottom: '0.75rem',
                                textTransform: 'uppercase',
                                letterSpacing: '1px'
                            }}>
                                {cert.issuer}
                            </div>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', flexGrow: 1, lineHeight: 1.4 }}>{cert.title}</h4>
                            <div style={{
                                fontSize: '0.85rem',
                                color: 'var(--text-primary)',
                                background: 'linear-gradient(90deg, rgba(255,255,255,0.05), transparent)',
                                padding: '0.5rem',
                                borderRadius: '8px',
                                width: 'fit-content',
                                borderLeft: '2px solid var(--accent)'
                            }}>
                                Issued: {cert.year}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
