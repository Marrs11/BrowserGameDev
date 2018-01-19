(function (global, $) {

    var health;
    health = 100;

    var damage;
    damage = 20;

    $("#pushThisButton").click(function () {
        document.write (health - damage); //prints the value
    });




}(window, jQuery));
