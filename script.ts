let myName = document.getElementById("name") as HTMLInputElement;
let desig = document.getElementById("desig") as HTMLInputElement;
let Phone = document.getElementById("phone") as HTMLInputElement;
let email = document.getElementById("email") as HTMLInputElement;
let add = document.getElementById("address") as HTMLInputElement;
let pass1 = document.getElementById("pass1") as HTMLInputElement;
let deg = document.getElementById("deg") as HTMLInputElement;
let uni = document.getElementById("uni") as HTMLInputElement;
let pass2 = document.getElementById("pass2") as HTMLInputElement;
let deg2 = document.getElementById("deg2") as HTMLInputElement;
let uni2 = document.getElementById("uni2") as HTMLInputElement;
let skill1 = document.getElementById("skill1") as HTMLInputElement;
let skill2 = document.getElementById("skill2") as HTMLInputElement;
let skill3 = document.getElementById("skill3") as HTMLInputElement;
let lang = document.getElementById("lang") as HTMLInputElement;
let lang2 = document.getElementById("lang2") as HTMLInputElement;
let styear = document.getElementById("styear") as HTMLInputElement;
let endyear = document.getElementById("endyear") as HTMLInputElement;
let company = document.getElementById("company") as HTMLInputElement;
let comlocation = document.getElementById("comlocation") as HTMLInputElement;
let jobTitle = document.getElementById("jobTitle") as HTMLInputElement;
let achv1 = document.getElementById("achv1") as HTMLInputElement;
let achv2 = document.getElementById("achv2") as HTMLInputElement;
let achv3 = document.getElementById("achv3") as HTMLInputElement;
let styear2 = document.getElementById("styear2") as HTMLInputElement;
let endyear2 = document.getElementById("endyear2") as HTMLInputElement;
let company2 = document.getElementById("company2") as HTMLInputElement;
let comlocation2 = document.getElementById("comlocation2") as HTMLInputElement;
let jobTitle2 = document.getElementById("jobTitle2") as HTMLInputElement;
let achv4 = document.getElementById("achv4") as HTMLInputElement;
let achv5 = document.getElementById("achv5") as HTMLInputElement;
let achv6 = document.getElementById("achv6") as HTMLInputElement;
let styear3 = document.getElementById("styear3") as HTMLInputElement;
let endyear3 = document.getElementById("endyear3") as HTMLInputElement;
let company3 = document.getElementById("company3") as HTMLInputElement;
let comlocation3 = document.getElementById("comlocation3") as HTMLInputElement;
let jobTitle3 = document.getElementById("jobTitle3") as HTMLInputElement;
let achv7 = document.getElementById("achv7") as HTMLInputElement;
let achv8 = document.getElementById("achv8") as HTMLInputElement;
let achv9 = document.getElementById("achv9") as HTMLInputElement;
let pic = document.getElementById("pic") as HTMLInputElement;


let submitBtn = document.getElementById("submitBtn");
let form = document.getElementById("form");
form?.addEventListener("submit", (e) => {
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
        const base64Image = reader.result as string  
        localStorage.setItem('form_profilePic', base64Image);  
        window.location.href = './resume/index.html';  
    };
    reader.readAsDataURL(pic.files[0]);  
} else {
    
    window.location.href = './resume/index.html';
}
});
