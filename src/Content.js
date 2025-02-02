import { useState } from "react";

const Content = () => {
    const [name, setname] = useState("Trilok");
    const [count, setCount] = useState(0);

    const handleNameChange = () =>{
        const names = ["Trilok", "Rahul", "Rohit", "Rajesh"];
        const int = Math.floor(Math.random() * 4);
        setname(names[int]);
    }

    const handleClick = () =>{
        console.log(count);
        setCount(count + 1);
    }
    const handleClick2 = (name) =>{
        console.log(`${name} was clicked`);
    }

    return (
        <main>
            <p>
                Hello {name}!, Welcome to the world of React.
            </p>
            <button onClick={handleNameChange}>Change Name</button>
            <button onClick={handleClick}>Click Me</button>
        </main>
    )
}

export default Content;