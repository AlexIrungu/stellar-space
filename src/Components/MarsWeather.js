import React, { useEffect, useState } from "react";
import './MarsWeather.css'

function MarsWeather(){

    const [sol_hours, setSol_Hours] = useState([])
    //const [valid, setValidity_Checks] = useState([])
    // const [number, setNumberSequence] = useState([])
    const [sol_required, setSol_Required] = useState([])
    const [sol_checked, setSol_Checked] = useState([])
    
    useEffect(() => {
        fetch("https://api.nasa.gov/insight_weather/?api_key=hKEJKzZbPu6bVkb5ZOywrpvfOiMg51NMxjzKbnKz&feedtype=json&ver=1.0")
        .then((res) => res.json())
        .then((data) => 
{
    const customData = data.validity_checks['1219']
    const hoursData = data.validity_checks
     console.log(customData.AT.sol_hours_with_data)
    setSol_Hours(customData.AT.sol_hours_with_data)
    setSol_Hours(customData.HWS.sol_hours_with_data)
    setSol_Hours(customData.PRE.sol_hours_with_data)
    setSol_Hours(customData.WD.sol_hours_with_data)
    // setSol_Hours(customData.sol_hours_required)
    // console.log(customData.sol_hours_required)
    const requiredData = data.validity_checks
    console.log(requiredData.sol_hours_required)
    setSol_Required(hoursData.sol_hours_required)
    const checkedData = data.validity_checks
    console.log(checkedData.sols_checked)
    setSol_Checked(hoursData.sols_checked)
}
            
          
        )
        
    }, [])

    
    
    return(

        
        <div className="weather">
            {/* <IndexMarsWeather /> */}

            <table>
                <tr>
                    <th>ATMOSPHERIC TEMPERATURE</th>
                    <th>HORIZONTAL WIND SPEED</th>
                    <th>ATMOSPHERIC PRESSURE</th>
                    <th>WIND DIRECTION</th>
                    <th>HOURS REQUIRED</th>
                    <th>HOURS CHECKED</th>
                </tr>
                <tr>
                    <td className="temperature"> {sol_hours.map(soul => (
            <p key={soul}>{soul}</p>
           ))}</td>
                    <td className="temperature">{sol_hours.map(soul => (
                <p key={soul}>{soul}</p>
            ))}</td>
                    <td className="temperature">{sol_hours.map(soul => (
                    <p key={soul}>{soul}</p>
                ))}</td>
                    <td className="temperature"> {sol_hours.map(soul => (
                        <p key={soul}>{soul}</p>
                    ))}</td>
                    <td className="temperature">  {sol_required}
                        </td>
                    <td className="temperature"> {sol_checked}</td>
                </tr>
            </table>
            {/* <div className="card">
                <div className="weather loading">
            <h4 className="temperature">ATMOSPHERIC TEMPERATURE</h4>
           {sol_hours.map(soul => (
            <p key={soul}>{soul}</p>
           ))}
           
            <h4 className="horizontal">HORIZONTAL WIND SPEED</h4> 
            {sol_hours.map(soul => (
                <p key={soul}>{soul}</p>
            ))}
            
                <h4 className="pressure">ATMOSPHERIC PRESSURE</h4>
                {sol_hours.map(soul => (
                    <p key={soul}>{soul}</p>
                ))}
                
                    <h4 className="wind">WIND DIRECTION</h4>
                    {sol_hours.map(soul => (
                        <p key={soul}>{soul}</p>
                    ))}
                    
                        <h4 className="required">HOURS REQUIRED</h4>
                        {sol_required}
                        
                            <h4 className="checked">HOURS CHECKED</h4>
                            {sol_checked}
                           
                            </div>
                            </div> */}
        </div>
        
    )
}

export default MarsWeather