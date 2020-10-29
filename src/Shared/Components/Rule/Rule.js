import React from 'react';


import './Rule.css';


const Rule = props => {

    let rules;
    if (props.rules) {
        rules = props.rules.map((rule, index) => (
            <ol key={index}>
                <li className='school-rules__single-rule'>{rule}</li>
            </ol>

        ))
    }

    return (
        <React.Fragment>
            {rules}
        </React.Fragment>

    );
}

export default Rule;