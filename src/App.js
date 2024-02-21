import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [data, setdata] = useState();
  const [factor,setfactor]=useState([]);
  const [output, setoutput] = useState({});
  // useEffect(()=>{

  // },data)
  function isprime(d){
    if(d<2) return false;
   
    for(var i=2;i<d;i++){
     if(d%i===0) return false;
    }
    return true;
    
    }
  const  prime=()=>{
     console.log("data in prime",data)
       if(isprime(data)){
         setoutput(
    {
      ke:data,
      mess:"is a prime number "
    }
  )
   }
else{
  setoutput(
    {
      ke:data,
      mess:"is not  a prime number "
    }
  )
}
// setdata(null)
  }
  // function 
  const findFactors=() =>{
    // Initialize an empty array to store factors
    var factors=[]
    var number=data;
    // Loop from 1 to the square root of the number
    for (let i = 1; i <= Math.sqrt(number); i++) {
        // If i is a factor of the number, add i and the corresponding factor to the array
        if (number % i === 0) {
            factors.push(i);
            // If i is not the square root of the number, add the corresponding factor
            // (number divided by i) to the array
            if (i !== Math.sqrt(number)) {
                factors.push(number / i);
            }
        }
    }

    // Sort the factors array in ascending order
    factors.sort((a, b) => a - b);
     setfactor(factors);
    // Display factors on the console
    console.log(`Factors of ${number}:`, factors);
    setoutput(
      {
        ke:data,
        mess:`factor are : ${factors}`
      }
      
    )
}
  //
  function isperpefectsquare(){
    return Math.sqrt(data) % 1 === 0;
  }
  const perfectsqure=()=>{
    console.log(data)
    var perfectCheckNuber=data
    if(isperpefectsquare()){
      setoutput(
        {
          ke:perfectCheckNuber,
          mess:"is a perfect square  "
        }
      )
    }
    else{
      setoutput(
        {
          ke:data,
          mess:"is not  a perfect square  "
        }
      )
    } 
  }
  //function
  const findsqure=()=>{
    var square=data*data;
    setoutput(
      {
        ke:square,
        mess:`is the square of ${data}`
      }
    )
  }
    //function
    const findCube=()=>{
      var CubeValue=data*data*data;
      setoutput(
        {
          ke:CubeValue,
          mess:`is the cube of ${data}`
        }
      )
    }
    // fun
    function isPerfectCube() {
      // Calculate the cube root of the number
      console.log(data);
      const cubeRoot = Math.cbrt(data);
      
      // Check if the cube root is an integer
      return Number.isInteger(cubeRoot);
  }
  const perfectCube=()=>{
    var cubecheckNub=data
    if(isPerfectCube()){
      setoutput(
        {
          ke:cubecheckNub,
          mess:`is the perfect cube.`
        }
      )
    }
    else{
      setoutput(
        {
          ke:data,
          mess:`is not  the perfect cube.`
        }
      )
    }
  }
  // 
  // const sqroot=()=>{
  //   var rootAns= Math.sqrt(data);
  //   setoutput(
  //     {
  //       ke:rootAns,
  //       mess:`is the square root of ${data} .`
  //     }
  //   )
  // }
  return (
    <>
      <h1 style={{textAlign:'center', color:'goldenrod'}}>Maths:Function</h1>
      <div style={{textAlign:'center'}}>
        <input id="inputid" onChange={(e)=>{ setdata(e.target.value); }} style={{fontSize:'30px'}} type="number" placeholder="enter data" value={data} />
        <button onClick={()=>{document.getElementById("inputid").value="";setdata("")}} style={{width:'50px', fontSize:'15px', marginLeft:'3px', border:'1px solid'}} >Clear</button>
      </div>
     <div style={{display:'flex',justifyContent:'center',marginTop:'15px'}}>
        <table   >
          <tr>
            <td>
        <button onClick={prime} style={{border:'solid 2px' }}>Check Prime</button>
        <button onClick={findFactors} style={{border:'solid 2px' }}>Find Factor </button>
        </td>
        </tr>
        <tr>
          <td>
        <button onClick={perfectsqure} style={{border:'solid 2px' }}>Check PerfectSquare</button>
        <button onClick={findsqure} style={{border:'solid 2px' }}>Find Square</button>
        </td>
        </tr>
        <tr>
          <td>
        <button onClick={findCube} style={{border:'solid 2px' }}>Find Cube</button>
        <button onClick={perfectCube} style={{border:'solid 2px' }}>Check PerfectCube</button>
        // <button onClick={sqroot} style={{border:'solid 2px' }}>Find sqroot</button>
        </td>
        </tr>
        </table>
        </div>
    
      <div>
        <h2 style={{textAlign:'center'}}>  {output.ke},{output.mess}</h2>
       
      </div>
      
    </>
  );
}

export default App;
