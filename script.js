"use strict";
let myName = document.getElementById("name");
let desig = document.getElementById("desig");
let Phone = document.getElementById("phone");
let email = document.getElementById("email");
let add = document.getElementById("address");
let pass1 = document.getElementById("pass1");
let deg = document.getElementById("deg");
let uni = document.getElementById("uni");
let pass2 = document.getElementById("pass2");
let deg2 = document.getElementById("deg2");
let uni2 = document.getElementById("uni2");
let skill1 = document.getElementById("skill1");
let skill2 = document.getElementById("skill2");
let skill3 = document.getElementById("skill3");
let lang = document.getElementById("lang");
let lang2 = document.getElementById("lang2");
let styear = document.getElementById("styear");
let endyear = document.getElementById("endyear");
let company = document.getElementById("company");
let comlocation = document.getElementById("comlocation");
let jobTitle = document.getElementById("jobTitle");
let achv1 = document.getElementById("achv1");
let achv2 = document.getElementById("achv2");
let achv3 = document.getElementById("achv3");
let styear2 = document.getElementById("styear2");
let endyear2 = document.getElementById("endyear2");
let company2 = document.getElementById("company2");
let comlocation2 = document.getElementById("comlocation2");
let jobTitle2 = document.getElementById("jobTitle2");
let achv4 = document.getElementById("achv4");
let achv5 = document.getElementById("achv5");
let achv6 = document.getElementById("achv6");
let styear3 = document.getElementById("styear3");
let endyear3 = document.getElementById("endyear3");
let company3 = document.getElementById("company3");
let comlocation3 = document.getElementById("comlocation3");
let jobTitle3 = document.getElementById("jobTitle3");
let achv7 = document.getElementById("achv7");
let achv8 = document.getElementById("achv8");
let achv9 = document.getElementById("achv9");
let pic = document.getElementById("pic");
let submitBtn = document.getElementById("submitBtn");
let form = document.getElementById("form");
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (e) => {
    e.preventDefault();
    localStorage.setItem("name", myName.value);
    localStorage.setItem("desig", desig.value);
    localStorage.setItem(" Phone", Phone.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("add", add.value);
    localStorage.setItem("pass1", pass1.value);
    localStorage.setItem("deg", deg.value);
    localStorage.setItem("uni", uni.value);
    localStorage.setItem("pass2", pass2.value);
    localStorage.setItem("deg2", deg2.value);
    localStorage.setItem("uni2", uni2.value);
    localStorage.setItem("skill1", skill1.value);
    localStorage.setItem("skill2", skill2.value);
    localStorage.setItem("skill3", skill3.value);
    localStorage.setItem("lang", lang.value);
    localStorage.setItem("lang2", lang2.value);
    localStorage.setItem("styear", styear.value);
    localStorage.setItem("endyear", endyear.value);
    localStorage.setItem("company", company.value);
    localStorage.setItem("comlocation", comlocation.value);
    localStorage.setItem("jobTitle", jobTitle.value);
    localStorage.setItem("achv1 ", achv1.value);
    localStorage.setItem("achv2 ", achv2.value);
    localStorage.setItem("achv3 ", achv3.value);
    localStorage.setItem("styear2", styear2.value);
    localStorage.setItem("endyear2", endyear2.value);
    localStorage.setItem("company2", company2.value);
    localStorage.setItem("comlocation2", comlocation2.value);
    localStorage.setItem("jobTitle2", jobTitle2.value);
    localStorage.setItem("achv4 ", achv4.value);
    localStorage.setItem("achv5 ", achv5.value);
    localStorage.setItem("achv6 ", achv6.value);
    localStorage.setItem("styear3", styear3.value);
    localStorage.setItem("endyear3", endyear3.value);
    localStorage.setItem("company3", company3.value);
    localStorage.setItem("comlocation3", comlocation3.value);
    localStorage.setItem("jobTitle3", jobTitle3.value);
    localStorage.setItem("achv6 ", achv6.value);
    localStorage.setItem("achv7 ", achv7.value);
    localStorage.setItem("achv8 ", achv8.value);
    if (pic.files && pic.files[0]) {
        const reader = new FileReader();
        reader.onload = function () {
            const base64Image = reader.result;
            localStorage.setItem('form_profilePic', base64Image);
            window.location.href = './resume/index.html';
        };
        reader.readAsDataURL(pic.files[0]);
    }
    else {
        window.location.href = './resume/index.html';
    }
});