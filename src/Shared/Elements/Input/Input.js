import React, { useReducer, useEffect } from 'react';

import { validate } from '../../../Utility/form-validators';
import './Input.css';

const inputReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                value: action.value,
                isValid: validate(action.value, action.validators)
            };
        case 'TOUCH':
            return {
                ...state,
                isTouched: true
            }
        default: return state;
    }
}

const Input = props => {
    const [inputCurrentState, dispatch] = useReducer(inputReducer,
        {
            value: props.initialValue || '',
            isValid: props.initialIsValid || false,
            isTouched: false
        }
    );

    const { id, onInput } = props;
    const { value, isValid } = inputCurrentState;

    useEffect(() => {
        onInput(id, value, isValid);
    }, [id, value, isValid, onInput]);

    const inputChangeHandler = e => {
        dispatch({
            type: 'CHANGE',
            value: e.target.value,
            validators: props.validators
        });
    };

    const touchHandler = () => {
        dispatch({ type: 'TOUCH' })
    }

    let inputType;

    switch (props.input) {
        case 'input':
            inputType = <input
                id={props.id}
                type={props.type}
                placeholder={props.placeholder}
                value={inputCurrentState.value}
                onChange={inputChangeHandler}
                onBlur={touchHandler}
                className={`${props.classInput} ${!inputCurrentState.isValid && inputCurrentState.isTouched && 'input--invalid'}`} />
            break;
        case 'select':
            inputType = <select onChange={inputChangeHandler} className={props.classSelect} >
                <option defaultValue>Wybierz grupę</option>
                {props.options ? props.options.map(option =>
                    <option
                        key={option.id}
                        value={option.id}
                        className={props.classOption}>
                        {option.name}
                    </option>) : <option>Brak danych</option>}
            </select>
            break;
        default: inputType = <textarea
            id={props.id}
            rows={props.rows || 4}
            value={inputCurrentState.value}
            placeholder={props.placeholder}
            onChange={inputChangeHandler}
            onBlur={touchHandler}
            className={`${props.classInput} ${!inputCurrentState.isValid && inputCurrentState.isTouched && 'input--invalid'}`} />
    }


    return (
        <div className={`input-wrapper ${props.inputWrapperClass}`}>
            <label htmlFor={props.id}>{props.label}</label>
            {inputType}
            {!inputCurrentState.isValid && inputCurrentState.isTouched && <p className='error-text'>{props.errorText}</p>}
        </div>
    );
};

export default Input;