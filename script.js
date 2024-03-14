const typed = new Typed('.auto_type',{
  string:["Frontend Developer" , "MERN Starck Developer" , "Codding and Sleep"],
  typeSpeed:150,
  backSpeed:150,
})

document.addEventListener('mousemove', function(e) {    
    var tracker = document.querySelector('.tracker');
    var trackerring = document.querySelector('.trackerring');
    var x = e.clientX;
    var y = e.clientY;
    console.log(x,y)
    // tracker.style.left = tracker-ring = x + 'px';
    // tracker.style.top = tracker-ring = y + 'px';
    tracker.style.cssText = trackerring.style.cssText = "left: " + x +"px ; top: " + y + "px;"
  });

