## 一、介绍

响应式布局就是一个网站能够兼容多个终端，而不是为每个终端做一个特定的版本。这个概念是为解决移动互联网浏览而诞生的。

导航栏与轮播在大部分网站的头部占很高的比重，特别是导航栏，扮演着网站地图的角色。

在响应式布局中，要求导航栏能够根据终端屏幕大小显示不同的样式。

## 二、知识点

### 2.1 导航栏

官方解释：导航条是在您的应用或网站中作为导航页头的响应式基础组件。它们在移动设备上可以折叠（并且可开可关），且在视口（viewport）宽度增加时逐渐变为水平展开模式。

#### 2.1.1 基础导航栏

使用 Bootstrap 之前，习惯用 `<ul>` + `<li>` 来构造一个导航栏。

```
<!--代码部分-->
<style>
.navigation-past{
    list-style: none;
}
.navigation-past>li{
    float: left;
    padding: 8px;
}
.navigation-past>li>a{
    text-decoration: none;
    color: #000;
}
.active-past{
    background: #E7E7E7;
}
</style>
<ul class="navigation-past">
	   <!--选中-->
    <li class="active-past"><a href="#">Navigation First</a></li>
    <li><a href="#">Navigation Second</a></li>
    <li><a href="#">Navigation Third</a></li>
    <li><a href="#">Navigation Fourth</a></li>
    <li><a href="#">Navigation Fifth</a></li>
</ul>
```

效果图：

