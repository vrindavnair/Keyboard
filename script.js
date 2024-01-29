function numkey(a){
    if(b==0||d==0){
        document.getElementById('txtarea').value=document.getElementById('txtarea').value+a.toUpperCase()
d=1
    }
    else{
        document.getElementById('txtarea').value=document.getElementById('txtarea').value+a.toLowerCase()

    }
    

}
b=0
function caps(){
    if(b==0){
        b=1

    }
    else{
        b=0
    }

}
d=0
function shift(){
    if(d==1){
        d=0
    }
    else{
        d=1
    }
    
    
}
nl=0
function numlck(){
    if(nl==1){
        nl=0
    }
    else{
        nl=1
    }
    
    
}
function bkspace(){
    bk=document.getElementById('txtarea').value
    cx=bk.length-1
    sp=bk.slice(0,cx)
    document.getElementById('txtarea').value=sp
}



function del(){
    document.getElementById('txtarea').value=''
}

function num(v){
    if(nl==0){
        document.getElementById('txtarea').value=document.getElementById('txtarea').value+v   
    }
    else{
        document.getElementById('txtarea').disabled
    }
    

}

function cal(v){
    s=document.getElementById('txtarea').value
   document.getElementById('txtarea').value=''
   op=v
}
function equl(){
   var c=document.getElementById('txtarea').value
   if(op=='+'){
       var total=eval(s)+eval(c)

   }
   else if(op=='-'){
       var total=eval(s)-eval(c)
   }
   else if(op=='*'){
       var total=eval(s)*eval(c)
   }
   else{
       var total=eval(s)/eval(c)
   }

   
   document.getElementById('txtarea').value=total
}