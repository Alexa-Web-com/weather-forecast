import './App.css';
import Daily from './components/Daily/Daily';
import Hourly from './components/Hourly/Hourly';
import Head from './components/Head/Head';
import { useContext, useEffect } from 'react';
import { useGetDataFromUrl } from './utils/useGetDataFromUrl';
import { useGetApproximateLocation } from './utils/useGetApproximateLocation'
import { getUrl } from './utils/const'
import Spinner from './components/Spinner/Spinner';
import Footer from './components/Footer/Footer';
import { ContextLocation } from './context/ContextLocation';

function App() {

  const [location, setLocation] = useContext(ContextLocation)

  const [approxLat, approxLng] = useGetApproximateLocation(location)

  useEffect(() => {
    if (approxLat && approxLng) {
      setLocation(prevLocation => ({
        ...prevLocation,
        latitude: approxLat,
        longitude: approxLng,
      }))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [approxLat, approxLng])

  const [dataFromUrl, isSpinner] = useGetDataFromUrl(getUrl(location.latitude, location.longitude), location.latitude, location.longitude)

  useEffect(() => {
    localStorage.setItem('location', JSON.stringify(location))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataFromUrl])

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
