import {
    VALIDATOR_REQUIRE,
    VALIDATOR_EMAIL,
    VALIDATOR_MINLENGTH,
} from '../Utility/form-validators';

export const dataType = {
    students: {
        name: {
            input: 'input',
            id: 'studentName',
            type: 'text',
            placeholder: 'Imię ucznia',
            validators: [VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(3)],
            errorText: 'Wprowadź poprawne dane.',
            class: 'add-data-modal__input',
            inputWrapperClass: 'add-data-modal__group-input-column'
        },
        surname: {
            input: 'input',
            id: 'studentSurname',
            type: 'text',
            placeholder: 'Nazwisko ucznia',
            validators: [VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(3)],
            errorText: 'Wprowadź poprawne dane.',
            class: 'add-data-modal__input',
            inputWrapperClass: 'add-data-modal__group-input-column'
        },
        email: {
            input: 'input',
            id: 'studentEmail',
            type: 'email',
            placeholder: 'Email ucznia',
            validators: [VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()],
            errorText: 'Niepoprawny email.',
            class: 'add-data-modal__input',
            inputWrapperClass: 'add-data-modal__group-input-column'
        },
        mobile: {
            input: 'input',
            id: 'studentMobile',
            type: 'number',
            placeholder: 'Telefon ucznia',
            validators: [VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(6)],
            errorText: 'Wprowadź poprawne dane.',
            class: 'add-data-modal__input',
            inputWrapperClass: 'add-data-modal__group-input-column'
        },
        password: {
            input: 'input',
            id: 'studentPassword',
            type: 'password',
            placeholder: 'Hasło ucznia',
            validators: [VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)],
            errorText: 'Wprowadź poprawne dane.',
            class: 'add-data-modal__input',
            inputWrapperClass: 'add-data-modal__group-input-column'
        }
    },
    teachers: {
        name: {
            input: 'input',
            id: 'teacherName',
            type: 'text',
            placeholder: 'Imię lektora',
            validators: [VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(3)],
            errorText: 'Wprowadź poprawne dane.',
            class: 'add-data-modal__input',
            inputWrapperClass: 'add-data-modal__group-input-column'
        },
        surname: {
            input: 'input',
            id: 'teacherSurname',
            type: 'text',
            placeholder: 'Nazwisko lektora',
            validators: [VALIDATOR_REQUIRE()],
            errorText: 'Wprowadź poprawne dane.',
            class: 'add-data-modal__input',
            inputWrapperClass: 'add-data-modal__group-input-column'
        },
        email: {
            input: 'input',
            id: 'teacherEmail',
            type: 'email',
            placeholder: 'Email lektora',
            validators: [VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()],
            errorText: 'Wprowadź poprawne dane.',
            class: 'add-data-modal__input',
            inputWrapperClass: 'add-data-modal__group-input-column'
        },
        mobile: {
            input: 'input',
            id: 'teacherMobile',
            type: 'number',
            placeholder: 'Telefon lektora',
            validators: [VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(6)],
            errorText: 'Wprowadź poprawne dane.',
            class: 'add-data-modal__input',
            inputWrapperClass: 'add-data-modal__group-input-column'
        },
        password: {
            input: 'input',
            id: 'teacherPassword',
            type: 'password',
            placeholder: 'Hasło lektora',
            validators: [VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)],
            errorText: 'Wprowadź poprawne dane.',
            class: 'add-data-modal__input',
            inputWrapperClass: 'add-data-modal__group-input-column'
        }
    },
    groups: {
        name: {
            input: 'input',
            id: 'groupName',
            type: 'text',
            placeholder: 'Nazwa grupy',
            validators: [VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(3)],
            errorText: 'Wprowadź nazwę',
            class: 'add-data-modal__input',
            inputWrapperClass: 'add-data-modal__group-input-row'
        },
        lessonLength: {
            input: 'input',
            id: 'lessonLength',
            type: 'number',
            placeholder: 'Ile minut ma jedna lekcja?',
            validators: [VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(1)],
            errorText: 'Podaj cyfrę',
            class: 'add-data-modal__input',
            inputWrapperClass: 'add-data-modal__group-input-row'
        },
        courseLength: {
            input: 'input',
            id: 'courseLength',
            type: 'number',
            placeholder: 'Liczba godzin w tej grupie?',
            validators: [VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(1)],
            errorText: 'Podaj cyfrę',
            class: 'add-data-modal__input',
            inputWrapperClass: 'add-data-modal__group-input-row'
        },
    },
    partners: {
        name: {
            input: 'input',
            id: 'partnerName',
            type: 'text',
            placeholder: 'Imię ucznia',
            validators: [VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(3)],
            errorText: 'Wprowadź poprawne dane.',
            class: 'add-data-modal__input',
            inputWrapperClass: 'add-data-modal__group-input-column'
        }
    },
    days: {
        monday: {
            input: 'input',
            type: 'checkbox',
            validators: [VALIDATOR_REQUIRE()],
            id: 'poniedziałek',
            name: 'poniedziałek',
            label: 'poniedziałek',
            class: 'add-data-modal__checkbox'
        },
        tuesday: {
            input: 'input',
            type: 'checkbox',
            validators: [VALIDATOR_REQUIRE()],
            id: 'wtorek',
            name: 'wtorek',
            label: 'wtorek',
            class: 'add-data-modal__checkbox'
        },
        wednesday: {
            input: 'input',
            type: 'checkbox',
            validators: [VALIDATOR_REQUIRE()],
            id: 'środa',
            name: 'środa',
            label: 'środa',
            class: 'add-data-modal__checkbox'
        },
        thursday: {
            input: 'input',
            type: 'checkbox',
            validators: [VALIDATOR_REQUIRE()],
            id: 'czwartek',
            name: 'czwartek',
            label: 'czwartek',
            class: 'add-data-modal__checkbox'
        },
        friday: {
            input: 'input',
            type: 'checkbox',
            validators: [VALIDATOR_REQUIRE()],
            id: 'piątek',
            name: 'piątek',
            label: 'piątek',
            class: 'add-data-modal__checkbox'
        },
        saturday: {
            input: 'input',
            type: 'checkbox',
            validators: [VALIDATOR_REQUIRE()],
            id: 'sobota',
            name: 'sobota',
            label: 'sobota',
            class: 'add-data-modal__checkbox'
        },
        sunday: {
            input: 'input',
            type: 'checkbox',
            validators: [VALIDATOR_REQUIRE()],
            id: 'niedziela',
            name: 'niedziela',
            label: 'niedziela',
            class: 'add-data-modal__checkbox'
        }
    },
    timeFrom: {
        monday: {
            input: 'input',
            type: 'time',
            validators: [VALIDATOR_REQUIRE()],
            id: 'poniedziałekOd',
            name: 'poniedziałek',
            label: 'od',
            class: 'add-data-modal__time-input'
        },
        tuesday: {
            input: 'input',
            type: 'time',
            validators: [VALIDATOR_REQUIRE()],
            id: 'wtorekOd',
            name: 'wtorek',
            label: 'od',
            class: 'add-data-modal__time-input'
        },
        wednesday: {
            input: 'input',
            type: 'time',
            validators: [VALIDATOR_REQUIRE()],
            id: 'środaOd',
            name: 'środa',
            label: 'od',
            class: 'add-data-modal__time-input'
        },
        thursday: {
            input: 'input',
            type: 'time',
            validators: [VALIDATOR_REQUIRE()],
            id: 'czwartekOd',
            name: 'czwartek',
            label: 'od',
            class: 'add-data-modal__time-input'
        },
        friday: {
            input: 'input',
            type: 'time',
            validators: [VALIDATOR_REQUIRE()],
            id: 'piątekOd',
            name: 'piątek',
            label: 'od',
            class: 'add-data-modal__time-input'
        },
        saturday: {
            input: 'input',
            type: 'time',
            validators: [VALIDATOR_REQUIRE()],
            id: 'sobotaOd',
            name: 'sobota',
            label: 'od',
            class: 'add-data-modal__time-input'
        },
        sunday: {
            input: 'input',
            type: 'time',
            validators: [VALIDATOR_REQUIRE()],
            id: 'niedzielaOd',
            name: 'niedziela',
            label: 'od',
            class: 'add-data-modal__time-input'
        }
    },
    timeTo: {
        monday: {
            input: 'input',
            type: 'time',
            validators: [VALIDATOR_REQUIRE()],
            id: 'poniedziałekDo',
            name: 'poniedziałek',
            label: 'do',
            class: 'add-data-modal__time-input'
        },
        tuesday: {
            input: 'input',
            type: 'time',
            validators: [VALIDATOR_REQUIRE()],
            id: 'wtorekDo',
            name: 'wtorek',
            label: 'do',
            class: 'add-data-modal__time-input'
        },
        wednesday: {
            input: 'input',
            type: 'time',
            validators: [VALIDATOR_REQUIRE()],
            id: 'środaDo',
            name: 'środa',
            label: 'do',
            class: 'add-data-modal__time-input'
        },
        thursday: {
            input: 'input',
            type: 'time',
            validators: [VALIDATOR_REQUIRE()],
            id: 'czwartekDo',
            name: 'czwartek',
            label: 'do',
            class: 'add-data-modal__time-input'
        },
        friday: {
            input: 'input',
            type: 'time',
            validators: [VALIDATOR_REQUIRE()],
            id: 'piątekDo',
            name: 'piątek',
            label: 'do',
            class: 'add-data-modal__time-input'
        },
        saturday: {
            input: 'input',
            type: 'time',
            validators: [VALIDATOR_REQUIRE()],
            id: 'sobotaDo',
            name: 'sobota',
            label: 'do',
            class: 'add-data-modal__time-input'
        },
        sunday: {
            input: 'input',
            type: 'time',
            validators: [VALIDATOR_REQUIRE()],
            id: 'niedzielaDo',
            name: 'niedziela',
            label: 'do',
            class: 'add-data-modal__time-input'
        }
    },
    updateGroups: {
        select: {
            input: 'select',
            validators: [VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(1)],
            id: 'updatedGroupName',
            inputWrapperClass: 'add-data-modal__group-input-select',
            classLabel: 'add-data-modal__group-input-select-label',
            label: 'Wybierz grupę',

        }
    },
    order: {
        name: {
            input: 'input',
            id: 'orderName',
            type: 'text',
            placeholder: 'Imię ucznia',
            validators: [VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(3)],
            errorText: 'Wprowadź poprawne dane.',
            class: 'basket__input-order',
            inputWrapperClass: 'basket__input-order-wrapper',
            classError: 'basket__error-text',
        },
        surname: {
            input: 'input',
            id: 'orderSurname',
            type: 'text',
            placeholder: 'Nazwisko ucznia',
            validators: [VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(3)],
            errorText: 'Wprowadź poprawne dane.',
            class: 'basket__input-order',
            inputWrapperClass: 'basket__input-order-wrapper',
            classError: 'basket__error-text'
        },
        email: {
            input: 'input',
            id: 'orderEmail',
            type: 'email',
            placeholder: 'Email ucznia',
            validators: [VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()],
            errorText: 'Wprowadź poprawne dane.',
            class: 'basket__input-order',
            inputWrapperClass: 'basket__input-order-wrapper',
            classError: 'basket__error-text'
        },
        mobile: {
            input: 'input',
            id: 'orderMobile',
            type: 'number',
            placeholder: 'Telefon ucznia',
            validators: [VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(6)],
            errorText: 'Wprowadź poprawne dane.',
            class: 'basket__input-order',
            inputWrapperClass: 'basket__input-order-wrapper',
            classError: 'basket__error-text'
        },
        birthday: {
            input: 'input',
            id: 'orderBirthday',
            type: 'text',
            validators: [VALIDATOR_REQUIRE()],
            placeholder: 'Data urodzenia ucznia',
            errorText: 'Wprowadź dane.',
            class: 'basket__input-order basket__input-order-date',
            inputWrapperClass: 'basket__input-order-wrapper',
            classError: 'basket__error-text'
        },
        orderCourseType: {
            input: 'select',
            type: 'text',
            validators: [VALIDATOR_REQUIRE()],
            id: 'orderCourseType',
            class: 'basket__input-order basket__input-order-select',
            classOption: 'basket__input-order-option',
            inputWrapperClass: 'basket__input-order-wrapper',
            classError: 'basket__error-text',
            selectDefaultValue: 'Wybierz tryb zajęć'
        },
        comments: {
            id: 'orderComments',
            name: 'studentComments',
            placeholder: 'Tutaj możesz wpisać woje uwagi.',
            initialIsValid: true,
            validators: [VALIDATOR_REQUIRE()],
            errorText: 'Wprowadź poprawne dane.',
            class: 'basket__input-order',
            inputWrapperClass: 'basket__input-order-wrapper basket__input-order-wrapper-textarea',
            classError: 'basket__error-text'
        },
        courseRules: {
            input: 'input',
            type: 'checkbox',
            // validators: [VALIDATOR_REQUIRE()],
            initialIsValid: false,
            id: 'orderCourseRules',
            name: 'courseRules',
            label: 'Oświadczam, że zapoznałem/łam się oraz akceptuję regulamin *',
            class: 'basket__input-order-checkbox',
            inputWrapperClass: 'basket__input-order-wrapper basket__input-order-wrapper-checkbox',
            classError: 'basket__error-text',
            classLabel: 'basket__input-order-label'
        },
        marketingRules: {
            input: 'input',
            type: 'checkbox',
            // validators: [VALIDATOR_REQUIRE()],
            id: 'orderMarketingRules',
            name: 'marketingRules',
            initialIsValid: true,
            initialIsChecked: true,
            initialValue: true,
            label: 'Wyrażam zgodę na otrzymywanie na wskazany przeze mnie adres e-mail korespondencji handlowej zawierającej ofertę edukacyjną od Szkoły Języków Obcych OKAY. Przysługuje mi prawo cofnięcia zgody na przetwarzanie danych w każdym czasie, co nie będzie jednak miało wpływu na zgodność przetwarzania danych z prawem realizowanego przed cofnięciem zgody.',
            class: 'basket__input-order-checkbox',
            inputWrapperClass: 'basket__input-order-wrapper basket__input-order-wrapper-checkbox',
            classError: 'basket__error-text',
            classLabel: 'basket__input-order-label'
        },
    },
    contact: {
        name: {
            input: 'input',
            id: 'contactName',
            type: 'text',
            placeholder: 'Twoje imię i nazwisko',
            validators: [VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(3)],
            errorText: 'Wprowadź poprawne dane.',
            class: 'pop-up-modal__input',
            inputWrapperClass: 'pop-up-modal__input-wrapper'
        },
        email: {
            input: 'input',
            id: 'contactEmail',
            type: 'email',
            name: 'email',
            placeholder: 'Twój adres email',
            validators: [VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()],
            errorText: 'Wprowadź poprawne dane.',
            class: 'pop-up-modal__input',
            inputWrapperClass: 'pop-up-modal__input-wrapper'
        },
        tel: {
            input: 'input',
            id: 'contactTel',
            type: 'number',
            name: 'tel',
            placeholder: 'Telefon ucznia',
            validators: [VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(6)],
            errorText: 'Wprowadź poprawne dane.',
            class: 'pop-up-modal__input',
            inputWrapperClass: 'pop-up-modal__input-wrapper'
        },
        textarea: {
            id: 'contactTextarea',
            name: 'textarea',
            placeholder: 'Tutaj możesz wpisać woje uwagi.',
            validators: [VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(1)],
            errorText: 'Wprowadź poprawne dane.',
            class: 'pop-up-modal__input',
            initialIsValid: false,
            inputWrapperClass: 'pop-up-modal__input-wrapper'
        },
    },
}