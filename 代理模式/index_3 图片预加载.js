// 6.3 图片预加载
// 先给节点设置loading图片，待图片加载完成后，替换图片
// 为了查看方便，简略修改了原始代码

// 普通方式
var MyImage = (function() {
    // 节点初始化
    var imgNode = document.createElement('img');
    document.body.append(imgNode);
    
    return {
        setSrc: function(src) {
            imgNode.src = 'loading.img'; // 设置loading图片

            var img = new Image; // 声明Image对象，用于加载src图片
            img.src = src;
            img.onload = function() { // 图片加载完成后执行
                imgNode.src = img.src;
            }
        }
    }
})();

MyImage.setSrc('url');

// 代理模式
// 将设置图片和加载图片的职责解藕
var myImage = (function() { // 仅用于设置图片
    var imgNode = document.createElement('img');
    document.body.append(imgNode);

    return {
        setSrc: function(src) {
            imgNode.src = src;
        }
    }
})()

var proxyImage = (function() { // 添加了新的行为，不影响设置图片的行为
    
    return {
        setSrc: function(src) {
            myImage.setSrc('loading.img');

            var img = new Image;
            img.src = src;
            img.onload = function() {
                myImage.setSrc(this.src);
            }
        }
    }
})()

proxyImage.setSrc('url');