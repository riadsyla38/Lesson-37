$(function() {
    $('#draggable').draggable();
    $('#droppable').droppable({
        drop :function(){
            $(this).html("Dropped");
            $(this).css("background-color", "red");
        }
    });
});