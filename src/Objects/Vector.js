"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Misc_1 = require("./Misc");
var Vector = /** @class */ (function () {
    function Vector(x, y) {
        this.x = x ? x : 0;
        this.y = y ? y : 0;
    }
    Vector.prototype.add = function (v) {
        return new Vector(this.x + v.x, this.y + v.y);
    };
    Vector.prototype.dec = function (v) {
        return new Vector(this.x - v.x, this.y - v.y);
    };
    Vector.prototype.mult = function (k) {
        return new Vector(this.x * k, this.y * k);
    };
    Vector.prototype.div = function (k) {
        return new Vector(this.x / k, this.y / k);
    };
    Vector.prototype.normalize = function () {
        return this.div(this.length());
    };
    Vector.prototype.length = function () {
        return Misc_1.pifagor(this.x, this.y);
    };
    return Vector;
}());
exports.Vector = Vector;
