// Istope
// import '../js/vendor/isotope.js';

import Isotope from 'isotope-layout'
///////////////////////////////////////////
/*
        Change theme
*/
/////////////////////////////////////////
document.querySelector(".slider").onclick = function () {
    if ($(".changeTheme").hasClass("dark")) {
        $(".changeTheme").removeClass("dark");
        $(".changeTheme").addClass("light");
        document.querySelector("[href='/my_resume/themeDark.css']").setAttribute("href", "/my_resume/themeLight.css")
    } else {
        $(".changeTheme").removeClass("light");
        $(".changeTheme").addClass("dark");
        document.querySelector("[href='/my_resume/themeLight.css']").setAttribute("href", "/my_resume/themeDark.css")
    }
}



///////////////////////////////////////////
/*
        Scroll smooth
*/
/////////////////////////////////////////
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



///////////////////////////////////////////
/*
        random text
*/
/////////////////////////////////////////
// StartRandomText();
document.getElementById("radomText").innerHTML = "Web Developer"
function randomString(index) {
    var text = "";
    var possible = "FqWeRtYuIoPaSdgHjKlZxCvbNm ";
    for (var i = 0; i < index; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}
function ChangingRandomString(text) {
    let i = 0;
    let a = setInterval(function () {
        document.getElementById("radomText").innerHTML = randomString(text.length);
        i <= 10 ? i++ : stopInterval()
    }, 10);

    //stop
    function stopInterval() {
        setTimeout(() => {
            clearInterval(a);
            document.getElementById("radomText").innerHTML = text;
        }, 1000);
    }
}
function StartRandomText() {
    let textString = "Frontend Developer";
    ChangingRandomString(textString);
    textString = "Web Developer"

    setInterval(() => {
        if (textString == "Web Developer") {
            ChangingRandomString(textString);
            textString = "Frontend Developer"
        }
        else {
            ChangingRandomString(textString);
            textString = "Web Developer";
        }
    }, 5000)
}



///////////////////////////////////////////
/*
        Button Menu Animation
*/
/////////////////////////////////////////
ButtonMenu();
function ButtonMenu() {
    var trigger = $('#hamburger'),
        isClosed = false;

    trigger.click(function () {
        burgerTime();
        $(".overplayMeny").toggleClass("openMenu");
        $(".burger-icon").toggleClass("bgMenu");
    });

    function burgerTime() {
        if (isClosed == true) {
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = false;
        } else {
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            isClosed = true;
        }
    }
}


const iso = new Isotope($(".isotope")[0], {
    itemSelector: '.id'
})

// Btn filter
$(".btnCate .fe").on("click", function () {
    $(".btnCate li").removeClass("borderClick")
    $(this).addClass("borderClick")
    iso.arrange({ filter: '.id-0' });
})

$(".btnCate .fs").on("click", function () {
    $(".btnCate li").removeClass("borderClick")
    $(this).addClass("borderClick")
    iso.arrange({ filter: '.id-1' });
})


$(".btnCate .all").on("click", function () {
    $(".btnCate li").removeClass("borderClick")
    $(this).addClass("borderClick")
    iso.arrange({ filter: '*' });
})






