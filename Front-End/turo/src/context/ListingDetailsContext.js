import  {useState, useEffect, createContext} from 'react';

export const ListingDetailsContext = createContext();

export function ListingDetailsProvider({children}){

  const [listingDetailsInfo, setListingDetailsInfo] = useState(['null']);

  useEffect(() => {
    fetch(`https://turo-backend-db.herokuapp.com/car/1`)
     .then((response) => {
        return response.json()
    })
    .then((actualData) => setListingDetailsInfo(actualData));
  }, []);

  return (
    <ListingDetailsContext.Provider value = {{listingDetailsInfo}}>
        {children}
    </ListingDetailsContext.Provider>
  );
}    
 