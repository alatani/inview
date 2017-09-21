var Viewability;
(function (Viewability) {
  Viewability.inview=false
  var lastRefreshed = Date.now();
  var initialized = Date.now();

  var threshold = 100
  var ignore = 100 // 起動からこの時間はin-view扱いしない

  function inviewDetection(callback) {

      function check(timedelta){
        return timedelta < threshold && ignore < (Date.now() - initialized);
      }
  
      function requestAnimFrame() {
          var timedelta = (Date.now() - lastRefreshed)
  
          // 100ms以下で画面更新されたらinviewと仮定する
          Viewability.inview = check(timedelta);
          callback(Viewability.inview);
  
          lastRefreshed = Date.now();
          window.requestAnimationFrame(requestAnimFrame);
      }

      setInterval(function(){
        var timedelta = Date.now() - lastRefreshed;
        Viewability.inview = check(timedelta);
        callback(Viewability.inview)
      }, threshold);
  
      window.requestAnimationFrame(requestAnimFrame);
  }


  //export functions
  Viewability.inviewDetection = inviewDetection;

})(Viewability || (Viewability ={}));


Viewability.inviewDetection(function(inview) {
  if(inview){
    console.log("inview");
  }else{
    console.log("not-inview");
  }
});


