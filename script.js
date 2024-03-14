document.addEventListener('mousemove', function(e) {
    // var tracker = document.createElement('div');
    // tracker.className = 'tracker';
    // document.body.appendChild(tracker);
    // trackerring.className = 'tracker-ring';
    // document.body.appendChild(trackerring);

    // var trackerring = document.createElement('div');
    
    var tracker = document.querySelector('.tracker');
    var trackerring = document.querySelector('.trackerring');
    var x = e.clientX;
    var y = e.clientY;
    console.log(x,y)
    // tracker.style.left = tracker-ring = x + 'px';
    // tracker.style.top = tracker-ring = y + 'px';
    tracker.style.cssText = trackerring.style.cssText = "left: " + x +"px ; top: " + y + "px;"
  });

