import React,{useState} from "react"
import './App.css';
import Display from './Display';

import {imgaeData} from "./Mycomponent/Data"
function App() {


  const [selectedData,setSelectedData] = useState(imgaeData['P1.glb']);

  return (
  

    <div style={{display:"flex",flexDirection:"row"}}>

      <div style={{backgroundColor:"pink",display:"flex",flex:1,width:"15%",flexDirection:"column",padding:5}}>
       { Object.keys(imgaeData).map((item,index) =>{
         

          return(
            <div style={{borderWidth:5,borderRadius:10,backgroundColor:"green",textAlign:"center",marginTop:"10%"}}>
            <p onClick={()=>setSelectedData(imgaeData[item])}>{item}</p>
            </div>
          )
          
        })
      }

      </div>




      <div style={{backgroundColor:"white",display:"flex",flex:1,width:"85%"}} >
        
            <Display data = {selectedData}/>
      </div>
    </div>
   
   
  );
}

export default App;
