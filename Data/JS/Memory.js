function Memory() {
    var SuKien = 365 * 2;
    var NgayHienTai = document.getElementById('iDaysLove').textContent;

    var TrungGian = NgayHienTai * 100 / SuKien;
    var MotNam = TrungGian.toFixed(0);

    var NgayConLai = SuKien - NgayHienTai;

    document.getElementById("iProgressLove").style.width = MotNam + "%";
    document.getElementById("iProgressLove").style.animationPlayState = "running";

    document.getElementById("ipro").innerText = MotNam + "%";

    document.getElementById("DaysMemory").textContent = NgayConLai + " Ngày nữa";
    setTimeout(Birthdays, 1000)
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