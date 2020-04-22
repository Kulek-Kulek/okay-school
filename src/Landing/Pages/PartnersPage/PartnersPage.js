import React, { useContext } from 'react';

import AuthModal from '../../../Shared/Components/Modal/AuthModal'
import { AuthContex } from '../../../Shared/Contex/auth-contex';




const PartnersPage = props => {
    // const authModalActivator = useContext(ModalContex);
    const auth = useContext(AuthContex);
    return (
        <>
            {auth.isLoggedIn ? <div>I AM PARTNERS</div> : <AuthModal />}
        </>
    );
};

export default PartnersPage;