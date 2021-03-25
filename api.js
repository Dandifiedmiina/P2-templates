
var xmlhttp = new XMLHttpRequest();
var call = "https://api-dog-breeds.herokuapp.com/api/dogs";

xmlhttp.open("GET", call, true);
xmlhttp.send();
xmlhttp.onreadystatechange = function () {
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    //käsitellään vastaus
    var breeds = xmlhttp.responseText;

    console.log(breeds);

    //muutetaan objekteiksi
    var myObj = JSON.parse(breeds);
    
    console.log(myObj);

    var table = document.getElementById("dogger");
    table.setAttribute("class", "dogTable");
    //luodaan 1. rivi
  
    var tr = table.insertRow(0);
    var td1 = tr.insertCell(0);
    var td2 = tr.insertCell(1);

    //lisätään ensimmäisen rivin ensimmäiseen soluun otsikko ja arvostelu
    td1.innerHTML = "Breed";
    //1.rivin ja 2.solun tiivistelmä
    td2.innerHTML = "Description";

    //hakutulosten määrä kokonaisuudessaan, lisätään verkkosivuille
    for (i = 0; i < myObj.length; i++) {

    tr = table.insertRow(i+1); //aina viimesen rivin  jälkeen luodaan uusin
    td1 = tr.insertCell(0);
    td2 = tr.insertCell(1);

    var breedName = myObj[i].breedName;
    var description = myObj[i].description;


    
      td1.innerHTML = breedName; 
      td2.innerHTML = description;
  }    

  }
};
