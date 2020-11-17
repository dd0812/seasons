import {useState, useEffect} from 'react';

export default () => {
    const [lat, setLat] = useState(null);
    const [errMsg, setErrMsg] = useState('');

    useEffect (() => {
        window.navigator.geolocation.getCurrentPosition(
            (pos)=> setLat(pos.coords.latitude),    //callback func        
            (err) => setErrMsg(err.message)
        );
    }, []);

    return [lat, errMsg]; //multiple ways to return these values
};