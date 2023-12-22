  <?php
    function ShowInComplete ()	
	{	
	  require 'connect_goalsDB.php';
      $sql = "SELECT * FROM goals  WHERE goal_complete=0";
      $result = mysqli_query($conn, $sql) or die(mysqli_error($conn));
      print("<h2>Incomplete Goals</h2>");
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
          echo "<div class='goal'>";
		  
		

            echo "<a href='update_complete_goals_by_id.php?id=" . $row['goal_id'] . "&up=1'>
            <button class='btnComplete'>Complete</button></a><strong>";

            echo  $cat . "</strong><p>" . $row['goal_text'] . "</p>Goal Date: " . $row['goal_date'];
            echo "</div>";
     
      }
	}
	
  
     ?>
   