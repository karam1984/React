import React, { useState, useEffect } from "react";
import Joke from "./Joke";
const url = "https://official-joke-api.appspot.com/random_joke";

function RandomJoke() {
    const [joke, setJoke] = useState({});
    const [Error, setError] = useState(false);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data.setup ,data.punchline )
                setJoke({ ...data });  
            })
            .catch(() => setError(true));
    }, []);
    return (
        <>
            {!Error && <Joke p1={joke.setup} p2={joke.punchline} />}
            {Error && <p>there is an ERROR....</p>}
        </>
    );
}
export default RandomJoke;