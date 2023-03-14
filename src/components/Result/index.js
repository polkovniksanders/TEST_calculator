import React from 'react'
import PropTypes from 'prop-types'

/**
 * Функция отображения результата вычисления калькулятора
 * @param result принимает число
 * @returns {JSX.Element}
 * @constructor
 */
const Result = ({result}) => {
    return (
        <div className={'result'}>
            <p className={'result__text'}>
                {result || ''}
            </p>
            <hr className={'result__divider'} />
        </div>
    );
};

Result.propTypes = {
    result: PropTypes.number,
}

export default Result;
