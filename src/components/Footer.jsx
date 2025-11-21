import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <p className="footer-text">Thank you for your interest in my work!</p>
                <div className="footer-links">
                    <a href="mailto:anzif.anvaj@gmail.com" className="footer-link">Email</a>
                    <a href="https://www.linkedin.com/in/anzifanvaj" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
