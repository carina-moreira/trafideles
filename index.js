/****** NAVBAR ******/
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementsByTagName("main")[0].style.opacity = "0.4";
  document.getElementById("logo-opacity").style.opacity = "0.4";
  document.getElementById("flags-opacity").style.opacity = "0.4";
  document.getElementsByTagName("body")[0].style.position = "fixed";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementsByTagName("main")[0].style.opacity = "1";
  document.getElementById("logo-opacity").style.opacity = "1";
  // document.getElementById("flags-opacity").style.opacity = "1";
  document.getElementsByTagName("body")[0].style.position = "relative";
}

/* To close NAVBAR on Esc */
document.addEventListener("keyup", function (e) {
  if (e.keyCode == 27) {
    closeNav();
  }
});

/* To close NAVBAR on FocusOut */
window.addEventListener("mouseup", function () {
  if (event.target.classList.contains("navbar")) {
    openNav();
    if (event.target.classList.contains("show_qs")) return;
  } else {
    closeNav();
  }
});

/****** DROPDOWN ******/
/* When the user clicks on the button, 
 toggle between hiding and showing the dropdown content */
function dropDown() {
  document.getElementById("flags_dropDown").classList.toggle("show");
}

/* DROPDOWN QUEM SOMOS MOBILE */
function dropDownQS() {
  document
    .getElementById("quemSomos_dropDown-mobile")
    .classList.toggle("show_qs");
}

/* DROPDOWN QUEM SOMOS DESKTOP */
function dropDownQSDesk() {
  document
    .getElementById("quemSomos_dropDown")
    .classList.toggle("show_qs-desk");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    let flags_dropdown = document.getElementsByClassName("dropdown-content");
    let quemSomos_dropdowns = document.getElementsByClassName(
      "dropdown-content"
    );
    // let quemSomos_mobile = document.getElementsByClassName("dropdown-content-mobile");
    let i;
    for (i = 0; i < flags_dropdown.length; i++) {
      let openDropdown = flags_dropdown[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
    for (i = 0; i < quemSomos_dropdowns.length; i++) {
      let openDropdown = quemSomos_dropdowns[i];
      if (openDropdown.classList.contains("show_qs")) {
        openDropdown.classList.remove("show_qs");
      }
    }
  }
};

/****** SELECTBOX RULES ******/
$("#show").on("change", function () {
  let optionSelected = $("option:selected", this);
  let valueSelected = this.value;

  // optionSelected.prevObject[0].$("#apostila").show();

  valueSelected == 1 ? $("#apostila").show() : $("#apostila").hide();
  valueSelected == 2 ? $("#normas").show() : $("#normas").hide();
  valueSelected == 3 ? $("#politica").show() : $("#politica").hide();
  valueSelected == 4 ? $("#termos").show() : $("#termos").hide();

  $("#show option:contains('" + $(this).text() + "')").attr("selected", true);
  // $("#show").selectmenu('refresh', true);
});

const color = document.getElementsByClassName("color-test");

function openRules(ruleOption, $event) {
  let tabcontent = document.getElementsByClassName("tabcontent");

  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  let tablinks = document.getElementsByClassName("tablink");

  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].style.color = "#313a43";
  }
  document.getElementById(ruleOption).style.display = "block";
}
