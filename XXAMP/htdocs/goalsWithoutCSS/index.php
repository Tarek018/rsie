<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Goal Tracker</title>
    
	<style>
     .Personal{background-color:red}
	 .Professional{background-color:green}
     .Other{background-color:blue}
	 .complete{color:white}
	 .incomplete{color:yellow}
	 
	</style>
  </head>
  <body>
    <div id="container">
      <h1>New Goal</h1>
      <form action="insert_goal.php" method="post">
          <label for="cat">Category</label>
          <select name="cat" id="cat">
              <option value="0">Personal</option>
              <option value="1">Professional</option>
              <option value="2">Other</option>
          </select>
		  <br>
          <label for="text">Goal</label>
          <textarea name="text" id="text"></textarea>
		  <br>
          <label for="goaldate">Date</label>
		  <br>
          <input type="date" id="goaldate" name="goaldate" />
<br><br>
          <button type="submit">Submit Goal</button>
      </form>

<br><br>

     <?php
	 require "select_incomplete_goals.php";
	 ShowInComplete();
	 ?>

<br><br>
     <?php
	 require "select_complete_goals.php";
	 ShowComplete();
	 ?>
	

   </div>
  </body>
</html>
