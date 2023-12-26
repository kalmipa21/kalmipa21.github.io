var i, tabcontent, tablinks;

tablinks = document.getElementsByClassName("tablinks");
tabcontent = document.getElementsByClassName("tabcontent");

document.addEventListener("DOMContentLoaded", function () {
  openTab(null, "first");
});

function openTab(event, selected) {
  if (!event) {
    tablinks[0].className += " active";
    document.getElementById(selected).style.display = "block";
    return;
  }

  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  document.getElementById(selected).style.display = "block";
  event.currentTarget.className += " active";

  // console.log(tablinks);
}
