$( document ).ready(function() {

    $(".button").click(function(event){
      event.preventDefault()
      let email = $("#email").val();
      let password = $("#password").val();
      $.ajax({
        url: `https://e-pro-api.herokuapp.com/login`,
        type: 'POST',
        data: {
          email: email,
          password: password
        },
        success: function(data) {
          console.log(data);
        },
        error: function(data) {
          console.log('password incorrrect');
        }
      })
    })
  });
