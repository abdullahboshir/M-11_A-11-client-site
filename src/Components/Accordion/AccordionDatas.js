import React, { useState } from 'react';
import AccordionUi from './AccordionUi';
import './blogs.css';

const AccordionDatas = () => {
    
    const accordiondata = [
        {
            question: "Authentication: Difference between authorization and authentication?",
            answer: "In authentication process, the identity of users are checked for providing the access to the system. 	Authorization: While in authorization process, person’s or user’s authorities are checked for accessing the resources."
        },
        {
            question: "Why are you using firebase? What other options do you have to implement authentication?",
            answer: "Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more."
        },
        {
            question: "What other services does firebase provide other than authentication?", 
            answer: "There are many services which Firebase provides, Most useful of them are: Cloud Firestor, Cloud Functions, Authentication, Hosting, Cloud Storage, Google Analytics, Predictions, Cloud Messaging"
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