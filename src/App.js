import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import WeatherInput from './components/WeatherInput';
import WeatherDisplay from './components/WeatherDisplay';
import GoogleAuth from './components/GoogleAuth';

const App = () => (
    <Provider store={store}>
        <div className="container">
            <h1 className="text-center mt-4">Weather App</h1>
            <GoogleAuth />
            <WeatherInput />
            <WeatherDisplay />
        </div>
    </Provider>
);

export default App;
