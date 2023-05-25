import './App.css';
import Daily from './components/Daily/Daily';
import Hourly from './components/Hourly/Hourly';
import Head from './components/Head/Head';
import { useGetDataFromUrl } from './utils/useGetDataFromUrl';
import { approxCoordinatesUrl } from './utils/const'
import { getUrl } from './utils/getUrl'
import Spinner from './components/Spinner/Spinner';
import Footer from './components/Footer/Footer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { changeLocationByGeolocation } from './store/locationSlice'
import { changeWeatherData } from './store/weatherDataSlice'

function App() {
  const location = useSelector((state) => state.location.currentLocation)
  const dispatch = useDispatch()

  const [approxCoordinatesData,] = useGetDataFromUrl(approxCoordinatesUrl)

  useEffect(() => {
    window.scrollTo({
      top: 0,
    })
  }, [])

  useEffect(() => {
    if (location.latitude.length === 0 && location.longitude.length === 0) {
      if (approxCoordinatesData) {
        dispatch(changeLocationByGeolocation({
          latitude: Number(approxCoordinatesData.latitude).toFixed(2),
          longitude: Number(approxCoordinatesData.longitude).toFixed(2),
        }))
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [approxCoordinatesData])

  const [weatherDataFromUrl,] = useGetDataFromUrl(getUrl(location.latitude, location.longitude))

  useEffect(() => {
    if (location.latitude.length > 0 && location.longitude.length > 0) {
      if (weatherDataFromUrl) {
        localStorage.setItem('location', JSON.stringify(location))
      }
      // setWeatherData(weatherDataFromUrl)
      dispatch(changeWeatherData(weatherDataFromUrl))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [weatherDataFromUrl])

  return (
    <>
      {
        !weatherDataFromUrl
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
