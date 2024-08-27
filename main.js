const os=document.getElementById('os')

console.log(os);



function del()
{
    os.value=os.value.slice(0,-1)
}
    

function Clear()
{
   os.value=""
}
function display(txt)
{
    os.value=os.value+txt;         
    console.log(os.value)
}

function calculate()
{
   os.value=eval(os.value);
}
function cube()
{
    let a=prompt('Enter the a value');
    let res=a*a*a;
    alert(`The answer is ${res}`);
}