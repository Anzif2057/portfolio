import { Sparkles } from 'lucide-react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            <div className="home-container">
                <div className="update-card animate-fade-in">
                    <div className="update-icon">
                        <Sparkles size={32} />
                    </div>

                    <h1 className="update-title">
                        I’m Co-Founding a <span className="gradient-text">Startup!</span>
                    </h1>

                    <p className="update-description">
                        I’ve recently co-founded Ravewards Technologies and am leading Product & UI/UX.
                        Currently shaping the vision, design, and user experience for our upcoming product.
                    </p>

                    <div className="update-date">
                        September 2025
                    </div>
                </div>

                {/* Decorative elements */}
                <div className="bg-decoration decoration-1"></div>
                <div className="bg-decoration decoration-2"></div>
                <div className="bg-decoration decoration-3"></div>
            </div>
        </div>
    );
};

export default Home;
