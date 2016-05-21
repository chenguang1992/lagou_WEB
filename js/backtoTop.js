var huojian = document.getElementById("huojian");
window.onscroll = computedDisplay;
function computedDisplay() {
    var curTop = document.documentElement.scrollTop || document.body.scrollTop;
    var curHeight = document.documentElement.clientHeight || document.body.clientHeight;
    huojian.style.display = curTop > curHeight ? "block" : "none";
}
huojian.onclick = function () {
    this.style.display = "none";
    window.onscroll = null;
    var duration = 500, interval = 10, target = document.documentElement.scrollTop || document.body.scrollTop;
    var step = (target / duration) * interval;
    var timer = window.setInterval(function () {
        var curTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (curTop === 0) {
            window.clearInterval(timer);
            window.onscroll = computedDisplay;
            return;
        }
        curTop -= step;
        document.documentElement.scrollTop = curTop;
        document.body.scrollTop = curTop;
    }, interval);
};