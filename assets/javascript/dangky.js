function a()
{
    var phone = document.forms[0]['phone'].value;
    var password = document.forms[0]['pass'].value;
    var conirmpass= document.forms[0]['cfpass'].value;
    if(isNaN(phone) || phone.length != 10)
    {
        alert("The phone number is not in the correct format!");
    }
    if (password != conirmpass)
    {
        alert("The password does not match the password just entered!");
    }
    alert("Sign Up Success!");
}