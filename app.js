const interface = new UI();

interface.btn_en.addEventListener("click", () => {
    interface.encodeMsg(interface.textA.value);
})

interface.btn_dec.addEventListener("click", () => {
    interface.decodeMsg(interface.textA.value);
})



