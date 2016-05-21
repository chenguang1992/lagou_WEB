~function ($) {
    function direction(pageX, pageY) {
        var $o = $(this).offset(),
            $w = $(this).outerWidth(),
            $h = $(this).outerHeight();

        //->计算鼠标指针位于当前元素“比例空间”中的坐标位置:“比例空间”->以元素中心为坐标原点,以元素左边位置为X轴的-1,以元素右边位置为X轴的1,以元素顶部位置为Y轴的-1,以元素底部位置为Y轴的1,的直角坐标空间
        var $x = (pageX - $o.left - ($w / 2)) * ($w > $h ? ($h / $w) : 1);
        var $y = (pageY - $o.top - ($h / 2)) * ($h > $w ? ($w / $h) : 1);
        return Math.round((((Math.atan2($y, $x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
    }

    //->根据方向实现对应的动画操作
    function mouseAnimate(interval) {
        interval = interval || 200;
        $(this).on("mouseenter mouseleave", function (e) {
            var $mark = $(this).children(".ad-info"), $posL = 0, $posT = 0, $tarL = 0, $tarT = 0, $dir = direction.call(this, e.pageX, e.pageY);
            if (e.type === "mouseenter") {
                $dir === 0 ? $posT = "-100%" : null;
                $dir === 1 ? $posL = "100%" : null;
                $dir === 2 ? $posT = "100%" : null;
                $dir === 3 ? $posL = "-100%" : null;
                $mark.css({top: $posT, left: $posL, display: "block"}).stop().animate({
                    top: $tarT,
                    left: $tarL
                }, interval);
                return;
            }
            $dir === 0 ? $tarT = "-100%" : null;
            $dir === 1 ? $tarL = "100%" : null;
            $dir === 2 ? $tarT = "100%" : null;
            $dir === 3 ? $tarL = "-100%" : null;
            $mark.stop().animate({top: $tarT, left: $tarL}, interval, function () {
                $mark.css({
                    display: "none"
                });
            });
        });
    }

    $.fn.extend({mouseAnimate: mouseAnimate});
}(jQuery);

$(".mainimgad li").mouseAnimate(300);




