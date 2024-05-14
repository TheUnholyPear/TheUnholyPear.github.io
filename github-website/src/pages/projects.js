import React from 'react';

function LinkButton({href, label}) {

    function handleClick() {
        window.location.href = href;
    }

    return (
        <button
            onClick={handleClick}
        >
            {label}
        </button>
    );
}

const Projects = () => {
    return (
        <div className="body">
            <div className="title">
                <h1>My Projects</h1>
            </div>
            <div className="text">
                <LinkButton href="https://www.linkedin.com/in/ryanmbain/" label="LinkedIn" />
                <LinkButton href="https://github.com/TheUnholyPear" label="GitHub" />
            </div>
        </div>
    );
}

export default Projects;
