function agrandir1(){
    $('#img1').animate({'height':'270px'},{'width':'270px'});
    if($('#txt1').is(':hidden')){
        $('#txt1').slideDown('slow');
    }
}

function reduire1(){
    $('#img1').animate({'height':'210px'},{'width':'210px'});
    if($('#txt1').is(':hidden')){

    }
    else{
        $('#txt1').slideUp("slow");
    }
}

function agrandir2(){
    $('#img2').animate({'height':'270px'},{'width':'270px'});
    if($('#txt2').is(':hidden')){
        $('#txt2').slideDown('slow');
    }
}

function reduire2(){
    $('#img2').animate({'height':'210px'},{'width':'210px'});
    if($('#txt2').is(':hidden')){

    }
    else{
        $('#txt2').slideUp("slow");
    }
}

function agrandir3(){
    $('#img3').animate({'height':'270px'},{'width':'270px'});
    if($('#txt3').is(':hidden')){
        $('#txt3').slideDown('slow');
    }
}

function reduire3(){
    $('#img3').animate({'height':'210px'},{'width':'210px'});
    if($('#txt3').is(':hidden')){

    }
    else{
        $('#txt3').slideUp("slow");
    }
}

function agrandir4(){
    $('#img4').animate({'height':'270px'},{'width':'270px'});
    if($('#txt4').is(':hidden')){
        $('#txt4').slideDown('slow');
    }
}

function reduire4(){
    $('#img4').animate({'height':'210px'},{'width':'210px'});
    if($('#txt4').is(':hidden')){

    }
    else{
        $('#txt4').slideUp("slow");
    }
}

function agrandir5(){
    $('#img5').animate({'height':'270px'},{'width':'270px'});
    if($('#txt5').is(':hidden')){
        $('#txt5').slideDown('slow');
        $('.body').removeClass('body').addClass('damso');
    }
}

function reduire5(){
    $('#img5').animate({'height':'210px'},{'width':'210px'});
    if($('#txt5').is(':hidden')){

    }
    else{
        $('#txt5').slideUp("slow");
        $('.damso').removeClass('damso').addClass('body');
    }
}

function agrandir6(){
    $('#img6').animate({'height':'270px'},{'width':'270px'});
    if($('#txt6').is(':hidden')){
        $('#txt6').slideDown('slow');
    }
}

function reduire6(){
    $('#img6').animate({'height':'210px'},{'width':'210px'});
    if($('#txt6').is(':hidden')){

    }
    else{
        $('#txt6').slideUp("slow");
    }
}

function agrandir7(){
    $('#img7').animate({'height':'270px'},{'width':'270px'});
    if($('#txt7').is(':hidden')){
        $('#txt7').slideDown('slow');
    }
}

function reduire7(){
    $('#img7').animate({'height':'210px'},{'width':'210px'});
    if($('#txt7').is(':hidden')){

    }
    else{
        $('#txt7').slideUp("slow");
    }
}

function agrandir8(){
    $('#img8').animate({'height':'270px'},{'width':'270px'});
    if($('#txt8').is(':hidden')){
        $('#txt8').slideDown('slow');
    }
}

function reduire8(){
    $('#img8').animate({'height':'210px'},{'width':'210px'});
    if($('#txt8').is(':hidden')){

    }
    else{
        $('#txt8').slideUp("slow");
    }
}

function poisson(){
    $('#valdpoisson').slideDown('slow');
    $('#controlmp3').slideDown('slow');
    $('#videodesac').slideUp('slow');
}

function desac(){
    $('#videodesac').slideDown('slow');
    $('#valdpoisson').slideUp('slow');
    $('#controlmp3').slideUp('slow');
}