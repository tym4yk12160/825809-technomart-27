var btnShowMap = document.querySelector(".js-map"),
    map = document.querySelector(".modal-map"),
    closeMap = document.querySelector(".btn-close-map"),
    // в Корзину
    btnShowBuy = document.querySelectorAll(".btn-buy"),
    buy = document.querySelector(".modal-add-product"),
    closeBuy = document.querySelector(".modal-product-btn-close"),
    // Напишите нам
    btnShowWriteUs = document.querySelector(".btn-write-us"),
    closeWriteUs = document.querySelector(".close-write-us"),
    writeUs = document.querySelector(".modal-write-us"),
    // Хранилище
    storage = localStorage.getItem("login");
if (btnShowWriteUs && writeUs && closeWriteUs) {
    var form = writeUs.querySelector("form"),
        login = writeUs.querySelector("[name=login]"),
        email = writeUs.querySelector("[name=email]"),
        textletter = writeUs.querySelector("[name=textletter]");
    btnShowWriteUs.addEventListener("click", function (a) {
        a.preventDefault(),
            writeUs.classList.add("popup-show"),
            login.focus(),
            storage ? ((login.value = storage), email.focus()) : login.focus();
    }),
        closeWriteUs.addEventListener("click", function (a) {
            a.preventDefault(),
                writeUs.classList.remove("popup-show"),
                writeUs.classList.remove("modal-error");
        }),
        form.addEventListener("submit", function (a) {
            login.value && email.value && textletter.value
                ? (localStorage.setItem("login", login.value),
                    localStorage.setItem("email", email.value))
                : (a.preventDefault(), writeUs.classList.add("modal-error"));
        }),
        window.addEventListener("keydown", function (a) {
            27 === a.keyCode &&
                writeUs.classList.contains("popup-show") &&
                (writeUs.classList.remove("popup-show"),
                    writeUs.classList.remove("modal-error"));
        });
}
for (var i = 0; i < btnShowBuy.length; i++)
    btnShowBuy[i].addEventListener("click", function (a) {
        a.preventDefault(), buy.classList.add("popup-show");
    });
closeBuy.addEventListener("click", function (a) {
    a.preventDefault(), buy.classList.remove("popup-show");
}),
    window.addEventListener("keydown", function (a) {
        27 === a.keyCode &&
            buy.classList.contains("popup-show") &&
            buy.classList.remove("popup-show");
    }),
    btnShowMap.addEventListener("click", function (a) {
        a.preventDefault(), map.classList.add("popup-show");
    }),
    closeMap.addEventListener("click", function (a) {
        a.preventDefault(), map.classList.remove("popup-show");
    }),
    window.addEventListener("keydown", function (a) {
        27 === a.keyCode &&
            map.classList.contains("popup-show") &&
            map.classList.remove("popup-show");
    });
