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
