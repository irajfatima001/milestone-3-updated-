window.addEventListener("load", () => {
  let name = localStorage.getItem("name");
  let desig = localStorage.getItem("desig");
  let Phone = localStorage.getItem(" Phone");
  let email = localStorage.getItem("email");
  let add = localStorage.getItem("add");
  let pass1 = localStorage.getItem("pass1");
  let deg = localStorage.getItem("deg");
  let uni = localStorage.getItem("uni");
  let pass2 = localStorage.getItem("pass2");
  let deg2 = localStorage.getItem("deg2");
  let uni2 = localStorage.getItem("uni2");
  let skill1 = localStorage.getItem("skill1");
  let skill2 = localStorage.getItem("skill2");
  let skill3 = localStorage.getItem("skill3");
  let lang = localStorage.getItem("lang");
  let lang2 = localStorage.getItem("lang2");
  let styear = localStorage.getItem("styear");
  let endyear = localStorage.getItem("endyear");
  let company = localStorage.getItem("company");
  let comlocation = localStorage.getItem("comlocation");
  let jobTitle = localStorage.getItem("jobTitle");
  let achv1 = localStorage.getItem("achv1 ");
  let achv2 = localStorage.getItem("achv2 ");
  let achv3 = localStorage.getItem("achv3 ");
  let styear2 = localStorage.getItem("styear2");
  let endyear2 = localStorage.getItem("endyear2");
  let company2 = localStorage.getItem("company2");
  let comlocation2 = localStorage.getItem("comlocation2");
  let jobTitle2= localStorage.getItem("jobTitle2");
  let achv4 = localStorage.getItem("achv4 ");
  let achv5 = localStorage.getItem("achv5 ");
  let achv6 = localStorage.getItem("achv6 ");
  let styear3 = localStorage.getItem("styear3");
  let endyear3 = localStorage.getItem("endyear3");
  let company3 = localStorage.getItem("company3");
  let comlocation3 = localStorage.getItem("comlocation3");
  let jobTitle3= localStorage.getItem("jobTitle3");
  let achv7 = localStorage.getItem("achv7 ");
  let achv8 = localStorage.getItem("achv8 ");
  let achv9 = localStorage.getItem("achv9 ");
  let picture = localStorage.getItem('form_profilePic')


  let resName: any = document.getElementById("resName");
  resName.textContent = name;
  let resDesig: any = document.getElementById("resDesig");
  resDesig.textContent = desig;
  let resPhone: any = document.getElementById("resPhone");
  resPhone.textContent = Phone;
  let resEmail: any = document.getElementById("resEmail");
  resEmail.textContent = email;
  let resAdd: any = document.getElementById("resAdd");
  resAdd.textContent = add;
  let resPass: any = document.getElementById("resPass");
  resPass.textContent = pass1;
  let resDeg: any = document.getElementById("resDeg");
  resDeg.textContent = deg;
  let resIns: any = document.getElementById("resIns");
  resIns.textContent = uni;
  let resPass2: any = document.getElementById("resPass2");
  resPass2.textContent = pass2;
  let resDeg2: any = document.getElementById("resDeg2");
  resDeg2.textContent = deg2;
  let resIns2: any = document.getElementById("resIns2");
  resIns2.textContent = uni2;
  let resSkill1: any = document.getElementById("resSkill1");
  resSkill1.textContent = skill1;
  let resSkill2: any = document.getElementById("resSkill2");
  resSkill2.textContent = skill2;
  let resSkill3: any = document.getElementById("resSkill3");
  resSkill3.textContent = skill3;
  let resLan1: any = document.getElementById("resLan1");
  resLan1.textContent = lang;
  let resLan2: any = document.getElementById("resLan2");
  resLan2.textContent = lang2;
  let resStartYear: any = document.getElementById("resStartYear");
  resStartYear.textContent = styear;
  let resEndYear: any = document.getElementById("resEndYear");
  resEndYear.textContent = endyear;
  let resCompany: any = document.getElementById("resCompany");
  resCompany.textContent = company;

  let resComLocation: any = document.getElementById("resComLocation");
  resComLocation.textContent = comlocation;
  let resJobTitle: any = document.getElementById("resJobTitle");
  resJobTitle.textContent = jobTitle;
  let resAch1: any = document.getElementById("resAch1");
  resAch1.textContent = achv1;
  let resAch2: any = document.getElementById("resAch2");
  resAch2.textContent = achv2;
  let resAch3: any = document.getElementById("resAch3");
  resAch3.textContent = achv3;
  let resStartYear2: any = document.getElementById("resStartYear2");
  resStartYear2.textContent = styear2;
  let resEndYear2: any = document.getElementById("resEndYear2");
  resEndYear2.textContent = endyear2;
  let resCompany2: any = document.getElementById("resCompany2");
  resCompany2.textContent = company2;

  let resComLocation2: any = document.getElementById("resComLocation2");
  resComLocation2.textContent = comlocation2;
  let resJobTitle2: any = document.getElementById("resJobTitle2");
  resJobTitle2.textContent = jobTitle2;
  let resAch4: any = document.getElementById("resAch4");
  resAch4.textContent = achv4;
  let resAch5: any = document.getElementById("resAch5");
  resAch5.textContent = achv5;
  let resAch6: any = document.getElementById("resAch6");
  resAch6.textContent = achv6;
  let resStartYear3: any = document.getElementById("resStartYear3");
  resStartYear3.textContent = styear3;
  let resEndYear3: any = document.getElementById("resEndYear3");
  resEndYear3.textContent = endyear3;
  let resCompany3: any = document.getElementById("resCompany3");
  resCompany3.textContent = company3;

  let resComLocation3: any = document.getElementById("resComLocation3");
  resComLocation3.textContent = comlocation3;
  let resJobTitle3: any = document.getElementById("resJobTitle3");
  resJobTitle3.textContent = jobTitle3;
  let resAch7: any = document.getElementById("resAch7");
  resAch7.textContent = achv7;
  let resAch8: any = document.getElementById("resAch8");
  resAch8.textContent = achv8;
  let resAch9: any = document.getElementById("resAch9");
  resAch9.textContent = achv9;
  let resImg:any = document.getElementById("resImg");
if (picture) {
    resImg.src = picture;  
} else {
    resImg.src = 'profile.jpg';  
}

});





//-------------- print section ---------------------
let print_btn = document.getElementById('print_btn')

print_btn?.addEventListener('click', ()=>{
  window.print()
})
