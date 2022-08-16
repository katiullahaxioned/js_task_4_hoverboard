window.addEventListener("load", function () {
    var wrapper = document.querySelector(".wrapper");
  
    for (var i = 1; i < 500; i++) {
      wrapper.innerHTML += '<span class="box">box1</span>';
    }
  
    var box = document.querySelectorAll(".box");
  
    box.forEach(function (element) {
      element.addEventListener("mouseover", function () {
        var a = Math.random() * Math.pow(10, 6);
        var b = Math.trunc(a).toString();
        var c;
  
        if (b.length == 2 || b.length == 5) {
          c = "#0" + b;
        } else {
          c = "#" + b;
        }
  
        setTimeout(function () {
          element.style.backgroundColor = c;
          element.style.boxShadow = "0 0 5px" + c + "," + "0 0 10px" + c;
          setTimeout(function () {
            element.style.backgroundColor = "#1e1c1e";
            element.style.boxShadow = "none";
          }, 500);
        }, 50);
      });
    });
  });  