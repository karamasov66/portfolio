<?php

$errors = [];

if(!array_key_exists('name', $_POST) || $_POST['name'] == ''){
	$errors['name'] = "Oups, vous n'avez pas renseigné le nom";
}
if(!array_key_exists('email', $_POST) || $_POST['email'] == '' || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)){
	$errors['email'] = "Oups, vous n'avez pas renseigné un email valide";
}
if(!array_key_exists('message', $_POST) || $_POST['message'] == ''){
	$errors['message'] = "Oups, vous n'avez pas indiqué votre demande";
}

session_start();

if(!empty($errors)){
	$_SESSION['errors'] = $errors;
	$_SESSION['inputs'] = $_POST;
	header('location: index.php#contact');
} else { 
		$_SESSION['success'] = 'Votre message a bien été envoyé';
		$message = $_POST['message'];
		$headers = 'FROM: '.$_POST['email'];
		mail('xavier.michy@gmail.com', 'Formulaire de contact', $message, $headers);
		header('location: index.php#contact');
}


