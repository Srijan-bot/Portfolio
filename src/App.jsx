import { motion } from 'framer-motion';
// Components will be created next
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
    return (
        <div className="App">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Experience />
                <Education />
                <Skills />
                <Contact />
            </main>

            <footer style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <p>&copy; 2024 Srijan Kumar. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
