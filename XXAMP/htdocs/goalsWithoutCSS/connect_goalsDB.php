<?php
$username = 'root';
$password = '';
$dbname = 'goals';
$servername = 'localhost';
// $port = 3603;
$conn = new mysqli($servername, $username, $password, $dbname);

 if ($conn->connect_error) {
 die("Connection failed: " . $conn->connect_error);
}

?>
