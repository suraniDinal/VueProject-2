$(".counter-stat").each(function () {
    var $this = $(this),
    countTo = $this.attr("data-countto");
    countDuration = parseInt($this.attr("data-duration"));
    $({ counter: $this.text() }).animate(
      {
        counter: countTo
      },
      {
        duration: countDuration,
        easing: "linear",
        step: function () {
          $this.text(Math.floor(this.counter));
        },
        complete: function () {
          $this.text(this.counter);
        }
      }
    );
});

// $(window).on("load resize",function() {
//     var i = 0
//     var j = 0
//     var counters = $(".counter-stat");
//     var countersQuantity = counters.length;
//     var counter = [];
  
//     for (i = 0; i < countersQuantity; i++) {
//       counter[i] = parseInt(counters[i].innerHTML);
//     }
  
//     var count = function(start, value, id) {
//       var localStart = start;
//       setInterval(function() {
//         if (localStart < value) {
//           localStart++;
//           counters[id].innerHTML = localStart;
//         }
//       }, 4);
//     }
  
//     for (j = 0; j < countersQuantity; j++) {
//       count(0, counter[j], j);
//     }
//   });