class UI {
    constructor() {
        this.caesar_user_input = document.querySelector('.caesar-user-input');
        this.btn_en = document.querySelector(".btn-en");
        this.btn_dec = document.querySelector(".btn-dec");
        this.textA = document.getElementById("ccInput");
        this.charCode = this.convertNumTOChar();
    }

    encodeMsg(input, ) {
        input = input.toLowerCase();
        let encoded = '';
        for (let i = 0; i < input.length; i++) {
            //check if the input char matches the charCode (a-z).
            let curr = input.charCodeAt(i);
            let diff = 122 - curr;
            if ((curr + 2) >= 99 && (curr + 2) <= 122) {
                curr += 2;
                encoded += String.fromCharCode(curr);
            } else if (curr >= 121 && diff <= 2) {
                if (diff === 1) {
                    diff -= 1;
                } else {
                    diff += 1;
                }
                encoded += String.fromCharCode(this.charCode.charCodeAt(diff));
            }
        }
        return encoded;
    }

    decodeMsg(input) {
        input = input.toLowerCase();
        let decoded = '';
        var letters = /^[A-Za-z]+$/;
        for (let i = 0; i < input.length; i++) {
            //check if the input char matches the charCode (a-z).
            let curr = input.charCodeAt(i);
            let objCondition = { leta: String.fromCharCode(curr), letb: String.fromCharCode(curr) };
            if (input.charAt(i).match(letters) != undefined) {
                //First case will pass if the letter is not 'a' or 'b'.
                if (curr - 2 >= 97 && curr - 2 <= 120) {
                    decoded += String.fromCharCode(curr - 2);
                }
                //Second case will pass if the letter is 'a' or 'b'.
                else if (objCondition.leta === String.fromCharCode(curr) || objCondition.letb === String.fromCharCode(curr)) {
                    let final = objCondition.leta === String.fromCharCode(curr) ? 'y' : 'z'
                    decoded += final;
                }
            }
            //Else do nothing.
        }
        return decoded;
    }

    convertNumTOChar() {
        let min = 97;
        let max = 122;
        let string = '';
        for (let i = min; i < max + 1; i++) {
            string += String.fromCharCode(i);
        }

        return string;
    }

}