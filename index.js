// Bài 1

var form = document.getElementById('form');
var inputDays = document.getElementById('inputDays');
var ketQuaBai1 = document.getElementById('ketQuaBai1');

// Xử lý sự kiện khi submit form
form.addEventListener('submit', function(event) {

    event.preventDefault();

    var days = parseInt(inputDays.value);
    var luong = days * 100000;

    ketQuaBai1.innerHTML = `Tiền lương của bạn là: ${luong} đồng`;
});


// bài 2
function tinhTrungBinh() {

        var num1 = +(document.getElementById("num1").value);
        var num2 = +(document.getElementById("num2").value);
        var num3 = +(document.getElementById("num3").value);
        var num4 = +(document.getElementById("num4").value);
        var num5 = +(document.getElementById("num5").value);

        var average = (num1 + num2 + num3 + num4 + num5) / 5;

        document.getElementById("ketQua").innerHTML = "Trung bình của 5 số là: " + average;
    }
    
// bài 3
function chuyenDoi() {

    var usd = +(document.getElementById("usd").value);

    var vnd = usd * 23500;

    var ketQua = document.getElementById("ketQuaBai3");
    ketQua.innerText = `Số tiền VND tương ứng là: ${vnd} VND`;
}

// bài 4
function tinhToan() {

    var chieuDai = +(document.getElementById("chieuDai").value);
    var chieuRong = +(document.getElementById("chieuRong").value);

    var dienTich = chieuDai * chieuRong;
    var chuVi = 2 * (chieuDai + chieuRong);

    var dienTichElement = document.getElementById("dienTich");
    dienTichElement.innerText = `Diện tích: ${dienTich}`;
    var chuViElement = document.getElementById("chuVi");
    chuViElement.innerText = `Chu vi: ${chuVi}`;
    }

// bai 5
    function tinhTong() {
        var soHaiChuSo = parseInt(document.getElementById("soHaiChuSo").value);
    
        // Tách thành hai chữ số
        var hangChuc = Math.floor(soHaiChuSo / 10);
        var hangDonVi = soHaiChuSo % 10;
        var tong = hangChuc + hangDonVi;

        var tongElement = document.getElementById("tong");
        tongElement.innerText = `Tổng hai chữ số: ${tong}`;
    }
    