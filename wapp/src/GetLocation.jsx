import React from 'react'
import GetWeatcher from './GetWeatcher';

const GetLocation = () => {
    const [latitude, setLatitude] = React.useState(null);
    const [longitude, setLongitude] = React.useState(null);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
      const fetchLocation = async () => {
        try{
          if('geolocation' in navigator){
            const position = await new Promise ((resolve, reject) => {
              navigator.geolocation.getCurrentPosition(resolve,reject,{ timeout: 10000 });
            });

            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude)

          }
          else {
            setError('Please trun on your Loctaion')
          }
        }
        catch(error) {
          setError(`Location truned Off: ${error.massage}`)
        }  
      };
      fetchLocation();
    }, []);
  return (
    <div><GetWeatcher latitude={latitude} longitude= {longitude} /></div>
  )
}

export default GetLocation