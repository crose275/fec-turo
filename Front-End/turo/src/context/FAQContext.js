import  {useState, useEffect, createContext} from 'react';

export const FAQContext = createContext();

export function FAQProvider({children}){

  const [FAQInfo, setFAQInfo] = useState(['null']);

  useEffect(() => {
    fetch(`https://turo-backend-db.herokuapp.com/car/1/faqs`)
     .then((response) => {
        return response.json()
    })
    .then((actualData) => setFAQInfo(actualData));
  }, []);

  return (
    <FAQContext.Provider value = {{FAQInfo}}>
        {children}
    </FAQContext.Provider>
  );
}    