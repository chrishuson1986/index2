$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var q1 = $("#q1").val();
    var q2 = $("#q2").val();
    var q3 = $("#q3").val();


    if ((q1==="very") && (q2==="fast") && (q3==="mobile")) {
      $("#result1").show();
      $("#result2").hide();
      $("#result3").hide();
      $("#form-quiz").hide();
      $("#form-dummy").hide();
    }
    else  if ((q1==="very") && (q2==="fast") && (q3==="computer")) {
      $("#result1").show();
      $("#result2").hide();
      $("#result3").hide();
      $("#form-quiz").hide();
      $("#form-dummy").hide();
    }
    else if ((q1==="very") && (q2==="slow") && (q3==="mobile")) {
      $("#result1").show();
      $("#result2").hide();
      $("#result3").hide();
      $("#form-quiz").hide();
      $("#form-dummy").hide();
    }
    else if ((q1==="very") && (q2==="slow") && (q3==="computer")) {
      $("#result1").show();
      $("#result2").hide();
      $("#result3").hide();
      $("#form-quiz").hide();
      $("#form-dummy").hide();
    }
    else if ((q1==="less") && (q2==="fast") && (q3==="mobile")) {
      $("#result1").show();
      $("#result2").hide();
      $("#result3").hide();
      $("#form-quiz").hide();
      $("#form-dummy").hide();
    }
    else if ((q1==="less") && (q2==="fast") && (q3==="computer")) {
      $("#result1").show();
      $("#result2").hide();
      $("#result3").hide();
      $("#form-quiz").hide();
      $("#form-dummy").hide();
    }
    else if ((q1==="less") && (q2==="slow") && (q3==="mobile")) {
      $("#result1").show();
      $("#result2").hide();
      $("#result3").hide();
      $("#form-quiz").hide();
      $("#form-dummy").hide();
    }
    else if ((q1==="less") && (q2==="slow") && (q3==="computer")) {
      $("#result1").show();
      $("#result2").hide();
      $("#result3").hide();
      $("#form-quiz").hide();
      $("#form-dummy").hide();
    }
    event.preventDefault();
  });
});
