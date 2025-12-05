import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about">
            <div className="container">
                <h2 className="section-title">About <span>Me</span></h2>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="glass-card"
                    style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}
                >
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                        I am a motivated <strong style={{ color: 'var(--text-primary)' }}>M.Com student</strong> at Banaras Hindu University with a strong foundation in accounting, computer applications, and digital tools. Alongside my academic journey, I have completed O Level certification and am pursuing UGDCA, equipping me with both technical and analytical skills. I am passionate about leveraging <strong style={{ color: 'var(--accent)' }}>data</strong> to drive business decisions and profitability.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
