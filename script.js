function openSubject(evt, subjectName) {
    // Declare all variables
    var i, column_two, tablinks;

    // Get all elements with class="column-two" and hide them
    column_two = document.getElementsByClassName("column_two");
    for (i = 0; i < column_two.length; i++) {
      column_two[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(subjectName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  document.getElementById("defaultOpen").click();
