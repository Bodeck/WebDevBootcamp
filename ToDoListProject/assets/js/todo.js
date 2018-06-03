document.addEventListener("DOMContentLoaded", main, false);
function main() {
    $('input[type="text"]').keypress(function (event) {
        if (event.which === 13) {
            var itemTxt = $(this).val();
            $(this).val("");
            $("#list").append('<li class="li"><span class="trashicon">X</span> ' + itemTxt + '</li>');
        }
    })

    $('ul').on('click', 'li', function () {
        $(this).toggleClass("completed");
    })

    $('ul').on('click', 'span', function (event) {
        $(this).parent().fadeOut(function () {
            $(this).remove();
        });
        event.stopPropagation();
    })

};