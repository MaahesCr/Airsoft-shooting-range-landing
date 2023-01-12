function sendform(){
  let name = $('#name-input').val()
  let date = $('#date-input').val()
  let phone = $('#phone-input').val() //18
  let comment = $('#comment-input').val()
  name = decodeURI(encodeURIComponent(name));
  comment = decodeURI(encodeURIComponent(comment));
  if (name.length == 0) {
    $('#name-input').css({"backgroundColor":"#ffb0b0"});
  } else if (phone.length != 18) {
    $('#name-input').css({"backgroundColor":"#fff"});
    $('#phone-input').css({"backgroundColor":"#ffb0b0"});
  } else {
    $('#name-input').css({"backgroundColor":"#fff"});
    $('#phone-input').css({"backgroundColor":"#fff"});

    Email.send({
    SecureToken : "39cfacf3-25a8-4034-b1e7-f874cc0ac3e9",
    To : 'tiger.tir.ekb@gmail.com',
    From : "tiger.tir.ekb@gmail.com",
    Subject : "Заявка с TigerTir", 
    Body : `Имя: ${name}, <br>
            Дата праздника: ${date}, <br>
            Телефон: ${phone}, <br>
            Комментарий: ${comment}` 
  }).then(

  );
    $(".events-section__form-shell").fadeOut(); 
    setTimeout(() => {
      $(".events-section__form-success").fadeIn();
      $(".events-section__form-success")
      .css("display", "flex")
    }, 500); 
  }
}