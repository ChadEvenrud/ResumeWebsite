"use strict";

//=============================Element Selectors==========================

//Technical Skills Modal

const modalTech = document.querySelector(".modal__technical");
const modalTechBtn = document.querySelector(".technical__button");
const modalClose = document.querySelector(".modal__close");

//Soft Skills Modal

const modalSoftSkills = document.querySelector(".modal__soft__skills");
const modalSoftSkillsButton = document.querySelector(".soft__skills__button");
const modalCloseSoftSkills = document.querySelector(".close__soft__skills");

//Paperless Modal
const modalPaperless = document.querySelector(".modal__paperless");
const modalPaperlessButton = document.querySelector(".paperless__button");
const modalClosePaperless = document.querySelector(".close__paperless");

//EWA Modal
const modalEwa = document.querySelector(".modal__ewa");
const modalEwaButton = document.querySelector(".ewa__button");
const modalCloseEwa = document.querySelector(".close__ewa");

//Strayer Modal
const modalStrayer = document.querySelector(".modal__strayer");
const modalStrayerButton = document.querySelector(".strayer__button");
const modalCloseStrayer = document.querySelector(".close__strayer");

//Whittier Modal
const modalWhittier = document.querySelector(".modal__whittier");
const modalWhittierButton = document.querySelector(".whittier__button");
const modalCloseWhittier = document.querySelector(".close__whittier");

// ==============================Functions===============================

const styleDisplayNone = (e) =>
    (document.querySelector(`.${e.path[3].classList[1]}`).style = "Display:none");

//===================================Events==============================

//Open Modals

modalTechBtn.addEventListener("click", function(e) {
    modalTech.classList.remove("hidden");
    modalTech.style = "display: flex";
});

modalSoftSkillsButton.addEventListener("click", function(e) {
    modalSoftSkills.classList.remove("hidden");
    modalSoftSkills.style = "display: flex";
});

modalPaperlessButton.addEventListener("click", function(e) {
    modalPaperless.classList.remove("hidden");
    modalPaperless.style = "display: flex";
});

modalEwaButton.addEventListener("click", function(e) {
    modalEwa.classList.remove("hidden");
    modalEwa.style = "display: flex";
});

modalStrayerButton.addEventListener("click", function(e) {
    modalStrayer.classList.remove("hidden");
    modalStrayer.style = "display: flex";
});

modalWhittierButton.addEventListener("click", function(e) {
    modalWhittier.classList.remove("hidden");
    modalWhittier.style = "display: flex";
});

//Close Modals

modalClose.addEventListener("click", styleDisplayNone);
modalCloseSoftSkills.addEventListener("click", styleDisplayNone);
modalPaperless.addEventListener("click", styleDisplayNone);
modalEwa.addEventListener("click", styleDisplayNone);
modalStrayer.addEventListener("click", styleDisplayNone);
modalWhittier.addEventListener("click", styleDisplayNone);

const array = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];

const newArray = function(array) {
    const uniqueNumbers = [...new Set(array)];
    const newArray = [];
    uniqueNumbers.sort(function(a, b) {
        return a - b;
    });
    for (let number of uniqueNumbers) {
        const filtered = array.filter((item) => item === number);
        if (filtered.length > 1) {
            newArray.push(filtered);
        } else {
            newArray.push(number);
        }
    }
    return newArray;
};
console.log(newArray(array));

const chad = {
    name: "chad",
    age: 26,
};

for (let items in chad) {
    console.log(chad[items]);
}