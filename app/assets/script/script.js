(function (global, $) {
    var newHealth;
    var health;
    health = 100;

    var damage;
    damage = 40;

    /*var medKit;
    medKit = 30;*/

    document.getElementById('my-health').innerHTML += health + '<br/>'; //prints the value

    $("#myClear").click(function () {
        document.getElementById('my-damage').innerHTML += damage; //prints the value
    });

    $("#pushThisButton").click(function () {
      health = health - damage
  document.getElementById('my-output').innerHTML += health; //prints the value
      if(health < 0){
        alert("GAME OVER, YOU LOSE !");
        health = 100;
      }
    });

    /*$("#useMedKit").click(function () {
        document.getElementById('my-heal').innerHTML += health + medKit; //prints the value
    });*/
    //  $("#myClear").click(function clearText(){
    //  document.getElementById('output').value = "";
    //  };
    $("#myClear").click(function clearText(){
     document.getElementById('myClear').value = "";
});




}(window, jQuery));
