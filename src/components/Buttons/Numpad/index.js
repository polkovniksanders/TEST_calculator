import React from 'react'
import PropTypes from 'prop-types'


const Numpad = (props) => {
    const Number = () => {
        return (
            props.numPad && props.numPad.map((numpad, key) =>
                <div
                    key={key}
                    className={'numpad__item'}
                    onClick={() => props.handleNumpadClick(numpad)}
                >
                    {numpad.symbol}
                </div>
            )
        )
    }

    return (
        <div className={'numpad__wrapper'}>
            <Number/>
        </div>
    );
};

Numpad.propTypes = {
    Number: PropTypes.func,
}

export default Numpad;
