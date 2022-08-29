import { createContext, useState } from 'react';

export const holidaysContext = createContext({});

export const HolidaysContextProvider = ({ children }) => {
  const [holidays, setHolidays] = useState('');

  return (
    <holidaysContext.Provider value={{holidays, setHolidays}}>
      {children}
    </holidaysContext.Provider>
  )
}