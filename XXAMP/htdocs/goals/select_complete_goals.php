  <?php
function ShowComplete ()	
	{	
	  require 'connect_goalsDB.php';
      
	  $sql = "SELECT * FROM goals WHERE goal_complete=1";
	  
      $result = mysqli_query($conn, $sql) or die(mysqli_error($conn));
      //Complete Goals
      print("<h2>Complete Goals</h2>");
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
            echo "<div class='goalComplete'>";
            echo "<a href='delete_goals_by_id.php?id=" . $row['goal_id'] . "'><button class='button btnDelete'>Delete</button></a><strong>";
            echo  "<a href='update_complete_goals_by_id.php?id=" . $row['goal_id']. "&up=0'> <button class='button btnIncomplete'>Incomplete</button></a><strong>";
			echo  $cat . "</strong><p>" . $row['goal_text'] . "</p>Goal Date: " . $row['goal_date'];
            echo "</div>";
      }
    }
	
     ?>
   