![](https://i.mazey.net/uploads/2022/01/820373134.jpg)

使用 Bootstrap 的话，便是在熟悉的这个构造上加上一些修饰即可。首先在 `<ul>` 外面套一层 `<div>`，并加上样式 `navbar navbar-default`；然后给里面的 `<ul>` 加上样式 `nav navbar-nav`；最后，给选中的部分加上样式 `active`。一个最基本的 Bootstrap 导航便完成了。

```
<!--代码部分-->
<div class="navbar navbar-default" role="navigation">
    <ul class="nav navbar-nav">
        <li class="active"><a href="#">Navigation First</a></li>
        <li><a href="#">Navigation Second</a></li>
        <li><a href="#">Navigation Third</a></li>
        <li><a href="#">Navigation Fourth</a></li>
        <li><a href="#">Navigation Fifth</a></li>
    </ul>
</div>
```

效果图：

![](https://i.mazey.net/uploads/2022/01/820373230.jpg)

这里在最外层加了一个 `role="navigation"` 的属性，这里是 HTML5 的标签属性，目的是让标签语义化，方便屏幕阅读器对其进行识别，同时也是为了方便特殊人群浏览。

#### 2.1.2 进阶的导航栏

在浏览一些官方网站时，首先映入眼帘的是左上角鲜明的公司 LOGO 和夸张的轮播 ，Bootstrap 在导航中预留了 LOGO 的位置。使用方法是在外层 `<div>` 里面加一个样式 `navbar-header` 的 `<div>`，这个 `<div>` 内再加一个样式 `navbar-brand` 的 `<a>` 元素。

```
<!--代码部分-->
<div class="navbar navbar-default" role="navigation">
			<div class="navbar-header">
						<a href="#" class="navbar-brand">LOGO</a>
			</div>
    <ul class="nav navbar-nav">
        <li class="active"><a href="#">Navigation First</a></li>
        <li><a href="#">Navigation Second</a></li>
        <li><a href="#">Navigation Third</a></li>
        <li><a href="#">Navigation Fourth</a></li>
        <li><a href="#">Navigation Fifth</a></li>
    </ul>
</div>
```

效果图：

![](https://i.mazey.net/uploads/2022/01/820373367.jpg)

有的时候一级导航是不够的，需要搭配二级导航展示更多的内容。使用方法：首先在需要加二级导航的 `<li>` 元素中添加样式 `dropdown`，`<a>` 元素中添加样式 `dropdown-toggle` 和属性 `data-toggle="dropdown"`；然后在 `<li>` 里面 `<a>` 下面在放一个 `<ul>` + `<li>` 组合，`<ul>` 标签添加样式 `dropdown-menu`。

```
<!--代码部分-->
<div class="navbar navbar-default" role="navigation">
			<div class="navbar-header">
						<a href="#" class="navbar-brand">LOGO</a>
			</div>
    <ul class="nav navbar-nav">
        <li class="active"><a href="#">Navigation First</a></li>
        <li><a href="#">Navigation Second</a></li>
        <li><a href="#">Navigation Third</a></li>
        <li><a href="#">Navigation Fourth</a></li>
        <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                Navigation Fifth
                <ul class="dropdown-menu">
                    <li><a href="#">Sub-Navigation First</a></li>
                    <li><a href="#">Sub-Navigation Second</a></li>
                    <li><a href="#">Sub-Navigation Third</a></li>
                </ul>
            </a>
        </li>
    </ul>
</div>
```

效果图：

![](https://i.mazey.net/uploads/2022/01/820373419.jpg)

这里又出现新的属性 `aria-haspopup="true" aria-expanded="false"`，同样的，这也是 HTML5 新加的属性，这里引用 Segmentfault 社区姜中秋的回答。

`aria-haspopup: true` 表示点击的时候会出现菜单或是浮动元素；`false` 表示没有 `pop-up` 效果。`aria-expanded:` 表示展开状态。默认为 `undefined`, 表示当前展开状态未知。其它可选值：`true` 表示元素是展开的；`false` 表示元素不是展开的。

平常所见到的下拉框一般都有一个向下的箭头符号 ▼，同样的，在 Bootstrap 中也支持这一效果，只不过需要引入她自带的字体库 Glyphicons 字体图标。

官方介绍：Bootstrap 包括 250 多个来自 Glyphicon Halflings 的字体图标。Glyphicons Halflings 一般是收费的，但是他们的作者允许 Bootstrap 免费使用。为了表示感谢，希望你在使用时尽量为Glyphicons添加一个 [友情链接](https://glyphicons.com/)。

使用方法：新建一个 `<span>` 元素，然后在里面加上样式 `glyphicon glyphicon-triangle-bottom`。

Glyphicons 字体图标使用示例：

```
<!--代码部分-->
<li class="dropdown">
    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
        Navigation Fifth <span class="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span>
        <ul class="dropdown-menu">
            <li><a href="#">Sub-Navigation First</a></li>
            <li><a href="#">Sub-Navigation Second</a></li>
            <li><a href="#">Sub-Navigation Third</a></li>
        </ul>
    </a>
</li>
```

效果图：

![](https://i.mazey.net/uploads/2022/01/822103107.jpg)

注意：

* Glyphicons 字体图标和文本之间添加一个空格，不然会影响样式（`padding`）的正确显示。
* 服务器需要正确添加相应的 MIME 类型，否则加载字体会报 404 错误。

另外这里的箭头也可以使用 Bootstrap 自带的样式 `caret` 来实现，这里的箭头是用 CSS 实现了，使用方法：`<span class="caret"></span>`。

#### 2.1.3 响应式导航栏

在手机端浏览网站的时候常看到几个横线（≡）组成的导航向导，Bootstrap 作为一个移动设备优先也是支持这样的需求的，响应式导航的使用的方法比较固定，首先在导航标题 `<div class="navbar-header">` 内加上一段固定写法的代码；然后在需要在小屏时折叠的 `<ul>` 元素外包一层样式 `collapse navbar-collapse` 的 `<div>` 元素，并给这个元素加上任意名称的 ID，例如：`id="navigation-collapse"`；最后在响应式按钮 `<button>` 元素上加上 `data-target` 属性指向要折叠的内容 `id`，例如：`data-target="#navigation-collapse"`。

```
<!--代码部分-->
<div class="navbar navbar-default" role="navigation">
    <div class="navbar-header">
						<!--以下为固定写法，用到的时候复制粘贴即可-->
        <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#navigation-collapse">
          <span class="sr-only">Toggle Navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a href="#" class="navbar-brand">LOGO</a>
    </div>
    <div class="collapse navbar-collapse" id="navigation-collapse">
        <ul class="nav navbar-nav">
            <li class="active"><a href="#">Navigation First</a></li>
            <li><a href="#">Navigation Second</a></li>
            <li><a href="#">Navigation Third</a></li>
            <li><a href="#">Navigation Fourth</a></li>
            <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                    Navigation Fifth <span class="caret"></span>
                    <ul class="dropdown-menu">
                        <li><a href="#">Sub-Navigation First</a></li>
                        <li><a href="#">Sub-Navigation Second</a></li>
                        <li><a href="#">Sub-Navigation Third</a></li>
                    </ul>
                </a>
            </li>
        </ul>
    </div>
</div>
```

效果图：

![](https://i.mazey.net/uploads/2022/01/822103401.jpg)

### 2.2 轮播

图片轮播是网站的重要组成部分之一，常用来放活动广告或企业宣传图，有时也叫做“幻灯片”，Bootstrap 中的轮播效果是由 JavaScript 插件 Carousel 来实现的。

#### 2.2.1 基础轮播

轮播的使用方法也是相对固定的，特殊场景按需求修改即可。需要注意的是需要给最外层 `<div>` 元素加上一个 `id`，并在小圆点出指向这个 `id`。

```
<!--代码部分-->
<div id="my-banner" class="carousel">
    <!--放置小圆点，点击可以切换轮播-->
    <ol class="carousel-indicators">
        <!--加上样式active表示默认显示的轮播，data-slide-to="0"属性表示显示轮播的顺序-->
        <li data-target="#my-banner" data-slide-to="0" class="active"></li>
        <li data-target="#my-banner" data-slide-to="1"></li>
    </ol>
    <!--这里放置轮播显示的图片-->
    <div class="carousel-inner">
        <!--加上样式active表示默认显示的图片-->
        <div class="item active">
            <img src="//i.mazey.net/x/www/img/upload/image/20170712/b1.jpg" alt="轮播">
        </div>
        <div class="item">
            <img src="//i.mazey.net/x/www/img/upload/image/20170712/b2.jpg" alt="轮播">
        </div>
    </div>
</div>
```

效果图：

![](https://i.mazey.net/uploads/2022/01/230726-1024x398-1.jpg)

#### 2.2.2 进阶的轮播

一个完整的轮播应具有自动播放、点击切换、悬浮停止、外加说明文字功能，别担心，这些 Bootstrap 通通都有！

##### 2.2.2.1 自动播发

最外层 `<div>` 元素添加属性 `data-ride="carousel"` 和样式 `slide`（使轮播播放更平滑），如：`<div id="my-banner" class="carousel slide" data-ride="carousel">`。此时轮播的自动播放时间为 5 秒（默认），如想改变此值设置属性 `data-interval="你想要的值"`，如我想要 3 秒（3000 ms）轮播一次则设置 `data-interval="3000"`。另外轮播是默认悬浮停止播放的（`data-pause="hover"`），如想禁止悬浮播放设置属性 `data-pause="false"` 即可。

##### 2.2.2.2 添加文字

在轮播图片 `<img>` 元素下面添加样式 `carousel-caption` 的 `<div>`，里面存放文字便可正确显示在轮播上面。

```
<!--代码部分-->
<div class="carousel-caption">
    <h5>夜里总是下雨</h5>
</div>
```

##### 2.2.2.3 点击切换

在轮播图片下面放置两个 `<a>` 元素，`href` 指向轮播 `id`，添加属性 `data-slide="prev/next 向前/向后"`。

```
<!--代码部分-->
<!--<a>元素的href指向轮播id-->
<a class="left carousel-control" href="#my-banner" data-slide="prev" role="button">
    <span class="glyphicon glyphicon-chevron-left"></span>
</a>
<a class="right carousel-control" href="#my-banner"  data-slide="next" role="button">
    <span class="glyphicon glyphicon-chevron-right"></span>
</a>
```

轮播代码示例：

```
<!--代码部分-->
<div id="my-banner" class="carousel slide" data-ride="carousel" data-interval="3000" data-pause="false">
    <!--放置小圆点，点击可以切换轮播-->
    <ol class="carousel-indicators">
        <!--加上样式active表示默认显示的轮播，data-slide-to="0"属性表示显示轮播的顺序-->
        <li data-target="#my-banner" data-slide-to="0" class="active"></li>
        <li data-target="#my-banner" data-slide-to="1"></li>
    </ol>
    <!--这里放置轮播显示的图片-->
    <div class="carousel-inner">
        <!--加上样式active表示默认显示的图片-->
        <div class="item active">
            <img src="//i.mazey.net/x/www/img/upload/image/20170712/b1.jpg" alt="轮播">
            <div class="carousel-caption">
                <h5>夜里总是下雨</h5>
            </div>
        </div>
        <div class="item">
            <img src="//i.mazey.net/x/www/img/upload/image/20170712/b2.jpg" alt="轮播">
            <div class="carousel-caption">
                <h5>后除提醒君の世界</h5>
            </div>
        </div>
    </div>
    <!--<a>元素的href指向轮播id-->
    <a class="left carousel-control" href="#my-banner" data-slide="prev" role="button">
        <span class="glyphicon glyphicon-chevron-left"></span>
    </a>
    <a class="right carousel-control" href="#my-banner"  data-slide="next" role="button">
        <span class="glyphicon glyphicon-chevron-right"></span>
    </a>
</div>
```

效果图：

![](https://i.mazey.net/uploads/2022/01/230452-1024x400-1.jpg)

## 三、实战

试着组合栅格系统 + 导航栏 + 轮播布局一个响应式页面。

电脑端效果图：

![](https://i.mazey.net/uploads/2022/01/231151-1024x586-1.jpg)

移动端效果图：

![](https://i.mazey.net/uploads/2022/01/231419-370x594-1.jpg)

其实实现这样一个效果很简单，首先看一下栅格参数如何在多种屏幕设备上工作的。

![](https://i.mazey.net/uploads/2022/01/823912301.jpg)

在新闻和资讯的盒子上同时加上样式 `col-xs-*`，`col-sm-*` 和 `col-md-*`，小屏时（屏幕宽度 ＜ 992px）`col-xs-*`，`col-sm-*` 生效，`col-md-*` 失效；大屏时（屏幕宽度 ≥ 992px）`col-md-*` 生效，`col-xs-*`，`col-sm-*` 失效。例如：`<div class="col-xs-12 col-sm-12 col-md-6">新闻</div><div class="col-xs-12 col-sm-12 col-md-6">资讯</div>`。

演示地址：[https://i.mazey.net/bootstrap-blueprints/lesson-second-navigation/index.html](https://i.mazey.net/bootstrap-blueprints/lesson-second-navigation/index.html)，源码地址：[https://github.com/mazeyqian/bootstrap-blueprints/tree/master/lesson-second-navigation](https://github.com/mazeyqian/bootstrap-blueprints/tree/master/lesson-second-navigation)。

**版权声明**

本博客所有的原创文章，作者皆保留版权。转载必须包含本声明，保持本文完整，并以超链接形式注明作者[后除](https://blog.mazey.net/author/mazey)和本文原始地址：[https://blog.mazey.net/2575.html](https://blog.mazey.net/2575.html)

（完）