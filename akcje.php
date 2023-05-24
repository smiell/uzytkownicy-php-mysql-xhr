<?php

include("db_connect.php");

if( isset($_GET['adduser'] )) {
    echo 'Użytkownik został dodany. <br /> <a href="index.php"> <b>Wróć na wcześniejszą stronę</b> </a>';

    // Create connection
    $conn = new mysqli($DB_servername, $DB_username, $DB_password, $DB_name);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $imie = $_POST['imie'];
    $nazwisko = $_POST['nazwisko'];
    $nrTelefonu = $_POST['nrTel'];
    $pesel = $_POST['nrTel'];
    $obywatelstwo = $_POST['obywatelstwo'];
    $rezydencjaPodatkowa = $_POST['rezydencjaPodatkowa'];

    $sql = "INSERT INTO `uzytkownicy` (`id`, `imie`, `nazwisko`, `nrTel`, `pesel`, `obywatelstwo`, `rezydencjaPodakowa`) VALUES (NULL, '$imie', '$nazwisko', '$nrTelefonu', '$pesel', '$obywatelstwo', '$rezydencjaPodatkowa')";
    $result = $conn->query($sql);
    
    $conn->close();
    
    exit;


}

if( isset( $_GET['usunUzytkownika'] ) ) {
    echo 'usun usera o id: '.$_GET['id'];

    // Create connection
    $conn = new mysqli($DB_servername, $DB_username, $DB_password, $DB_name);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $IDUseraDoUsuniecia = $_GET['IDUseraDoUsuniecia'];

    $sql = "DELETE FROM `uzytkownicy` WHERE `uzytkownicy`.`id` = $IDUseraDoUsuniecia";
    $result = $conn->query($sql);
    
    $conn->close();
    
    exit;

}

if( isset($_GET['adduserJSON'] )) {
    header('Content-type: application/json');

    // Create connection
    $conn = new mysqli($DB_servername, $DB_username, $DB_password, $DB_name);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    
    $zapytaniePayload = file_get_contents("php://input");
    $NowaUzytkownikData = json_decode($zapytaniePayload, true);

    //print_r($NowaUzytkownikData);

    //echo $NowaUzytkownikData['ImieUzytkownika'];

    $imie = $NowaUzytkownikData['ImieUzytkownika'];
    $nazwisko = $NowaUzytkownikData['NazwiskoUzytownika'];
    $nrTelefonu = $NowaUzytkownikData['NrTelefonuUzytkownika'];
    $pesel = $NowaUzytkownikData['PeselUzytkownika'];
    $obywatelstwo = $NowaUzytkownikData['ObywatelstwoUzytkownika'];
    $rezydencjaPodatkowa = $NowaUzytkownikData['RezydencjaPodatkowaUzytkownika'];

    $sql = "INSERT INTO `uzytkownicy` (`id`, `imie`, `nazwisko`, `nrTel`, `pesel`, `obywatelstwo`, `rezydencjaPodakowa`) VALUES (NULL, '$imie', '$nazwisko', '$nrTelefonu', '$pesel', '$obywatelstwo', '$rezydencjaPodatkowa')";
    $result = $conn->query($sql);

    $IDNowegoUsera = mysqli_fetch_assoc( mysqli_query($conn, "SELECT id FROM `uzytkownicy` ORDER BY id DESC LIMIT 1;") );

    $JakieJestIDNowegoUsera = $IDNowegoUsera['id'];
    
    $conn->close();      

    $responseData = array(
        "responseType" => "success",
        "responseMessage" => "Dodano nowego użytkownika.",
        "IDNowegoUsera" => $JakieJestIDNowegoUsera
    );

    echo json_encode( $responseData, true );

    exit;


}