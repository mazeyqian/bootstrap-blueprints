## 一、介绍

注册和登录在社交和商业网站中是必不可少的一个部分。

## 二、知识点

### 2.1 标签页

#### 2.1.1 基础标签页

标签页的使用与导航栏类似，同时都依赖于基础样式 `nav`，不同的是附加样式变成了 `nav-tabs` 和 `nav-pills`（胶囊式），也不用在外面加上一层样式为 `navbar navbar-*` 的 `<div>` 元素。

##### 2.1.1.1 Tab 式标签页

使用方法：用 `<ul>` + `<li>` + `<a>` 构建一个标签页，在外层 `<ul>` 上加上样式 `nav nav-tabs`，在需要活跃的元素 `<li>` 上加上 `active` 即可。

```
<!--代码部分-->
<ul class="nav nav-tabs">
    <li class="active" role="presentation"><a href="#">Tab First</a></li>
    <li role="presentation"><a href="#">Tab Second</a></li>
    <li role="presentation"><a href="#">Tab Third</a></li>
    <li role="presentation"><a href="#">Tab Fourth</a></li>
    <li role="presentation"><a href="#">Tab Fifth</a></li>
</ul>
```

效果图：

![](https://i.mazey.net/uploads/2022/01/827773559.jpg)

##### 2.1.1.2 胶囊式标签页

使用方法：实现方法与 Tab 式标签页类似，把样式 `nav-tabs` 换成 `nav-pills` 即可。

```
<!--代码部分-->
<ul class="nav nav-pills">
    <li class="active" role="presentation"><a href="#">Tab First</a></li>
    <li role="presentation"><a href="#">Tab Second</a></li>
    <li role="presentation"><a href="#">Tab Third</a></li>
    <li role="presentation"><a href="#">Tab Fourth</a></li>
    <li role="presentation"><a href="#">Tab Fifth</a></li>
</ul>
```

效果图：

![](https://i.mazey.net/uploads/2022/01/827773632.jpg)

#### 2.1.2 带下拉框的标签页

标签页与导航栏一样可以带下拉框，使用方法也一样，在要放下拉框的 `<li>` 中嵌入一个 `<ul>` + `<li>` + `<a>`，并在一级标签页 `<a>` 元素上加上样式 `dropdown-toggle` 和属性 `data-toggle="dropdown"`，二级导航 `<ul>` 元素上加上样式 `dropdown-menu`。

```
<!--代码部分-->
<ul class="nav nav-tabs">
    <li class="active" role="presentation"><a href="#">Tab First</a></li>
    <li role="presentation"><a href="#">Tab Second</a></li>
    <li role="presentation"><a href="#">Tab Third</a></li>
    <li role="presentation"><a href="#">Tab Fourth</a></li>
    <li role="presentation">
        <a class="dropdown-toggle" data-toggle="dropdown" href="#">Tab Fifth <span class="caret"></span></a>
        <ul class="dropdown-menu">
            <li><a href="#">Sub-Tab First</a></li>
            <li><a href="#">Sub-Tab Second</a></li>
            <li><a href="#">Sub-Tab Third</a></li>
        </ul>
    </li>
</ul>
```

效果图：

![](https://i.mazey.net/uploads/2022/01/827773750.jpg)

#### 2.1.3 响应式标签页

与导航栏一样，标签页也有自己的响应式风格。使用方法：在一级标签页 `<ul>` 元素中加上一个样式 `nav-justified` 即可。

```
<!--代码部分-->
<ul class="nav nav-tabs nav-justified">
    <li class="active" role="presentation"><a href="#">Tab First</a></li>
    <li role="presentation"><a href="#">Tab Second</a></li>
    <li role="presentation"><a href="#">Tab Third</a></li>
    <li role="presentation"><a href="#">Tab Fourth</a></li>
    <li role="presentation">
        <a class="dropdown-toggle" data-toggle="dropdown" href="#">Tab Fifth <span class="caret"></span></a>
        <ul class="dropdown-menu">
            <li><a href="#">Sub-Tab First</a></li>
            <li><a href="#">Sub-Tab Second</a></li>
            <li><a href="#">Sub-Tab Third</a></li>
        </ul>
    </li>
</ul>
```

大屏效果图：

![按比例把不同标签页等分成几个部分](https://i.mazey.net/uploads/2022/01/827773951.jpg)

小屏效果图：

![浏览器宽度小于768px时触发小屏显示效果](https://i.mazey.net/uploads/2022/01/827774153.jpg)

#### 2.1.4 标签页内容

切换标签页显示出内容在网页中很常见，使用方法：在标签页 `<ul>` 元素下方加入一个里外两层 `<div>` 元素的容器，外层 `<div>` 元素加上样式 `tab-content`，内层多个 `<div>` 加上样式 `tab-pane fade`，并给默认显示的内容加上样式 `in active`，这里的 `fade in` 是为了切换时有渐入的效果。另外给内层 `<div>` 元素分别加上不同的 `id` 属性，对应上面 `<ul>` 元素对应的 `href` 属性，例如：若 `href="#first"`，下面 `<div>` 元素里面则是 `id="first"`。

```
<!--代码部分-->
<ul class="nav nav-tabs nav-justified">
    <li class="active" role="presentation"><a href="#first" data-toggle="tab">Tab First</a></li>
    <li role="presentation"><a href="#second" data-toggle="tab">Tab Second</a></li>
    <li role="presentation"><a href="#third" data-toggle="tab">Tab Third</a></li>
    <li role="presentation"><a href="#fourth" data-toggle="tab">Tab Fourth</a></li>
    <li role="presentation"><a href="#fifth" data-toggle="tab">Tab Fifth</a></li>
</ul>
<!--标签页内容部分-->
<div class="tab-content">
    <div class="tab-pane fade in active" id="first" role="tabpanel">Hello, I'm Tab First, How are you?</div>
    <div class="tab-pane fade" id="second" role="tabpanel">Hello, I'm Tab Second, How are you?</div>
    <div class="tab-pane fade" id="third" role="tabpanel">Hello, I'm Tab Third, How are you?</div>
    <div class="tab-pane fade" id="fourth" role="tabpanel">Hello, I'm Tab Fourth, How are you?</div>
    <div class="tab-pane fade" id="fifth" role="tabpanel">Hello, I'm Tab Fifth, How are you?</div>
</div>
```

效果图：

![](https://i.mazey.net/uploads/2022/01/827803797.jpg)

### 2.2 按钮

按钮是网页布局中不可缺少的一部分的，而且不同的场景要使用不同样式的按钮。

#### 2.2.1 基础按钮

使用方法：在 `<button>`/`<a>`/`<input>` 元素上加上样式 `btn btn-*`（`default`、`primary`、`success`、`info`、`warning`、`danger`、`link`）。

```
<!--代码部分-->
<!--白色 标准按钮-->
<button type="button" class="btn btn-default">默认 - default</button>
<!--深蓝色-->
<button type="button" class="btn btn-primary">首选项 - primary</button>
<!--原谅色-->
<button type="button" class="btn btn-success">成功 - success</button>
<!--浅蓝色-->
<button type="button" class="btn btn-info">提示 - info</button>
<!--黄色-->
<button type="button" class="btn btn-warning">警告 - warning</button>
<!--红色-->
<button type="button" class="btn btn-danger">危险 - danger</button>
<!--链接样式-->
<button type="button" class="btn btn-link">首选项 - link</button>
```

效果图：

![](https://i.mazey.net/uploads/2022/01/827774713.jpg)

#### 2.2.2 进阶的按钮

##### 2.2.2.1 改变按钮的大小

可以通过添加样式 `btn-xs`、`btn-sm`、`btn-lg` 从小到大改变按钮的大小。

```
<!--代码部分-->
<p>
    <button type="button" class="btn btn-primary btn-xs">超小按钮 - xs</button>
    <button type="button" class="btn btn-success btn-xs">超小按钮 - xs</button>
    <button type="button" class="btn btn-info btn-xs">超小按钮 - xs</button>
    <button type="button" class="btn btn-warning btn-xs">超小按钮 - xs</button>
    <button type="button" class="btn btn-danger btn-xs">超小按钮 - xs</button>
</p>
<p>
    <button type="button" class="btn btn-primary btn-sm">小按钮 - sm</button>
    <button type="button" class="btn btn-success btn-sm">小按钮 - sm</button>
    <button type="button" class="btn btn-info btn-sm">小按钮 - sm</button>
    <button type="button" class="btn btn-warning btn-sm">小按钮 - sm</button>
    <button type="button" class="btn btn-danger btn-sm">小按钮 - sm</button>
</p>
<p>
    <button type="button" class="btn btn-primary">默认按钮</button>
    <button type="button" class="btn btn-success">默认按钮</button>
    <button type="button" class="btn btn-info">默认按钮</button>
    <button type="button" class="btn btn-warning">默认按钮</button>
    <button type="button" class="btn btn-danger">默认按钮</button>
</p>
<p>
    <button type="button" class="btn btn-primary btn-lg">大按钮 - lg</button>
    <button type="button" class="btn btn-success btn-lg">大按钮 - lg</button>
    <button type="button" class="btn btn-info btn-lg">大按钮 - lg</button>
    <button type="button" class="btn btn-warning btn-lg">大按钮 - lg</button>
    <button type="button" class="btn btn-danger btn-lg">大按钮 - lg</button>
</p>
```

效果图：

![](https://i.mazey.net/uploads/2022/01/827777534.jpg)

##### 2.2.2.2 块状按钮

有时候想把一个按钮充满整个父级容器，给按钮添加一个样式 `btn-block` 即可。

```
<!--代码部分-->
<button type="button" class="btn btn-primary btn-xs btn-block">超小按钮 - xs</button>
<button type="button" class="btn btn-primary btn-sm btn-block">小按钮 - sm</button>
<button type="button" class="btn btn-primary btn-block">默认按钮</button>
<button type="button" class="btn btn-primary btn-lg btn-block">大按钮 - lg</button>
```

效果图：

![](https://i.mazey.net/uploads/2022/01/827777763.jpg)

### 2.3 表单

#### 2.3.1 基础表单

Bootstrap 对表单的 `<input>`/`<select>`/`<label>` 等表单元素都进行了样式初始化。首先用一个样式 `form-group` 的 `<div>` 元素包住 `<label>` 和 `<input>` 元素获得良好的排列。

```
<!--代码部分-->
<form>
    <div class="form-group">
        <label for="username">帐号：</label>
        <!--样式form-control会让input元素宽度为父容器100%-->
        <input type="text" class="form-control" id="username" placeholder="请输入帐号" />
    </div>
    <div class="form-group">
        <label for="password">密码：</label>
        <input type="password" class="form-control" id="password" placeholder="请输入密码" />
    </div>
    <button type="submit" class="btn btn-default">登录</button>
</form>
```

效果图：

![](https://i.mazey.net/uploads/2022/01/827777983.jpg)

#### 2.3.2 水平表单

上面的表单“帐号：”和“密码：”在输入框上面，这种效果显然不是我们想要的，这时我们可以给表单添加样式 `form-horizontal` 使其变成水平表单，同时配合栅格系统来合理布局，这里的 `form-group` 就相当与栅格系统中的样式 `row`，所以可以直接在 `form-group` 下面使用 `col-md-*` 等样式布局。

```
<!--代码部分-->
<form class="form-horizontal">
    <div class="form-group">
        <!--样式control-label使内容居右-->
        <label for="username" class="col-sm-3 control-label">帐号：</label>
        <div class="col-sm-9">
            <input type="text" class="form-control" id="username" placeholder="请输入帐号" />
        </div>
    </div>
    <div class="form-group">
        <label for="password" class="col-sm-3 control-label">密码：</label>
        <div class="col-sm-9">
            <input type="password" class="form-control" id="password" placeholder="请输入密码" />
        </div>
    </div>
    <div class="form-group">
        <div class="col-sm-9 col-sm-offset-3">
            <!--样式checkbox为input[type='checkbox']指定合适的样式，相应的还有input[type='radio']的样式radio-->
            <div class="checkbox">
                <label>
                    <input type="checkbox" /> 记住密码
                </label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <div class="col-sm-9 col-sm-offset-3">
            <button type="submit" class="btn btn-primary btn-sm">登录</button>
            <a href="#" class="btn btn-link btn-sm">忘记密码？</a>
        </div>
    </div>
</form>
```

效果图：

![](https://i.mazey.net/uploads/2022/01/827778277.jpg)

登录的话肯定少不了验证合理性，Bootstrap 提供校验状态的提示样式。在需要提示的 `<input>` 容器上加上样式 `has-*`（`success`、`warning`、`error`）。若想提示 √，× 或其他符号，在容器上加上样式 `has-feedback`，并且在样式 `form-control` 的 `<input>` 元素下面添加样式为 `form-control-feedback` 的 Glyphicons 字体图标。

```
<!--代码部分-->
<form class="form-horizontal">
    <div class="form-group">
        <!--样式control-label使内容居右-->
        <label for="username" class="col-sm-3 control-label">帐号：</label>
        <div class="col-sm-9 has-feedback has-success">
            <input type="text" class="form-control" id="username" placeholder="请输入帐号" />
            <span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
        </div>
    </div>
    <div class="form-group">
        <label for="password" class="col-sm-3 control-label">密码：</label>
        <div class="col-sm-9 has-feedback has-error">
            <input type="password" class="form-control" id="password" placeholder="请输入密码" />
            <span class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>
        </div>
    </div>
    <div class="form-group">
        <div class="col-sm-9 col-sm-offset-3">
            <!--样式checkbox为input[type='checkbox']指定合适的样式，相应的还有input[type='radio']的样式radio-->
            <div class="checkbox">
                <label>
                    <input type="checkbox" /> 记住密码
                </label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <div class="col-sm-9 col-sm-offset-3">
            <button type="submit" class="btn btn-primary btn-sm">登录</button>
            <a href="#" class="btn btn-link btn-sm">忘记密码？</a>
        </div>
    </div>
</form>
```

效果图：

![](https://i.mazey.net/uploads/2022/01/827778385.jpg)

#### 2.3.3 输入框组

有时为了满足需求要把元素与 `<input>` 元素组合在一起。使用方法是把 `<input>` 元素包在一个样式 `input-group` 的 `<div>` 元素内，然后在 `<input>` 元素下面放一个样式 `input-group-addon` 的元素。

```
<!--代码部分-->
<form class="form-horizontal">
    <div class="form-group">
        <!--样式control-label使内容居右-->
        <label for="username" class="col-sm-3 control-label">帐号：</label>
        <div class="col-sm-9 has-feedback has-success">
            <input type="text" class="form-control" id="username" placeholder="请输入帐号" />
            <span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
        </div>
    </div>
    <div class="form-group">
        <label for="password" class="col-sm-3 control-label">密码：</label>
        <div class="col-sm-9 has-feedback has-error">
            <input type="password" class="form-control" id="password" placeholder="请输入密码" />
            <span class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>
        </div>
    </div>
    <div class="form-group">
        <label for="email" class="col-sm-3 control-label">邮箱：</label>
        <div class="col-sm-9">
            <div class="input-group">
                <input type="email" class="form-control" id="email" placeholder="请输入邮箱" />
                <span class="input-group-addon">@mazey.net</span>
            </div>
        </div>
    </div>
    <div class="form-group">
        <div class="col-sm-9 col-sm-offset-3">
            <!--样式checkbox为input[type='checkbox']指定合适的样式，相应的还有input[type='radio']的样式radio-->
            <div class="checkbox">
                <label>
                    <input type="checkbox" /> 记住密码
                </label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <div class="col-sm-9 col-sm-offset-3">
            <button type="submit" class="btn btn-primary btn-sm">登录</button>
            <a href="#" class="btn btn-link btn-sm">忘记密码？</a>
        </div>
    </div>
</form>
```

效果图：

![](https://i.mazey.net/uploads/2022/01/827778459.jpg)

这里的元素也可以替换成按钮，将样式 `input-group-addon` 替换成 `input-group-btn`，然后在里面包一个 `<button>` 元素即可。

```
<!--代码部分-->
...
<div class="input-group">
    <input type="email" class="form-control" id="email" placeholder="请输入邮箱" />
    <span class="input-group-btn">
        <button class="btn btn-default" type="button">@mazey.net</button>
    </span>
</div>
...
```

效果图：

![](https://i.mazey.net/uploads/2022/01/827778526.jpg)

## 三、实战

用标签页 + 表单做一个可以切换登录和注册的模块。

![](https://i.mazey.net/uploads/2022/01/827805044.jpg)

演示地址：[https://i.mazey.net/bootstrap-blueprints/lesson-third-login/index.html](https://i.mazey.net/bootstrap-blueprints/lesson-third-login/index.html)，源码地址：[https://github.com/mazeyqian/bootstrap-blueprints/tree/master/lesson-third-login](https://github.com/mazeyqian/bootstrap-blueprints/tree/master/lesson-third-login)。

**版权声明**

本博客所有的原创文章，作者皆保留版权。转载必须包含本声明，保持本文完整，并以超链接形式注明作者[后除](https://blog.mazey.net/author/mazey)和本文原始地址：[https://blog.mazey.net/2594.html](https://blog.mazey.net/2594.html)

（完）