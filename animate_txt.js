$( document ).ready(function() {

  if ($("#cursor-txt").length > 0 ) {
    var f = document.getElementById('cursor-txt');
    setInterval(function() {
       f.style.visibility = (f.style.visibility == 'hidden' ? 'visible' : 'hidden');
     }, 500);
  }

  if ($(".elements").length > 0 && $("#element").length > 0) {


    var elements = $(".elements");
    var no_elements = elements.length;

    for (var i = 0; i < no_elements; i++) {
      elements[i].style.display = "none";
    }

    var curr_ele = 0

    var txt = elements[0].innerHTML.trim();
    var len = txt.length;
    document.getElementById('element').innerHTML = "";

    var curr_loc = -1;
    setInterval(myTimer, 200);

    function myTimer() {
      if (len == curr_loc) {
        curr_loc = 1;
        document.getElementById('element').innerHTML = "";
        if (curr_ele < no_elements -1) {
          curr_ele = curr_ele + 1;
        }else {
          curr_ele = 0;
        }
         txt = elements[curr_ele].innerHTML.trim();
         len = txt.length;
      }
      else{
        curr_loc = curr_loc + 1;
      }
        document.getElementById('element').append(txt.substring(curr_loc-1, curr_loc));
    }
  }

});
