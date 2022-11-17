// var Thy = 7452;
// var ThyOld = 34861 + 26442;

var MessTopMess1 = '2501';
// let str = MessTopMess1.toLocaleString("en-US");
// document.getElementById('MessTop').innerText = str;


//#region - start of - number counter animation
const counterAnim = (qSelector, start = 0, end, duration = 1000) => {
    const target = document.querySelector(qSelector);
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        target.innerText = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
};
//#endregion - end of - number counter animation

document.addEventListener("DOMContentLoaded", () => {
    counterAnim("#MessTop", 10, MessTopMess1, 1000);
});