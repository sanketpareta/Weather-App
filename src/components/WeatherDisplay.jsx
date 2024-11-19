import React from 'react';
import { useSelector } from 'react-redux';

const WeatherDisplay = () => {
    const { data, loading, error } = useSelector((state) => state.weather);

    if (loading) return <p className="text-center mt-4">Loading...</p>;
    if (error) return <p className="text-center text-danger mt-4">Error: {error}</p>;
    if (!data) return null;

    return (
        <div className="container mt-4">
            <div className="card mx-auto" style={{ maxWidth: '400px' }}>
                <div className="card-body">
                    <h5 className="card-title text-center">Weather in {data.name}</h5>
                    <p className="card-text text-center">
                        <strong>Temperature:</strong> {(data.main.temp - 273.15).toFixed(2)}°C
                    </p>
                    <p className="card-text text-center">
                        <strong>Condition:</strong> {data.weather[0].description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WeatherDisplay;
