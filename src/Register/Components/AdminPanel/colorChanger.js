export const colorChanger = (infoType) => {

    const activeButton = document.querySelector('.admin-header__button--active');
    if (activeButton) {
        activeButton.classList.remove('admin-header__button--active');
    }

    document.querySelector(`.admin-header__button#${infoType}`).classList.add('admin-header__button--active');

    const border = document.querySelector('.admin-main');
    const buttonColor = document.querySelector('.admin-header__button--active').style;

    switch (infoType) {
        case 'students':
            return (border.style.borderColor = '#df0e99', buttonColor.setProperty('--button-color', '#df0e99'));
        case 'groups':
            return (border.style.borderColor = 'orange', buttonColor.setProperty('--button-color', 'orange'));
        case 'partners':
            return (border.style.borderColor = 'green', buttonColor.setProperty('--button-color', 'green'));
        case 'teachers':
            return (border.style.borderColor = 'blue', buttonColor.setProperty('--button-color', 'blue'));
        default: return document.querySelector('.admin-main').style.borderColor = '#df0e99';
    }
}