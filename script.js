//your JS code here. If required.
let user1=document.querySelector("#player-1");
let user2=document.querySelector("#player-2");
let submit=document.querySelector("#submit");
 let message=document.querySelector(".message");
submit.addEventListener("click",()=>{
   let page1=document.querySelector("#page1"); 
   page1.style.display="none";
   let page2=document.querySelector("#page2");
   page2.style.visibility="visible";  
  
message.innerText=`${user1.value}, you're up`;
})

let isUser1=true;
let grid=document.querySelector(".grid");
let one=document.getElementById("1");
let two=document.getElementById("2");
let three=document.getElementById("3");
let four=document.getElementById("4");
let five=document.getElementById("5");
let six=document.getElementById("6");
let seven=document.getElementById("7");
let eight=document.getElementById("8");
let nine=document.getElementById("9");
grid.addEventListener("click",(e)=>{

    if((isUser1===true)&&(e.target.innerText==""))
    {
e.target.innerText="x";
isUser1=false;
if(e.target.id==="1")
{
    if(two.innerText=="x"&&three.innerText=="x")
    {
        message.innerText=`{${user1.value}} congratulations you won! `;
        
    }
     else if(four.innerText=="x"&&seven.innerText=="x")
{
        message.innerText=`{${user1.value}} congratulations you won! `
}
 else if(five.innerText=="x"&&nine.innerText=="x")
{
        message.innerText=`{${user1.value}} congratulations you won! `
}
else{
message.innerText=`${user2.value}, you're up`;
}
    }
if(e.target.id==="2")
{
    if(one.innerText=="x"&&three.innerText=="x")
    {
        message.innerText=`{${user1.value}} congratulations you won! `;
        
    }
     else if(five.innerText=="x"&&eight.innerText=="x")
{
        message.innerText=`{${user1.value}} congratulations you won! `
}
 
else{
message.innerText=`${user2.value}, you're up`;
}
    }
if(e.target.id==="3")
{
    if(two.innerText=="x"&&one.innerText=="x")
    {
        message.innerText=`{${user1.value}} congratulations you won! `;
        
    }
     else if(six.innerText=="x"&&nine.innerText=="x")
{
        message.innerText=`{${user1.value}} congratulations you won! `
}
 else if(five.innerText=="x"&&seven.innerText=="x")
{
        message.innerText=`{${user1.value}} congratulations you won! `
}
else{
message.innerText=`${user2.value}, you're up`;
}
    }
if(e.target.id==="4")
{
    if(five.innerText=="x"&&six.innerText=="x")
    {
        message.innerText=`{${user1.value}} congratulations you won! `;
        
    }
     else if(one.innerText=="x"&&seven.innerText=="x")
{
        message.innerText=`{${user1.value}} congratulations you won! `
}
 
else{
message.innerText=`${user2.value}, you're up`;
}
    }
if(e.target.id==="5")
{
    if(four.innerText=="x"&&six.innerText=="x")
    {
        message.innerText=`{${user1.value}} congratulations you won! `;
        
    }
     else if(two.innerText=="x"&&eight.innerText=="x")
{
        message.innerText=`{${user1.value}} congratulations you won! `
}
 else if(one.innerText=="x"&&nine.innerText=="x")
{
        message.innerText=`{${user1.value}} congratulations you won! `
}
 else if(three.innerText=="x"&&seven.innerText=="x")
{
        message.innerText=`{${user1.value}} congratulations you won! `
}

else{
message.innerText=`${user2.value}, you're up`;
}
    }
if(e.target.id==="6")
{
    if(four.innerText=="x"&&five.innerText=="x")
    {
        message.innerText=`{${user1.value}} congratulations you won! `;
        
    }
     else if(three.innerText=="x"&&nine.innerText=="x")
{
        message.innerText=`{${user1.value}} congratulations you won! `
}
 
else{
message.innerText=`${user2.value}, you're up`;
}
    }
if(e.target.id==="7")
{
    if(one.innerText=="x"&&four.innerText=="x")
    {
        message.innerText=`{${user1.value}} congratulations you won! `;
        
    }
     else if(five.innerText=="x"&&three.innerText=="x")
{
        message.innerText=`{${user1.value}} congratulations you won! `
}
     else if(eight.innerText=="x"&&nine.innerText=="x")
{
        message.innerText=`{${user1.value}} congratulations you won! `
}
else{
message.innerText=`${user2.value}, you're up`;
}}
if(e.target.id==="8")
{
    if(seven.innerText=="x"&&nine.innerText=="x")
    {
        message.innerText=`{${user1.value}} congratulations you won! `;
        
    }
     else if(two.innerText=="x"&&five.innerText=="x")
{
        message.innerText=`{${user1.value}} congratulations you won! `
}
else{
message.innerText=`${user2.value}, you're up`;
}}
if(e.target.id==="9")
{
    if(one.innerText=="x"&&five.innerText=="x")
    {
        message.innerText=`{${user1.value}} congratulations you won! `;
        
    }
     else if(eight.innerText=="x"&&seven.innerText=="x")
{
        message.innerText=`{${user1.value}} congratulations you won! `
}
     else if(three.innerText=="x"&&six.innerText=="x")
{
        message.innerText=`{${user1.value}} congratulations you won! `
}

else{
message.innerText=`${user2.value}, you're up`;
}

    }
    }
    else if((isUser1===false)&&(e.target.innerText==""))
 {       e.target.innerText="o";
        isUser1=true;
        if(e.target.id==="1")
{
    if(two.innerText=="o"&&three.innerText=="o")
    {
        message.innerText=`{${user2.value}} congratulations you won! `;
        
    }
     else if(four.innerText=="o"&&seven.innerText=="o")
{
        message.innerText=`{${user2.value}} congratulations you won! `
}
 else if(five.innerText=="o"&&nine.innerText=="o")
{
        message.innerText=`{${user2.value}} congratulations you won! `
}
else{
message.innerText=`${user1.value}, you're up`;
}
    }
if(e.target.id==="2")
{
    if(one.innerText=="o"&&three.innerText=="o")
    {
        message.innerText=`{${user2.value}} congratulations you won! `;
        
    }
     else if(five.innerText=="o"&&eight.innerText=="o")
{
        message.innerText=`{${user2.value}} congratulations you won! `
}
 
else{
message.innerText=`${user1.value}, you're up`;
}
    }
if(e.target.id==="3")
{
    if(two.innerText=="o"&&one.innerText=="o")
    {
        message.innerText=`{${user2.value}} congratulations you won! `;
        
    }
     else if(six.innerText=="o"&&nine.innerText=="o")
{
        message.innerText=`{${user2.value}} congratulations you won! `
}
 else if(five.innerText=="o"&&seven.innerText=="o")
{
        message.innerText=`{${user2.value}} congratulations you won! `
}
else{
message.innerText=`${user1.value}, you're up`;
}
    }
if(e.target.id==="4")
{
    if(five.innerText=="o"&&six.innerText=="o")
    {
        message.innerText=`{${user2.value}} congratulations you won! `;
        
    }
     else if(one.innerText=="o"&&seven.innerText=="o")
{
        message.innerText=`{${user2.value}} congratulations you won! `
}
 
else{
message.innerText=`${user1.value}, you're up`;
}
    }
if(e.target.id==="5")
{
    if(four.innerText=="o"&&six.innerText=="o")
    {
        message.innerText=`{${user2.value}} congratulations you won! `;
        
    }
     else if(two.innerText=="o"&&eight.innerText=="o")
{
        message.innerText=`{${user2.value}} congratulations you won! `
}
 else if(one.innerText=="o"&&nine.innerText=="o")
{
        message.innerText=`{${user2.value}} congratulations you won! `
}
 else if(three.innerText=="o"&&seven.innerText=="o")
{
        message.innerText=`{${user2.value}} congratulations you won! `
}

else{
message.innerText=`${user1.value}, you're up`;
}
    }
if(e.target.id==="6")
{
    if(four.innerText=="o"&&five.innerText=="o")
    {
        message.innerText=`{${user2.value}} congratulations you won! `;
        
    }
     else if(three.innerText=="o"&&nine.innerText=="o")
{
        message.innerText=`{${user2.value}} congratulations you won! `
}
 
else{
message.innerText=`${user1.value}, you're up`;
}
    }
if(e.target.id==="7")
{
    if(one.innerText=="o"&&four.innerText=="o")
    {
        message.innerText=`{${user2.value}} congratulations you won! `;
        
    }
     else if(five.innerText=="o"&&three.innerText=="o")
{
        message.innerText=`{${user2.value}} congratulations you won! `
}
     else if(eight.innerText=="o"&&nine.innerText=="o")
{
        message.innerText=`{${user2.value}} congratulations you won! `
}
else{
message.innerText=`${user1.value}, you're up`;
}}
if(e.target.id==="8")
{
    if(seven.innerText=="o"&&nine.innerText=="o")
    {
        message.innerText=`{${user2.value}} congratulations you won! `;
        
    }
     else if(two.innerText=="o"&&five.innerText=="o")
{
        message.innerText=`{${user2.value}} congratulations you won! `
}
else{
message.innerText=`${user1.value}, you're up`;
}}
if(e.target.id==="9")
{
    if(one.innerText=="o"&&five.innerText=="o")
    {
        message.innerText=`{${user2.value}} congratulations you won! `;
        
    }
     else if(eight.innerText=="o"&&seven.innerText=="o")
{
        message.innerText=`{${user2.value}} congratulations you won! `
}
     else if(three.innerText=="o"&&six.innerText=="o")
{
        message.innerText=`{${user2.value}} congratulations you won! `
}

else{
message.innerText=`${user1.value}, you're up`;
}

    }

}
    else{
        message.innerText="please play correctly";
    }
})

