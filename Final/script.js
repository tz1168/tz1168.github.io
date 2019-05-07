function myFunction(){
    var username=document.getElementById('myUsername').value
    var password=document.getElementById('myPassword').value
    if (username==='tz1168@nyu.edu'){
        if (password==='123456'){
            alert("You are logged in!")
        }
        else{
        alert("Wrong password")
    }
    }
    else{
        alert("Wrong username")
    }
}