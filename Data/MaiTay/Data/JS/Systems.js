// Bảng Giá Dịch Vụ
var CatToc = 120000;
var ComboCatToc = 150000;

var Uon = 500000;
var UonPhongChuanToc = 250000;

var DuoiToc = 500000;

var NhuomPhucHoiMau = 500000;
var NhuomMauThoiTrang = 2000000;
var HighLightBabyLight = 500000;

var PhucHoiOlaplex = 500000;
var PhucHoiKeratin = 600000;

var Combo1 = 500000;
var Combo2 = 1000000;



var A = 0;
var B = 0;
function Get() {
    // Cắt Tóc
    var dvCatToc = document.querySelector('input[name="CatToc"]:checked').value;
    if (dvCatToc == 0) {
        setInterval(A = 0)
    }
    if (dvCatToc == 1) {
        setInterval(A = CatToc)
    }
    if (dvCatToc == 2) {
        setInterval(A = ComboCatToc)
    }

    // Uốn Tóc
    var dvUonToc = document.querySelector('input[name="UocToc"]:checked').value;
    if (dvUonToc == 0) {
        setInterval(B = 0)
    }
    if (dvUonToc == 1) {
        setInterval(B = Uon)
    }
    if (dvUonToc == 2) {
        setInterval(B = UonPhongChuanToc)
    }

    // Duỗi Tóc
    var dvDuoiToc = document.querySelector('input[name="DuoiToc"]:checked').value;
    if (dvDuoiToc == 0) {
        setInterval(C = 0)
    }
    if (dvDuoiToc == 1) {
        setInterval(C = DuoiToc)
    }

    // Nhuộm Tóc
    var dvNhuomToc = document.querySelector('input[name="NhuomToc"]:checked').value;
    if (dvNhuomToc == 0) {
        setInterval(D = 0)
    }
    if (dvNhuomToc == 1) {
        setInterval(D = NhuomPhucHoiMau)
    }
    if (dvNhuomToc == 2) {
        setInterval(D = NhuomMauThoiTrang)
    }
    if (dvNhuomToc == 3) {
        setInterval(D = HighLightBabyLight)
    }

    // Phục Hồi Tóc
    var dvPhucHoiToc = document.querySelector('input[name="PhucHoiToc"]:checked').value;
    if (dvPhucHoiToc == 0) {
        setInterval(E = 0)
    }
    if (dvPhucHoiToc == 1) {
        setInterval(E = PhucHoiOlaplex)
    }
    if (dvPhucHoiToc == 2) {
        setInterval(E = PhucHoiKeratin)
    }

    // Combo
    var dvCombo = document.querySelector('input[name="Combo"]:checked').value;
    if (dvCombo == 0) {
        setInterval(F = 0)
    }
    if (dvCombo == 1) {
        setInterval(F = Combo1)
    }
    if (dvCombo == 2) {
        setInterval(F = Combo2)
    }
    if (dvCombo == 3) {
        setInterval(F = Combo3)
    }
    


    var GiamGia = document.getElementById('phantramgiamgia').value;
    var GiamGiaTien = document.getElementById('idMoney').value;

    var Tong = (A + B + C + D + E + F) ;
    var ThanhToan = Tong - ((Tong*GiamGia)/100) - GiamGiaTien ;


    var moneyFormatter = new Intl.NumberFormat();

    var checkTongHoaDon = document.getElementById('checkTongHoaDon');
    var checkGiamGia = document.getElementById('checkGiamGia');
    var checkThanhToan = document.getElementById('checkThanhToan');


    var TienKhachDua = document.getElementById('TienKhachDua');
    var TienTraKhach = document.getElementById('TienTraKhach');
    


    var outTongHoaDon = document.getElementById('TongHoaDon');
    var outGiamGia = document.getElementById('GiamGia');
    var outThanhToan = document.getElementById('ThanhToan');
    var outTienKhachDua = document.getElementById('KhachDua');
    var outTienTraKhach = document.getElementById('TraKhach');

    outTienKhachDua.innerText = 'Khách đưa: ' + moneyFormatter.format(TienKhachDua.value) + 'đ' ;
    outTienTraKhach.innerText = 'Trả khách: ' + moneyFormatter.format(TienKhachDua.value - ThanhToan) + 'đ' 

    outTongHoaDon.innerText = 'Tổng: ' + moneyFormatter.format(Tong);


    if (GiamGia == 0) {
        outGiamGia.innerText = 'Giảm 0%'
    } else {
        outGiamGia.innerText = 'Giảm ' + GiamGia + '% : ' + moneyFormatter.format(((Tong*GiamGia)/100)) + 'đ'  ;
    }
   
    outThanhToan.innerText = 'Thanh Toán: ' + moneyFormatter.format(ThanhToan) + 'đ'


    
    checkTongHoaDon.innerText = outTongHoaDon.textContent;
    checkGiamGia.innerText = outGiamGia.textContent;
    checkThanhToan.innerText = outThanhToan.textContent;
    TienTraKhach.innerText = outTienTraKhach.textContent;

}

