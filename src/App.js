
import { useEffect, useState } from "react";

const App=()=> {
  const [data,setData]=useState("");
  const options= async()=>{
    try{
     const res=await fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=a7b082ffec1e48ffb9ee8552bf0ad26c&query=pasta&maxFat=25&number=2",{
       method:"GET",
       }
     )
     const mydata=await res.json();
     console.log(mydata);
     setData(mydata);

    }catch(err){
       console.log("error");
    }
  }
  useEffect(()=>{
    options();
 },[])
  
 return (
   <div>
   <div>{data.results[0].title}</div>
     <img src={data.results[0].image} alt="h"/>

     <div>{data.results[1].title}</div>
     <img src={data.results[1].image} alt="h"/>
    </div> 
  );
}

export default App;
