import React, { useEffect } from "react"
import Typed from "typed.js"
import styles from "../styles/text.module.css"
import "../styles/box.css"

let kute
if (typeof window !== `undefined` && typeof document !== `undefined`) {
  kute = require("kute.js")
}

const options = {
  strings: [],
  typeSpeed: 30,
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
      const el6 = document.querySelector(".box6")
      const el7 = document.querySelector(".box7")
      const el8 = document.querySelector(".box8")
      const el9 = document.querySelector(".box9")
      const el10 = document.querySelector(".box10")
      typed = new Typed(tt, options)
      const tween1 = kute.to(el1, {
        width: 150,
        translateY: 20,
        translateX: 50,
        height: 150,
      })
      const tween2 = kute.to(el2, {
        width: 180,
        translateX: 200,
        translateY: -90,
        height: 180,
      })
      const tween3 = kute.to(el3, {
        width: 170,
        translateX: 20,
        translateY: -160,
        height: 170,
      })
      const tween4 = kute.to(el4, {
        width: 200,
        translateX: 150,
        translateY: -260,
        height: 200,
      })
      const tween5 = kute.to(el5, {
        width: 140,
        translateX: 330,
        translateY: -370,
        height: 140,
      })

      const tween6 = kute.to(el6, {
        width: 240,
        translateX: 550,
        translateY: 260,
        height: 240,
      })
      const tween7 = kute.to(el7, {
        width: 160,
        translateX: 530,
        translateY: 100,
        height: 160,
      })
      const tween8 = kute.to(el8, {
        width: 240,
        translateX: 350,
        translateY: 170,
        height: 240,
      })
      const tween9 = kute.to(el9, {
        width: 100,
        translateX: 630,
        translateY: -600,
        height: 100,
      })
      const tween10 = kute.to(el10, {
        width: 170,
        translateX: 330,
        translateY: -900,
        height: 170,
      })
      tween1.start()
      tween2.start()
      tween3.start()
      tween4.start()
      tween5.start()
      tween6.start()
      tween7.start()
      tween8.start()
      tween9.start()
      tween10.start()
    }, 200)
  })

  return (
    <div className={styles.textWrapper}>
      <div
        style={{
          display: `inline`,
          width: `100%`,
        }}
        className="typed"
      />
      <div className="box-container">
        <div className="box1" />
        <div className="box2" />
        <div className="box3" />
        <div className="box4" />
        <div className="box5" />
        <div className="box6" />
        <div className="box7" />
        <div className="box8" />
        <div className="box9" />
        <div className="box10" />
      </div>
    </div>
  )
}

export default Box
