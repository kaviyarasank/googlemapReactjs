import React from "react";

const defaultValue = {
  locale: 'eng',
  setLocale: () => {} 
}

export default React.createContext(defaultValue);