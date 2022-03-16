

import React, { useEffect, useState } from "react"

import {  useHistory} from "react-router-dom";

import axios from "axios"

// components

import CardTable from "components/Cards/CardTable";
import useFetch from "Hooks/UseFetch";



export const Port=()=> {

  const [name, setName] = useState('')
  const [portdata, setPortdata] = useState('')
  const [descreption, setDescription] = useState(0)
  const [loading, setLoading] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
        await axios.post("http://localhost:5000/addport", {
            name,
            description:descreption
            
        })
        setLoading(false)
        window.location.href ="/admin/port"

    } catch (err) {
        setLoading(false)
    }

}
const { error, data: port } = useFetch('http://localhost:5000/getAllPorts')

useEffect(()=>{
  if(port){
    setPortdata(port)
  }
},[port])
  return (
    <>
      <div className="flex flex-wrap mt-20 ">
      <form onSubmit={(e) => handleSubmit(e)} >
                  <div className="relative w-full mb-3 mt-52">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name} onChange={(e) => setName(e.target.value)}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Name"
                    />
                  </div>

                  <div className="relative w-full ">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Descreption
                    </label>
                    <input
                      type="number"
                      id="descreption"
                      value={descreption} onChange={(e) => setDescription(e.target.value)}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="" min={0}max={1}
                    />
                  </div>

                  <div className="text-center mt-6">
                    <button
                      type="submit"
                   
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                     
                    >
                      Ajouter port
                    </button>
                  </div>
                </form>
                <div className="w-full mb-12 px-4">
        {portdata &&  <CardTable color="dark" theads={["_Id","Name","Description"]} data={portdata} error={error} />}
        </div>

      </div>
  
    </>
  );
}
