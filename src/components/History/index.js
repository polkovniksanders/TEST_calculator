import React from 'react'
import PropTypes from 'prop-types'

/**
 * Функция отображения истории ввода
 * @param number принимает array
 * @returns {JSX.Element}
 * @constructor
 */
const History = ({number}) => {
    return (
        <div className={'history__wrapper'}>
            <p className={'history__text'}>
                {number}
            </p>
        </div>
    );
};

History.propTypes = {
    number: PropTypes.array,
}

export default History;
