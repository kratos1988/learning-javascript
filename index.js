$(function() {
    $('[data-name]').click(
        function () {
            console.log("Clicked " + $(this))
            var selected = $(document).find('#' + $(this).data('name') + '')
            selected.show()
        }
    )
})
