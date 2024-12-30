function CheckNum(){
    let num=document.getElementById('inp').value
    if(num%2==0){
       document.getElementById('result').innerHTML="even number"
    }
    else{
        document.getElementById('result').innerHTML="odd number" 
    }
}