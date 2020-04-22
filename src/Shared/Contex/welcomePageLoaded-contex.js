import { createContext } from 'react';

export const WelcomeContex = createContext({
    welcome: false,
    welcomePageLoaded: () => { }
});