function b()
{
    var phone = document.forms[0]['phone'].value;
    if(phone.length < 1000)
    {
        alert("Wrong login name or password!");
    }
}