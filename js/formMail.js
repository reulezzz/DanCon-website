$("#sendMail").on("click", function() {
 var name = $("#name").val().trim();
 var email = $("#email").val().trim();
 var message = $("#message").val().trim();


if(email == "") {
    $("#errorMess").text("Введите email");
    return false;
} else if(name == "") {
    $("#errorMess").text("Введите имя");
    return false;
} else if(message == "") {
    $("#errorMess").text("Введите сообщение");
    return false;
}

$("#errorMess").text("");

$.ajax({
  url: 'ajax/mail.php',
  type: 'POST',
  cache: false,
  data: { 'name':name, 'email':email, 'message':message },
  dataType: 'html',
  beforeSend: function() {
    $("#sendMail").prop("disabled", true);
  },
  success: function(data) {
    if(!data)
    alert("Возникли ошибки с сервером, попробуйте чуть позже.");
else
    $("#form_input").trigger("reset");
    
    $("#sendMail").prop("disabled", false);
  }
});


});