function Check() {
    var dvCatToc = document.querySelector('input[name="CatToc"]:checked').value;
    alert(dvCatToc)
}

function CachThanhToan() {
   var CachThanhToan = document.getElementById('CachThanhToan').value;
   var TienMat = document.getElementById('TienMat');
   var ChuyenKhoang = document.getElementById('ChuyenKhoang');

   var PayTienMat = document.getElementById('PayTienMat');
   var PayChuyenKhoang = document.getElementById('PayChuyenKhoang');


   if (CachThanhToan == 0) {
    TienMat.style.display = 'block';
    ChuyenKhoang.style.display = 'none';

    PayTienMat.style.display = 'block';
    PayChuyenKhoang.style.display = 'none';
   } 
   if (CachThanhToan == 1) {
    TienMat.style.display = 'none';
    ChuyenKhoang.style.display = 'block';

    PayTienMat.style.display = 'none';
    PayChuyenKhoang.style.display = 'block';
   }
   
}


function KhachHang() { 
    var TenKH = document.getElementById('TenKH').value;

    var outTenKhachHang = document.getElementById('TenKhachHang');
    var outLoaiKhachHang = document.getElementById('LoaiKhachHang');

    if (TenKH == 'Mạnh Hùng') {
        outTenKhachHang.innerText = TenKH ;
        outLoaiKhachHang.innerText = '[ Thành viên ]' ;
    }else {
        outTenKhachHang.innerText = TenKH ;
        outLoaiKhachHang.innerText = '[ Mới ]'
    }

}

function NgayDonHang() {
    var days = ['Chủ nhật','Thứ hai','Thứ ba','Thứ tư','Thứ năm','Thứ sáu','Thứ bảy'];

    Date.prototype.getDayName = function() {
        return days[ this.getDay() ];
    };

    var now = new Date();

    var thu = now.getDayName();
    var ngay = now.getDate();
    var thang = now.getMonth();
    var nam = now.getFullYear();

    var NgayHoaDon = document.getElementById('NgayHoaDon');
    NgayHoaDon.innerHTML = thu + '. ' + ngay + '/' + thang + '/' + nam; 
}

function TaoDonHang() {
    NgayDonHang();
    KhachHang();
}



var SLTaoBang = 0;
function TaoBang1() {
    SLTaoBang++;

    if (SLTaoBang <= 5) {
        TaoBang();
    } 
    if (SLTaoBang == 6) {
        TaoBangKhac();
    }else {
        
    }
}


function TaoBang() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var DichVu = row.insertCell(0);
    var SoLuong = row.insertCell(1);
    var ThanhTien = row.insertCell(2);

    DichVu.innerHTML = "Combo cắt, gội, sấy tạo kiểu";
    SoLuong.innerHTML = "2";
    ThanhTien.innerHTML = "500.000đ";
  
}

function TaoBangKhac() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(6);
    var DichVu = row.insertCell(0);
    var SoLuong = row.insertCell(1);
    var ThanhTien = row.insertCell(2);

    DichVu.innerHTML = "Khác";
    SoLuong.innerHTML = "0";
    ThanhTien.innerHTML = "1.000.000đ";
}