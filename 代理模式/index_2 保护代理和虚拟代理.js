// 6.2 保护代理和虚拟代理
// 保护代理：把一些不合适的请求在代理处拒绝掉
// 虚拟代理：把一些开销很大的对象，延迟到真正需要的时候才去创建
// 上接index.js

// 如果new Flower是一个代价很大的操作，可以将new Flower交给代理B执行，延迟到需要的时候再new
var B = {
    receiveFlower: function() {
        A.listenGoodMood(function() {
            var flower = new Flower();
            A.receiveFlower(flower);
        })
    }
}