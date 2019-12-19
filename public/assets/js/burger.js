// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".testNew").on("click", function(event) {
    console.log($(this));
    var id = $(this).data("id");
    console.log("id " + id);
    var newSleep = $(this).data("newsleep");
    // console.log(newSleep);
    var recenltyDevoured = {
      devoured: "true"
};

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: recenltyDevoured
    }).then(
      function() {
        console.log("changed sleep to", newSleep);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log("Form successfully processed");

    var newBurger = {
      burger_name: $("#ca").val().trim(),
      devoured: $("#devour").val().trim()
    };
    console.log(newBurger);
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-cat").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/cats/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted cat", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
