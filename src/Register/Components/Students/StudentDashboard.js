import React from 'react';


import './StudentDashboard.css';


const panelFiguresTypes = [
    {
        name: 'o tobie',
        id: 'generalStudentInfo',
        icon: 'fas fa-user-graduate student__dashboard-i student__dashboard-i--active',
        class: 'dashboard student__dashboard-figure student__dashboard-figure--active',
        spanClass: 'student__dashboard-span'
    },
    {
        name: 'twoje zajęcia',
        id: 'studentLessonsInfo',
        icon: 'fas fa-book-reader student__dashboard-i',
        class: 'dashboard student__dashboard-figure',
        spanClass: 'student__dashboard-span'
    },
    {
        name: 'twoje finanse',
        id: 'studentFinanceInfo',
        icon: 'fas fa-piggy-bank student__dashboard-i',
        class: 'dashboard student__dashboard-figure',
        spanClass: 'student__dashboard-span'
    }
];

const StudentDashboard = props => {

    const figures = panelFiguresTypes.map(item => (
        <figure
            key={item.id}
            className={item.class}>
            <i className={item.icon}></i>
            <span className={item.spanClass}>{item.name}</span>
        </figure>
    ));

    return (
        <React.Fragment>
            <nav className='dashboard student__dashboard'>
                {figures}
            </nav>
        </React.Fragment>
    );
}

export default StudentDashboard;