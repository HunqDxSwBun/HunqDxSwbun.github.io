function clearRadioGroup(GroupName) {
    var ele = document.getElementsByName(GroupName);
    for (var i = 0; i < ele.length; i++)
        ele[0].checked = true;
}

function RS1() {
    clearRadioGroup("CatToc");
}
function RS2() {
    clearRadioGroup("UocToc");
}
function RS3() {
    clearRadioGroup("DuoiToc");
}
function RS4() {
    clearRadioGroup("NhuomToc");
}
function RS5() {
    clearRadioGroup("PhucHoiToc");
}
function RS6() {
    clearRadioGroup("Combo");
}


// Khuyến Mãi 
document.getElementById("phantramgiamgia").addEventListener("change", function () {
    let v = parseInt(this.value);
    if (v < 0) this.value = 0;
    if (v > 50) this.value = 100;
});


function fmMoney() {
    var GiamGiaTien = document.getElementById('idMoney').value;;

var moneyFormatter = new Intl.NumberFormat();
document.getElementById('fmMoney').innerText = moneyFormatter.format(GiamGiaTien)+'đ';

}

function fmMoney2() {
    var TienKhachDua = document.getElementById('TienKhachDua').value;
    document.getElementById('DIVTienTraKhach').style.display = 'block';


var moneyFormatter = new Intl.NumberFormat();
document.getElementById('fmMoney2').innerText = moneyFormatter.format(TienKhachDua)+'đ';

Get();

}

// In Hoá Đơn 

function InHoaDon() {
    alert('Đang cập nhật')
}




function HideCard() {
    var btns = document.querySelectorAll(".Card");


    btns.forEach(btn=>{
    btn.classList.add("hide");

});
}





