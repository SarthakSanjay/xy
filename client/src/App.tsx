import './App.css'
import Content from './layout/content/Content'
import Sidebar from './layout/sidebar/Sidebar'

function App() {

  return (
      <div className='bg-black h-screen w-screen flex '>
        <Sidebar />
        <Content />
      </div>
    
  )
}

export default App
