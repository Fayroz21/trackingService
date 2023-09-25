import React, { useEffect, useState } from "react";


function Tracking ({trackingNum}){ 
    const [retrievedData, setRetrievedData] = useState([]);

    useEffect(() =>  {
      fetch(`https://tracking.bosta.co/shipments/track/${trackingNum}`)
      .then(res => res.json())
      .then(data => {
        setRetrievedData(data);

      }).catch((error) => {
        console.log("error : " + error);
      })
    }
    ,[]);

    //For debugging
    if(retrievedData.length !== 0){
      console.log("data : " + retrievedData['CurrentStatus'].state);
    }

    //update the date
    const formatTime = () => {
      if(retrievedData.length !== 0){
        const timestamp = retrievedData['CurrentStatus'].timestamp; 

        const dateObj = new Date(timestamp).getTime();
        const hours = dateObj.getHours();
        const minutes = dateObj.getMinutes();
        const seconds = dateObj.getSeconds();
      
  
      // Format the time as desired (e.g., HH:MM:SS)
      const formattedTime = `${hours}:${minutes}:${seconds}`;
      
      console.log("time : ", formattedTime)
      return formattedTime;
      }
      return "";
    };

    const normalStyle = {
      color : "gray", 
    };

    const infoStyle = {
      fontWeight : "Bold",
    }
    return(
        <div className="cotainer">
          <div className="card">
             <div className="card-body shadow">
               <div className="row align-items-start">
                 <div className="col">
                  <p className="text-muted display-55" style={normalStyle}>Tracking Number {trackingNum}</p>
                  <p style={infoStyle} >{retrievedData.length !== 0? retrievedData['CurrentStatus'].state : ""}</p>
                 </div>

                 <div className="col">
                  <p className="text-muted display-55" style={normalStyle}>Last Update</p>
                  <p style={infoStyle} >Time : {formatTime}</p>
                 </div>
                
                </div>
             </div>
          </div>

        </div>
    );
}

export default Tracking;


