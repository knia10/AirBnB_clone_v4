// A $( document ).ready() block.
const dir = {};
$( document ).ready(function() {
  $("input[type=checkbox]").change(function(){
    if ($(this).prop('checked')) {
      dir[$(this).attr('data-id')] = $(this).attr('data-name');
    } else if (!$(this).prop('checked')) {
      delete dir[$(this).attr('data-id)];
    }