var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    // Vastauksena saatu data tuodaan status-kenttään näkyviin
    var json = this.responseText;
    console.log(json);
  }
};