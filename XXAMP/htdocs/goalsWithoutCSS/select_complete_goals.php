  <?php
function ShowComplete ()	
	{	
	  require 'connect_goalsDB.php';
      
	  $sql = "SELECT * FROM goals WHERE goal_complete=1";
	  
      $result = mysqli_query($conn, $sql) or die(mysqli_error($conn));
      //Complete Goals
      print("Complete Goals<br>");
      $result = mysqli_query($conn, $sql) or die(mysqli_error($conn));
      while($row = mysqli_fetch_array($result))
	  {
         if($row['goal_category'] == 0){
              $cat = "Personal";
            } elseif ($row['goal_category' == 1]) {
              $cat = "Professional";
            } else {
              $cat = "Other";
            }
			echo "<div class='$cat complete'>";
            echo "<a href='delete_goals_by_id.php?id=" . $row['goal_id'] . "'>Delete</a><br>";
            echo  "<a href='update_complete_goals_by_id.php?id=" . $row['goal_id']. "&up=0'> Incomplete</a><br>";
			echo  $cat .  $row['goal_text'] . " <br> Goal Date: " . $row['goal_date'];
            echo "</div>";
      }
    }
	
     ?>
   