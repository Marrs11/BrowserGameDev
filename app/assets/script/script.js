(function (global, $) {

    var health;
    health = 100;

    var damage;
    damage = 20;

    document.getElementById('my-health').innerHTML += health + '<br/>'; //prints the value

    $("#pushThisButton").click(function () {
        document.getElementById('my-damage').innerHTML += damage; //prints the value
    });

    $("#pushThisButton").click(function () {
        document.getElementById('my-output').innerHTML += health - damage; //prints the value
    });




}(window, jQuery));
