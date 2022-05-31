var Bai1 = "Tính tiền lương nhân viên";
console.log(Bai1);
/* -Đầu vào
lương một ngày : 100.000
- Xử lý 
+ Nhập số ngày làm 

+ tổng = lương một ngày x số ngày làm
- Đầu ra
+tổng = ?
*/

var salarynumber1 = 0;
var salarynumber2 = 0;
var tong = 0;
salarynumber1 = 100000;
salarynumber2 = 5
tong = salarynumber1 * salarynumber2
console.log("Tổng: " + tong)



var Bai2 =  "Tính Giá Trị Trung Bình";
console.log(Bai2)
/* mô hình 3 khối
-Đầu vào:
5 số thực
-Xử lý
tạo biến 5 số thực lần lượt là :1; 2; 3; 4;5
GTTB= tổng năm số thực/5
-Đầu ra:
GTTB=?
*/
var number1 = 1;
var number2 = 2;
var number3 = 3;
var number4 = 4;
var number5 = 5;
var tong1 = 0;
tong1 = (number1 + number2 + number3 + number4 + number5)/5
console.log("GTTB =  " + tong1);

var Bai3 = "Quy đổi tiền";
console.log(Bai3);
/* Mô Hình Ba Khối
- Đầu vào:
1 usd = 23.500 vnd
số tiền cần quy đổi
- Xử Lý:
Tạo biến số quy đổi có giá trị là 5
vnd = usd*23500
- Đầu ra:
Số tiền được quy đổi (vnd) 
*/
 var USD = 5;
 VND = USD * 23500;
 console.log("VND = " + VND)


 var Bai4 = "Chu vi và Diện tích hình chữ nhật";
 console.log(Bai4)
 /*Mô hình ba khối
 - Đầu vào:
 Cạnh dài
 Cạnh rộng
 - Xử Lý:
 Tạo biến cạnh dài có giá trị là 4
 Tạo biến cạnh rộng có giá trị là 5
 chu vi = cạnh dài * cạnh rộng
 diện tích = (cạnh dài + cạnh rộng)*2
 - Đầu ra
 Chu vi
 Diện tích
*/
var canhdai = 4;
var canhrong = 5;
chuvi = canhdai * canhrong
console.log("Chu vi = " + chuvi);
dientich = (canhdai + canhrong) * 2;
console.log("Diện tích = " + dientich);
 

var Bai5 = "Tính tổng 2 ký số"
console.log(Bai5)
/*
* Giả sử:
*  n = 83 => 8 + 3 => total = 11
*
* - Đầu vào
*      + n = 83
* - Xử lý
*      + Tach lay hang chuc => n % 100 / 10 => lam tron so Math.floor( n % 100 / 10)
*      + Tach lay hang don vi => n % 10
*
*      + tong = hang tram + hang chuc + don vi
*
* - Đầu ra
*      + tong = ?
*/
var n = 83;
var hangChuc = Math.floor((n % 100) / 10);
var hangDonVi = n % 10;

tong2KySo = hangChuc + hangDonVi;

console.log("Tổng 2 ký số: " + tong2KySo);


