import NavBar from './components/NavBar.jsx'

import './App.css'

function App() {
  
  const linksData = [
    {name: 'home', href: '/'},
    {name: 'about', href: '/'},
    {name: 'astros', href: '/'},
  ]

  return (
    <>
      <NavBar links={linksData}/>
      
    </>
  )
}

export default App
