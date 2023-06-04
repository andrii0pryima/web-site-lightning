import {users} from "./user_data.js";
import {config} from "./config.js";

function main_signup(){
    const email = document.querySelector('#reg-email')
    const password = document.querySelector('#reg-password')
    const agreement = document.querySelector('#agreement-cb')
    const signUp = document.querySelector('#form-main')
    const danger = document.getElementsByTagName('p')
    const emailEx = /^[^\d\W](\w+\d+|\w+)@gmail\.com$/

/*
    Checking LocalStorage
*/
    if (localStorage.getItem('email')){
        email.value = localStorage.getItem('email')
        localStorage.removeItem('email')
    }


    signUp.addEventListener('submit', (e) => {
        e.preventDefault()
        validate_data(email.value, password.value, agreement.checked)
    })

    function validate_data(email, pass, checked){
        let registered = false
        users.forEach((user) => {
            if (email === user.email){
                registered = true
            }
        })
        if (checked){
            if (email.length >= 14 && email.match(emailEx)){
                if (pass.length >= 12){
                    console.log(!registered)
                    if (!registered){
                        const thisUser = {
                            email: email,
                            pass: pass,
                            balance: {
                                btc: 0.00000000,
                                usd: 0.00000000
                            }
                        }
                        users.push(thisUser)
                        console.log(users)
                        localStorage.setItem('user', JSON.stringify(thisUser))
                        alert('Registered!')
                        window.location.href = window.location.href.replace('signup.html', 'trade/index.html')
                    }
                    else {
                        alert('This email address is already being used!')
                    }
                }
                else {
                    danger[1].classList.remove('d-none')
                }
            }
            else {
                danger[0].classList.remove('d-none')
            }
        }
        else {
            danger[2].classList.remove('d-none')
        }
    }
}

main_signup()

particlesJS('getting-started', config)