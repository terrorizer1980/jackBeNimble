var interfaces = interfaces || {};
var plugin = plugin || {};

interfaces.bfx = {

  /**
   *              INIT
   *
   * set lot size and display offset
   */
  init: function(){
    plugin.setLotSize(plugin.settings.LOTSIZE);
    plugin.displayOffset(plugin.settings.OFFSET);
  },


  /*  MARKET BUY  */
  market_buy: function(){
    document.getElementById('buy_type').value = 'MARKET';
    plugin.placeBuyOrder();
    document.getElementById('buy_type').value = 'LIMIT';
  },


  /*  MARKET SELL */
  market_sell: function(){
    document.getElementById('sell_type').value = 'MARKET';
    plugin.placeSellOrder();
    document.getElementById('sell_type').value = 'LIMIT';
  },


  /*  CANCEL ALL ORDERS */
  cancel_all: function(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', encodeURI('/orders/cancel_all'));
    xhr.send();
  },

  /**
   * return the lot size input element
   */
  getLotSizeInputElement: function(){
    return document.getElementById('amount');
  },


  /**
   *     DISPLAY THE OFFSET VALUE ON THE PAGE
   *
   * @param {Number} v - the offset value to display
   */
  displayOffset: function(v){
    var homeDiv = document.querySelector('#trading-ticket-form > div:nth-child(5) > ul > li > div.collapsible-header');

    var target = document.getElementById('BFX_OFFSET_VALUE');
    if(!target){
      var span = document.createElement('span');
      span.id = 'BFX_OFFSET_VALUE';
      span.innerHTML = 'Offset: ' + v;
      homeDiv.appendChild(span);
    } else {
      target.innerHTML = 'Offset: ' + v;
    }
  },


  /**    PLACE A BUY ORDER   */
  placeBuyOrder: function(){
    if(!DEBUG){
      plugin.eventFire(document.getElementById('buy-button'), 'click');
    }
  },


  /**    PLACE A SELL ORDER   */
  placeSellOrder: function(){
    if (!DEBUG){
      plugin.eventFire(document.getElementById('sell-button'), 'click');
    }
  },


  /**
   *        SET THE BUY PRICE
   *
   * @param {Number} p - the price to set
   */
  setBuyPrice: function(p){
    document.getElementById('buy_price').value = p;
  },


  /**
   *        SET THE SELL PRICE
   *
   * @param {Number} p - the price to set
   */
  setSellPrice: function(p){
    document.getElementById('sell_price').value = p;
  },


  /**     GET BEST BID    */
  getBestBid: function(){
    var bestBid = document.querySelector('#bids > div > table > tbody > tr:nth-child(1) > td > div > div.col.price.col-currency');
    return bestBid.innerHTML;
  },


  /**     GET BEST OFFER  */
  getBestOffer: function(){
    var bestAsk = document.querySelector('#asks > div > table > tbody > tr:nth-child(1) > td > div > div.col.col-currency.price');
    return bestAsk.innerHTML;
  }

};
