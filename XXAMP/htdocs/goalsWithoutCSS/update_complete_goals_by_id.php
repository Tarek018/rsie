<?php

require_once 'connect_goalsDB.php';

$id = $_REQUEST['id'];
$up = $_REQUEST['up'];


$sql = "UPDATE goals SET goal_complete = '$up' WHERE goal_id = '" . $id . "'";
echo $sql;
if(mysqli_query($conn, $sql)){
  print ("Stored");
} else {
  print("Failed");
}

echo "<script>location.href='index.php'</script>";  // JS location befor return to index.php


?>
