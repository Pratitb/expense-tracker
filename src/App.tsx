import './App.css'
// import MobileHeader from './components/MobileHeader'
import MobileMenu from './components/MobileMenu'
import { mobileMenu } from './utils/data'

const App = () => {

  return (
    <>
      {/* <MobileHeader /> */}
      <MobileMenu items={mobileMenu} />
    </>
  )
}

export default App
