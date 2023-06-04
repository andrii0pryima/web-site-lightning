import {users} from "./user_data.js";
import {config} from "./config.js";

function main_login(){
    let email = document.querySelector('#login-email')
    let password = document.querySelector('#login-password')
    let login = document.querySelector('#form-main')
    let danger = document.getElementsByTagName('p')

    login.addEventListener('submit', (e) => {
        e.preventDefault()
        validate_data(email.value, password.value)
    })

    function validate_data(email, pass){
        if (email.length >= 14 && email.includes('@gmail.com')){
            if (pass.length >= 12){
                users.forEach((user, userID) => {
                    if ((email === user.email) && (pass === user.pass)){
                        alert('Logged In!')
                        const thisUser = users[userID]
                        localStorage.setItem('user', JSON.stringify(thisUser))
                        window.location.href = window.location.href.replace('login.html', 'trade/index.html')
                    }
                    else {
                        danger[0].classList.remove('d-none')
                        danger[1].classList.remove('d-none')
                    }
                })
            }
            else {
                danger[1].classList.remove('d-none')
            }
        }
        else {
            danger[0].classList.remove('d-none')
        }
    }
}

main_login()

particlesJS('getting-started', config)
