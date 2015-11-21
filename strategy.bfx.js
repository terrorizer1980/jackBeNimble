var strategies = strategies || {};
var utils = utils || {};

strategies.bfx = {

  init: function(){
    utils.setLotSize(plugin.settings.LOTSIZE);
    utils.displayIncr(plugin.settings.INCR);
  },

  market_buy: function(){
    document.getElementById('buy_type').value = 'MARKET';
    utils.placeBuyOrder();
    document.getElementById('buy_type').value = 'LIMIT';
  },

  market_sell: function(){
    document.getElementById('sell_type').value = 'MARKET';
    utils.placeSellOrder();
    document.getElementById('sell_type').value = 'LIMIT';
  },

  cancel_all: function(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', encodeURI('/orders/cancel_all'));
    xhr.send();
  },

  /* return the lot size input element */
  getLotSizeInputElement: function(v){
    return document.getElementById('amount');
  },

  displayIncr: function(v){
    var homeDiv = document.querySelector('#trading-ticket-form > div:nth-child(5) > ul > li > div.collapsible-header');

    var target = document.getElementById('INCRVAL');
    if(!target){
      var span = document.createElement('span');
      span.id = 'INCRVAL';
      span.innerHTML = 'Increment: ' + v;
      homeDiv.appendChild(span);
    } else {
      target.innerHTML = 'Increment: ' + v;
    }
  },


  placeBuyOrder: function(){
    if(!DEBUG){
      utils.eventFire(document.getElementById('buy-button'), 'click');
    }
  },

  placeSellOrder: function(){
    if (!DEBUG){
      utils.eventFire(document.getElementById('sell-button'), 'click');
    }
  },

  setBuyPrice: function(p){
    document.getElementById('buy_price').value = p;
  },

  setSellPrice: function(p){
    document.getElementById('sell_price').value = p;
  },

  getBestBid: function(){
    var bestBid = document.querySelector('#bids > div > table > tbody > tr:nth-child(1) > td > div > div.col.price.col-currency');
    console.log(bestBid.innerHTML);
    return bestBid.innerHTML;
  },

  getBestOffer: function(){
    var bestAsk = document.querySelector('#asks > div > table > tbody > tr:nth-child(1) > td > div > div.col.col-currency.price');
    console.log(bestAsk.innerHTML);
    return bestAsk.innerHTML;
  }

};

