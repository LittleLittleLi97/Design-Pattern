// 6.6 虚拟代理合并HTTP请求

// 收集一定时间内的HTTP请求，然后打包发送给服务器

function send(content) {
    console.log(f`发送${content}`);
}

function proxySend() {
    const cache = [];
    let timer;

    return function(content) {
        cache.push(content);
        if (timer) return;

        timer = setTimeout(()=>{
            send(cache.join(',')); // 合并HTTP请求(使用字符串拼接替代)，然后发送
            clearTimeout(timer);
            timer = null;
            cache.length = 0; // 清空数组
        }, 2000) // 假设收集2秒
    }
}
