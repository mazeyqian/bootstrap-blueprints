const ICON_SUCCESS = 'glyphicon-ok';
const ICON_ERROR = 'glyphicon-remove';
const ICON_FEED_SUCCESS = 'has-success';
const ICON_FEED_ERROR = 'has-error';

//正则验证
function checkByReg(str, reg){
    let regExp = new RegExp(reg);
    if(regExp.test(str)){
        return true;
    }else{
        return false;
    }
}

//验证目标
function checkThis(domEle,reg){
    let thisVal = $(domEle).val();
    if(checkByReg(thisVal, reg)){
        changeToSuccess(domEle);
        return true;
    }else{
        changeToError(domEle);
        return false;
    }
}

//显示正确
function changeToSuccess(domEle){
    $(domEle).next().removeClass(ICON_ERROR);
    $(domEle).next().addClass(ICON_SUCCESS);
    $(domEle).next().parent().removeClass(ICON_FEED_ERROR);
    $(domEle).next().parent().addClass(ICON_FEED_SUCCESS);
}

//显示错误
function changeToError(domEle){
    $(domEle).next().removeClass(ICON_SUCCESS);
    $(domEle).next().addClass(ICON_ERROR);
    $(domEle).next().parent().removeClass(ICON_FEED_SUCCESS);
    $(domEle).next().parent().addClass(ICON_FEED_ERROR);
}

//添加事件监听
//帐号
document.getElementsByName('username')[0].addEventListener('blur', function(){
    checkThis(this,'^[0-9a-zA-Z_]{2,20}$');
});
document.getElementsByName('username')[1].addEventListener('blur', function(){
    checkThis(this,'^[0-9a-zA-Z_]{2,20}$');
});
//密码
document.getElementsByName('password')[0].addEventListener('blur', function(){
    checkThis(this,'^[0-9a-zA-Z_]{6,20}$');
});
document.getElementsByName('password')[1].addEventListener('blur', function(){
    checkThis(this,'^[0-9a-zA-Z_]{6,20}$');
});
//邮箱
document.getElementsByName('email')[0].addEventListener('blur', function(){
    checkThis(this,'^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$');
});