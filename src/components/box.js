import React, { useEffect } from "react"
import kute from "kute.js"
import Typed from "typed.js"
import "../styles/box.css"

const options = {
  strings: [
    "Hey I'm Jon.",
    "I'm a Software Developer in San Francisco.",
    "Designing and building robust web applications if my specialty.",
    "Let's connect!"
  ],
  typeSpeed: 20,
}
let typed
function Box() {
  useEffect(() => {
    setTimeout(() => {
      const tt = document.querySelector(".typed")
      const el1 = document.querySelector(".box1")
      const el2 = document.querySelector(".box2")
      const el3 = document.querySelector(".box3")
      const el4 = document.querySelector(".box4")
      const el5 = document.querySelector(".box5")
      typed = new Typed(tt, options)
      const tween1 = kute.to(el1, { width: 150, translateY: 20, translateX: 50, height: 150 });
      const tween2 = kute.to(el2, { width: 180, translateX: 200, translateY: -90, height: 180 });
      const tween3 = kute.to(el3, { width: 170, translateX: 20, translateY: -160, height: 170 });
      const tween4 = kute.to(el4, { width: 200, translateX: 150, translateY: -260, height: 200});
      const tween5 = kute.to(el5, { width: 140, translateX: 330, translateY: -370, height: 140});
      tween1.start()
      tween2.start()
      tween3.start()
      tween4.start()
      tween5.start()
    }, 200)
  })

  return (
    <>
     <div style={{ display: `inline`, marginBottom: `1em`, width: `100%`}} className="typed" />
      <div className="box-container">
      <div  className="box1" />
      <div  className="box2" />
      <div  className="box3" />
      <div  className="box4" />
      <div  className="box5" />
    </div>
    </>
  )
}

export default Box
