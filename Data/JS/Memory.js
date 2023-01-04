window.onload = function () {
    RandomEmoji();
    setTimeout(OffPageLoad, 2000);
    OnLOAD();
};

var iConPageLoad = document.getElementById('iconPageLoad');
function RandomEmoji() {

    var Random = Math.floor((Math.random() * 5) + 1);

    if (Random == 1) {
        iConPageLoad.textContent = "❤"
    }
    if (Random == 2) {
        iConPageLoad.textContent = "💕"
    }
    if (Random == 3) {
        iConPageLoad.textContent = "😘"
    }
    if (Random == 4) {
        iConPageLoad.textContent = "💋"
    }
    if (Random == 5) {
        iConPageLoad.textContent = "😍"
    }
}

var PageLoad = document.getElementById('PageLoad')
function OffPageLoad() {
    PageLoad.style.display = 'none';
}
function OnPageLoad() {
    PageLoad.style.display = 'block';
    setTimeout(OffPageLoad, 1200);
}
function iConDaysLove() {
    iConPageLoad.textContent = "💕";
    OnPageLoad();
}

function iConStories() {
    iConPageLoad.textContent = "📖";
    OnPageLoad();
}
function iConEvents() {
    iConPageLoad.textContent = "📅";
    OnPageLoad();
}
function iConGames() {
    iConPageLoad.textContent = "🎮";
    OnPageLoad();
}
function iConSetting() {
    iConPageLoad.textContent = "⚙";
    OnPageLoad();
}









function OnLOAD() {
    countUpFromTime("July 15, 2021 00:00:00", 'DaysLoveJS'); // ****** Change this line!
}
function countUpFromTime(countFrom, id) {
    countFrom = new Date(countFrom).getTime();
    var now = new Date(),
        countFrom = new Date(countFrom),
        timeDifference = (now - countFrom);

    var secondsInADay = 60 * 60 * 1000 * 24,
        secondsInAHour = 60 * 60 * 1000;

    days = Math.floor(timeDifference / (secondsInADay) * 1);
    hours = Math.floor((timeDifference % (secondsInADay)) / (secondsInAHour) * 1);
    mins = Math.floor(((timeDifference % (secondsInADay)) % (secondsInAHour)) / (60 * 1000) * 1);
    secs = Math.floor((((timeDifference % (secondsInADay)) % (secondsInAHour)) % (60 * 1000)) / 1000 * 1);

    var idEl = document.getElementById(id);
    idEl.getElementsByClassName('days')[0].innerHTML = days;
    idEl.getElementsByClassName('hours')[0].innerHTML = hours;
    idEl.getElementsByClassName('minutes')[0].innerHTML = mins;
    idEl.getElementsByClassName('seconds')[0].innerHTML = secs;

    clearTimeout(countUpFromTime.interval);
    countUpFromTime.interval = setTimeout(function () { countUpFromTime(countFrom, id); }, 1000);

    setTimeout(LoveMemory, 1000);

}

function LoveMemory() {
    var SuKien = 365 * 2;
    var NgayHienTai = document.getElementById('iDaysLove').textContent;

    var TrungGian = NgayHienTai * 100 / SuKien;
    var MotNam = TrungGian.toFixed(0);

    document.getElementById("iProgressLove").style = '--percent:' + MotNam;

    // setTimeout(Birthdays, 1000)
}



function EventFn() {
    var NgayHienTai = new Date().getTime();

    // Tháng 1
    var TetTay = new Date("Jan 1, 2023").getTime();
    var TetTa = new Date("Jan 22, 2023").getTime();

    // Tháng 2
    var Valentine = new Date("Feb 14, 2023").getTime();

    // Tháng 3
    var QTPhuNu = new Date("Mar 8, 2023").getTime();

    // Tháng 4

    // Tháng 5

    // Tháng 6
    var QTThieuNhi = new Date("Jun 1, 2023").getTime();

    // Tháng 7

    var KiNiemYeuNhau = new Date("Jul 15, 2023").getTime();

    // Tháng 8

    var SnHung = new Date("Aug 30, 2023").getTime();

    // Tháng 9

    // Tháng 10
    var SnThy = new Date("Oct 19, 2023").getTime();

    // Tháng 11

    // Tháng 12
    var Noel = new Date("Dec 25, 2023").getTime();



    var Test = Math.floor((vEvent - NgayHienTai) / (1000 * 60 * 60 * 24));
    alert(Test);
}

function Birthdays() {
    var NgayHienTai = new Date().getTime();

    var HunqD = new Date("Aug 30, 2022").getTime();
    var SwBun = new Date("Oct 19, 2022").getTime();

    var BDHunqD = HunqD - NgayHienTai;
    var HunqDdays = Math.floor(BDHunqD / (1000 * 60 * 60 * 24));
    var BDSwBun = SwBun - NgayHienTai;
    var SwBundays = Math.floor(BDSwBun / (1000 * 60 * 60 * 24));


    // Số Ngày đã qua 
    var a = 365 - HunqDdays;
    var b = a * 100 / 365;
    var SinhNhatHung = b.toFixed(0);

    var c = 365 - SwBundays;
    var d = c * 100 / 365;
    var SinhNhatThy = d.toFixed(0);

    document.getElementById("iBirthdayHunqD").style.width = SinhNhatHung + "%";
    document.getElementById("iBirthdayHunqD").style.animationPlayState = "running";
    document.getElementById("DaysHunqD").textContent = "Còn " + HunqDdays + " Ngày";


    document.getElementById("iBirthdaySwBun").style.width = SinhNhatThy + "%";
    document.getElementById("iBirthdaySwBun").style.animationPlayState = "running";
    document.getElementById("DaysSwBun").textContent = "Còn " + SwBundays + " Ngày";

}