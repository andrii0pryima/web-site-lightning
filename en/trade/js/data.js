export const buyOrders = []
export const sellOrders = []
export const currencyData = {
    btc:{
        name: "Bitcoin",
        marketCap: "$354 371 495 319",
        circulatingSupply: "18 559 987",
        maxSupply: "21 000 000",
        totalSupply: "18 559 987"
    },
    eth:{
        name: "Ethereum",
        marketCap: "$68 322 099 967",
        circulatingSupply: "113 664 935",
        maxSupply: "21 000 000+",
        totalSupply: "113 664 935"
    },
    dash:{
        name: "Dash",
        marketCap: "$1 034 543 504",
        circulatingSupply: "9 846 430",
        maxSupply: "18 900 000",
        totalSupply: "9 846 430"
    },
    xmr:{
        name: "Monero",
        marketCap: "$2 289 051 956",
        circulatingSupply: "17 774 256",
        maxSupply: "21,000,000+",
        totalSupply: "17 774 256"
    },
    zec:{
        name: "Zcash",
        marketCap: "$806 571 225",
        circulatingSupply: "10 599 506",
        maxSupply: "21 000 000",
        totalSupply: "10 599 506"
    },
    ltc:{
        name: "Litecoin",
        marketCap: "$5 898 354 281",
        circulatingSupply: "65 996 764",
        maxSupply: "84 000 000",
        totalSupply: "65 996 764"
    },
    iota:{
        name: "IOTA",
        marketCap: "$935 148 929",
        circulatingSupply: "2 779 530 283",
        maxSupply: "2 779 530 283",
        totalSupply: "2 779 530 283"
    }
}

export const pairBook = [
    {
        pair: "BTC",
        with: "USD",
        lastPrice: 1903.03,
        change: 7.1
    },
    {
        pair: "ETH",
        with: "USD",
        lastPrice: 500.01,
        change: 5.25
    },
    {
        pair: "DASH",
        with: "USD",
        lastPrice: 108.27,
        change: -0.31
    },
    {
        pair: "XMR",
        with: "USD",
        lastPrice: 123.92,
        change: 1.72
    },
    {
        pair: "ZEC",
        with: "USD",
        lastPrice: 74.45,
        change: -1.49
    },
    {
        pair: "LTC",
        with: "USD",
        lastPrice: 78.45,
        change: 6.22
    },
    {
        pair: "IOTA",
        with: "USD",
        lastPrice: 0.342192,
        change: -0.93
    }
]


function getData(price=19002, amount=0.227000){
    return  {
        price: price.toFixed(2),
        amount: amount.toFixed(6),
        total: (price * amount).toFixed(2)
    }
}

(function generateOrders(count=10){
    for (let i = 0; i < count; i++){
        buyOrders.push(
            getData(19003 - Math.random(), 0.227000 + Math.random())
        )
        sellOrders.push(
            getData(19003 + Math.random(), 0.227000 + Math.random())
        )
    }
})(13)

