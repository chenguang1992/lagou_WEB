//左侧导航显示与隐藏效果
~function (){$(".menubox").on('mouseenter',function(){
    $(this).addClass('current');
    $(this).children(".dn").css("display", "block");
});
    $(".menubox").on('mouseleave',function(){
        $(this).removeClass('current');
        $(this).children(".dn").css("display", "none");
    });
}();

//轮播大图
var changDiv = document.getElementById("main-banner");
var changDivUl = changDiv.getElementsByTagName("ul")[0];
var step = 0, timer = null;
function move() {
    if (step >= 3) {
        step = 0;
        utils.css(changDivUl, "top", 0);
    }
    step++;
    utils.animate(changDivUl, {top: -step * 160}, 300);
    rightMove();
}
timer = window.setInterval(move, 2000);

//轮播小图
var home_banner_right = document.getElementById("home_banner_right");
var right_out = document.getElementById("home_banner_right_out");
var rightUlLis = home_banner_right.getElementsByTagName("li");
var right_i = home_banner_right.getElementsByTagName("i");
function rightMove() {
    var temp = step;
    temp = (temp >= rightUlLis.length) ? 0 : step;
    utils.animate(right_out, {top: temp * 55}, 300);
    for (var i = 0, len = right_i.length; i < len; i++) {
        i === temp ? utils.removeClass(right_i[i], "zheRao") : utils.addClass(right_i[i], "zheRao");
    }
}
home_banner_right.onmouseover = function (e) {

    window.clearInterval(timer);
    };
home_banner_right.onmouseout = function (e) {
    timer = window.setInterval(move, 2000);

};
moveOut();
function moveOut() {
    for (var i = 0, len = rightUlLis.length; i < len; i++) {
        var a = rightUlLis[i];
        a.index = i;
        a.onmouseover = function () {
            utils.animate(right_out, {top: this.index * 55}, 300);
            utils.animate(changDivUl, {top: -this.index * 160}, 300);
            for (var k = 0, lenk = right_i.length; k < lenk; k++) {
                k === this.index ? utils.removeClass(right_i[this.index], "zheRao") : utils.addClass(right_i[k], "zheRao");
            }

        }
    }
}
//左右切换
var right_Ul = document.getElementById("job-tab");
var right_Ul_lis=right_Ul.getElementsByTagName("li");
var hotList=document.getElementById("joblist");
var hotList_R=document.getElementById("hotList_R");
right_Ul_lis[0].onclick=function(){
    this.className="current";
    right_Ul_lis[1].className="";
    hotList.style.display="block";
    hotList_R.style.display="none";
};
right_Ul_lis[1].onclick=function(){
    this.className="current";
    right_Ul_lis[0].className="";
    hotList_R.style.display="block";
    hotList.style.display="none";
};


















