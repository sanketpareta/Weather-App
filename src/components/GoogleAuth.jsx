import React from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess, logout } from '../redux/actions/authActions';

const GoogleAuth = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);

    const handleSuccess = (response) => {
        dispatch(loginSuccess(response.profileObj));
    };

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-center">
                {user ? (
                    <div>
                        <p className="text-center">Welcome, {user.name}</p>
                        <GoogleLogout
                            clientId="356074679214-3g3jl3o6tn2da7ll0cpr51d7imca9oqb.apps.googleusercontent.com"
                            buttonText="Logout"
                            onLogoutSuccess={handleLogout}
                            className="btn btn-danger"
                        />
                    </div>
                ) : (
                    <GoogleLogin
                        clientId="356074679214-3g3jl3o6tn2da7ll0cpr51d7imca9oqb.apps.googleusercontent.com"
                        buttonText="Login with Google"
                        onSuccess={handleSuccess}
                        onFailure={(error) => console.error(error)}
                        cookiePolicy={'single_host_origin'}
                        className="btn btn-primary"
                    />
                )}
            </div>
        </div>
    );
};

export default GoogleAuth;
