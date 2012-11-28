$(function(){
  $(".divopener").click(function(){
    divId = $(this).attr("id");
    selectedRadioGroup = $("input[type='radio'][radio_grp_id = "+divid+"]")
    show_custom_div_corresponding_to_checked_radio(selectedRadioGroup)
  })
})

function show_div_corresponding_to_checked_radio(selectedRadioGroup){  
  radioId = selectedRadioGroup.filter(':checked').attr('radio_grp_id')
  radioType = selectedRadioGroup.attr("div_display")

  if(radioType == 'yellow_table'){
    $("#yellow_table_"+radioId).show();   
  }else if(schedule_val == 'orange_table'){
    $("#orange_table_"+schedid).hide();
    $("#yellow_table_"+schedid).show();
  }
}
