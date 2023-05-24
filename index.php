<html>
<head>

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
  <link rel="stylesheet" href="style.css">

  <title>Użytkownicy w bazie</title>

</head>

<body>


<?php

  include("db_connect.php");


  // Create connection
  $conn = new mysqli($DB_servername, $DB_username, $DB_password, $DB_name);
  // Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

  ?>

<div class="w3-cell-row">
<div class="w3-container w3-cell">

  <h3>Tabela użytkowników w bazie</h3>
  <div id="Tabela-scroll">
  <table id="TabelaUzytkownicy" class="w3-table-all w3-bordered w3-striped w3-border w3-hoverable">
  <tr>
    <th>ID usera</th>
    <th>Imie i nazwisko</th>
    <th>Nr. telefonu</th>
    <th>Pesel</th>
    <th>Obywatelstwo</th>
    <th>rezydencja podatkowa</th>
    <th>Usuń uzytkownika</th>
  </tr>
  <?php

  $sql = "SELECT * FROM uzytkownicy";
  $result = $conn->query($sql);

  if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
      echo '<tr id="UserRow-'. $row['id'] .'">';
      echo '<td>'.$row['id'].'</td>';
      echo '<td>'.$row['imie'].' '.$row['nazwisko'];
      echo '<td>'.$row['nrTel'].'</td>';
      echo '<td>'.$row['pesel'].'</td>';
      echo '<td>'.$row['obywatelstwo'].'</td>';
      echo '<td>'.$row['rezydencjaPodakowa'].'</td>';
      echo '<td><button id="user-'.$row['id'].'" onclick="UsunUzytkownika(0,'. $row['id'] .' );" class="w3-button w3-purple">Usuń użytkownika</button></td>';
      echo '</tr>';
    }
  } else {
    echo "0 results";
  }
  $conn->close();

  ?>

  </table>
  </div>

</div>

<div class="w3-container w3-cell">
    <h3>Dodaj użytkownika</h3>

    <form class="w3-container" action="akcje.php?adduser" method="POST">

        <label>Imie</label>
        <input id="imie" name="imie" class="w3-input" type="text">

        <label>Nazwisko</label>
        <input id="nazwisko" name="nazwisko" class="w3-input" type="text">

        <label>nr. tel</label>
        <input id="nrTel" name="nrTel" class="w3-input" type="phone">

        <label>Pesel usera</label>
        <input id="pesel" name="pesel" class="w3-input" type="text">

        <label>obywatelstwo</label>
        <input id="obywatelstwo" name="obywatelstwo" class="w3-input" type="text">

        <label>rezydencja podatkowa</label>
        <input id="rezydencjaPodatkowa" name="rezydencjaPodatkowa" class="w3-input" type="text">

        <button type="submit" class="w3-btn w3-blue w3-margin-top">Dodaj usera PHP</button></p>

    </form>

    <div class="w3-container w3-margin-top">
      <button id="DodajUseraaa" class="w3-btn w3-green">Dodaj usera JSON</button>
    </div>


</div>
</div>

<script src="main.js"></script>

</body>
</html>