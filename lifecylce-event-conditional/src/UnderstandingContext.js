import React,{useState} from 'react';

const ThemeContext = React.createContext()
function GrandChildComponent() {
    
    
    
      return (
        <ThemeContext.Consumer>
          {({ theme, setTheme }) => {
            return (
              <div>
                <div>The theme is {theme}</div>
                <button onClick={() => setTheme('light')}>
                  Change To Light Theme
                </button>
              </div>
            )
          }}
        </ThemeContext.Consumer>
      )
    
  }
function ChildComponent() {
    return <GrandChildComponent />
  }
function UnderstandingContext() {
  const [theme, setTheme] = useState('dark')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ChildComponent />
    </ThemeContext.Provider>
  )
}

export default UnderstandingContext;