import {
    VALIDATOR_REQUIRE,
    VALIDATOR_EMAIL,
    VALIDATOR_MINLENGTH
} from '../Utility/form-validators';

export const dataType = {
    students: {
        name: {
            input: 'input',
            id: 'name',
            type: 'text',
            placeholder: 'Imię ucznia',
            validators: [VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH(3)],
            errorText: 'Wprowadź poprawne dane.'
        },
        surname: {
            input: 'input',
            id: 'surname',
            type: 'text',
            placeholder: 'Nazwisko ucznia',
            validators: [VALIDATOR_REQUIRE],
            errorText: 'Wprowadź poprawne dane.'
        },
        email: {
            input: 'input',
            id: 'email',
            type: 'email',
            placeholder: 'Email ucznia',
            validators: [VALIDATOR_REQUIRE, VALIDATOR_EMAIL],
            errorText: 'Wprowadź poprawne dane.'
        },
        password: {
            input: 'input',
            id: 'password',
            type: 'password',
            placeholder: 'Hasło ucznia',
            validators: [VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH(5)],
            errorText: 'Wprowadź poprawne dane.'
        },
        mobile: {
            input: 'input',
            id: 'mobile',
            type: 'tel',
            placeholder: 'Telefon ucznia',
            validators: [VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH(6)],
            errorText: 'Wprowadź poprawne dane.'
        },
    },
    teachers: {
        name: {
            input: 'input',
            id: 'name',
            type: 'text',
            placeholder: 'Imię lektora',
            validators: [VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH(3)],
            errorText: 'Wprowadź poprawne dane.'
        },
        surname: {
            input: 'input',
            id: 'surname',
            type: 'text',
            placeholder: 'Nazwisko lektora',
            validators: [VALIDATOR_REQUIRE],
            errorText: 'Wprowadź poprawne dane.'
        },
        email: {
            input: 'input',
            id: 'email',
            type: 'email',
            placeholder: 'Email lektora',
            validators: [VALIDATOR_REQUIRE, VALIDATOR_EMAIL],
            errorText: 'Wprowadź poprawne dane.'
        },
        password: {
            input: 'input',
            id: 'password',
            type: 'password',
            placeholder: 'Hasło lektora',
            validators: [VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH(5)],
            errorText: 'Wprowadź poprawne dane.'
        },
        mobile: {
            input: 'input',
            id: 'mobile',
            type: 'tel',
            placeholder: 'Telefon lektora',
            validators: [VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH(6)],
            errorText: 'Wprowadź poprawne dane.'
        },
    },
    groups: {
        name: {
            input: 'input',
            id: 'name',
            type: 'text',
            placeholder: 'Nazwa grupy',
            validators: [VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH(3)],
            errorText: 'Wprowadź poprawne dane.'
        }
    },
    updateGroups: {
        select: {
            input: 'select',
            validators: [VALIDATOR_REQUIRE],
            id: 'group'
        }
    }
}