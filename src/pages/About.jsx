import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <div className="about-container">
                <div className="about-hero animate-fade-in">
                    <div className="about-image-wrapper">
                        <div className="image-glow"></div>
                        <img
                            src="/Anzif_Picture.JPG"
                            alt="Anzif - UI/UX Designer"
                            className="about-image"
                        />
                    </div>

                    <div className="about-content">
                        <h1 className="about-title">
                            Hi, I'm <span className="gradient-text">Anzif</span>
                        </h1>
                        <p className="about-subtitle">Product & UI/UX Designer</p>

                        <div className="about-contact">
                            <a href="mailto:anzif.anvaj@gmail.com" className="contact-link">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                                anzif.anvaj@gmail.com
                            </a>
                            <a href="https://www.linkedin.com/in/anzifanvaj" target="_blank" rel="noopener noreferrer" className="contact-link">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect x="2" y="9" width="4" height="12" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>

                <div className="about-sections">
                    <section className="about-section animate-slide-left">
                        <h2 className="section-title">My Story</h2>
                        <p className="section-text">
                            I'm a passionate Product & UI/UX Designer who believes that meaningful design should feel effortless.
                            My journey began with a drive to build better digital experiences, and that curiosity led me to co-found
                            Ravewards Technologies. I love shaping products that are not just visually refined, but purposeful,
                            intuitive, and built to solve real problems.
                        </p>
                    </section>

                    <section className="about-section animate-slide-right">
                        <h2 className="section-title">Journey to UI/UX</h2>
                        <p className="section-text">
                            My path to UI/UX design wasn't linear, and that's what makes it meaningful.
                            I began by experimenting with digital design and front-end development, which gradually sparked my
                            interest in how users interact with products. Through different projects and internships, I learned
                            how much psychology, structure, and intention go into creating a seamless user experience.
                        </p>
                        <p className="section-text">
                            What drew me to UI/UX was the balance between creativity and logic. It's not just about visuals, it's
                            about understanding people, solving real problems, and crafting interfaces that feel natural.
                            Every project strengthened my belief that thoughtful design can simplify complexity and create
                            experiences that truly matter.
                        </p>
                    </section>

                    <section className="about-section animate-slide-left">
                        <h2 className="section-title">Experience</h2>

                        <div className="experience-cards">
                            <div className="experience-card">
                                <div className="experience-card-content">
                                    <h3 className="experience-card-role">Product & UI/UX Lead</h3>
                                    <p className="experience-card-company">Ravewards Technologies (Startup)</p>
                                </div>
                                <div className="experience-card-meta">
                                    <span className="experience-card-date">Sep 2025 – Present</span>
                                    <span className="experience-card-location">Dubai, UAE</span>
                                </div>
                            </div>

                            <div className="experience-card">
                                <div className="experience-card-content">
                                    <h3 className="experience-card-role">UI/UX Designer (Internship)</h3>
                                    <p className="experience-card-company">Altaire Insights Technologies</p>
                                </div>
                                <div className="experience-card-meta">
                                    <span className="experience-card-date">May 2024 – Aug 2024</span>
                                    <span className="experience-card-location">Kerala, India</span>
                                </div>
                            </div>

                            <div className="experience-card">
                                <div className="experience-card-content">
                                    <h3 className="experience-card-role">Front-End Developer (Internship)</h3>
                                    <p className="experience-card-company">Adeptus Technologies</p>
                                </div>
                                <div className="experience-card-meta">
                                    <span className="experience-card-date">May 2023 – Aug 2023</span>
                                    <span className="experience-card-location">Dubai, UAE</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="about-section animate-slide-right">
                        <h2 className="section-title">Skills</h2>

                        <div className="skills-grid">
                            <div className="skill-card">
                                <h3>Design Tools</h3>
                                <p>Figma, Miro, Framer, Canva, Unreal Engine, Sitch, Midjourney</p>
                            </div>
                            <div className="skill-card">
                                <h3>Research & Testing</h3>
                                <p>User Interviews, Usability Testing, Heuristic Evaluation, User Personas, Information Architecture</p>
                            </div>
                            <div className="skill-card">
                                <h3>Development</h3>
                                <p>React.js, HTML, CSS, JavaScript, Responsive Design, Xcode</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default About;
