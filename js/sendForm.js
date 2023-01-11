function sendform(){
  let name = $('#name-input').val()
  let date = $('#date-input').val()
  let phone = $('#phone-input').val()
  let comment = $('#comment-input').val()
  /*Email.send({
    SecureToken : "39cfacf3-25a8-4034-b1e7-f874cc0ac3e9",
    To : 'tiger.tir.ekb@gmail.com',
    From : "tiger.tir.ekb@gmail.com",
    Subject : "Заявка с TigerTir", 
    Body : `Имя: ${name}, <br>
            Дата праздника: ${date}, <br>
            Телефон: ${phone}, <br>
            Комментарий: ${comment}` 
  }).then(
  message => alert(message)
  );*/
}