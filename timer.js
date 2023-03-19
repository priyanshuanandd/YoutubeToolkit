document.getElementById('butt1').addEventListener("click",myfunction);

function myfunction(){
    var c=document.getElementById('checkbox');
    var count=0
    
    function countfunction(){
        count++

     }
    if (c.checked==true){
       c.checked=false;
       
        
    
    }
    else{
        var d =prompt("time you want to spend");
        var e= (d*1000);
        setTimeout(() => {
            alert("sdhbfksb");
            c.checked=true;
           },e);
             


        }
        
        
        
        
            



        }

        



    

   
     
   

            

            
