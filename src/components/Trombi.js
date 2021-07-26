import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const Trombi = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(
                "https://sandbox.mystudiofactory.com/trombi/"
            )
            .then((res) => setData(res.data));
    
        console.log(data);
    }, []);

    

    return (
        <div className="trombi">
            <ul className="trombi-list">
                {data.map((trombinoscope) => (
                    <Card trombinoscope={trombinoscope} key={trombinoscope.name}/>
                ))}
            </ul>
        </div>
    );
};

export default Trombi;
