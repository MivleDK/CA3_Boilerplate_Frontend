import React, { useState, useEffect } from 'react';
import { URLJokes } from "./settings";

const AllJokes = () => {

    const [joke, setJoke] = useState("");
    const fetchAllJokes = () => {
        fetch(URLJokes).then(res => res.json()).then(data => {
            setJoke(data);
        })
    }

    //loads joke first time
    useEffect(() => {
        fetchAllJokes();

    }, []);

    return (
        <div>
            <h4>Chuck Norris Joke:</h4>
            <p>{joke.joke1}</p>
            <p><a href={joke.joke1Reference}>{joke.joke1Reference}</a></p>
            <hr />
            <h4>Dad Joke:</h4>
            <p>{joke.joke2}</p>
            <p><a href={joke.joke2Reference}>{joke.joke2Reference}</a></p>
            {console.log({ joke })}
            <button onClick={() => fetchAllJokes()}>Get new jokes</button>
        </div>

    );
}

export default AllJokes;