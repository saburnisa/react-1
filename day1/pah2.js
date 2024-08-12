function alertmsg()
{
    alert("Check the console output!");
}
function print()
{
            let age=18;
            let name="Kiran";
            let setStatus=false;
            let userDefault=undefined;
            let responseValue=null;
            console.log(age);
            console.log(name);
            console.log(setStatus);
            console.log(userDefault);
            console.log(responseValue);
            
            let oldage=age;
            age=25;
            let status=setStatus;
            setStatus=true;
            console.log(age);
            console.log(name);
            console.log(setStatus);
            console.log(userDefault);
            console.log(responseValue);
           
}
const Dis1=()=>{
    return(
        <div>
        <button onClick={print}>Print</button>
        <button onClick={alertmsg}>alert</button>
        </div>
    );
};
export default Dis1;