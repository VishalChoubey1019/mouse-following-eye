var ball = document.getElementsByClassName("ball");

document.onmousemove = function()
{
    var xcor = event.clientX * 100 / window.innerWidth + "%";
    var ycor = event.clientY * 100 / window.innerHeight + "%";
    for(var i = 0 ; i<2 ; i++)
    {
        ball[i].style.left = xcor;
        ball[i].style.top  = ycor;
        ball[i].style.transform = "translate(-"+xcor+" , -"+ycor+")";
    }
}