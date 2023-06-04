import {pairBook} from "./data.js";
import {currencyData} from "./data.js";


const markets = document.querySelector('#search')
markets.addEventListener('input', () => {
    const pairs = document.querySelectorAll('.pair-name')
    let value = markets.value.toLowerCase()
    if (!value){
        pairs.forEach((pair) => {
            pair.parentElement.style.display = ""
        })
    }

    pairs.forEach((pair) => {
        if (!pair.textContent.toLowerCase().includes(value)){
            pair.parentElement.style.display = "none"
        }
    })
})


const change = document.querySelector('.change')
change.addEventListener('click', () => {
    change.classList.toggle('increase')
    if (change.classList.contains('increase')){
        pairBook.sort((prev, next) => {
            return prev.change - next.change
        })
    }
    else{
        pairBook.reverse()
    }
    removeThis(".pair-group")
    renderMarkets()
})


const lastPrice = document.querySelector('.last-price')
lastPrice.addEventListener('click', () => {
    lastPrice.classList.toggle('increase')
    if (lastPrice.classList.contains('increase')){
        pairBook.sort((prev, next) => {
            return prev.lastPrice - next.lastPrice
        })
    }
    else{
        pairBook.reverse()
    }
    removeThis(".pair-group")
    renderMarkets()
})


const pair = document.querySelector('.pair')
pair.addEventListener('click', () => {
    pair.classList.toggle('increase')
    if (pair.classList.contains('increase')){
        pairBook.sort((prev, next) => {
            return prev.pair.localeCompare(next.pair)
        })
    }
    else{
        pairBook.reverse()
    }
    removeThis(".pair-group")
    renderMarkets()
})

function removeThis(className){
    document.querySelectorAll(className).forEach((item) => {
        item.remove()
    })
}

function renderMarkets(){
    pairBook.forEach( (pair) => {
        let container = document.createElement('div')
        container.classList.add('pair-group', 'fz-12')

        let pairBlock = document.createElement('div')
        pairBlock.classList.add('pair-name')
        pairBlock.textContent = `${pair.pair}/${pair.with}`

        let lastPrice = document.createElement('div')
        lastPrice.classList.add('pair-price')
        lastPrice.textContent = pair.lastPrice

        let change = document.createElement('div')
        change.classList.add('pair-change')
        change.textContent = `${pair.change}%`

        if (pair.change >= 0){
            lastPrice.classList.add('buy-col')
            change.classList.add('buy-col')
        }
        else {
            lastPrice.classList.add('sell-col')
            change.classList.add('sell-col')
        }
        container.append(pairBlock, lastPrice, change)
        document.querySelector('.pair-container').appendChild(container)
        container.addEventListener('click', () => {
            const currency = pair.pair.toLowerCase()
            console.log(currencyData[currency])
            document.querySelector('.currency-name').textContent = currencyData[currency].name
            document.querySelector('.cap-val').textContent = currencyData[currency].marketCap
            document.querySelector('.c-s-val').textContent = currencyData[currency].circulatingSupply
            document.querySelector('.m-s-val').textContent = currencyData[currency].maxSupply
            document.querySelector('.t-s-val').textContent = currencyData[currency].totalSupply
            document.querySelector('.currency-icon').style.backgroundImage = `url("./../../ico/${currency}.png")`
            document.querySelector('.pair-name').textContent = `${pair.pair}/${pair.with}`
            document.querySelector('.info-price').textContent = pair.lastPrice
            document.querySelector('title').textContent = `Trade ${pair.pair} | ${pair.with}`
        })
    })
}
renderMarkets()

