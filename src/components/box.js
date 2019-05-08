import React, { useEffect } from "react"
import kute from "kute.js"
import Typed from "typed.js"
import "../styles/box.css";

var options = {
  strings: ["&amp; Hello Alex."],
  typeSpeed: 40
}
let typed;

function Box({ children, ...props }) {
  useEffect(() => {
    setTimeout(() => {
      const tt = document.querySelector(".typed")
      const el1 = document.querySelector(".box1")
      const el2 = document.querySelector(".box2")
      const el3 = document.querySelector(".box3")
      const el4 = document.querySelector(".box4")
      typed = new Typed(tt, options)
      var tween1 = kute.fromTo(el1, { translate: 0 }, { translate: -250 }) // or translate:[x,y] for both axis
      var tween2 = kute.fromTo(el2, { translateX: 0 }, { translateX: 200 })
      var tween3 = kute.fromTo(
        el3,
        { rotateY: 0 },
        { rotateY: 160 },
        { perspective: 100 }
      )
      var tween4 = kute.fromTo(
        el4,
        { translate3d: [0, 0, 0] },
        { translate3d: [0, 0, -100] },
        { parentPerspective: 100 }
      )
      tween1.start()
      tween2.start()
      tween3.start()
      tween4.start()
    }, 1000)
  })
  return (
    <>
      <span className="typed">{typed}</span>
      <div style={{ backgroundColor: `green` }} className="box1" />
      <div style={{ backgroundColor: `blue` }} className="box2" />
      <div style={{ backgroundColor: `orange` }} className="box3" />
      <div style={{ backgroundColor: `blue` }} className="box4" />
    </>
  )
}

export default Box
