var i = 0; // number of products;

/**
 * Class of the product.
 * 
 * @param id : identificator of the product.
 * @param name : name of the product. 
 * @param type : type of the product.
 * @param price : price of the product. 
 * @param releaseDate : release date of the product.
 */
function product(id, name, type, price, releaseDate) {
    this.id - id;
    this.name = name;
    this.price = price;
    this.releaseDate = releaseDate;
    i++;
};

/**
 * Class food product that may return shelf live of the product.
 * 
 * @param id : identificator of the product.
 * @param name : name of the product. 
 * @param type : type of the product.
 * @param price : price of the product. 
 * @param releaseDate : release date of the product.
 */
function foodProduct (id, name, type, price, validUntil) {
    this.constructor(id, name, type, price);
    this.validUntil = validUntil;
    Object.defineProperty(this, 'shelfLive', {
        get: function() {
          return (releaseDate - validUntil)/36000000/24;
        }
      });
};

foodProduct.prototype = Object.create(product.prototype);

/**
 * 
 * @param name : name of the product. 
 * @param address : address of the market.
 * @param products : array of products in the market.
 * @param extraCharge : extra charge of products.
 * @param income : income from products sold.
 */
function market(name, address, products, extraCharge, income) {
    this.name = name;
    this.address = address;
    this.products = products;
    this.income = income;
    Object.defineProperty(this, 'allProductSum', {
        get: function() {
          var sum = 0;  
            for(i = 0; i < products.length; i++) {
                sum += products[i].price;
            }
          return sum;
        }
      });
};


market.prototype = {
    addProduct: function(t, n) {  // add "n" products "t" to the market.
        for (i = 0; i < n; i++) {
            products.push(t);
        }
    },

    deleteProducts: function(t, n) { // delete "n" products "t" from the market.
        for (i = 0; i < n; i++) {
            var index = this.products.indexOf(t);
            if(index != -1) {
                this.products.slice(index,1);
            }            
        }
    },

    sellProducts: function(t, n) { // sell "n" products "t" from the market.
        this.income = t.price * n;
        this.deleteProducts(t,n);
    },
    
    marketInfo: function() { // get information about market.
        if("name" in this) {
            console.log("Market name: " + this.name);
        }
        if("address" in this) {
            console.log("Market address: " + this.address);
        }
        if("products" in this) {
            console.log("Market products: " + this.products);
        }
        if("income" in this) {
            console.log("Market income: " + this.income);
        }
    }
};





