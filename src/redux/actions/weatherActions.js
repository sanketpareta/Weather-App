import axios from 'axios';

export const fetchWeather = (city) => async (dispatch) => {
    dispatch({ type: 'FETCH_WEATHER_REQUEST' });

    try {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cdde537bc98113b415f3d59fc49b8e87`
        );
        dispatch({ type: 'FETCH_WEATHER_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'FETCH_WEATHER_FAILURE', payload: error.message });
    }
};
