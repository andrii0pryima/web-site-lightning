function trade(){

    const theme = {
        default: "",
        main: "#fec503",
        buy: "#74A700",
        sell: "#EA0070",
        buyNew: "#02C076",
        sellNew: "#02C076",
        border: "2px solid #F5F5F5",
        layout: "#191B20",
        layoutDay: "#FAFAFA",
        dark: "#000208",
        white: "#FFFFFF",
        input: "#474D57"
    }


    const body = document.querySelector('body')
    body.style.backgroundColor = theme.layout

    const settings = document.querySelector('#setting')
    const config = document.querySelector('.config')

    const dayMode = document.querySelector('.day')
    const nightMode = document.querySelector('.night')


    function toDayMode(){
        dayMode.classList.add('active')
        nightMode.classList.remove('active')
        const layout = document.querySelectorAll('.layout-main')
        layout.forEach((block) => {
            block.style.backgroundColor = theme.layoutDay
            block.style.border = theme.border
        })
        const whiteText = document.querySelectorAll('.layout-header')
        whiteText.forEach((text) => {
            text.style.color = theme.dark
        })
        document.querySelector('#place-order').style.backgroundColor = theme.white
        body.style.color = theme.dark;
        const faded = document.querySelectorAll('.faded')
        faded.forEach((block) => {
            block.classList.replace('faded', 'light')
        })
        const inputs = document.querySelectorAll('input')
        inputs.forEach((input) => {
            input.style.color = theme.input
        })

        replacer("left")
    }
    function toNightMode(){
        dayMode.classList.remove('active')
        nightMode.classList.add('active')
        const layout = document.querySelectorAll('.layout-main')
        layout.forEach((block) => {
            block.style.backgroundColor = theme.default
            block.style.border = theme.default
        })
        const whiteText = document.querySelectorAll('.layout-header')
        whiteText.forEach((text) => {
            text.style.color = theme.default
        })
        document.querySelector('#place-order').style.backgroundColor = ''
        body.style.color = theme.default
        const light = document.querySelectorAll('.light')
        light.forEach((block) => {
            block.classList.replace('light', 'faded')
        })
        const inputs = document.querySelectorAll('input')
        inputs.forEach((input) => {
            input.style.color = theme.default
        })

        replacer("right")
    }

    if (localStorage.getItem('mode') === "day"){
        toDayMode()
    }
    else if(localStorage.getItem('mode') === 'night'){
        toNightMode()
    }

    dayMode.addEventListener('click', (e) => {
        e.preventDefault()
        toDayMode()
        localStorage.setItem('mode', 'day')
    })

    nightMode.addEventListener('click', (e) => {
        e.preventDefault()
        toNightMode()
        localStorage.setItem("mode", "night")
    })

    settings.addEventListener('click', () => {
        document.querySelector('#setting-svg').classList.toggle('rotate')
        config.classList.toggle('d-none')
    })


    function renderDefaults(){
        if (localStorage.getItem('user')){
            let thisUser = JSON.parse(localStorage.getItem('user'))
            document.querySelector('#balance_btc').textContent = thisUser.balance.btc
            document.querySelector('#balance_usd').textContent = thisUser.balance.usd
            document.querySelector('.user-balance').textContent = thisUser.balance.btc
            placeOrder(thisUser)
        }
    }
    renderDefaults()


    function placeOrder(thisUser){
        let price = 19000
        const pGroups = document.querySelectorAll('.p-group')
        const pVisuals = document.querySelectorAll('.p-visual')
        const percents = [0.25, 0.50, 0.75, 1]
        pGroups.forEach((group, groupID) => {
            group.addEventListener('click', () => {
                pVisuals.forEach((visual) => {
                    visual.style.backgroundColor=''
                })
                for(let i = 0; i <= groupID; i++){
                    pVisuals[i].style.backgroundColor = theme.main
                }
                let percentage = thisUser.balance.usd * percents[groupID]
                let amount = percentage / price
                let total = price * amount
                document.querySelector('#price').value = price.toFixed(2)
                document.querySelector('#amount').value = amount.toFixed(8)
                document.querySelector('#total').value = total.toFixed(2)
            })
        })
    }

    const traditional = document.querySelector('.traditional')
    traditional.addEventListener('click', () => {
        const radio = traditional.querySelector('input[type="radio"]')
        if (radio.checked){
            document.querySelectorAll('.buy-bg').forEach( (b) => {
                b.style.backgroundColor = theme.buy
            })
            document.querySelectorAll('.buy-col').forEach( (c) => {
                c.style.color = theme.buy
            })
            document.querySelectorAll('.sell-bg').forEach( (b) => {
                b.style.backgroundColor = theme.sell
            })
            document.querySelectorAll('.sell-col').forEach( (c) => {
                c.style.color = theme.sell
            })
        }
    })

    const new_style = document.querySelector('.new')
    new_style.addEventListener('click', () => {
        const radio = new_style.querySelector('input[type="radio"]')
        if (radio.checked){
            document.querySelectorAll('.buy-bg').forEach( (b) => {
                b.style.backgroundColor = theme.buyNew
            })
            document.querySelectorAll('.buy-col').forEach( (c) => {
                c.style.color = theme.buyNew
            })
            document.querySelectorAll('.sell-bg').forEach( (b) => {
                b.style.backgroundColor = theme.sellNew
            })
            document.querySelectorAll('.sell-col').forEach( (c) => {
                c.style.color = theme.sellNew
            })
        }
    })

    const chat = document.querySelector('label[for="cb_chat"]')
    chat.addEventListener('click', () => {
        let x = document.querySelector('#chat')
        x.classList.toggle('d-none')
    })

    const configs = document.querySelectorAll('.configs')
    configs.forEach( (item) => {
        item.addEventListener('click', () => {
            let target = item.getAttribute('data-target')
            document.querySelector(target).classList.toggle('d-none')

            let root = document.querySelector('#root')
            let grid = getComputedStyle(root).gridTemplateAreas
            root.style.gridTemplateAreas = grid.replace('market', 'chart')

            const cbMarket = document.querySelector('#cb_market')
            const cbChart = document.querySelector('#cb_chart')
            const cbOrderBook = document.querySelector('#cb_order_book')
            const cbOpenOrders = document.querySelector('#cb_open_orders')

            // grid-template-areas:
            // "info info info orderform"
            // "market chart orderbook orderform"
            // "orders orders orders orderform";
        })

    })

    function replacer(position){
        if (position === "left"){
            document.querySelector('#toolbar').insertAdjacentElement('afterbegin', document.querySelector('#setting').parentElement)
        } else{
            document.querySelector('#toolbar').insertAdjacentElement('beforeend', document.querySelector('#setting').parentElement)
        }
    }

}

trade()
