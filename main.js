console.log("dupek");

function UsunUzytkownika(kiedy,IDUsera) {
    //sprawdz czy usuniecie ma byc teraz czy opoznione
    if( kiedy == 0 ) {
        //jesli czas jest wiekszy od zera to zrob opoznienie
        WyslijRequestUsunieciaUsera();
    }
    else {
        //jesli czas nie jest wiekszy, badz rowny zero to zrob ją odrazu
        setTimeout(WyslijRequestUsunieciaUsera, 5000);

        let ButtonCofajacyDodanieUsera = document.getElementById('user-'+IDUsera);
        console.log(ButtonCofajacyDodanieUsera);
        ButtonCofajacyDodanieUsera.classList.remove("w3-button", "w3-yellow");
        ButtonCofajacyDodanieUsera.classList.add("w3-button", "w3-red");

        ButtonCofajacyDodanieUsera.classList.add("disabled");
        ButtonCofajacyDodanieUsera.style.pointerEvents = "none";
       
    }

    console.log("Kiedy usunąć: "+kiedy);


    function WyslijRequestUsunieciaUsera() {
        // 1. Create a new XMLHttpRequest object
        let xhr = new XMLHttpRequest();

        // 2. Configure it: GET-request for the URL /article/.../load
        let CallAddress = 'akcje.php?usunUzytkownika&IDUseraDoUsuniecia='+IDUsera;
        //console.log(CallAddress);

        xhr.open('POST', CallAddress);

        // 3. Send the request over the network
        xhr.send();

        // 4. This will be called after the response is received
        xhr.onload = function() {
            if (xhr.status == 200) { // analyze HTTP status of the response
                //alert(`OK wykonano ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
                console.log("Usunięto usera o id: "+IDUsera+" Sukces.");

                let FormattUserRow = 'UserRow-'+IDUsera;
                document.getElementById(FormattUserRow).style.display = 'none';
            } 
            if (xhr.status != 200) { // show the result
                alert(`Błąd, nie wykonano. Sprawdź konfiguracje ${xhr.response.length} bytes`); // response is the server response
                console.log(xhr.responseText);
            }
        };
    };

}

const DodajUsera = document.getElementById('DodajUseraaa');

DodajUsera.addEventListener("click", DodajUzytkownika);

function DodajUzytkownika() {
    let ImieUsera = document.getElementById('imie').value;
    let NazwiskoUsera = document.getElementById('nazwisko').value;
    let NrTelefonu = document.getElementById('nrTel').value;
    let PeselUsera = document.getElementById('pesel').value;
    let Obywatelstwo = document.getElementById('obywatelstwo').value;
    let RezydencjaPodatkowa = document.getElementById('rezydencjaPodatkowa').value;

    UzytkownikPakietDanych = {
        ImieUzytkownika : ImieUsera,
        NazwiskoUzytownika : NazwiskoUsera,
        NrTelefonuUzytkownika : NrTelefonu,
        PeselUzytkownika : PeselUsera,
        ObywatelstwoUzytkownika : Obywatelstwo,
        RezydencjaPodatkowaUzytkownika : RezydencjaPodatkowa
    };

    // 1. Create a new XMLHttpRequest object
    let xhr = new XMLHttpRequest();

    // 2. Configure it: GET-request for the URL /article/.../load
    let CallAddress = 'akcje.php?adduserJSON';

    xhr.open('POST', CallAddress);
    xhr.setRequestHeader( "Content-Type", "application/json" );

    // 3. Send the request over the network
    const JSONToSend = JSON.stringify(UzytkownikPakietDanych);
    xhr.send( JSONToSend );

    // 4. This will be called after the response is received
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //console.log(this.responseText);
            var xhttpToJsonResponse = JSON.parse(this.responseText);
    
            if(xhttpToJsonResponse['responseType'] != 'success') {
                //bład po stronie użytkownika
                console.log("tutaj blad: responseType not success");
                BladDodawniaUzytkownika("UserMistake");
            }
            else {
                //sukces
                DodajGoDoTabeliHTML(UzytkownikPakietDanych, xhttpToJsonResponse['IDNowegoUsera']);

            }

        }

        if( this.status != 200 ) {
            console.log("tutaj blad: Internal Server Error");
            BladDodawniaUzytkownika("InternalError");
        }
    };

    function BladDodawniaUzytkownika(ErrorType) {
        if( ErrorType == "UserMistake" ) {
            console.log("Nie dodano uzytkownika. Popraw błędy w formularzu lub spróbój ponownie.");
        }

        if( ErrorType == "InternalError" ) {
            console.log("Nie dodano uzytkownika. Skontaktuj się z administratorem.");
        }
        
    };


    function KoloryzujNaChwileWiersz (wiersz, typ) {

        if( typ == "NowyUser" ) {
            wiersz.style.backgroundColor = "rgba(46, 187, 97, 0.46)";

            setTimeout( function () {
                wiersz.style.backgroundColor = "transparent";
            }, 2500 );   
        }

        if( typ == "CofnijDodanieUsera" ) {
            wiersz.style.backgroundColor = "rgba(255, 0, 0, 0.56)";

            setTimeout( function () {
                wiersz.style.backgroundColor = "transparent";
            }, 2500 ); 
        }

    };

    function DodajGoDoTabeliHTML(DaneUseraArray, IDNowegoUsera) {
        console.log(DaneUseraArray);
        console.log("ID nowego usera to: "+IDNowegoUsera);

        const TabelaUzytkownicy = document.getElementById("TabelaUzytkownicy");

        //stworzenie wiersza w tabeli
        let wiersz = document.createElement("tr");

        //dodaj ID do wiersza
        wiersz.setAttribute("id", "UserRow-"+IDNowegoUsera);

        //stworzenie pól w tabeli
        let c1 = document.createElement("td");
        let c2 = document.createElement("td");
        let c3 = document.createElement("td");
        let c4 = document.createElement("td");
        let c5 = document.createElement("td");
        let c6 = document.createElement("td");
        let c7 = document.createElement("td");

        //wlozenie danych do pól
        c1.innerHTML = IDNowegoUsera;
        c2.innerHTML = DaneUseraArray['ImieUzytkownika']+" "+DaneUseraArray['NazwiskoUzytownika'];
        c3.innerHTML = DaneUseraArray['NrTelefonuUzytkownika'];
        c4.innerHTML = DaneUseraArray['ObywatelstwoUzytkownika'];
        c5.innerHTML = DaneUseraArray['PeselUzytkownika'];
        c6.innerHTML = DaneUseraArray['RezydencjaPodatkowaUzytkownika'];

        let CofnijDodanieUseraButton = '<button id="user-'+IDNowegoUsera+'" onclick="UsunUzytkownika(5000,'+IDNowegoUsera+');" class="w3-button w3-yellow">Cofnij użytkownika</button>';

        c7.innerHTML = CofnijDodanieUseraButton;

        //dodanie pol do tabeli
        wiersz.appendChild(c1);
        wiersz.appendChild(c2);
        wiersz.appendChild(c3);
        wiersz.appendChild(c4);
        wiersz.appendChild(c5);
        wiersz.appendChild(c6);
        wiersz.appendChild(c7);

        //dodanie wiersza do tabeli
        TabelaUzytkownicy.appendChild(wiersz);

        wiersz.scrollIntoView( {behavior: "smooth"} );

        //zakoloryzowanie na chwile wiersza by się podświetlił, a potem powrót do normalności
        KoloryzujNaChwileWiersz(wiersz, "NowyUser");      


    };    

    //console.log(UzytkownikPakietDanych);
}
