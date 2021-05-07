import $ from '../core';

$.prototype.addAttr = function(attributeName, attributeValue = '') {
    if (!attributeName) {
        return this;
    }
    for (let i = 0; i < this.length; i++) {
        this[i].setAttribute(attributeName, attributeValue);
    }

    return this;
}


$.prototype.getAttr = function(attributeName, attributeValue = '') {
    if (!attributeName) {
        return this;
    }
    for (let i = 0; i < this.length; i++) {
        return this[i].getAttribute(attributeName, attributeValue);
    }

    return this;
}