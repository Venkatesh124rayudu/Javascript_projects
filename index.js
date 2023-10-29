let string="";
let input = document.getElementById("input_place");
let button= document.querySelectorAll("button");
let arr=Array.from(button);
arr.forEach(button =>{
    button.addEventListener("click",(e)=>{
        let valu=e.target.innerHTML;
            if(valu=="="){
                string=eval(string);
                input.value=string;
            }
            else if(valu=="AC"){
                string="";
                input.value=string;
            }
            else if(valu=="DEL"){
                string=string.substring(0,string.length-1);
                input.value=string;
            }
            else{
                string=string+e.target.innerHTML;
                input.value=string;
            };
    })
});

