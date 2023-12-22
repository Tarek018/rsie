<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic">
    <link rel="stylesheet" href="./asserts/css/normalize.css">
    <link rel="stylesheet" href="./asserts/css/milligram.min.css">
    <link rel="stylesheet" href="goals.css" />
    <title>Goal Tracker</title>
      <style>
          /* Extending The Inheritances */
// facebook color #3b5998;
// twiter color #55acee;
// linkedln #0977b5;
// red color #e5322d;

          /* Custom color */


          /* Custom size */
          .button-small {
              font-size: .8rem;
              height: 2.8rem;
              line-height: 2.8rem;
              padding: 0 1.5rem;
          }

          .button-large {
              font-size: 1.4rem;
              height: 4.5rem;
              line-height: 4.5rem;
              padding: 0 2rem;
          }

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
          <label for="text">Goal</label>
          <textarea name="text" id="text"></textarea>
          <label for="goaldate">Date</label>
          <input type="date" id="goaldate" name="goaldate" />

          <button type="submit">Submit Goal</button>
      </form>


      <?php
	 require "select_incomplete_goals.php";
	 ShowInComplete();
	 require "select_complete_goals.php";
	 ShowComplete();
	 ?>
	

   </div>
  </body>
</html>
