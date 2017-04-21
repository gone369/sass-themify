require("./main.scss");

(function(){


  function getStyle(oElm, css3Prop){
    var strValue = "";
    if(window.getComputedStyle){
      strValue = getComputedStyle(oElm).getPropertyValue(css3Prop);
    }
    //IE
    else if (oElm.currentStyle){
      try {
        strValue = oElm.currentStyle[css3Prop];
      } catch (e) {}
    }
    return strValue;
  }


  window.onload = function(){


    var buttons = document.getElementsByClassName("flex-item");
    var $box = document.getElementById("box");
    var $text = document.getElementById("text");
    var $backgroundColorSpan = document.getElementById("background-color");
    var $borderColorSpan = document.getElementById("border-color");
    var $textColorSpan = document.getElementById("text-color");

    function populateDescription(){
      var backgroundColor = getStyle($box,"background-color");
      var borderColor = getStyle($box,"border-color");
      var textColor = getStyle($text,"color");

      $backgroundColorSpan.innerHTML = backgroundColor;
      $borderColorSpan.innerHTML = borderColor;
      $textColorSpan.innerHTML = textColor;

    }

    populateDescription();

    for (var i = 0; i < buttons.length; i++) {
      var $button = buttons[i];
      $button.addEventListener("click",function(e){
        var key = e.target.attributes.key.value;
        document.getElementById('box').className = "padding " + key;

        populateDescription();

      })
    }
  }

})();
