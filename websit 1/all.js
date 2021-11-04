let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");

btn.onclick = function() {
    sidebar.classList.toggle("active");
    if (btn.classList.contains("bx-menu")) {
        btn.classList.replace("bx-menu", "bx-menu-alt-right");
    } else {
        btn.classList.replace("bx-menu-alt-right", "bx-menu");
    }
}
searchBtn.onclick = function() {
    sidebar.classList.toggle("active");
}


/*start nav_top

var modal = document.getElementById("myModal");
var btn1 = document.getElementById("myBtn");
var span = document.getElementById("span");
btn1.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "block";
        }
    } // search

end nav_top */




/*start test1*/


function myFunction() {
    var x = document.getElementById("nav4");
    if (window.getComputedStyle(x).display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
} //nav4---edite1

function myFunction1() {
    var x = document.getElementById("nav5");
    if (window.getComputedStyle(x).display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
} //nav5---edite1


DivContainer1 = document.getElementById("div-container");

function myFunction2() {
    var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    DivContainer1.appendChild(x);
} //---Add INPUT

/*end test1*/




/*start test4*/

function myFunction3() {
    var x = document.getElementById("nav7");
    if (window.getComputedStyle(x).display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
} //nav7--edit

function myFunction4() {
    var x = document.getElementById("nav6");
    if (window.getComputedStyle(x).display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
} //nav7--edit1

DivContainer1 = document.getElementById("div-container");

function myFunction5() {
    var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    DivContainer1.appendChild(x);
} //---Add INPUT

/*end test4*/





/*start test7*/

function toggleSidebar(ref) {
    document.getElementById("sidebar1").classList.toggle('active');
}

$(document).ready(function() {
    $("#sidebar2").click(function() {
        $("Description1").toggle(300);
    });
});


/*end test7*/