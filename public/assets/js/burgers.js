$(function () {
    $(".change-eaten").on("click", function (event) {
        var id = $(this).data("id");
        var newEaten= $(this).data("newEaten");

        var newEaten = {
            eaten: true
        };

        
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEaten
        }).then(
            function () {
                console.log("changed eaten to", newEaten);
              
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
       
        event.preventDefault();

        var newBurger = {
            burger_name: $("#newBurger").val().trim(),
            eaten: 0
        };

        
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("Created new burger");
                
                location.reload();
            }
        );
    });
});