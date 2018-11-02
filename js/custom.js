// Slim scroll started
$(function () {
    $('#scroll').slimScroll({
        allowPageScroll: true,
        height: 'auto',
    });
    $('#code').slimScroll({
        allowPageScroll: true,
        height: 'auto',
    });

});
// end 


// sidebar control

$('#close').on('click',function(){
    $('.left_side_bar ').fadeOut(function(){
        $('.body_content').css(
            'width','100%',
        );
        $('#show').show();
    });

    
});

$('#show').on('click',function(){
    $('.left_side_bar ').show();
    $('.body_content').css('width','80%')
    $('#show').hide();
});

$('#show').hide();


// copy text


var clipboard = new ClipboardJS('#copy', {
    target: function() {
        return document.querySelector('.code_wrapper');
    }
});

var clipboard = new ClipboardJS('#copy1', {
    target: function() {
        return document.querySelector('.code_wrapper1');
    }
});


clipboard.on('success', function(e) {
    console.log(e);
});

clipboard.on('error', function(e) {
    console.log(e);
});
