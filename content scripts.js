document.getElementById('butt1').addEventListener("click",myfunction);

function myfunction(){
    var c=document.getElementById('checkbox');
    
    if (c.checked==true){
       c.checked=false;                    //if checkbox is checked a click will uncheck it
       
        
    
    }
    else{
        var d =prompt("time you want to spend");  //taking input to timer
        var e= (d*1000);    //adjusting input milisecinds
        setTimeout(() => {
            alert("time is up");
            c.checked=true;      //if checkbox is  not checked a click will check it
           },e);
             


        }
        
        
}

document.getElementById('butt2').addEventListener("click",function2);
function function2(){
    var f=document.getElementById("checkbox2")
    if (f.checked==true) {
        f.checked=false;

        
    }

    else{
        f.checked=true;
    

    }










}




    
