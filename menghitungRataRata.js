let bahasaIndonesia ='';
let bahasaInggris = 80;
let matematika = 90;
let ipa = 75;
let hasil ;
let grade = '';

if (bahasaIndonesia == false || bahasaInggris == false || matematika == false || ipa == false) {
    console.log('Nilai harus di input');
} else if (typeof bahasaIndonesia != 'number' || typeof bahasaInggris != 'number' || typeof matematika != 'number' ||typeof ipa != 'number') {
    console.log('Nilai harus angka');
} else if (bahasaIndonesia <= 9 || bahasaInggris <= 9 || matematika <= 9 || ipa <= 9) {
    console.log('Nilai harus lebih besar dari 10');
} else {
    hasil = (bahasaIndonesia + bahasaInggris + matematika + ipa) / 4;
  if (hasil >= 90) {
    grade = "A";
  } else if (hasil >= 80) {
    grade = "B";
  } else if (hasil >= 70) {
    grade = "C";
  } else if (hasil >= 60) {
    grade = "D";
  } else {
    grade = "E";
  }
    console.log(`Nilai Un ${hasil}, grade ${grade}`);
};