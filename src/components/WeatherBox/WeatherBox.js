import PickCity from '../PickCity/PickCity';
import WeatherSummary from '../WeatherSummary/WeatherSummary';
import Loader from '../Loader/Loader';
import { useCallback } from 'react';

const WeatherBox = props => {

  const handleCityChange = useCallback((city) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bcb95b3ec0a00f2407a89c48f97f490f&units=metric`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const weatherData = {
          city: data.name,
          temp: data.main.temp,
          icon: data.weather[0].icon,
          description: data.weather[0].main,
        };
        console.log(weatherData);
      });
  });

  return (
    <section>
      <PickCity action={handleCityChange} />
      <WeatherSummary />
      <Loader />
    </section>
  )
};

export default WeatherBox;