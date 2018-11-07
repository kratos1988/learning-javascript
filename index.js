$(document).ready(function(){
    $('[data-name]').click(
        function () {
            var target = $(this).data('name');
            console.log(target)
            $('[data-' + target + ']').tab('show')
        }
    )
});
