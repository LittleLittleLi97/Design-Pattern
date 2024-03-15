// 《JavaScript设计模式与开发实践》6.1

class Flower {}

// 不使用代理模式，xiaoming直接给A送花
var xiaoming = {
    sendFlower: function(target) {
        var flower = new Flower();
        target.receiveFlower(flower);
    }
}

var A = {
    receiveFlower: function(flower) {
        console.log('收到花', flower);
    }
}

xiaoming.sendFlower(A);

// 代理模式，xiaoming通过B给A送花
var B = {
    receiveFlower: function(flower) {
        A.receiveFlower(flower);
    }
}

xiaoming.sendFlower(B);

// B可以在A心情好的时候将花送给A
var B = {
    receiveFlower: function(flower) {
        A.listenGoodMood(function() {
            A.receiveFlower(flower);
        })
    }
}

var A = {
    receiveFlower: function(flower) {
        console.log('收到花', flower);
    },
    listenGoodMood: function(fn) {
        setTimeout(function() {
            fn();
        }, 1000)
    }
}

xiaoming.sendFlower(B);