import Typed from "typed.js"

const options = {
  strings: [
    "Progressional Developer",
    "Freelance Web Developer",
    "Product Designer",
  ],
  typeSpeed: 40,
}

function IntroText(props) {
  return new Typed(props.tt, options)
}

export { IntroText }
