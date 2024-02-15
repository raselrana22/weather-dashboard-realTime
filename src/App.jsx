import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";
import { FavoriteProvider, WeatherProvider } from "./provider/index";

export default function App() {
  return (
    <div className="grid place-items-center h-screen">
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
    </div>
  );
}
