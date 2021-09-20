function valid(){
    var name= document.getElementById("username").value;
    var e= document.getElementById("email").value;
    var p= document.getElementById("num").value;
    var l = /^[A-Za-z]+$/;
    var f = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(name=='')
    {
    alert('Please enter your name');
    }
    else if(!l.test(name))
    {
    alert('only characters are accepted');
    }
    else if(e=='')
    {
    alert('please enter your user email id');
    }
    else if (!f.test(e))
    {alert('Invalid email');
    }
    else if(p=='')
    {
    alert('Please enter number');
    }
    }