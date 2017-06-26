window.onload = function(){
    //页面加载完之后再加载瀑布流，这里引用col-md-4是因为在盒子里包裹图片没有其他作用，如果不想冲突也可以创建其他Class
    loadWaterfall('container','col-md-4');
}

//加载瀑布流函数
function loadWaterfall(boxID,thumbnailClass){
    //获取装缩略图外部的盒子
    var box = document.getElementById(boxID);
    //获取装缩略图的数组
    var thumbnail = box.getElementsByClassName(thumbnailClass);
    //获取每个缩略图的宽度
    var thumbnailWidth = thumbnail[0].offsetWidth;
    //计算盒子内每行可以排列几个缩略图
    var colCount = Math.floor((document.documentElement.clientWidth*(10/12))/thumbnailWidth);
    //创建放每次整理好的高度数组
    var thumbnailHeightArr = [];
    for(var i = 0; i < thumbnail.length; i++){
        //获取第一行高度数组
        if(i < colCount){
            thumbnailHeightArr.push(thumbnail[i].offsetHeight);
        }else{
            //获取之前最小高度
            var minHeight = Math.min.apply(null,thumbnailHeightArr);
            //第一行最小高度索引
            var minIndex = thumbnailHeightArr.indexOf(minHeight);
            //将此缩略图放在上面那行最小高度下面
            thumbnail[i].style.position = 'absolute';
            //距离顶部长度为这个缩略图上面那个缩略图的长度
            thumbnail[i].style.top = minHeight + 'px';
            //距离左边长度为这个缩略图上面那个缩略图距离左边的长度
            thumbnail[i].style.left = thumbnail[minIndex].offsetLeft + 'px';
            //更新最小高度
            thumbnailHeightArr[minIndex] = thumbnailHeightArr[minIndex] + thumbnail[i].offsetHeight;
        }
    }
}

