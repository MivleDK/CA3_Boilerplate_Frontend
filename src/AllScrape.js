import React, { useState, useEffect } from 'react';
import { URLScrapeSequential, URLScrapeParallel } from './settings';

const AllScrape = () => {

    const [sequental, setSequental] = useState("");
    const fetchAllSequental = () => {
        fetch(URLScrapeSequential).then(res => res.json()).then(data1 => {
            setSequental(data1);
        })
    }

    const [parallel, setParallel] = useState("");
    const fetchAllParallel = () => {
        fetch(URLScrapeParallel).then(res => res.json()).then(data2 => {
            setParallel(data2);
        })
    }

    //loads joke first time
    useEffect(() => {
        fetchAllSequental();
        fetchAllParallel();
    }, []);

    return (

        <div>
            <div className="floatLeft">
                <h4>{sequental.title}</h4>
                <p>{sequental.timeSpent}</p>

                <table>

                    {sequental.tags && sequental.tags.map(element =>
                        <tbody key={element.url}>
                            <tr><th>url:</th><td>{element.url}</td></tr>
                            <tr><th>divCount:</th><td>{element.divCount}</td></tr>
                            <tr><th>bodyCount:</th><td>{element.bodyCount}</td></tr>
                            <tr><th>&nbsp;</th><td>&nbsp;</td></tr>
                        </tbody>
                    )}

                </table>
                <p><button onClick={() => { fetchAllSequental(); fetchAllParallel() }}>fetch Scrape</button></p>
            </div>
            <div className="floatLeft">
                <h4>{parallel.title}</h4>
                <p>{parallel.timeSpent}</p>
                <table>
                    {parallel.tags && parallel.tags.map(element =>
                        <tbody key={element.url}>
                            <tr><th>url:</th><td>{element.url}</td></tr>
                            <tr><th>divCount:</th><td>{element.divCount}</td></tr>
                            <tr><th>bodyCount:</th><td>{element.bodyCount}</td></tr>
                            <tr><th>&nbsp;</th><td>&nbsp;</td></tr>
                        </tbody>
                    )}
                </table>
            </div>
            {console.log({ sequental })}
            {console.log({ parallel })}

        </div>


    );

}

export default AllScrape;