function pokaz(id){
    var tresc="";
    switch (id)
    { 
        case 2: 
        tresc += pokazGalerie();
        document.getElementById('kontener').innerHTML = tresc;
        const galleryLightbox = GLightbox({
            selector: '.gallery-lightbox'
          });
        break;
        default: 
        tresc += pokazKontakt()
        document.getElementById('kontener').innerHTML = tresc;;
    }
}

function pokazKontakt(){
    var tresc="";
    tresc = '<section id="contact" class="contact"><div class="container mt-5"><div class="section-title"><h2><span>Napisz</span> do Nas!</h2><p>Skontaktuj sie z nami mailowo lub zadzwoń.</p></div><div class="info-wrap"><div class="row"><div class="col-lg-3 col-md-6 info"><i class="bi bi-geo-alt"></i><h4>Miejsce:</h4><p>Szkolna 17<br>15-640 Białystok</p></div><div class="col-lg-3 col-md-6 info mt-4 mt-lg-0"><i class="bi bi-clock"></i><h4>Godziny Otwarcia:</h4><p>Poniedziałek-Sobota:<br>9:00-20:00</p><br><p>Niedziela:<br>12:00-18:00</p></div><div class="col-lg-3 col-md-6 info mt-4 mt-lg-0"><i class="bi bi-envelope"></i><h4>Email:</h4><p>info@pgryl.com</p></div><div class="col-lg-3 col-md-6 info mt-4 mt-lg-0"><i class="bi bi-phone"></i><h4>Zadzwoń:</h4><p>+48 123 456 789<br>+48 987 654 321</p></div></div></div></div><br/><div class="map"><iframe style="border:0; width: 100%; height: 350px;" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Szkolna%2017,%20Bia%C5%82ystok+(PsznyGryl)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" frameborder="0" allowfullscreen></iframe></div></section>';
    return tresc;
}

function pokazGalerie(){
    var tresc = "";
    tresc += '<section id="gallery" class="gallery"><div class="container-fluid"><div class="section-title"><h2>Zdjęcia <span>z naszej restauracji</span></h2></div> <div class="row g-0">';
    for(let i = 1; i < 9; i++){
        tresc += '<div class="col-lg-3 col-md-4"><div class="gallery-item">';
        tresc += '<a href="assets/img/gallery/gallery-'+i+'.jpg" class="gallery-lightbox">';
        tresc += '<img src="assets/img/gallery/gallery-'+i+'.jpg" alt="" class="img-fluid">'
        tresc+= '</a></div></div>';
    }
    tresc += '</div></div></section>';
    return tresc;
}