(function(){

    const nav = document.querySelector('.main_header_nav')
    const hidebutton = document.querySelector('.main_header_nav_hide_button')
    const showbutton = document.querySelector('.main_header_nav_show_button')

    showbutton.addEventListener('click', () => {

        nav.classList.add('show')

    })

    hidebutton.addEventListener('click', () => {

        nav.classList.remove('show')

    })

})()