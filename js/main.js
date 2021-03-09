import data from "../const/data"


$("[data-toggle=popover]").popover();

///////////////////////////////////////////
/*
        Introduce
*/
/////////////////////////////////////////


document.querySelector(".name").innerHTML = data.name
document.querySelector(".email").innerHTML = data.email
document.querySelector(".phone").innerHTML = data.phone
document.querySelector(".birthday").innerHTML = data.birthday
document.querySelector(".address").innerHTML = data.address


document.querySelector("#Contact .bodycontent .email").innerHTML = `<span>${data.email}</span>`
document.querySelector("#Contact .bodycontent .phone").innerHTML = `<span>${data.phone}</span>`
document.querySelector("#Contact .bodycontent .address").innerHTML = `<span>${data.address}</span>`


if(data.intro.length > 0){
    let sum = ""
    data.intro.map(res => {
        sum = sum === "" ? sum + `<div>${res}</div>` : sum + `<br><div>${res}</div>`
    })
    document.querySelector(".intro").innerHTML = sum
}

document.querySelector("#showCV").addEventListener("click", function(){
    window.open('https://drive.google.com/file/d/1Tm7U3QXmZDhng9Ar9XQkeo66FnDTWkD2/view?usp=sharing')
})


///////////////////////////////////////////
/*
        Skills
*/
///////////////////////////////////////////

if(data.skill.proficient.length > 0){
    renderSkill(data.skill.proficient,"proficient")
}
if(data.skill.familiar.length > 0){
    renderSkill(data.skill.familiar,"familiar")
}
if(data.skill.other.length > 0){
    renderSkill(data.skill.other,"other")
}
function renderSkill (data,classname){
    let sum = ""
    data.map(res => {
        sum =  sum + `<li>${res}</li>`
    })
    document.querySelector(`.${classname}`).innerHTML = sum
}


///////////////////////////////////////////
/*
        Experiences
*/
/////////////////////////////////////////
let i = 0;
for (let res of data.experience) {
    $("#Experience .content").append(`
        <div class="d-flex mb-4">
            <div class="" style="width: 105px">
                <p class="time">${res.time}</p>
            </div>
            <div class="timeline" style="flex:1">
                <div class="d-flex" style="justify-content:space-between">
                    <p class="time" style="font-size:0.9rem;display:none">${res.time}</p>
                    <h4 class="nameCom">${res.position}</h4>
                </div>
                <h6 class="position">${res.nameCompany}</h6>
                <p class="mt-3">
                ${res.describtion}
                </p>
            </div>
        </div>
    `);
    i++;
}

// Fancybox
import '../js/vendor/fancybox.js';

///////////////////////////////////////////
/*
        Porfolios
*/
/////////////////////////////////////////
let sumData = ""
const ok = data.porfolio.map(x => {
    sumData += `
        <div class="id id-${x.type} col-md-4 col-sm-6 col-12" style="display:flex; justify-content:between; height:auto ;margin-bottom:10px">
            <div class="customBox" data-id='${x.id}'>
                <p class="name">${x.name}</p>
                ${x.des}
            </div>
        </div>
    `
})

{/* <div class="ok-col mt-5">
                <div class="box1"></div>
                <div class="box" data-id='${x.id}'>
                    <p class="project">Project</p>
                    
                </div>
            </div> */}
$("#Portfolio .porfolio .row").append(sumData)
$(".customBox").on("click", function () {
    const id = $(this).attr("data-id");
    console.log(id)
    $.fancybox.open(
        data.porfolio[id].url,
        {
            buttons: [
                "zoom",
                "fullScreen",
                "thumbs",
                "close",
            ],
            thumbs: {
                autoStart: false,                  
                hideOnClose: true,                  
            }
        }
    )
})



///////////////////////////////////////////
/*
        Education
*/
/////////////////////////////////////////
let j = 0;
for (let res of data.education) {
    $("#Education .content").append(`
        <div class="d-flex mb-4">
            <div class="" style="width: 105px">
                <p class="time">${res.time}</p>
            </div>
            <div class="timeline" style="flex:1;position:relative">
                <div class="d-flex" style="justify-content:space-between">
                    <p class="time" style="font-size:0.9rem;display:none">${res.time}</p>
                    <h4 class="nameCom">${res.des}</h4>
                </div>
                <h6 class="position">${res.name}</h6>
            </div>
        </div>
    `);
    j++;
}


