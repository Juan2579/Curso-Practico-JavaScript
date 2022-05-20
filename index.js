const burgerButton = document.querySelector('.button_burger')
const xButton = document.querySelector('.button_x')
const mobileNavigation = document.querySelector('.header_mobile-navigation')

function appearNavigation() {
    burgerButton.style.display = 'none'
    xButton.style.display = 'block'

    mobileNavigation.style.display = 'block'

}
function dissapearNavigation() {
    burgerButton.style.display = 'block'
    xButton.style.display = 'none'

    mobileNavigation.style.display = 'none'
}