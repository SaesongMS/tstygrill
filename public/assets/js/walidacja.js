function sprawdzPole(pole_id,obiektRegex) {
    var obiektPole = document.getElementById(pole_id);
    if(!obiektRegex.test(obiektPole.value)) 
        return (false);
    else 
        return (true);
}

function sprawdz_radio(nazwa_radio){
    var obiekt=document.getElementsByName(nazwa_radio);
    var dane = "";
    var check = false;
    for (i=0;i<obiekt.length;i++){ 
        if(obiekt[i].checked){
            dane+=obiekt[i].value;
            check = true;
            break;
        }
    }
    if(check)
        return dane;
    else
        return false;
}

function sprawdz_box(box_id)
{
    var obiekt;
    var obiektChecked = [];
    var check = false;
    for (var i = 0; i < 4; i++){
        obiekt=document.getElementById(box_id[i]);
        if (obiekt.checked){
            obiektChecked.push(obiekt.value);
            check = true;
        }
    }
    if(check)
        return obiektChecked;
    else
        return false;
    
}

function sprawdz()
{ 
    var ok=true;
    var dane="Składam następująca rezerwacje:\n";
    
    inputRegexes = [/^[\sa-zA-Z]{2,20}$/, /^([a-zA-Z0-9])+([.a-zA-Z0-9_-])*@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-]+)+/, /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s[0-9]*$/];
    inputIds = ["name", "email", "phone"];
    errorIds = ["name_error", "email_error", "phone_error"];
    data = ["Imie i nazwisko: ", "email: ", "nr. telefonu: "];
    
    for(let i=0;i<3;i++){
        if (!sprawdzPole(inputIds[i],inputRegexes[i])){ 
            ok=false;
            document.getElementById(errorIds[i]).innerHTML="Podaj poprawne dane";
        }
        else{
            document.getElementById(errorIds[i]).innerHTML="";
            dane+=data[i]+document.getElementById(inputIds[i]).value+"\n";
        }
    }

    checkboxes = sprawdz_box(["none", "flower","candles","special"]);
    if (!checkboxes){ 
        ok=false;
        document.getElementById("etc_error").innerHTML="Określ dodatki";
    }
    else{
        document.getElementById("etc_error").innerHTML="";
        dane+="Dodatki: "+checkboxes+"\n";
    }

    radio = sprawdz_radio("stolik");
    if (!radio){ 
        ok=false;
        document.getElementById("type_error").innerHTML="Wybierz typ stolika";
    }
    else{
        document.getElementById("type_error").innerHTML="";
        dane+="Typ stolika: "+radio+"\n";
    }

    let date_val = document.getElementById("date");
    if (!date_val.value){ 
        ok=false;
        document.getElementById("date_error").innerHTML="Wybierz date";
    }
    else{
        document.getElementById("date_error").innerHTML="";
        dane+="Data: "+date_val.value;
    }

    date_val=document.getElementById("time")
    if (!date_val.value){ 
        ok=false;
        document.getElementById("time_error").innerHTML="Wybierz godzine";
    }
    else{
        document.getElementById("time_error").innerHTML="";
        dane+=" "+date_val.value;
    }

    var textarea = document.getElementById("message").value;
    dane+="\nDodatkowe informacje:"+textarea;

    
    if(ok===true){
        if(window.confirm(dane)===true){
            return true;
        }
    }
    else 
        return false;
}

function savetoStorage(){
    if(sprawdz()){
        key=document.getElementById("name").value;
        var dane = {};
        dane.name = key;
        dane.email = document.getElementById("email").value;
        dane.phone = document.getElementById("phone").value;
        dane.date = document.getElementById("date").value;
        dane.time = document.getElementById("time").value;
        dane.table = sprawdz_radio("stolik");
        dane.etc = sprawdz_box(["none", "flower","candles","special"]);
        dane.msg = document.getElementById("message").value;
        var check = true;
        for(var i=0;i<localStorage.length;i++){
            keyL = localStorage.key(i);
            keyLValue = JSON.parse(localStorage.getItem(keyL));
            if(keyLValue.name == key){
                check = false;
            }    
        }
        if(check==false){
            document.getElementById("sent").innerHTML = 'Na to nazwisko złozono już zamówienie';
        }
        else{
            localStorage.setItem(key, JSON.stringify(dane));
            document.getElementById("sent").innerHTML = 'Zamówienie złożone';
        }
        
    }
}

function editOrder() {
    key=document.getElementById("name").value;
    var dane = {};
    dane.name = key;
    dane.email = document.getElementById("email").value;
    dane.phone = document.getElementById("phone").value;
    dane.date = document.getElementById("date").value;
    dane.time = document.getElementById("time").value;
    dane.table = sprawdz_radio("stolik");
    dane.etc = sprawdz_box(["none", "flower","candles","special"]);
    var textarea = document.getElementById("message").value;
    if(!textarea)
        dane.msg = textarea;
    localStorage.setItem(key, JSON.stringify(dane));
  }
  
  function deleteOrder() {
    var temp = document.getElementById('name').value;
    localStorage.removeItem(temp);
  }
  
  function searchOrder() {
    var key = document.getElementById('name').value;
    var temp = JSON.parse(localStorage.getItem(key));
    if (temp === null) 
      document.getElementById("search_error").innerHTML = 'Brak zamowienia na to nazwisko';
    else {
      
        var content = "<ul>";
        content += "<li>Imie i nazwisko: "+ key+"</li>"+
                "<li>email:"+temp.email+"</li>"+
                "<li>nr. telefonu: "+temp.phone+"</li>"+
                "<li>Dodatki: "+temp.etc+"</li>"+
                "<li>Typ stolika: "+temp.table+"</li>"+
                "<li>Data: "+temp.date+" "+temp.time+"</li></ul>";
        document.getElementById("search_error").style.color = "blue";
        document.getElementById("search_error").innerHTML = content;
        document.getElementById("cart").innerHTML = content;
        document.getElementById('nazwa_Produktu').innerHTML = temp.name;
        document.getElementById('cena').innerHTML = temp.cena;
        document.getElementById('kolor').innerHTML = temp.color;
        document.getElementById('ilosc').innerHTML = temp.amount; 
    }
  }

  function wyczysc(){
    document.getElementById("name").value = '';
    document.getElementById("email").value = '';
    document.getElementById("phone").value = '';
    document.getElementById("date").value = '';
    document.getElementById("time").value = '';
  }