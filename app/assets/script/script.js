(function (global, $) {
    var newHealth;
    var health;
    health = 100;

    var damage;
    damage = 40;

    /*var medKit;
    medKit = 30;*/

    document.getElementById('my-health').innerHTML += health + '<br/>'; //prints the value

    $("#pushThisButton").click(function () {
        document.getElementById('my-damage').innerHTML += damage; //prints the value
    });

    $("#pushThisButton").click(function () {
<<<<<<< HEAD
      health = health - damage
  document.getElementById('my-output').innerHTML += health; //prints the value
      if(health < 0){
        alert("GAME OVER, YOU LOSE !");
      }
=======
        health = health - damage
        document.getElementById('my-output').innerHTML += health; //prints the value

>>>>>>> 83b23b2215d7b56f1574be5787ff44cff6f3f222
    });

    /*$("#useMedKit").click(function () {
        document.getElementById('my-heal').innerHTML += health + medKit; //prints the value
    });*/






}(window, jQuery));