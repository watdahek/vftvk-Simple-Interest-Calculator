function compute()
{
    p = document.getElementById("principal").value;
    var input_amount = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var amount = (input_amount*years*rate)/100;
    var year = new Date().getFullYear()+parseInt(years);

    //Check Ammount field
    if(principal.value == "") //Check if Ammount field is empty
    {
        alert("Please enter number in Amount box");
        principal.focus();
        return false;
    }
    else if (principal.value <= 0) //Check if Ammount value is equal or less than 0
    {
        alert("Ammount should be greater than 0");
        principal.focus();
        return false;
    }

    //Display result
    document.getElementById("result").innerHTML="If you deposit "+input_amount+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>"
}


function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
    
