// import {useGSAP} from '@gsap/react'
// import gsap from 'gsap'
// import React, { useRef, useState } from 'react'

// const App = () => {

//   // const gsapRef = useRef()
  
//   // useGSAP(()=>{
//   //   gsap.to(gsapRef.current,{
//   //     x:1200,
//   //     duration:2,
//   //     rotate:720,
//   //     delay:1
//   //   })
//   // })

//   //const [circle,setCircle]  =useState(0)
  
//   // const random= gsap.utils.random(-500,500,100)

//   // useGSAP(()=>{
//   //   gsap.to(".circle",{
//   //     x:circle,
//   //     duration:1
//   //   })
//   // },[circle])

//   // return (
//   //   <main>
//   //     <button onClick={()=>{
//   //       setCircle(random)
        
//   //     }}>Animate</button>
//   //     <div className="circle">
//   //     </div>
//   //   </main>
//   // )

//   const randomX= gsap.utils.random(-500,500,100)
//   const randomY= gsap.utils.random(-200,200,30)
//   const rotateX= gsap.utils.random(-90,90,3)

//   const [xValue, setxValue] = useState(0)
//   const [yValue, setyValue] = useState(0)
//   const [roti, setRoti] = useState(0)
//   const imgRef =useRef()

//   useGSAP(()=>{
//     gsap.to(imgRef.current,{
//       x:xValue,
//       y:yValue,
//       duration:1,
//       rotate:roti
//     })
//   },{scope:'main', dependencies:[xValue,rotateX,randomY]})

//   return(
//     <main>
//       {/* <button>Animate</button> */}
//       {/* <div ref={boxRef} className="box"></div> */}
//       <img onClick={()=>{
//         setxValue(randomX)
//         setyValue(randomY)
//         setRoti(rotateX)
//       }} ref={imgRef} src="https://img.freepik.com/free-vector/bee_1308-18942.jpg?t=st=1733680928~exp=1733684528~hmac=7b40c03cdacc35fdac8e53287b5fdb50013eb0f7c4226043409c036b28f54a57&w=740" alt="" />
//     </main>
//   )
// }

// export default App

//ContextSafe

import gsap from 'gsap'
import React, { useRef } from 'react'
import {useGSAP} from '@gsap/react'

const App = () => {

const boxRef =useRef()

const {contextSafe} =useGSAP()

const rotateBox = contextSafe(()=>{
    gsap.to(boxRef.current,{
      rotate:360,
      duration:1
    })
  }
)
  return (
    <main>
      <button onClick={rotateBox}>Animate</button>
      <div ref={boxRef} className="box">Box</div>
    </main>
  )
}

export default App
