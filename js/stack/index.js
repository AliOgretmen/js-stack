'use strict'
/**
 * Add new item into the stack
 * @param  pItem, item to be added
 */
Array.prototype.add = function (pItem) {
    this.push(pItem);
};
Array.prototype.size = function (pItem) {
    return this.length;
};
/**
 * Remove the top of the stack from the stack
 */
Array.prototype.remove = function () {
    this.pop();
};
/**
 * Shos the item inthe top of the stack
 */
Array.prototype.peek = function () {
    return this[this.length - 1];
};
/**
 * Delelte all items from the stack
 */
Array.prototype.reset = function () {
    this.length = 0;
};
/**
 * Ask for the emptyness
 */
Array.prototype.isEmpty = function () {
    if (this.length > 0) {
        return false;
    }
        else {
            return true;
        }
};
/**
 * Creates a stack from a given array
 * stack.$stackOf([7,8,9,11]]) 
 */
Array.prototype.$stackOf = function (pArray) {
    this.reset();
    for (let i = 0; i < pArray.length; i++) {
        this.push(pArray[i]);
    }
    // for (let value of pArray){
    //this.add(value);
    //  };
};
/**
 * Creates a stack from a the given parameters
 * stack._stackOf(1,2,3,5)
 * Please do not change the function below!!!
 */
Array.prototype._stackOf = function (...items) {
        for (let value of items) {
            this.add(value);
        }
};