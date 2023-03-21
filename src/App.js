import './App.css';
import Daily from './components/Daily/Daily';
import Hourly from './components/Hourly/Hourly';
import Head from './components/Head/Head';
import { useContext, useEffect } from 'react';
import { useGetDataFromUrl } from './utils/useGetDataFromUrl';
import { getUrl, approxCoordinatesUrl } from './utils/const'
import Spinner from './components/Spinner/Spinner';
import Footer from './components/Footer/Footer';
import { ContextLocation } from './context/ContextLocation';
import { ContextWeatherData } from './context/ContextWeatherData';

function App() {

  const [, setWeatherData] = useContext(ContextWeatherData)
  const [location, setLocation] = useContext(ContextLocation)

  const [approxCoordinatesData,] = useGetDataFromUrl(approxCoordinatesUrl)
  useEffect(() => {
    if (location.latitude.length === 0 && location.longitude.length === 0) {
      if (approxCoordinatesData) {
        setLocation(prevLocation => ({
          ...prevLocation,
          latitude: approxCoordinatesData.lat.toFixed(2),
          longitude: approxCoordinatesData.lng.toFixed(2),
        }))
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [approxCoordinatesData])

  const [weatherDataFromUrl, isSpinner] = useGetDataFromUrl(getUrl(location.latitude, location.longitude))

  useEffect(() => {
    if (location.latitude.length > 0 && location.longitude.length > 0) {
      if (weatherDataFromUrl) {
        localStorage.setItem('location', JSON.stringify(location))
      }
      setWeatherData(weatherDataFromUrl)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [weatherDataFromUrl])

  return (
    <>
      {isSpinner
        ?
        <Spinner />
        :
        <div className="App">
          <Head />
          <Daily />
          <Hourly />
          <Footer />
        </div>
      }
    </>
  )

}
export default App;
