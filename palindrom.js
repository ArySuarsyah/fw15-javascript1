const palindrom = (word) => {
  let result = "";
  if (typeof word != "string") {
    console.log("Input harus string");
  } else if (word.length <= 2) {
    console.log("Tipe data harus lebih dari 2 karakter");
  } else {
    for (let i = word.length - 1; i >= 0; i--) {
      result = result + word[i];
    }
    result == word
      ? console.log("Teks Palindrom")
      : console.log("Teks Bukan Palindrom");
  }
  return;
};

palindrom('harimau')
