const ubahHuruf = (word) => {
    let result = '';
    if (typeof word != 'string') {
        console.log('Input harus string')
    } else if (word.length <= 2) {
        console.log('tipe data harus lebih dari 2 karakter');
    } else {
        for (let i = 0; i < word.length; i++) {
            if (word[i] == 'a') {
                result += 'o'
            } else {
                result += word[i];
            }
        }
        if (result === word) {
            console.log('huruf tidaka ada');
        } else {
            console.log(result)
        }
    }
}


ubahHuruf('jakarta');
