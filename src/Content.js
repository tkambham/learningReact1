const Content = () => {
    const handleNameChange = () =>{
        const names = ["Trilok", "Rahul", "Rohit", "Rajesh"];
        const int = Math.floor(Math.random() * 4);
        return names[int];
    }
    return (
        <main>
            <p>
                Hello {handleNameChange()}!, Welcome to the world of React.
            </p>
        </main>
    )
}

export default Content;