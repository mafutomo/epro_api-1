$( document ).ready(function() {

    $(".button").click(function(event){
      event.preventDefault()
      let email = $("#email").val();
      let password = $("#password").val();
      $.ajax({
      url: `/users/`,
      type: 'POST',
      data: {
        email: email,
        password: password
      },
      success: function(data) {
        console.log("it's working!", data);
        // localStorage.setItem("user", data.id)
        // window.location.href = "map.html"
      },
      error: function(data) {
        console.log('password incorrrect');
      }
    })
  })
});
