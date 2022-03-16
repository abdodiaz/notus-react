import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

// components

import TableDropdown from "components/Dropdowns/TableDropdown.js";

export default function CardTable(props) {

  const [DataPort,setDataPort] = useState([])

  useEffect(()=>{

    console.log(props);
    if(props?.data){
      setDataPort(props?.data)

    }
  },[props.data])

  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (props.color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
        >
        
        
        <div className="rounded-t mb-0 px-4 py-3 border-0">
      
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (props.color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                
                Card Tables
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>   
              <tr>
              { props.theads.map((h,i)=>(
               <th
               key={i}
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (props.color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  {h}
                </th>
            ))}

              </tr>
            </thead>
            <tbody>
             
              {DataPort && DataPort.map((ports)=> {
                return (<>
                     <tr>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {ports._id}  
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {ports.name}  
                      </td>
                      <td  className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {
                    ports.description? <i className="fas fa-circle text-green-400 mr-2" style={{color: "green"}}></i>:<i className="fas fa-circle text-green-400 mr-2" style={{color: "red"}}></i>

                    
                    
                    }  
                      </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                  <TableDropdown id= {ports._id}/>
                   </td>
                </tr>
                </>)
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

CardTable.defaultProps = {
  color: "light",
};

CardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
