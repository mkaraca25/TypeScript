"use strict";
exports.__esModule = true;
exports.SimpleDataSource = void 0;
var Product_1 = require("./Product");
var SimpleDataSource = /** @class */ (function () {
    function SimpleDataSource() {
        this.products = new Array(new Product_1.Product(1, "OPPO Reno 4", "Telefon", 7500), new Product_1.Product(2, "Samsumg S5", "Telefon", 8500), new Product_1.Product(3, "OPPO Reno 4", "Telefon", 9500), new Product_1.Product(4, "OPPO Reno 4", "Telefon", 40500));
    }
    SimpleDataSource.prototype.getProducts = function () {
        return this.products;
    };
    return SimpleDataSource;
}());
exports.SimpleDataSource = SimpleDataSource;
