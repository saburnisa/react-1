function equall()
{
    const name1="Kabil";
    const name2="Kabil";
    const object1={name:"Kabil"};
    const object2={name:"Kabil"};
    if(name1===name2)
        console.log("Primitive");
    else if(object1===object2)
        console.log("Reference");
}
const Dis3=()=>{
    return(
        <div>
            <button onClick={equall}>Equal</button>
        </div>
    );
};

export default Dis3;