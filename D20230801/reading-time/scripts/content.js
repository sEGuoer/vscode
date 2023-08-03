const element = document.querySelector("h1")

if (element !== null){
    var para = document.createElement("span"); //创建新的<p> 元素
    var node = document.createTextNode("这是一个新段落。"); //创建文本节点
    para.appendChild(node); //向 <p> 元素追加这个文本节点
    var para1 =document.createElement("img")
    para1.src = "//www.baidu.com/img/flexible/logo/pc/result.png"
    para.appendChild(para1)
//向已有的元素追加这个新元素
    element.appendChild(para);
}

// $("[class^='minh'] iframe").hide()
 document.querySelectorAll("[class^='minh']").forEach(function (element) {
    console.log(element)
    element.parentElement.parentElement.parentElement.firstElementChild.lastElementChild.click()
})