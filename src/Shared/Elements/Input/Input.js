import React, { useReducer, useEffect } from 'react';

import { validate } from '../../../Utility/form-validators';
import './Input.css';

const inputReducer = (state, action) => {

    switch (action.type) {
        case 'CHANGE':
            if (action.inputClickedType === 'checkbox') {
                return {
                    ...state,
                    value: action.name,
                    inputClickedType: action.inputClickedType,
                    checked: action.checked,
                    isValid: action.name === 'marketingRules' ? true : action.checked
                };
            }

            return {
                ...state,
                value: action.value,
                checked: action.checked,
                inputClickedType: action.inputClickedType,
                isValid: validate(action.value, action.validators)
            };
        case 'TOUCH':
            return {
                ...state,
                isTouched: true
            }

        case 'CLEAR_INPUTS':
            return {
                ...state,
                value: ''
            }
        default: return state;
    }
}

const Input = props => {

    const [inputCurrentState, dispatch] = useReducer(inputReducer,

        {
            value: props.initialValue || '',
            inputClickedType: props.initialValue || '',
            checked: props.initialIsChecked || false,
            isValid: props.initialIsValid || false,
            isTouched: false
        }
    );

    const { id, onInput } = props;
    const { value, checked, inputClickedType, isValid } = inputCurrentState;

    useEffect(() => {
        onInput(id, value, checked, inputClickedType, isValid);
    }, [id, value, isValid, checked, inputClickedType, onInput]);

    const inputChangeHandler = e => {
        dispatch({
            type: 'CHANGE',
            inputClickedType: e.target.type,
            id: e.target.id,
            name: e.target.name,
            value: e.target.value,
            checked: e.target.checked,
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
                name={props.name}
                type={props.type}
                checked={inputCurrentState.checked}
                placeholder={props.placeholder}
                value={inputCurrentState.value}
                onChange={inputChangeHandler}
                onBlur={touchHandler}
                className={`${props.classInput} ${!inputCurrentState.isValid && inputCurrentState.isTouched && 'input--invalid'}`}
            />
            break;
        case 'select':
            inputType = <select onChange={inputChangeHandler} className={props.classSelect} >
                <option className={props.classOption} defaultValue>{props.selectDefaultValue}</option>
                {props.options ? props.options.map(option =>
                    <option
                        key={option.id || option.name}
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
            <label className={props.classLabel} htmlFor={props.id}>{props.label}</label>
            {inputType}
            {!inputCurrentState.isValid && inputCurrentState.isTouched && <p className={`error-text ${props.classError}`}>{props.errorText}</p>}
        </div>
    );
};

export default Input;