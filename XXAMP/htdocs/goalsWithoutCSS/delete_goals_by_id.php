<?php
require_once 'connect_goalsDB.php';

$id = $_REQUEST['id'];

$sql = "DELETE FROM goals WHERE goal_id = '" . $id . "'";
if(mysqli_query($conn, $sql)){
  print ("Stored");
} else {
  print("Failed");
}

echo "<script>location.href='index.php'</script>";


?>
