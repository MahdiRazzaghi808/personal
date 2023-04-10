import React, { createContext, useReducer } from 'react'
import { myProjects } from "../../api/api"

export const MenuActiveContext = createContext();


const reduceHandler = (state, action) => {
  switch (action.type) {
    case 'all':
      return myProjects
    case 'react':
      return myProjects.filter(item => item.technologies[0] === 'react');
    case 'js':
      return myProjects.filter(item => item.technologies[0] === 'js');
    case 'static':
      return myProjects.filter(item => item.technologies[0] !== 'js' && item.technologies[0] !== 'react');
  }
}

console.log(myProjects);

function MenuActiveContextProvider({ children }) {

  const [state, dispatch] = useReducer(reduceHandler, myProjects)

  return (
    <MenuActiveContext.Provider value={{ state, dispatch }}>
      {children}
    </MenuActiveContext.Provider>
  )
}

export default MenuActiveContextProvider