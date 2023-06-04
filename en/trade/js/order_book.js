import {buyOrders} from "./data.js";
import {sellOrders} from "./data.js";

function renderOrders(){
    buyOrders.sort((prev, next) => {
        return prev.price - next.price
    }).reverse()

    buyOrders.forEach( (order) => {
        let buyContainer = document.createElement('div')
        buyContainer.classList.add('buy-order')
        let orderPrice = document.createElement('div')
        orderPrice.classList.add('order-price', 'buy-col')
        let orderAmount = document.createElement('div')
        orderAmount.classList.add('order-amount')
        let orderTotal = document.createElement('div')
        orderTotal.classList.add('order-total')

        orderPrice.textContent = order.price
        orderAmount.textContent = order.amount
        orderTotal.textContent = order.total

        buyContainer.append(orderPrice, orderAmount, orderTotal)
        document.querySelector('.buy-orders').appendChild(buyContainer)
    })

    sellOrders.sort((prev, next) => {
        return prev.price - next.price
    }).reverse()

    sellOrders.forEach( (order) => {
        let sellContainer = document.createElement('div')
        let SorderPrice = document.createElement('div')
        SorderPrice.classList.add('order-price', 'sell-col')
        let SorderAmount = document.createElement('div')
        SorderAmount.classList.add('order-amount')
        let SorderTotal = document.createElement('div')
        SorderTotal.classList.add('order-total')
        sellContainer.classList.add('sell-order')

        SorderPrice.textContent = order.price
        SorderAmount.textContent = order.amount
        SorderTotal.textContent = order.total

        sellContainer.append(SorderPrice, SorderAmount, SorderTotal)
        document.querySelector('.sell-orders').appendChild(sellContainer)
    })

}


renderOrders()
