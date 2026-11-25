
const fs = require('fs');
const path = require('path');

// Duong dan thu muc bai tap
const thuMuc = path.join(__dirname, 'data');

// 1. Tao thu muc data
if (!fs.existsSync(thuMuc)) {
    fs.mkdirSync(thuMuc);
    console.log('Da tao thu muc data thanh cong!');
}

// 2. Tao va ghi file ghichu.txt
const noiDung = `Ho ten: Vo Duy Anh
Ma sinh vien: CDCNTT18A04
Lop: CNTT18A
Bai tap: Quan ly tap tin voi module File System`;

fs.writeFileSync(path.join(thuMuc, 'ghichu.txt'), noiDung);
console.log('Da tao va ghi file ghichu.txt thanh cong!');

// 3. Doi ten file
fs.renameSync(
    path.join(thuMuc, 'ghichu.txt'),
    path.join(thuMuc, 'ghichu_moi.txt')
);
console.log('Da doi ten thanh ghichu_moi.txt thanh cong!');

// 4. Doc noi dung file sau khi doi ten
const duLieu = fs.readFileSync(
    path.join(thuMuc, 'ghichu_moi.txt'),
    'utf8'
);

console.log('\nNoi dung file ghichu_moi.txt:');
console.log(duLieu);

// 5. Tao file tam.txt
fs.writeFileSync(
    path.join(thuMuc, 'tam.txt'),
    'File tam cua Vo Duy Anh - CDCNTT18A04'
);
console.log('\nDa tao file tam.txt thanh cong!');

// 6. Xoa file tam.txt
fs.unlinkSync(path.join(thuMuc, 'tam.txt'));
console.log('Da xoa file tam.txt thanh cong!');

console.log('\nHOAN THANH BAI TAP 08!');
