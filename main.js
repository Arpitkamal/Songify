var $btn =$('.input-wrapper button');

$btn.on('click' , function () {
    alert('I am clicked ' + $('#name-input').val())
});