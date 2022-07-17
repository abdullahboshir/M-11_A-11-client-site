import React from 'react';

const AccordionUi = ({data, active, onToggle}) => {
    
    const { answer, question } = data;
    return (
        <div className='accordion-container style={{ backgroundColor: "#021B2A" }}'>
            <li className={active ? "Active" : "nonActive"}>
                <button onClick={onToggle} className="acc-btn">
                    <div className='que-p'>
                        <p>{question}</p>
                        <span className={active ? "drop-down-on" : "drop-down-off"}>
                            {active? "" : ""}
                        </span>
                    </div>
                </button>
                <div className={active ? "acc-ans" : "acc-ans-none"}>
                    <p>{answer}</p>
                </div>
            </li>
        </div>
    );
};

export default AccordionUi;