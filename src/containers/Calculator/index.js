import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Numpad from "../../components/Buttons/Numpad";
import History from "../../components/History";
import Result from "../../components/Result";
import {numPad} from "../../utils";

const CalculatorContainer = () => {
    const [number, setNumber] = useState([])
    const [result, setResult] = useState(0)

    const handleNumpadClick = (numpad) => {
        setNumber([...number, ...numpad.symbol])
        switch (numpad.action) {
            case 'clear': {
                setNumber([])
            }
        }

       let calculated = Math.random().toFixed(10) * 2;
        setResult(calculated)
    }

    return (
        <div className={'calculator__body'}>
            <div className={'calculator__wrapper'}>
                <div className={'calculator__items'}>
                    <History number={number}/>
                    <Result result={result}/>
                    <Numpad numPad={numPad} handleNumpadClick={handleNumpadClick}/>
                </div>
            </div>
        </div>
    );
};

export default CalculatorContainer;
