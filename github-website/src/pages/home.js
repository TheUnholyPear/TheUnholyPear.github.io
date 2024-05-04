import React, {useState} from "react";
import Footer from "./footer";

function MyButton() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <button onClick={handleClick}>
            Clicked {count} times
        </button>
    );
}

const Home = () => {
    return (
        <div>
            <h1>Welcome to my app</h1>
            <MyButton/>
            <Footer />
        </div>

    );
}

export default Home;
