import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";
import {
  FavoriteProvider,
  LocationProvider,
  WeatherProvider,
} from "./provider/index";

export default function App() {
  return (
    <div className="grid place-items-center h-screen">
      <LocationProvider>
        <WeatherProvider>
          <FavoriteProvider>
            <Header />
            <main>
              <section>
                <WeatherBoard />
              </section>
            </main>
          </FavoriteProvider>
        </WeatherProvider>
      </LocationProvider>
    </div>
  );
}
