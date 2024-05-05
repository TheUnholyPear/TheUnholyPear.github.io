import React, { useState } from "react";

function MyButton() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <button
            onClick={handleClick}
            style={{ height: `${count}vh` }}
        >
            Clicked {count} times, every time this button is clicked the size will increase
        </button>
    );
}

const Home = () => {
    return (
        <div style={{ padding: "20px" }}>
            <h1>Welcome to my app</h1>
            <p style={{ height: "100vh", background: "lightblue" }}>This is some long content that takes up a lot of space.</p>
            <p style={{ height: "100vh", background: "lightgreen" }}>More long content to push the footer down.</p>
            <MyButton />
        </div>
    );
};

export default Home;
