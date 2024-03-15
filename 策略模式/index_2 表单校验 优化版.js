// 表单校验 优化版

const registerForm = document.getElementById('registerForm');

// 定义策略
const strategies = {
    isNonEmpty: function(value, errorMsg) {
        if (value === '') return errorMsg;
    },
    minLength: function(value, length, errorMsg) {
        if (value.length < length) return errorMsg;
    },
    isMobile: function(value, errorMsg) {
        if (!/(^1[3|5|8][0-9]{9}$)/.test(value)) return errorMsg;
    }
}

// 验证器
class Validator {
    constructor() {
        this.cache = []; // 存储校验函数
    }
    add(dom, rule, errorMsg) {
        var arr = rule.split(':') // 如把'minLength:6'分成[ 'minLength', '6' ]
        this.cache.push(function() { // push函数，在start中遍历执行
            var strategy = arr.shift(); // 策略的字符串key
            arr.unshift(dom.value);
            arr.push(errorMsg); // 构建[ value, length?, errorMsg ]参数数组
            return strategies[strategy].apply(dom, arr);
        })
    }
    start() {
        for (var i = 0, validatorFunc; validatorFunc = this.cache[i++];) {
            console.log(validatorFunc)
            var msg = validatorFunc();
            if (msg) return msg;
        }
    }
}

function validationFunc() {
    var validator = new Validator();
    
    validator.add(registerForm.username, 'isNonEmpty', '用户名不能为空');
    validator.add(registerForm.password, 'minLength:6', '密码长度不能少于6位');
    validator.add(registerForm.phoneNumber, 'isMobile', '手机号码格式不正确');

    var errorMsg = validator.start();
    return errorMsg;
}

registerForm.onsubmit = function() {
    var errorMsg = validationFunc();
    if (errorMsg) {
        alert(errorMsg);
        return false;
    }
}