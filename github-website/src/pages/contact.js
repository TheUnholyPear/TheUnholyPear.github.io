import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './style/contact.css';

function LinkButton({href, label, iconClass}) {
    return (
        <a href={href} className="link-button" aria-label={label}>
            <i className={iconClass}></i> {label}
        </a>
    );
}

const Contact = () => {
    return (
        <div className="body">
            <div className="title">
                <h1>Contact Me</h1>
            </div>
            <div className="button-container">
                <LinkButton href="https://www.linkedin.com/in/ryanmbain/" label="LinkedIn" iconClass="fab fa-linkedin" />
                <LinkButton href="https://github.com/TheUnholyPear" label="GitHub" iconClass="fab fa-github" />
                <LinkButton href="https://gitlab.cis.strath.ac.uk/yfb20124" label="GitLab" iconClass="fab fa-gitlab" />
                <LinkButton href="https://www.instagram.com/unholypear" label="Instagram" iconClass="fab fa-instagram" />
                <LinkButton href="https://twitter.com/bain2011_bain" label="Twitter" iconClass="fab fa-twitter" />
                <LinkButton href="https://discordapp.com/users/301301936341254144" label="Discord" iconClass="fab fa-discord" />
                <LinkButton href="https://www.facebook.com/ryan.bain.330/" label="Facebook" iconClass="fab fa-facebook" />
            </div>
        </div>
    );
}

export default Contact;
