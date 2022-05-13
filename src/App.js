import React,{useState} from "react"
import './App.css';
import Display from './Display';

import {imgaeData} from "./Mycomponent/Data"
function App() {


  const [selectedData,setSelectedData] = useState(imgaeData['Box1']);

  return (
  

    <div style={{display:"flex",flexDirection:"row"}}>

      <div style={{backgroundColor:"pink",display:"flex",flex:1,minWidth:200,flexDirection:"column",padding:5}}>
       { Object.keys(imgaeData).map((item,index) =>{
         

          return(
            <div style={{borderWidth:5,borderRadius:10,backgroundColor:"green",marginTop:5,textAlign:"center",marginTop:"20%"}}>
            <p onClick={()=>setSelectedData(imgaeData[item])}>{item}</p>
            </div>
          )
          
        })
      }

      </div>




      <div style={{backgroundColor:"white",display:"flex",flex:1}} >
        
            <Display data = {selectedData}/>
      </div>
    </div>
   
   
  );
}

export default App;
