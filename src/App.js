import './App.css';
import Daily from './components/Daily/Daily';
import Hourly from './components/Hourly/Hourly';
import Head from './components/Head/Head';
import { useEffect, useState } from 'react';
import { useGetDataFromUrl } from './utils/useGetDataFromUrl';
import { useGetApproximateLocation } from './utils/useGetApproximateLocation'
import { LANG, getUrl } from './utils/const'
import Spinner from './components/Spinner/Spinner';
import Footer from './components/Footer/Footer';


function App() {
  const [location, setLocation] = useState(JSON.parse(localStorage.getItem('location'))
    ||
  {
    city: '',
    latitude: '',
    longitude: '',
    countryCode: '',
  })

  const [data, setData] = useState()


  const [approxLat, approxLng] = useGetApproximateLocation(location)

  useEffect(() => {
    if (approxLat && approxLng) {
      setLocation(prevLocation => ({
        ...prevLocation,
        latitude: approxLat,
        longitude: approxLng,
      }))
      // }
    }
  }, [approxLat, approxLng])



  const [dataFromUrl, isSpinner] = useGetDataFromUrl(getUrl(location.latitude, location.longitude), location.latitude, location.longitude)

  useEffect(() => {
    setData(dataFromUrl)
    localStorage.setItem('location', JSON.stringify(location))
  }, [dataFromUrl])

  return (
    <>
      {isSpinner
        ?
        <Spinner
          lang={LANG}
        />
        :
        <div className="App">
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
          <Footer />
        </div>
      }
    </>

  )

}
export default App;
