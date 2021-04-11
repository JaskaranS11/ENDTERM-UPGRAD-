function showData()
{
    event.preventDefault();
    var country=document.getElementById("countryplace").value;
    var sDate=document.getElementById("startDate").value;
    var eDate=document.getElementById("endDate").value;

    var confirmed=document.getElementById("confirmed");
    var active=document.getElementById("active");
    var deaths=document.getElementById("deaths");

    console.log(sDate);

    if(country=='' || sDate=='' || eDate=='')
    alert("enter the required field");

    else
    {
        var url="https://api.covid19api.com/country/"+country+"?from="+sDate+"T00:00:00Z&to="+eDate+"T00:00:00Z";

        fetch(url)
        .then((Modal) => Modal.json())
        .then((Modal) => {
            console.log(Modal);
            var length=Modal.length;
            var index=length-1;

            var c=Modal[index].Confirmed;
            var a=Modal[index].Active;
            var d=Modal[index].Deaths;

            confirmed.innerHTML=c;
            active.innerHTML=a;
            deaths.innerHTML=d;

            document.getElementById("Modal").style.display="block";
            
        })
    }
}