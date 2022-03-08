type_eff_int = -3;
cursor_state = false;
main_text = document.getElementById("date");
cursor = document.getElementById("cursor");
sub_line = document.getElementById("sub_line");
display_text="1 in 8658";
to_diplay=""
death_year="Sadly, it likely will be 2032"
text_num=0

function Update() {
    if(type_eff_int<100 && text_num==0){
        to_diplay = display_text.substring(0, type_eff_int);
        sub_line.innerHTML="Chance of Putin dying in next 24 hours"
        
    }else if(type_eff_int<100 && text_num==1){
        to_diplay = death_year.substring(0, type_eff_int);
        sub_line.innerHTML="We all waiting for that day"
    }else if(type_eff_int>100&&to_diplay.length>0&& text_num==0){
        to_diplay = display_text.substring(0,125-type_eff_int)
        
    }
    else if(type_eff_int>100&&to_diplay.length==0&& text_num==0){
        text_num=1
        type_eff_int=-3
    }else if(type_eff_int>100&&to_diplay.length>0&& text_num==1){
        to_diplay = death_year.substring(0,125-type_eff_int)
    }
    else if(type_eff_int>100&&to_diplay.length==0&& text_num==1){
        text_num=0
        type_eff_int=-3
        
    }if(type_eff_int==100){
        sub_line.style.animation="fadeout 1s linear forwards";
    }if(type_eff_int==0){
        sub_line.style.animation="fadein 1s linear forwards";
    }

    main_text.innerHTML = to_diplay
    type_eff_int = type_eff_int + 1;
    

}
function Update2() {
    if (cursor_state) {
        cursor.style.backgroundColor = "#202020";
        cursor_state=false;
    } else {
        cursor.style.backgroundColor = "#F8F4F8";
        cursor_state=true;
    }
}
setInterval(Update, 100);
setInterval(Update2, 500);