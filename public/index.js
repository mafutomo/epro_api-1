$( document ).ready(function() {

    $(".button").click(function(){
      let email = $("#email").val();
      let password = $("#password").val();
      $.ajax({
      url: `/users`,
      type: 'POST',
      data: {
        email: email,
        password_hash: password
      },
      success: function(data) {
        console.log(data);
        // localStorage.setItem("user", data.id)
        // window.location.href = "map.html"
      },
      error: function(data) {
        console.log('password incorrrect');
      }
    })
  })
});
