import React, { useState, useEffect } from 'react';

import Navigation from '../../../../Shared/Components/Navigation/Navigation';
import MainHeader from '../../../../Shared/Components/MainHeader/MainHeader';
import Main from '../../../../Shared/Components/Main/Main';
import SingleCourse from './SingleCourse';
import Spinner from '../../../../Shared/Elements/LoadingSpinner/LoadingSpinner';
import Footer from '../../../../Shared/Components/Footer/Footer';
import ErrorModal from '../../../../Shared/Components/Modal/ErrorModal';
import { useHttpClient } from '../../../../Shared/Hooks/http-hook';
import './Courses.css';


const Courses = props => {

    const [loadedCourses, setLoadedCourses] = useState();
    const { loading, sendRequest, error, clearError } = useHttpClient();
    const [errorModalActive, setErrorModalActive] = useState(false);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const responseData = await sendRequest(`http://localhost:5000/api/offers/${props.courseType}`);
                setLoadedCourses(responseData.courses);
            } catch (err) {
                setErrorModalActive(true);
            }
        }
        fetchCourses();
    }, [sendRequest, props.courseType]);

    const errorModalCancelHandler = () => {
        setErrorModalActive(false);
        clearError();
    }


    let courses;
    if (loadedCourses) {
        courses = loadedCourses.map(course => (
            <SingleCourse
                key={course.id}
                class={course.courseType}
                title={course.courseTitle}
                forWho={course.courseForWho}
                desc={course.courseDesc}
                price={course.coursePrice}
                advantages={course.courseAdvgs || []}
                terms={course.courseTerms}
            />
        ));
    }

    return (
        <React.Fragment>
            <MainHeader>
                <Navigation />
            </MainHeader>
            <Main>
                <section className='courses-section'>
                    {loading ? <Spinner /> : (!errorModalActive ? courses :
                        <ErrorModal
                            class='error-modal--active'
                            errorMessage={error}
                            errorHeaderMessage='Błąd sieciowy'
                            click={errorModalCancelHandler} />)}
                </section>
            </Main>
            {!loading && loadedCourses && <Footer />}
        </React.Fragment>
    );
}

export default Courses;