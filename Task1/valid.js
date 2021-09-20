function validate(){
    var name= document.getElementById("username").value;
    var e= document.getElementById("email").value;
    var p= document.getElementById("password").value;
    var letters = /^[A-Za-z]+$/;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(name=='')
    {
    alert('Please enter your name');
    }
    else if(!letters.test(name))
    {
    alert('Name field required only alphabet characters');
    }
    else if(e=='')
    {
    alert('please enter your user email id');
    }
    else if (!filter.test(e))
    {alert('Invalid email');
    }
    else if(p=='')
    {
    alert('Please enter Password');
    }
    }