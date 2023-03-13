import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Numpad from "../../components/Buttons/Numpad";
import History from "../../components/History";
import Result from "../../components/Result";
import {numPad} from "../../utils";

const CalculatorContainer = (props) => {
    const [number, setNumber] = useState([])
    const [result, setResult] = useState(0)


    const handleNumpadClick = (numpad) => {

        setNumber([...number, ...numpad.symbol])

        switch (numpad.action) {
            case 'clear': {
                setNumber([])
                setResult(0)
            }

        }

       let calculated = Math.random().toFixed(10) * 2;
        console.log(calculated)
        setResult(calculated)
        //Функция обработчик для вывода результата
    }

    return (
        <div className={'calculator__body'}>
            <div className={'calculator__wrapper'}>
                <div className={'calculator__x'}>
                    <History number={number}/>
                    <Result result={result}/>
                    <Numpad numPad={numPad} handleNumpadClick={handleNumpadClick}/>
                </div>
            </div>
        </div>
    );
};

CalculatorContainer.propTypes = {
    CalculatorContainer: PropTypes.func,
}

export default CalculatorContainer;
