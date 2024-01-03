
 window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        document.getElementById("nutbacktotop").style.display = "block";
    }
    document.getElementById('nutbacktotop').addEventListener("click", function(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });