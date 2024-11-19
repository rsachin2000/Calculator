let s="";
let ans="";
let Input=document.querySelector('#input');
let Output=document.querySelector('#output');
function click_1(){
   s+=1;
   Input.innerText=s;
  
}
function click_2(){
    s+=2;
    Input.innerText=s;
    
}
function click_3(){
    s+=3;
    Input.innerText=s;
   
}
function click_4(){
    s+=4;
    Input.innerText=s;
    
}
function click_5(){
    s+=5;
    Input.innerText=s;
}
function click_6(){
    s+=6;
    Input.innerText=s;
}
function click_7(){
    s+=7;
    Input.innerText=s;
}
function click_8(){
    s+=8;
    Input.innerText=s;
}
function click_9(){
    s+=9;
    Input.innerText=s;
}
function click_0(){
    s+=0;
    Input.innerText=s;
}
function click_point(){
    s+='.';
    Input.innerText=s;
}
function click_plus(){
    s+='+';
    Input.innerText=s;
}
function click_minus(){
    s+='-';
    Input.innerText=s;
    
}

function click_mul(){
    s+='×';
    Input.innerText=s;
}
function click_dev(){
    s+='÷';
    Input.innerText=s;
}

function click_equal(){
    
    let temp_s = s.replace("×", "*").replace("÷", "/");
    let temp_s2=s;
    let n=temp_s.length;
    const check_validity=(temp_s)=>{
         if(temp_s[n-1]==="*" || temp_s[n-1]==="/"|| temp_s[n-1]==="+" ||temp_s[n-1]==="-" ){
            return false;
         }
         else return true;

    };
    if(check_validity(temp_s)){
        ans=eval(temp_s);
        Output.innerText=ans;
        s="";
        Input.innerText()
        
    }
    else{
        Output.innerText="Invalid Input";
        s="";
    }

 }
   


function clear_fun(){
    s='';
    ans='';
    document.querySelector('#input').innerText=s;
    document.querySelector('#output').innerText=ans;
}

function delete_fun(){
    s=s.substring(0,s.length-1);
    Input.innerText=s;
}

