var posts=["24413.html","37773.html","62277.html","37774.html","36891.html","30762.html","54380.html","12162.html","26793.html","812353.html","49824.html","37013.html","53509.html","48669.html","21513.html","16525.html","16525.html","20970.html","56164.html","8540.html","33021.html","41063.html","9571.html","42063.html","18751.html","19895.html","17793.html","14146.html","59356.html","43892.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};