import React, { useState } from 'react'
import axios from 'axios'
import WeatherUI from './Components/WeatherUI'
function Weather() {
    const [data, setData] = useState({})
    const [location, setLocation] = useState("")
    const key = import.meta.env.KEY

    const getLocation = async (e) => {
        e.preventDefault()
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`
        try {
            axios.get(url)
                .then((res) => {
                    setData(res.data)
                })
                .catch((err) => console.log(err))
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <>
            <div className='bg-gradient-to-br from-yellow-400 to-pink-500 via-red-400 w-full min-h-screen'>
                <h1 className='text-center font-bold tracking-widest text-white text-xl'>Weather Application</h1>
                <div className='flex flex-col'>
                    <form onSubmit={(e) => getLocation(e)} className='flex lg:flex-row flex-col justify-center items-center lg:justify-between gap-2 p-4 w-[100%]'>
                        <div className='w-[100%]'>
                            <input placeholder='Enter the location' className='p-2 rounded-full w-full' onChange={(e) => setLocation(e.target.value)} required />
                        </div>
                        <div className=''>
                            <button type='submit' className='p-2 bg-white font-bold rounded-full'>Search</button>
                        </div>
                    </form>
                </div>
                <div>
                    <WeatherUI WeatherData={data} />
                </div>
            </div>
        </>
    )
}

export default Weather