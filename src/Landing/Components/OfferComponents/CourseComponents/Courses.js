import React, { useState, useEffect } from 'react';

import Navigation from '../../../../Shared/Components/Navigation/Navigation';
import SlidingCarouselBanner from '../../../../Shared/Components/SlidingCarouselBanner/SlidingCarouselBanner';
import MainHeader from '../../../../Shared/Components/MainHeader/MainHeader';
import Main from '../../../../Shared/Components/Main/Main';
import SingleCourse from './SingleCourse';
import Spinner from '../../../../Shared/Elements/LoadingSpinner/LoadingSpinner';
import Footer from '../../../../Shared/Components/Footer/Footer';
import ErrorModal from '../../../../Shared/Components/Modal/ErrorModal';
import { useHttpClient } from '../../../../Shared/Hooks/http-hook';

import ge1 from '../../../../images/gecourses/up.jpg';
import ge2 from '../../../../images/gecourses/boy-girl.jpg';
import ge3 from '../../../../images/gecourses/man.jpg';
import ge4 from '../../../../images/gecourses/tongue.jpg';
import ge5 from '../../../../images/gecourses/flag.jpg';
import be1 from '../../../../images/businesscources/hands.jpg';
import be2 from '../../../../images/businesscources/manwitflag.jpg';
import be3 from '../../../../images/businesscources/puzzles.jpg';
import be4 from '../../../../images/businesscources/businessAbroad.jpg';
import ab1 from '../../../../images/abroadcourses/uk1.jpg';
import ab2 from '../../../../images/abroadcourses/ge1.jpg';
import ab3 from '../../../../images/abroadcourses/abroad.jpg';

import './Courses.css';

const geImages = [ge1, ge2, ge3, ge4, ge5];
const beImages = [be1, be2, be3, be4];
const abImages = [ab1, ab2, ab3];

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

    let images;

    if (loadedCourses) {
        switch (loadedCourses[0].courseType) {
            case 'business-english':
                images = beImages;
                break;
            case 'general-english':
                images = geImages;
                break;
            case 'learn-abroad':
                images = abImages;
                break;
            default: return images = [];
        }
    }

    let courses;
    if (loadedCourses) {
        courses = loadedCourses.map((course, index) => (
            <SingleCourse
                key={course.id}
                class={course.courseType}
                title={course.courseTitle}
                forWho={course.courseForWho}
                desc={course.courseDesc}
                price={course.coursePrice}
                advantages={course.courseAdvgs || []}
                terms={course.courseTerms}
                src={images[index]}
                alt={'picture' + index}
            />
        ));
    }

    return (
        <React.Fragment>
            <MainHeader>
                <Navigation />
                <SlidingCarouselBanner sliderData={props.sliderData} />
            </MainHeader>
            <Main>
                <section className='courses-section'>
                    {loading ? <Spinner /> : (!errorModalActive ?
                        <React.Fragment>
                            {courses}
                        </React.Fragment>
                        :
                        <ErrorModal
                            class='error-modal--active'
                            errorMessage={error}
                            errorHeaderMessage='Błąd sieciowy'
                            click={errorModalCancelHandler} />)}
                </section>
            </Main>
            {!loading && loadedCourses &&
                <Footer />}
        </React.Fragment>
    );
}

export default Courses;