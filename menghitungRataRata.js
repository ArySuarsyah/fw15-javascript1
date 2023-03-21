const menghitungNilai = function (bi, bingrs, mtk, ipa, hasil, grade) {
  
  if (bi == false || bingrs == false || mtk == false || ipa == false) {
    console.log("Nilai harus di input");
  } else if (
    typeof bi != "number" ||
    typeof bingrs != "number" ||
    typeof mtk != "number" ||
    typeof ipa != "number"
  ) {
    console.log("Nilai harus angka");
  } else if (bi <= 9 || bingrs <= 9 || mtk <= 9 || ipa <= 9) {
    console.log("Nilai harus lebih besar dari 10");
  } else {
    hasil = (bi + bingrs + mtk + ipa) / 4;
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
  }
  console.log(`Nilai Un ${hasil}, grade ${grade}`);
};

menghitungNilai(90, 90, 80, 85);
