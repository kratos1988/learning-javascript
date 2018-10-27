$(function() {
    $('[data-name]').click(
        function () {
            var target = $(this).data('name');
            $('[data-' + target + ']').tab('show')
        }
    )
})
