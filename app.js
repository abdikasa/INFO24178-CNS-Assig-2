//Add the UI object instance to the app.js.
const interface = new UI();

//Event listener for encoding
interface.btn_en.addEventListener("click", () => {
    interface.encodeMsg(interface.textA.value);
})

//Event listener for decoding
interface.btn_dec.addEventListener("click", () => {
    interface.decodeMsg(interface.textA.value);
})



