document.addEventListener("DOMContentLoaded", main, false);
function main() {
    $('input').keypress(function (event) {
        if (event.which === 13) {
            var itemTxt = $(this).val();
            $(this).val("");
            $("#list").append('<li class="li"><span class="trashicon">X</span>' + itemTxt + '</li>');
        }
    })

    $('li').click(function(){
        $(this).toggleClass("completed");
    })
};