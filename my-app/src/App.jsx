import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BaiTap1 from './Coponents/BaiTap1'
import BaiTap2 from './Coponents/BaiTap2'
import BaiTap3 from './Coponents/BaiTap3'
import BaiTap4 from './Coponents/BaiTap4'
import BaiTap5 from './Coponents/BaiTap5'
import BaiTapComponents from './Coponents/BaiTapComponents'
import BaiTapComponents2 from './Coponents/BaiTapComponents2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BaiTap1></BaiTap1>
      <BaiTap2></BaiTap2>
      <BaiTap3></BaiTap3>
      <BaiTap4></BaiTap4>
      <BaiTap5></BaiTap5>
      {/* <BaiTapComponents2></BaiTapComponents2> */}
    </>
  )
}

export default App
