import React from 'react';
import './App.css';
import Daily from './components/Daily/Daily';
import Hourly from './components/Hourly/Hourly';
import Head from './components/Head/Head';
import { IWeatherDataFromUrl, ICoordinatesDataFromUrl, useGetDataFromUrl } from './utils/useGetDataFromUrl';
import { approxCoordinatesUrl } from './utils/const'
import { getUrl } from './utils/getUrl'
import Spinner from './components/Spinner/Spinner';
import Footer from './components/Footer/Footer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { IGeolocationState, changeLocationByGeolocation } from './store/locationSlice'
import { changeWeatherData } from './store/weatherDataSlice'
import { RootState } from './store/store';

const App = (): JSX.Element => {
  const location: IGeolocationState = useSelector((state: RootState) => state.location.currentLocation)
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
        const approxCoordinates: ICoordinatesDataFromUrl = {
          latitude: Number((approxCoordinatesData as ICoordinatesDataFromUrl).latitude).toFixed(2),
          longitude: Number((approxCoordinatesData as ICoordinatesDataFromUrl).longitude).toFixed(2),
        }
        dispatch(changeLocationByGeolocation(approxCoordinates))
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
      dispatch(changeWeatherData(weatherDataFromUrl as IWeatherDataFromUrl))
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
