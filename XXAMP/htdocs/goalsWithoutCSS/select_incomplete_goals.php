  <?php
    function ShowInComplete ()	
	{	
	  require 'connect_goalsDB.php';
      $sql = "SELECT * FROM goals  WHERE goal_complete=0";
      $result = mysqli_query($conn, $sql) or die(mysqli_error($conn));
      print("Incomplete Goals<br>");
      //Incomplete Goals
      while($row = mysqli_fetch_array($result))
	  {
            if($row['goal_category'] == 0){
              $cat = "Personal";
            } elseif ($row['goal_category' == 1]) {
              $cat = "Professional";
            } else {
              $cat = "Other";
            }
            
		
			echo "<div class='$cat incomplete'>";
            echo "<a href='update_complete_goals_by_id.php?id=" . $row['goal_id'] . "&up=1'>
            Complete</a><br>";

            echo  $cat . $row['goal_text'] . "<br> Goal Date: " . $row['goal_date'];
			echo "</div>";            
     
      }
	}
	
  
     ?>
   