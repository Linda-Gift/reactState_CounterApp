import {useState, useEffect} from 'react'



export default function Weather(){

    const [weather, setWeather] = useState(null)

    const apiKey = "62f4ba13d78977c09b585934de20ae2e"
    const city = "Lisbon"

    useEffect(()=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`).then((response) => response.json()).then((transformedData) => {
            setWeather(transformedData)
        })
    }, [])

    return(
        <div>
            <h1>Weather Forecast</h1>
            <p>City : {city} </p>
            <h3> Temperature : {weather?.main?.temp}</h3>
        </div>

    )
}



