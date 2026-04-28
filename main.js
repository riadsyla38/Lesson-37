$('#sort').sortable();

// $(function() {
//     $('#accordion').accordion()
// });

$(function() {
    $('#accordion').accordion({
        collapsible: true,
    });
});

$('#tabs').tabs();
$('#resizableBox').resizable();

$(function() {
    $('#draggable').draggable();
    $('#droppable').droppable({
        drop :function(){
            $(this).html("Dropped");
            $(this).css("background-color", "red");
        }
    });
});