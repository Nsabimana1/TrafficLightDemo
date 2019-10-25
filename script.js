

$(document).ready(function(){
var i = 1;
const clicker = (light)=>{
  if(i % 3 == 1){
    $(`#light${i % 3 - 1}`).addClass("black");
    $(`#light${i % 3}`).removeClass("black");
    $(`#light${i % 3}`).attr("class", "red");
  }else if ( i % 3 == 2) {
    $(`#light${i % 3 - 1}`).addClass("black");
    $(`#light${i % 3}`).removeClass("black");
    $(`#light${i % 3}`).attr("class", "green");
  }else if ( i % 3 == 0) {
    console.log(`light${i % 3}`);
    $(`#light${i % 3 + 2}`).addClass("black");
    $(`#light${i % 3}`).removeClass("black");
    $(`#light${i % 3}`).attr("class", "yellow");
  }
  i += 1;
  console.log("Hello" + i + light);
}
  $("#light1").click(clicker)
  $("#light2").click(clicker)
  $("#light3").click(clicker)
});
