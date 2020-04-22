import { createContext } from 'react';

export const ModalContex = createContext({
    contactModalActive: false,
    authModalActive: false,
    modalToggle: () => { }
});