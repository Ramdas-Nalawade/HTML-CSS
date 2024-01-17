function validate()
{
    var v1 = document.getElementById("i1").value;
    var v2 = document.getElementById("i2").value;
    var v3 = document.getElementById("i3").value;
    var v4 = document.getElementById("i4").value;
    var v5 = document.getElementById("i5").value;

    if(v1 == "" || v2 == "" || v3 == "" || v4 == "" || v5 == "")
    {
        alert("Please enter all fields");
        return false;
    }
    else if(v2.length != 10 || isNaN(v2))
    {
        alert("Please enter 10 digits number");
        return false;
    }
    else if(v4 != v5)
    {
        alert("Password doesnt matched...!");
        return false;
    }
    else
    {   
        return true;
    }
}