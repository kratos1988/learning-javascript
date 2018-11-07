$(document).ready(function(){
    $('[data-name]').click(
        function () {
            var target = $(this).data('name');
            $('a.'+target).click();
            // $('[data-' + target + ']').tab('show')
        }
    )
});
