let s="";
let ans="";
let Input=document.querySelector('#input');
let Output=document.querySelector('#output');

function click_btn(val){

    if(val===1){
        
        if(s.length===0){
            Output.innerText="";
        }
        s+=1;
        Input.innerText=s;
    }else if(val===2){
       if(s.length===0){
            Output.innerText="";
        }
        s+=2;
        Input.innerText=s;
    }else if(val===3){
        if(s.length===0){
            Output.innerText="";
        }
        s+=3;
        Input.innerText=s;
    }else if(val===4){
        if(s.length===0){
            Output.innerText="";
        }
        s+=4;
        Input.innerText=s;
    }else if(val===5){
        if(s.length===0){
            Output.innerText="";
        }
        s+=5;
        Input.innerText=s;
    }else if(val===6){
        if(s.length===0){
            Output.innerText="";
        }
        s+=6;
        Input.innerText=s;
    }else if(val===7){
        if(s.length===0){
            Output.innerText="";
        }
        s+=7;
        Input.innerText=s;
    }else if(val===8){
        if(s.length===0){
            Output.innerText="";
        }
        s+=8;
        Input.innerText=s;
    }else if(val===9){
        if(s.length===0){
            Output.innerText="";
        }
        s+=9;
        Input.innerText=s;
    }else if(val===0){
        if(s.length===0){
            Output.innerText="";
        }
        s+=0;
        Input.innerText=s;
    }else if(val==='.'){
        if(s.length===0){
            Output.innerText="";
        }
        s+='.';
        Input.innerText=s;
    }else if(val==='+'){
        if(s.length===0){
            Output.innerText="";
        }
        s+='+';
        Input.innerText=s;
    }else if(val==='-'){
        if(s.length===0){
            Output.innerText="";
        }
        s+='-';
        Input.innerText=s;
    }else if(val==='*'){
        if(s.length===0){
            Output.innerText="";
        }
        s+='×';
        Input.innerText=s;
    
    }else if(val==='/'){
        if(s.length===0){
            Output.innerText="";
        }
        s+='÷';
        Input.innerText=s;
    }
}


function click_equal(){
    if(s.length===0) Output.innerText=ans;
    let temp_s = s.replace("×", "*").replace("÷", "/");
    let temp_s2=s;
    let n=temp_s.length;
    const check_validity=(temp_s)=>{
         if(temp_s[n-1]==="*" || temp_s[n-1]==="/"|| temp_s[n-1]==="+" ||temp_s[n-1]==="-" ||temp_s[n-1]==="."){
            return false;
         }
         else return true;

    };
    if(check_validity(temp_s)){
        ans=eval(temp_s);
        Output.innerText=ans;
        s="";
        Input.innerText="";
        
    }
    else{
        Output.innerText="Invalid Input";
        s="";
    }

 }
   


function clear_fun(){
    s='';
    ans='';
    document.querySelector('#input').innerText='Hello priyanka you are beutiful 🥰';
    document.querySelector('#output').innerText=ans;
}

function delete_fun(){
    s=s.substring(0,s.length-1);
    Input.innerText=s;
}



