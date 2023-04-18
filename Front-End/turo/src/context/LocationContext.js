import  {useState, useEffect, createContext} from 'react';

export const LocationContext = createContext();

export function LocationProvider({children}){

  const [locationInfo, setlocationInfo] = useState(['null']);

  useEffect(() => {
    fetch(`https://turo-backend-db.herokuapp.com/car/1/locations`)
     .then((response) => {
        return response.json()
     })
     .then((actualData) => setlocationInfo(actualData));
   }, []);

  return (
    <LocationContext.Provider value = {{locationInfo}}>
        {children}
    </LocationContext.Provider>
  );
}    
 