(function (global, $) {

    var health;
    health = 100;

    var damage;
    damage = 40;

    /*var medKit;
    medKit = 30;*/

    document.getElementById('my-health').innerHTML += health; //prints the Health value

    $("#pushThisButton").click(function () {
        document.getElementById('my-damage').innerHTML += damage; //prints the Damage done value
    });

    $("#pushThisButton").click(function () {
        document.getElementById('my-output').innerHTML += health - damage; //prints the Current Health after the Damage is done
    });

    /*$("#useMedKit").click(function () {
        document.getElementById('my-heal').innerHTML += health + medKit; //prints the value
    });*/






}(window, jQuery));
