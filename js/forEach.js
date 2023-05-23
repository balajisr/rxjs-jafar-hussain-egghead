import { stocksArr } from './stocksArr.js';

function getStockSymbols(stocks) {
    var symbols = [],
    counter,
    stock;

    for(counter = 0; counter < stocks.length; counter++) {
        stock = stocks[counter];
        symbols.push(stock.symbol);
    }

    return symbols;
}

console.log(getStockSymbols(stocksArr));

/********************** */

function getStockSymbolswithForEach(stocks) {
    var symbols = [];

    stocks.forEach((stock) => {
        symbols.push(stock.symbol);
    })

    return symbols;
}

console.log(getStockSymbolswithForEach(stocksArr));