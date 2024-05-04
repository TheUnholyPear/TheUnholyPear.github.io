import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css'; //npm install @fortawesome/fontawesome-free
import './style/footer.css';

const Footer = () => {
    return(
        <footer>
            <div className="footer-icons">
                <a href="https://discordapp.com/users/301301936341254144" className="fab fa-discord" aria-label="Discord"></a>
                <a href="https://www.facebook.com/ryan.bain.330/" className="fab fa-facebook" aria-label="Facebook"></a>
                <a href="https://twitter.com/bain2011_bain" className="fab fa-twitter" aria-label="Twitter"></a>
                <a href="https://www.instagram.com/unholypear/" className="fab fa-instagram" aria-label="Instagram"></a>
                <a href="https://www.linkedin.com/in/ryanmbain/" className="fab fa-linkedin" aria-label="LinkedIn"></a>
                <a href="https://github.com/TheUnholyPear" className="fab fa-github" aria-label="GitHub"></a>
                <a href="https://gitlab.cis.strath.ac.uk/yfb20124" className="fab fa-gitlab" aria-label="GitLab"></a>
            </div>
        </footer>

    );
}


export default Footer;
