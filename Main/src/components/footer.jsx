import './footer.css';
import githubLogo from '../assets/github-logo.png';
import linkedinLogo from '../assets/linkedin-logo.png';
import stackoverflowLogo from '../assets/stackoverflow-logo.png';

const Footer = () => {
    return (
        <footer>
            <a href='https://github.com/pauletters' target='_blank' rel='noreferrer noopener'>
            <img src={githubLogo} alt="GitHub" className="social-icon" />
            </a>
            <a href='https://linkedin.com/in/ryan-paulette-60b74196' target='_blank' rel='noreferrer noopener'>
            <img src={linkedinLogo} alt="LinkedIn" className="social-icon" />
            </a>
            <a href='https://meta.stackexchange.com/users/1610294/ryan?tab=topactivity' target='_blank' rel='noreferrer noopener'>
            <img src={stackoverflowLogo} alt="Stack Overflow" className="social-icon" />
            </a>
        </footer>
    );
};

export default Footer;