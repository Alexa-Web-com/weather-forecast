import './App.css';
import Daily from './components/Daily/Daily';
import Hourly from './components/Hourly/Hourly';
import Head from './components/Head/Head';
import MyIcons from './components/MyIcons';
import { useEffect, useState } from 'react';
import { useGetDataFromUrl } from './utils/useGetDataFromUrl';
import { useGetApproximateLocation } from './utils/useGetApproximateLocation'
import { LANG, getUrl } from './utils/const'

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

  const [dataFromUrl, isSpinner] = useGetDataFromUrl(getUrl(location.latitude, location.longitude), location.latitude, location.longitude)

  useEffect(() => {
    setData(dataFromUrl)
  }, [dataFromUrl])

  return (
    <div className="App"
    >
      {/* <MyIcons /> */}
      <Head
        location={location}
        setLocation={setLocation}
        lang={LANG}
      />
      <Daily
        data={data}
        lang={LANG}
        dataFromUrl={dataFromUrl}
      />
      <Hourly
        data={data}
        lang={LANG} />
    </div>
  );
}

export default App;
