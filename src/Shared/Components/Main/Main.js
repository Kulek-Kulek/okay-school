import React from 'react';

const Main = props => {
    return <main className={`main ${props.mainClassName}`}>{props.children}</main>;
}

export default Main;