$(function(){
    let chk = $("#chk")
    // console.log(chk);
    
    $(".closeBtn").click(funtion(){
if(chk.is(":checked")){
    $.cookie("popup" , "none" , {expires:3 , path:"/"})
}
    })
})