// 表单校验 《JavaScript设计模式与开发实践》5.6

const registerForm = document.getElementById('registerForm');

// 多个策略
registerForm.onsubmit = function() {
    if (registerForm.username.value === '') {
        alert('用户名不能为空');
        return false;
    }
    if (registerForm.password.value.length < 6) {
        alert('密码长度不能少于6为');
        return false;
    }
    if(!/(^1[3|5|8][0-9]{9}$)/.test(registerForm.phoneNumber.value)) {
        alert('手机号码格式不正确');
        return false;
    }
}
