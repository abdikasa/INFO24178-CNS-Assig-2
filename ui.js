class UI {
    constructor() {
        this.caesar_user_input = document.querySelector('.caesar-user-input');
        this.btn_en = document.querySelector(".btn-en");
        this.btn_dec = document.querySelector(".btn-dec");
        this.textA = document.getElementById("ccInput");
        this.charCode = this.convertNumTOChar();
        this.output = document.querySelector('.output p');
        this.letters = /^[A-Za-z]+$/;


    }
    //97 = 'a', 122 = 'z';
    /*
    EncodeMsg(input)
    1. Takes a string as input.
    2. Transfroms it to lowerCase().
    3. Iterate the length of the string, find the input's ascii char's number. 
    4. Stored step 3, in curr variable, then store the diff of that value in variable diff.
    5. Then we use regex and match to weed out bad inputs.
    6. Then we apply the shift of three, we only want >=100 (97+3) and => 122.
    7. This will deal with the whole alphabet bar 'x', 'y', 'z'.
    8. Then convert the valid/accepted number with the shift inside the String.fromCharCode.
    9. That String.fromCharCode() takes a string number or number and returns the Ascii character.
    10. For 'x', 'y', 'z', we take the difference and apply it to the end of the charCode variable, which stores the alphabet.
    11. Finally, if the character is neither of those things but a space, we add a space to the overall text.
    */

    encodeMsg(input) {
        this.output.textContent = '';
        input = input.toLowerCase();
        for (let i = 0; i < input.length; i++) {
            //check if the input char matches the charCode (a-z).
            let curr = input.charCodeAt(i);
            let diff = 122 - curr;
            if (input.charAt(i).match(this.letters) != undefined) {
                if ((curr + 3) >= 100 && (curr + 3) <= 122) {
                    curr += 3;
                    this.output.innerHTML += String.fromCharCode(curr);
                } else if (curr >= 120 && diff <= 2) {
                    this.output.innerHTML += String.fromCharCode(this.charCode.charCodeAt(2 - diff));
                }
                // If you wish to see the line breaks as well.
                // }else if(curr === 10){
                //     this.output.innerHTML += "<br>";
                // }
            }
            if (curr === 32) {
                this.output.innerHTML += " ";
            }
        }
    }

    //Used to test bad values
    // -*/1234567890.
    // ~!@#$%^&*(){}[]\;':""'?>/.<,

  /*
    DecodeMsg(input)
    1. Takes a string as input.
    2. Transfroms it to lowerCase().
    3. Iterate the length of the string, find the input's ascii char's number. 
    4. Stored step 3, in curr variable, then store the diff of that value in variable diff.
    5. Then we use regex and match to weed out bad inputs.
    6. Then we apply the shift of three, we only want >=97 (100-3).
    7. This will deal with the whole alphabet bar 'a', 'b', 'c'.
    8. Then convert the valid/accepted number with the shift inside the String.fromCharCode.
    9. That String.fromCharCode() takes a string number or number and returns the Ascii character.
    10. For 'a', 'b', 'c', we take the difference and apply it to the end of the charCode variable, which stores the alphabet.
    11. For example, 99 - (99 or 'c') === 0, that 0 will be used subtracted from the last character which is 25 (26 chars in an alphabet)
        11. a) which returns 'z' after the String.fromCharCode method.
    12. Finally, if the character is neither of those things but a space, we add a space to the overall text.
    */

    decodeMsg(input) {
        this.output.innerHTML = '';
        input = input.toLowerCase();
        for (let i = 0; i < input.length; i++) {
            //check if the input char matches the charCode (a-z).
            let curr = input.charCodeAt(i);
            let diff = 99 - curr;
            if (input.charAt(i).match(this.letters) != undefined) {
                //First case will pass if the letter is not 'a' or 'b' or 'c'.
                if (curr - 3 >= 97 && curr - 3 <= 120) {
                    this.output.innerHTML += String.fromCharCode(curr - 3);
                }
                //Second case will pass if the letter is 'a' or 'b' or 'c'.
                else if (diff <= 2) {
                    this.output.innerHTML += String.fromCharCode(this.charCode.charCodeAt(this.charCode.length - 1 - diff));
                }
            }
            if (curr === 32) {
                this.output.innerHTML += " ";
            }
            //Else do nothing.
        }
    }


    /*
    convertNumTOChar();
    1. Take 97  ('a') and 122 ('z') and store in a variable.
    2. Then loop through 97 to 122 and convert the number to the letter.
    3. Take the output of Step 2) and add it to the string variable.
    4. Return it and store it inside the constructor of UI for later use.
    */

    convertNumTOChar() {
        let min = 97;
        let max = 122;
        let string = '';
        for (let i = min; i < max + 1; i++) {
            string += String.fromCharCode(i);
        }

        return string;
    }

    // clearInputs() {
    //     this.textA.value = '';
    //     this.output.textContent = '';
    // }

}