// Page  -  2
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const FetchWeather = () => { 
    const [searchParams, setSearchParams] = useSearchParams();
    const city = searchParams.get('city');
    const [input, setInput] = useState(city || '');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState('');
    

    useEffect(() => {
        if (input) {
            const getWeather = async () => {

                try {
                    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=ec90496755304a7abf6101557242006&q=${input}&aqi=no`);
                    const data = await response.json();
                    if (!response.ok) {
                        throw new Error('Enter a valid city name');
                    }
                    setWeather(data);
                    setError('');
                }
                catch (error) {
                    setWeather(null);
                    setError(error.message);
                }
            }

            getWeather();
        }
    }, [input]);

    useEffect(() => {
        if (city) {
            setInput(city);
        }
    }, [city]);
    

    const inputChange = (e) => {
        const newCity = e.target.value;
        setInput(newCity);
        setSearchParams({ city: newCity });
    }



    return (
        <div style={{ textAlign: 'center'}}>
            <input
                type="text"
                placeholder="Enter city name"
                value={input}
                style={{
                    padding: '10px',
                    width: '250px',
                    margin: '20px',
                    border: '#ff4000 1px solid',
                    borderRadius: '5px',
                }}
                onChange={inputChange}
            />
            {error && <h3 style={{ color: 'red' }}>{error}</h3>}
            <div>
                {weather && !error && (
                    <div>
                        <h1>{weather.location.name}</h1>
                        <h3>{weather.current.temp_c}°C</h3>
                        <img src={weather.current.condition.icon} alt="weather icon" />
                        <h3>{weather.current.condition.text}</h3>
                    </div>
                )}
                </div>
        </div>
    )
}

export default FetchWeather;