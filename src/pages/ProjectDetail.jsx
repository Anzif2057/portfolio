import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import BackToTop from '../components/BackToTop';
import './ProjectDetail.css';

const projectData = {
    '9lives-platform': {
        title: '9Lives Platform',
        category: 'Web Design',
        description: 'A curated marketplace empowering independent businesses to launch, grow, and connect with customers.',
        image: '/work0.webp',
        projectType: 'End-to-End Web Platform (Multi-Vendor Marketplace)',
        role: 'UI/UX Designer',
        industry: 'E-commerce, Marketplace, SaaS',
        duration: '5 months',
        tools: 'Figma, Miro, Framer',
        challenge: 'Independent boutiques and creators working with 9Lives faced technical and design barriers when establishing an online presence, making it difficult to showcase their brands professionally and reach the right audience.',
        solution: 'As part of the 9Lives team, I designed a clean and intuitive platform that enables businesses to create polished storefront-style profiles using AI-assisted tools. The experience focuses on simplicity, clear onboarding, and strong visual hierarchy, while preserving a curated marketplace feel that highlights each brand.',
        results: 'A refined dual-sided marketplace for 9Lives that allows creators to launch quickly and confidently, while offering customers a thoughtful discovery experience centered around independent brands and intentional commerce.'
    },
    'ravewards-app': {
        title: 'Ravewards Mobile App',
        category: 'Mobile Design',
        description: 'A modern nightlife loyalty app designed for smooth and effortless perk redemption.',
        image: '/work1.webp',
        projectType: 'End-to-End Mobile App',
        role: 'Product & UI/UX Lead',
        industry: 'Loyalty, Lifestyle, SaaS',
        duration: 'Present',
        tools: 'Figma, Miro, Framer, React.js, Xcode',
        challenge: 'Users found it difficult to discover venue-specific rewards and redeem them smoothly, leading to low engagement and inconsistent loyalty participation across partner clubs.',
        solution: 'I helped design an intuitive end-to-end rewards experience, streamlining the earning and redemption flow, creating clear navigation patterns, and refining the information hierarchy. I also conducted user interviews and prototype testing to validate usability and improve clarity at every step.',
        results: 'A more cohesive and engaging loyalty journey that made reward interactions effortless, improved user understanding, and strengthened overall participation between users and partner venues.'
    },
    'cybersecurity-brand-website': {
        title: 'CyberSecurity Brand Website',
        category: 'Web Design',
        description: 'A visually engaging website presenting complex security solutions for diverse users.',
        image: '/work2.webp',
        projectType: 'End-to-End Web Platform',
        role: 'UI/UX Designer',
        industry: 'Cybersecurity, Technology',
        duration: '2 months',
        tools: 'Figma, Miro',
        challenge: 'Presenting cybersecurity products and company information in a way that is clear, engaging, and accessible for both technical and non-technical users.',
        solution: 'Designed a modular website with intuitive layouts, interactive components, and a cohesive design system. Focused on highlighting products, use cases, and brand identity without overwhelming visitors.',
        results: 'Improved user comprehension of cybersecurity offerings, enhanced brand perception, and created a scalable platform ready for future expansion.'
    },
    'cliniqs-mental-health-app': {
        title: 'CliniQs Mental Health App',
        category: 'Mobile Design',
        description: 'A mental health app that helps users connect with psychologists and track their wellness.',
        image: '/work3.webp',
        projectType: 'Mobile App',
        role: 'UI/UX Designer',
        industry: 'Health, Psychology',
        duration: '3 months',
        tools: 'Figma',
        challenge: 'Users struggled to access certified mental health support easily and stay consistent with their wellness routines, leading to low engagement and limited use of digital resources.',
        solution: 'I designed a holistic platform that connects users with psychologists via video sessions, provides progress tracking, community support, and curated resources. Focused on intuitive navigation, calming visuals, and smooth interactions to encourage consistent use.',
        results: 'Improved user engagement and retention, with users feeling supported in their wellness journey. Achieved a positive reception and strong adoption metrics during initial release.'
    }
};

const ProjectDetail = () => {
    const { slug } = useParams();
    const project = projectData[slug];

    if (!project) {
        return (
            <div className="project-detail-page">
                <div className="project-not-found">
                    <h1>Project Not Found</h1>
                    <Link to="/work" className="back-link">
                        <ArrowLeft size={20} />
                        Back to Work
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="project-detail-page">
            <div className="project-detail-container">
                <Link to="/work" className="back-link">
                    <ArrowLeft size={20} />
                    Back to Work
                </Link>

                <div className="project-header">
                    <span className="project-category">{project.category}</span>
                    <h1 className="project-title">{project.title}</h1>
                    <p className="project-description">{project.description}</p>
                </div>

                <div className="project-image-wrapper">
                    <img src={project.image} alt={project.title} className="project-image" />
                </div>

                <div className="project-details">
                    <div className="detail-item">
                        <h4>Project Type</h4>
                        <p>{project.projectType}</p>
                    </div>
                    <div className="detail-item">
                        <h4>Role</h4>
                        <p>{project.role}</p>
                    </div>
                    <div className="detail-item">
                        <h4>Industry</h4>
                        <p>{project.industry}</p>
                    </div>
                    <div className="detail-item">
                        <h4>Duration</h4>
                        <p>{project.duration}</p>
                    </div>
                    <div className="detail-item">
                        <h4>Tools</h4>
                        <p>{project.tools}</p>
                    </div>
                </div>

                <div className="project-section">
                    <h3>Problem</h3>
                    <p>{project.challenge}</p>
                </div>

                <div className="project-section">
                    <h3>Approach</h3>
                    <p>{project.solution}</p>
                </div>

                <div className="project-section">
                    <h3>Outcome</h3>
                    <p>{project.results}</p>
                </div>
            </div>
            <BackToTop />
        </div>
    );
};

export default ProjectDetail;
