$(document).ready(function(){
  $("#show_hide").click(function(){
    $("#design").toggle();
    $("#show_hide").hide();
  });
  $("#design").click(function(){
    $("#show_hide").toggle();
    $("#design").hide();
  });
  $("#dev_hide").click(function(){
    $("#development").toggle();
    $("#dev_hide").hide();
  });
  $("#development").click(function(){
    $("#dev_hide").toggle();
    $("#development").hide();
  });
  $("#pro_hide").click(function(){
    $("#product").toggle();
    $("#pro_hide").hide();
  });
  $("#product").click(function(){
    $("#pro_hide").toggle();
    $("#product").hide();
  });
  $(".standard").hover(function(){
    $(".caption").fadeIn(250);
  }, function(){
    $(".caption").fadeOut(250);
  }
);
  $(".standard1").hover(function(){
    $(".caption1").fadeIn(250);
  }, function(){
    $(".caption1").fadeOut(250);
  }
);
  $(".standard2").hover(function(){
    $(".caption2").fadeIn(250);
  }, function(){
    $(".caption2").fadeOut(250);
  }
);
  $(".standard3").hover(function(){
    $(".caption3").fadeIn(250);
  }, function(){
    $(".caption3").fadeOut(250);
  }
);
$(".standard4").hover(function(){
  $(".caption4").fadeIn(250);
}, function(){
  $(".caption4").fadeOut(250);
}
);
$(".standard5").hover(function(){
  $(".caption5").fadeIn(250);
}, function(){
  $(".caption5").fadeOut(250);
}
);
$(".standard6").hover(function(){
  $(".caption6").fadeIn(250);
}, function(){
  $(".caption6").fadeOut(250);
}
);
$(".standard7").hover(function(){
  $(".caption7").fadeIn(250);
}, function(){
  $(".caption7").fadeOut(250);
}
);
});
function formValidation() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  if (name.length==0) {
    alert("Please enter Name");
  }else if (email.length==0) {
    alert ("Please enter Email");
  }else if (message.length==0) {
    alert ("Please enter your message");
  } else{
    alert("Hi " + name + " We have received your message. Thank you for reaching out.")
  };
};

/*$("#my_form").bind("submit",function(event){
  event.preventDefault();
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var url = "https://us20.api.mailchimp.com/2.0/lists/subscribe.json?"
            + "apikey=de75f98c83228fca4c2e090e83b56fcd-us20 id="34a5d208f9"
            + "&email[email]=" + email
            + "&merge_VARS[FNAME]=" + name
            + "&double_optin=false"
            + "&send_welcome=false";
  $.ajax({
    type: "POST",
    url: url,
    dataType: 'json',
    success: function(data){
      $("#my_form").html(alert("Thank you"));
    },
    error: function(jqXHR,textStatus,erroThrown){
      alert(errorThrown);
    }
  });
});*/
