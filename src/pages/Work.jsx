import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import BackToTop from '../components/BackToTop';
import './Work.css';

const workData = [
    {
        id: 1,
        title: '9Lives Platform',
        category: 'Web Design',
        description: 'A curated marketplace empowering independent businesses to launch, grow, and connect with customers.',
        shortDescription: 'Building a curated marketplace that empowers independent businesses to launch, grow, and connect with customers who value quality, purpose, and originality.',
        image: '/work0.webp',
        projectType: 'End-to-End Web Platform (Multi-Vendor Marketplace)',
        role: 'UI/UX Designer',
        industry: 'E-commerce, Marketplace, SaaS',
        slug: '9lives-platform'
    },
    {
        id: 2,
        title: 'Ravewards App',
        category: 'Mobile Design',
        description: 'A modern nightlife loyalty app designed for smooth and effortless perk redemption.',
        shortDescription: 'Building a seamless club-rewards experience that helps users earn, redeem, and discover perks effortlessly, while enabling venues to boost engagement and customer loyalty.',
        image: '/work1.webp',
        projectType: 'End-to-End Mobile App',
        role: 'Product & UI/UX Lead',
        industry: 'Loyalty, Lifestyle, SaaS',
        slug: 'ravewards-app'
    },
    {
        id: 3,
        title: 'CyberSecurity Brand Website',
        category: 'Web Design',
        description: 'A visually engaging website presenting complex security solutions for diverse users.',
        shortDescription: "Showcasing Company's brand and products through a clear, engaging, and accessible web experience with modular components.",
        image: '/work2.webp',
        projectType: 'End-to-End Web Platform',
        role: 'UI/UX Designer',
        industry: 'Cybersecurity, Technology',
        slug: 'cybersecurity-brand-website'
    },
    {
        id: 4,
        title: 'Cliniqs Mental Health App',
        category: 'Mobile Design',
        description: 'A fitness tracking application that motivates users to achieve their health goals.',
        shortDescription: 'Creating a supportive platform where users can connect with certified psychologists, schedule video sessions, and access resources and peer support for holistic mental well-being.',
        image: '/work3.webp',
        projectType: 'Mobile App',
        role: 'UI/UX Designer',
        industry: 'Health, Psychology',
        slug: 'cliniqs-mental-health-app'
    }
];

const Work = () => {
    return (
        <div className="work-page">
            {/* Hero Section */}
            <section className="work-hero">
                <div className="work-hero-content animate-fade-in">
                    <h1 className="work-hero-title">
                        <span className="glow-wrapper">Hello</span>, I'm <span className="gradient-text">Anzif Anvaj</span>
                    </h1>
                    <p className="work-hero-description">
                        I design digital experiences that are aesthetically pleasing, functional, and user-centered.
                        Here's a selection of my recent work.
                    </p>
                </div>
            </section>

            {/* Work Items - Vertical Layout */}
            <section className="work-showcase">
                <div className="work-showcase-container">
                    {workData.map((work, index) => (
                        <div
                            key={work.id}
                            className="work-item animate-fade-in"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            {index % 2 === 0 ? (
                                <>
                                    <div className="work-item-image">
                                        <div className="work-image-container">
                                            <img src={work.image} alt={work.title} />
                                        </div>
                                    </div>

                                    <div className="work-item-content">
                                        <h2 className="work-item-title">{work.title}</h2>
                                        <p className="work-item-description">{work.shortDescription}</p>

                                        <div className="work-item-meta">
                                            <div className="meta-item">
                                                <span className="meta-label">Project type:</span>
                                                <span className="meta-value">{work.projectType}</span>
                                            </div>
                                            <div className="meta-item">
                                                <span className="meta-label">Role:</span>
                                                <span className="meta-value">{work.role}</span>
                                            </div>
                                            <div className="meta-item">
                                                <span className="meta-label">Industry:</span>
                                                <span className="meta-value">{work.industry}</span>
                                            </div>
                                        </div>

                                        <Link
                                            to={`/work/${work.slug}`}
                                            className="view-case-study-btn"
                                        >
                                            View Work
                                            <ArrowRight size={20} />
                                        </Link>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="work-item-content">
                                        <h2 className="work-item-title">{work.title}</h2>
                                        <p className="work-item-description">{work.shortDescription}</p>

                                        <div className="work-item-meta">
                                            <div className="meta-item">
                                                <span className="meta-label">Project type:</span>
                                                <span className="meta-value">{work.projectType}</span>
                                            </div>
                                            <div className="meta-item">
                                                <span className="meta-label">Role:</span>
                                                <span className="meta-value">{work.role}</span>
                                            </div>
                                            <div className="meta-item">
                                                <span className="meta-label">Industry:</span>
                                                <span className="meta-value">{work.industry}</span>
                                            </div>
                                        </div>

                                        <Link
                                            to={`/work/${work.slug}`}
                                            className="view-case-study-btn"
                                        >
                                            View Work
                                            <ArrowRight size={20} />
                                        </Link>
                                    </div>

                                    <div className="work-item-image">
                                        <div className="work-image-container">
                                            <img src={work.image} alt={work.title} />
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </section>
            <BackToTop />
        </div>
    );
};

export default Work;
