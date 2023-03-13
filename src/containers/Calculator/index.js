import React from 'react'
import PropTypes from 'prop-types'

const CalculatorContainer = (props) => {
    return (
        <div className={'calculator__body'}>

            <div className={'calculator__wrapper'}>
                <div className={'calculator__x'}>
                    ТУТ ДОЛЖЕН БЫТЬ КАЛЬКУЛЯТОР
                </div>
            </div>

        </div>
    );
};

CalculatorContainer.propTypes = {
    CalculatorContainer: PropTypes.func,
}

export default CalculatorContainer;
