<?php

/****
1. maak er een POST request van met jQuery
2. Check in deze PHP file of het ook echt een POST request is.. if/else --> error, etc.
3. Check of naam, bedrijf niet leeg is en meer dan 3 karanters hebben
4. Check of email valid is
5. tijd moet een positieve integer zijn

dan escapen
dan de PDO jQuery
en echo terug naar AJAX voor het succes afhaneling
else een echo terug met error afhandeling
********/

  if (isset($_POST)) {
    $pdo = new PDO("mysql:host=localhost; dbname=findmiep", 'root', '');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    //print_r($_POST);
    $succes = true;

    function test_input($data) {
      $data = trim($data);
      $data = stripslashes($data);
      $data = htmlspecialchars($data);
      return $data;
    }

    $naam = test_input($_POST['naam']);
    $email = test_input($_POST['email']);
    $email = filter_var($email, FILTER_SANITIZE_EMAIL);
    $bedrijf = test_input($_POST['bedrijf']);
    $tijd = $_POST['tijd'];
    $actie = $_POST['actie'];
    $errors = [];

  if (strlen($naam)<3) {
      $errors['nameErr'] = 'Te weinig characters';

    }

  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
          $errors['emailErr'] = "$email is geen geldig email adres";
      }

  if (strlen($bedrijf)<3) {

            $errors['bedrijfErr'] = 'Te weinig characters';
        }

  if ($actie !== "true") {

            $errors['actieErr'] = 'Ga akkoord met de actievoorwaarden!';

        }

      //$err_arr = array('nameErr'=>$name_err, 'emailErr'=>$email_err, 'bedrijfErr'=>$bedrijf_err, 'actieErr'=>$actie_err);

if (count($errors)) {
  echo json_encode($errors);
}

else {
  $insertmiep= $pdo->prepare('INSERT INTO mieps(naam, email, bedrijf, curtime, actie) VALUES(?,?,?,?,?)');
  $insertmiep->execute(array($naam,$email,$bedrijf,$tijd,1));
}

}

else{

    echo "no post request";

  }

 ?>
