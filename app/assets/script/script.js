
    var health = 100;
    var damageTaken = 10;
    var selfHealPoints = 10;
    var medKitsAvailable = 5;

        function attackHealth() {
            health = health - damageTaken;
            document.getElementById("healthId").setAttribute("style", "width:" + health + "%");
            if (health <= 0){
                alert("You died.");
            }
        }

        function healHealth() {
            health = health + selfHealPoints;
            document.getElementById("healthId").setAttribute("style", "width:" + health + "%");
            if (health > 100){

                alert("Can't over heal");
                document.getElementById("healHealth").disabled = true;
            }
        }
        


