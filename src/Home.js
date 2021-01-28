const Home = () => {
    const handleClick = (event) => {
        console.log("hello, ninjas", event)
    }

    const handleClickAgain = (name) => {
        console.log("hello " + name)
    }

    const handleClickAgainTwo = (name, event) => {
        console.log("hello " + name, event.target)
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={() => handleClickAgain('Mario')}>Click me again</button>
            <button onClick={(event) => handleClickAgainTwo('Mario', event)}>Click me again and again</button>

        </div>
    );
}

export default Home;