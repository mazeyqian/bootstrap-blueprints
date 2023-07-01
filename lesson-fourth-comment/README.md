## 一、介绍

社交媒体网站盛行，人们常常会使用评论表达自己的观点，评论功能已然成为网站的一部分。

## 二、知识点

### 2.1 媒体对象

官方解释：这是一个抽象的样式，用以构建不同类型的组件，这些组件都具有在文本内容的左或右侧对齐的图片（就像博客评论或 Twitter 消息等）。

#### 2.1.1 基础媒体对象

一个基础的媒体对象由四个部分组成：

1. 媒体容器：用样式为 `media` 包裹在最外层。
2. 媒体对象：常常是用户的头像或者昵称，样式 `media-object`。
3. 媒体主体：包裹媒体的文本内容部分，样式 `media-body`。
4. 媒体标题：媒体文本内容的标题，样式 `media-heading`。

```
<!--代码部分-->
<div class="media">
    <div class="media-left">
        <a href="#">
            <img src="img/header-animal-1.jpg" class="media-object">
        </a>
    </div>
    <div class="media-body">
        <h4 class="media-heading">我是标题</h4>
        <p>我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容。</p>
    </div>
</div>
        </div>
    </div>
</div>
```

效果图：

![](https://i.mazey.net/uploads/2022/01/831670743.jpg)

样式 `media-left` 和 `media-right` 用来控制对象（头像）放置的左右，若要将对象（头像）放在右边需要把 `media-right` 放在 `media-body` 下面。

```
<!--代码部分-->
<div class="media">
    <div class="media-body">
        <h4 class="media-heading">我是标题</h4>
        <p>我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容。</p>
    </div>
    <div class="media-right">
        <a href="#">
            <img src="img/header-animal-1.jpg" class="media-object">
        </a>
    </div>
</div>
```

效果图：

![](https://i.mazey.net/uploads/2022/01/831671559.jpg)

当然要是不想放在下面也是有可行办法的，用 `pull-left` 和 `pull-right` 代替 `media-left` 和 `media-right` 即可。

```
<!--代码部分-->
<div class="media">
    <div class="pull-left">
        <a href="#">
            <img src="img/header-animal-1.jpg" class="media-object">
        </a>
    </div>
    <div class="media-body">
        <h4 class="media-heading">我是标题 - 左边</h4>
        <p>我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容。</p>
    </div>
</div>
<div class="media">
    <div class="pull-right">
        <a href="#">
            <img src="img/header-animal-1.jpg" class="media-object">
        </a>
    </div>
    <div class="media-body">
        <h4 class="media-heading">我是标题 - 右边</h4>
        <p>我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容。</p>
    </div>
</div>
```
效果图：

![](https://i.mazey.net/uploads/2022/01/831671938.jpg)

**注意：官方从 v3.3.0 版本开始就不再建议使用了 `.pull-left` 和 `.pull-right` 了。**

#### 2.1.2 多层媒体对象

在使用微博等社交网站时，常常要在别人的评论下面回复别人的评论，这就需要用到媒体对象的嵌套。

使用方法是将整个 `media` 容器嵌套在上级的内部容器 `media-body` 内。

```
<!--代码部分-->
<div class="media">
    <div class="media-left">
        <a href="#">
            <img src="img/header-animal-1.jpg" class="media-object">
        </a>
    </div>
    <div class="media-body">
        <h4 class="media-heading">我是标题 - 一级</h4>
        <p>我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容。</p>
        <div class="media">
            <div class="media-left">
                <a href="#">
                    <img src="img/header-girl-3.jpg" class="media-object">
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading">我是标题 - 二级</h4>
                <p>我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容。</p>
                <div class="media">
                    <div class="media-left">
                        <a href="#">
                            <img src="img/header-girl-2.jpg" class="media-object">
                        </a>
                    </div>
                    <div class="media-body">
                        <h4 class="media-heading">我是标题 - 三级</h4>
                        <p>我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容。</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
```

效果图：

![为了展示效果给图片加了50px的宽度。](https://i.mazey.net/uploads/2022/01/831672604.jpg)

虽说 Bootstrap 没有嵌套层数的限制，甚至可以这样无限嵌套。

![](https://i.mazey.net/uploads/2022/01/831673281.jpg)

但一般来说不论是美感还是条理上来看，两层就已经足够了。

#### 2.1.3 媒体对象的对齐

媒体对象（头像）默认的对齐方式是顶部对齐，我们可以通过修改样式来改变对齐方式。使用方法：添加 `media-middle` 或 `media-bottom` 使其中部或底部对齐。

```
<!--代码部分-->
<div class="media">
    <div class="media-left">
        <a href="#">
            <img src="img/header-animal-1.jpg" class="media-object">
        </a>
    </div>
    <div class="media-body">
        <h4 class="media-heading">我是标题 - 顶部对齐</h4>
        <p>我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容。我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容。我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容。我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容。</p>
    </div>
</div>
<div class="media">
    <div class="media-left media-middle">
        <a href="#">
            <img src="img/header-animal-1.jpg" class="media-object">
        </a>
    </div>
    <div class="media-body">
        <h4 class="media-heading">我是标题 - 中部对齐</h4>
        <p>我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容。我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容。我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容。我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容。</p>
    </div>
</div>
<div class="media">
    <div class="media-left media-bottom">
        <a href="#">
            <img src="img/header-animal-1.jpg" class="media-object">
        </a>
    </div>
    <div class="media-body">
        <h4 class="media-heading">我是标题 - 底部对齐</h4>
        <p>我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容。我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容。我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容。我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容。</p>
    </div>
</div>
```

效果图：

![](https://i.mazey.net/uploads/2022/01/831674055.jpg)

#### 2.1.4 媒体对象列表

评论往往是一排评论，即评论列表，这时候就要用到熟悉的 `<ul>` + `<li>` 组合了。使用方法：最外层用元素 `<ul>` 加样式 `media-list` 包裹起来，内部每个评论使用元素 `<li>` 加样式 `media`。

只有一层的列表：

```
<!--代码部分-->
<ul class="media-list">
    <li class="media">
        <div class="media-left">
            <a href="#">
                <img src="img/header-animal-1.jpg" class="media-object">
            </a>
        </div>
        <div class="media-body">
            <h4 class="media-heading">我是标题</h4>
            <p>我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容。</p>
        </div>
    </li>
    <li class="media">
        <div class="media-left">
            <a href="#">
                <img src="img/header-animal-1.jpg" class="media-object">
            </a>
        </div>
        <div class="media-body">
            <h4 class="media-heading">我是标题</h4>
            <p>我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容。</p>
        </div>
    </li>
    <li class="media">
        <div class="media-left">
            <a href="#">
                <img src="img/header-animal-1.jpg" class="media-object">
            </a>
        </div>
        <div class="media-body">
            <h4 class="media-heading">我是标题</h4>
            <p>我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容。</p>
        </div>
    </li>
</ul>
```

效果图：

![](https://i.mazey.net/uploads/2022/01/831674270.jpg)

两层嵌套的列表：

```
<!--代码部分-->
<ul class="media-list">
    <li class="media">
        <div class="media-left">
            <a href="#">
                <img src="img/header-animal-1.jpg" class="media-object">
            </a>
        </div>
        <div class="media-body">
            <h4 class="media-heading">我是标题 - 一级</h4>
            <p>我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容。</p>
            <ul class="media-list">
                <li class="media">
                    <div class="media-left">
                        <a href="#">
                            <img src="img/header-girl-3.jpg" class="media-object">
                        </a>
                    </div>
                    <div class="media-body">
                        <h4 class="media-heading">我是标题 - 二级</h4>
                        <p>我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容。</p>
                    </div>
                </li>
                <li class="media">
                    <div class="media-left">
                        <a href="#">
                            <img src="img/header-girl-2.jpg" class="media-object">
                        </a>
                    </div>
                    <div class="media-body">
                        <h4 class="media-heading">我是标题 - 二级</h4>
                        <p>我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容。</p>
                    </div>
                </li>
            </ul>
        </div>
    </li>
    <li class="media">
        <div class="media-left">
            <a href="#">
                <img src="img/header-animal-1.jpg" class="media-object">
            </a>
        </div>
        <div class="media-body">
            <h4 class="media-heading">我是标题 - 一级</h4>
            <p>我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容。</p>
            <ul class="media-list">
                <li class="media">
                    <div class="media-left">
                        <a href="#">
                            <img src="img/header-girl-3.jpg" class="media-object">
                        </a>
                    </div>
                    <div class="media-body">
                        <h4 class="media-heading">我是标题 - 二级</h4>
                        <p>我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容。</p>
                    </div>
                </li>
                <li class="media">
                    <div class="media-left">
                        <a href="#">
                            <img src="img/header-girl-2.jpg" class="media-object">
                        </a>
                    </div>
                    <div class="media-body">
                        <h4 class="media-heading">我是标题 - 二级</h4>
                        <p>我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容。</p>
                    </div>
                </li>
            </ul>
        </div>
    </li>
</ul>
```

效果图：

![](https://i.mazey.net/uploads/2022/01/831674155.jpg)

## 三、实战

用 Bootstrap 媒体对象知识做一个豆瓣日记部分的评论列表。

![](https://i.mazey.net/uploads/2022/01/831674385.jpg)

演示地址：[https://i.mazey.net/bootstrap-blueprints/lesson-fourth-comment/index.html](https://i.mazey.net/bootstrap-blueprints/lesson-fourth-comment/index.html)，源码地址：[https://github.com/mazeyqian/bootstrap-blueprints/tree/master/lesson-fourth-comment](https://github.com/mazeyqian/bootstrap-blueprints/tree/master/lesson-fourth-comment)。

**版权声明**

本博客所有的原创文章，作者皆保留版权。转载必须包含本声明，保持本文完整，并以超链接形式注明作者[后除](https://blog.mazey.net/author/mazey)和本文原始地址：[https://blog.mazey.net/2613.html](https://blog.mazey.net/2613.html)

（完）