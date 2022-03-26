window.onload = function() {
    if(Kernal.isLogin()) {
        initUserInfo();
    }

    // 设置监听器，点击搜索按钮后，执行对应函数

    document.getElementById('search-btn').addEventListener('click', function() {
        search();
    });
    document.onkeydown = function (event) {undefined
        var e = event || window.event;
        if (e && e.keyCode == 13) { //回车键的键值为13
            search2(); //调用登录按钮的登录事件
        }
    };

    document.getElementById('top-right').addEventListener('click', function() {
        clickLogin();
    });
    // TODO: 在此为 top-right 元素设置监听器
    // document.getElementById('top-right') ...
}

function search() {
    // TODO: 搜索触发后的行为
    var a=document.getElementById('in').value;
    if(a==""){
        alert('请输入搜索内容');
    }else {
        alert(a);
    }
    console.log('');
}

function search2() {
    // TODO: 搜索触发后的行为
    var a=document.getElementById('in').value;
    if(a==""){
        alert('请输入搜索内容');
    }else {
        location.href="https://www.baidu.com/s?ie=utf-8&wd="+a;
    }
    console.log('');
}

function clickLogin() {
    if(!Kernal.isLogin()) {
        login();
    }
    else {
        logout();
    }
}

function initUserInfo() {
    // TODO: 修改页面显示错误的 bug，另外注意图片路径是否正确
    var username = Kernal.getUserName();
    var str=username.substring(0,78)+username.substring(123,);
    console.log(str);
    var content = '<div id="user">\
                        <span id="user-img">\
                            <img src="img/user.jpg" />\
                        </span>\
                        <span id="name">' + str + '</span>\
                    </div>';
    document.getElementById('top-right').innerHTML = content;
}

// ============================================================ 你不需要去关注的代码

function login() {
    Kernal.login();
    location.reload();
}

function logout() {
    Kernal.logout();
    location.reload();
}