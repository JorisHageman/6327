function Jackets() {
    document.getElementById('Jackets').style.display = "block";
    document.getElementById('Pants').style.display = "none";
    document.getElementById('Sweaters').style.display = "none";
    document.getElementById("activejackets").className = "active";
    $("#activepants").removeClass("active");
    $("#activesweaters").removeClass("active");

}

function Sweaters() {
    document.getElementById('Sweaters').style.display = "block";
    document.getElementById('Jackets').style.display = "none";
    document.getElementById('Pants').style.display = "none";
    document.getElementById("activesweaters").className = "active";
    $("#activejackets").removeClass("active");
    $("#activepants").removeClass("active");


}

function Pants() {
    document.getElementById('Pants').style.display = "block";
    document.getElementById('Jackets').style.display = "none";
    document.getElementById('Sweaters').style.display = "none";
    document.getElementById("activepants").className = "active";
    $("#activejackets").removeClass("active");
    $("#activesweaters").removeClass("active");
   
}


function onload() {
    document.getElementById("activejackets").className = "active";
}

