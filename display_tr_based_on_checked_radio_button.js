$(function(){
  $(".divopener").click(function(){
    divid = $(this).attr("id");
    selectedradiogroup = $("input[type='radio'][radio_grp_id = "+divid+"]")
    show_custom_div_corresponding_to_checked_radio(selectedradiogroup)
  })
})

function show_div_corresponding_to_checked_radio(selected_radio_group){  
  radio_id = selected_radio_group.filter(':checked').attr('radio_grp_id')
  radio_type = selected_radio_group.attr("div_display")

  if(radio_type == 'yellow_table'){
    $("#yellow_table_"+radio_id).show();   
  }else if(schedule_val == 'orange_table'){
    $("#orange_table_"+schedid).hide();
    $("#yellow_table_"+schedid).show();
  }
}