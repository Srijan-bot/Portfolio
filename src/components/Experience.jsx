import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            title: "Intern",
            company: "Acmegrade",
            date: "July 2023 - Aug 2023",
            location: "Remote",
            points: [
                "Critiqued stock market and crypto trading strategies, enhancing decision-making processes.",
                "Calculated risk factors and potential returns, optimizing portfolio performance.",
                "Interpreted market trends and forecasted stock movements, resulting in profitable investments."
            ]
        },
        {
            title: "Volunteer",
            company: "National Service Scheme (NSS)",
            date: "Apr 2023 - May 2025",
            location: "DAV PG College",
            points: [
                "Participated in social service activities and community development programs.",
                "Developed leadership and teamwork skills through group initiatives."
            ]
        }
    ];

    return (
        <section id="experience">
            <div className="container">
                <h2 className="section-title">My <span>Experience</span></h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="glass-card"
                        >
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '1rem', marginBottom: '1.5rem' }}>
                                <div>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{exp.title}</h3>
                                    <div style={{ color: 'var(--accent)', fontSize: '1.1rem', fontWeight: 600 }}>{exp.company}</div>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <div style={{
                                        padding: '0.4rem 1rem',
                                        background: 'rgba(139, 92, 246, 0.1)',
                                        color: 'var(--primary)',
                                        borderRadius: '50px',
                                        fontSize: '0.9rem',
                                        fontWeight: 600,
                                        border: '1px solid rgba(139, 92, 246, 0.2)'
                                    }}>
                                        {exp.date}
                                    </div>
                                    <div style={{ marginTop: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>{exp.location}</div>
                                </div>
                            </div>

                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                {exp.points.map((point, i) => (
                                    <li key={i} style={{ display: 'flex', gap: '1rem', color: 'var(--text-secondary)' }}>
                                        <span style={{ color: 'var(--secondary)', fontSize: '1.2rem', lineHeight: 1 }}>•</span>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
