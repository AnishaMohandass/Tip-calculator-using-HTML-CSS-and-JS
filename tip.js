function calculatetip()
{
    var billmoney = document.getElementById("bill").value;
    var service = document.getElementById("quality").value;
    var persons = document.getElementById("people").value;


    // to check all the fields are entered or not
    if(billmoney == "" || service == 0)
    {
        alert("Please enter the values");
    }

    //if no.of people is empty or 0, hiding the each word, and assigning no.of people as 1
    if(persons == "" || persons <= 0)
    {
        persons = 1;
        document.getElementById("each").style.display = "none";
    }
    else
    {
        document.getElementById("each").style.display = "block"
    }


    //calculate the tip
    var total = (billmoney * service) / persons;
    //round to two decimal places 
    total = Math.round(total*100)/100;
    //fixed two digits after decimal
    total = total.toFixed(2);

    //to display the tip
    document.getElementById("totaltip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
    document.getElementById("each").style.display = "block";

}

//to hide the tip amount on load
document.getElementById("totaltip").style.display = "none";
document.getElementById("each").style.display = "none";

//to call the function
document.getElementById("cal").onclick = function ()
{
 calculatetip();
};