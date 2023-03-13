import './App.css';
import Daily from './components/Daily/Daily';
import Hourly from './components/Hourly/Hourly';
import Head from './components/Head/Head';
import MyIcons from './components/MyIcons';
import { useEffect, useState } from 'react';
import { useGetDataFromUrl } from './utils/useGetDataFromUrl';
import { useGetApproximateLocation } from './utils/useGetApproximateLocation'

function App() {
  const [location, setLocation] = useState({
    city: '',
    latitude: '',
    longitude: '',
    countryCode: '',
  })

  const [data, setData] = useState()

  const [approxLat, approxLng] = useGetApproximateLocation()

  useEffect(() => {
    if (approxLat && approxLng) {
      setLocation(prevLocation => ({
        ...prevLocation,
        latitude: approxLat,
        longitude: approxLng,
      }))
    }
  }, [approxLat, approxLng])

  const url = `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&hourly=temperature_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,pressure_msl,cloudcover,windspeed_10m,winddirection_10m&daily=apparent_temperature_max,apparent_temperature_min,sunrise,sunset,precipitation_sum&current_weather=true&timezone=auto`

  const [dataFromUrl, isSpinner] = useGetDataFromUrl(url, location.latitude, location.longitude)

  useEffect(() => {
    setData(dataFromUrl)
  }, [dataFromUrl])

  useEffect(() => {
    console.log('data: ', data)
  }, [data])


  return (
    <div className="App"
    >
      {/* <MyIcons /> */}
      <Head
        location={location}
        setLocation={setLocation}
      />
      <Daily
        data={data} />
      <Hourly />
    </div>
  );
}

export default App;
