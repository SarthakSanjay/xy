import { Sidebar } from './layout/Sidebar'
import './App.css'
// import { Button } from '@/components/ui/button'
// import { ModeToggle } from './components/mode-toggle';

function App() {

  return (
    
      <div className='bg-black h-screen w-screen border-white border'>
        
        <Sidebar />
        {/* <Button className='hover:bg-red-800' onClick={()=>{
          console.log('clikcked');
        }}>Hekko</Button>
        <ModeToggle /> */}
      </div>
    
  )
}

export default App
