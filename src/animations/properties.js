// create values and options objects
var startValues = {}
var endValues = {}
var options = {}

// here we define properties that are commonly supported
startValues.backgroundColor = "rgba(255,214,38,1)"
endValues.backgroundColor = "rgba(236,30,113,0.1)"

// here we define the properties according to the target browsers
if (isIE8) {
  // or any other browser that doesn"t support transforms
  startValues.left = 0
  endValues.left = 250
  // for IE we override color values
  startValues.backgroundColor = "#CDDC39"
  endValues.backgroundColor = "#ec1e71"
  // IE8 also doesn't support RGBA, we set to animate the opacity of the element
  startValues.opacity = 1
  endValues.opacity = 0.2
} else if (isIE9) {
  // or any other browser that only support 2d transforms
  startValues.translate = 0 // 2d translate on X axis
  endValues.translate = 250
  startValues.rotate = -180 // 2d rotation on Z axis
  endValues.rotate = 0
  startValues.scale = 1 // 2d scale
  endValues.scale = 1.5
} else {
  // most modern browsers
  startValues.translate3d = [0, 0, 0] //3d translation on X axis
  endValues.translate3d = [250, 0, 0]
  startValues.rotateZ = -180 // 3d rotation on Z axis
  endValues.rotateZ = 0
  startValues.rotateX = -20 // 3d rotation on X axis
  endValues.rotateX = 0
  startValues.scale = 1 // 2d scale
  endValues.scale = 1.5
  options.perspective = 400 // 3d transform option
}

// common tween options
options.easing = "easingCubicOut"
options.duration = 2500
options.yoyo = true
options.repeat = 1
