function toggleDropdown() {
  var dropdown = document.getElementById("myDropdown");
  dropdown.style.display =
    dropdown.style.display === "block" ? "none" : "block";
}

window.onclick = function (event) {
  if (!event.target.matches(".admin-btn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.style.display === "block") {
        openDropdown.style.display = "none";
      }
    }
  }
};
