const Myobj=()=>
{
    let myobject={name:"Madras"};
    let newObject=myobject;
    myobject.name="Chennai";

    let myarray=["a","e","i","o"];
    let vowelArray=myarray;
    myarray.push("u");
    console.log(myarray);
}
const Call=()=>{
    return(
        <div>
            <button onClick={Myobj}>Click</button>
        </div>
    )
}
export default Call;