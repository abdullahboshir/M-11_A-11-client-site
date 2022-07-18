import React, { useState } from 'react';
import AccordionUi from './AccordionUi';
import './blogs.css';

const AccordionDatas = () => {
    
    const accordiondata = [
        {
            question: "Difference between javascript and nodejs?",
            answer: "1. NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.  2.Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. "
        },
        {
            question: "When should we use MongoDB?",
            answer: "NoSQL databases like MongoDB are a good choice when your data is document-centric and doesn’t fit well into the schema of a relational database, when you need to accommodate massive scale, when you are rapidly prototyping, and a few other use cases."
        },
        {
            question: "What is the purpose of jwt and how does it work?", 
            answer: "JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued."
        }
    ];

    console.log(accordiondata)


    const [clicked, setClicked] = useState("0");

    const handleToggole = index => {
        if(clicked === index){
            return setClicked("0")
        }
        setClicked(index)
    };

    return (
        <div className='accordion1'>
            <h2 style={{textAlign: "center", color: "white", marginBottom: "15px"}}>Answer to the question</h2>

            <ul className='accordion' style={{padding: "0"}}>
             {
                accordiondata.map((data, index) => <AccordionUi
                active={clicked === index}
                onToggle = {() => handleToggole(index)}
                data = {data}
                ></AccordionUi>)
             }
            </ul>
        </div>
    );
};

export default AccordionDatas;