import React, {useState, useEffect} from "react";

const App = () =>{
    const [count, setCount] = useState(0)

    function decreaseCount(){
        setCount(prevCount => prevCount - 1)
        console.log("count - 1");
    }
    function increaseCount(){
        setCount(prevCount => prevCount + 1)
    }
    function resetCount(){
        setCount(0)
    }

    return(
        <div className="container">
            <div className="counters">
                <button 
                    onClick={decreaseCount}
                    className="sub"
                    >
                    --
                </button>
                <div className="count">
                    {count}
                </div>
                <button 
                    onClick={increaseCount}
                    className="add"
                    >
                    ++
                </button>
            </div>
            <button 
                onClick={resetCount}
                className="reset"
            >RESET</button>
        </div>
    )
}

export default App