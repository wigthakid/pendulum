x_values = []
y_values = []
for (i = 0; i < 180; i++) {

  r = (3.14 * i)/180
  h = 10 
  x = h*Math.sin(r)
  y = h*Math.cos(r)

  x_values.push(x)
  y_values.push(y)

  var path = new Path.Circle({
    center: { x: x, y:y }, 
    
    radius: 10})




  path.fillColor = {
    hue: event.count * 3, 
    saturation:1, 
    brightness:1
}
}







// function onMouseMove (event){

//     var path = new Path.Circle({
//     center: event.middlePoint, 
//     radius: 10})


//   path.fillColor = {
//     hue: event.count * 3, 
//     saturation:1, 
//     brightness:1
//   }


//   }


// T=2π√Lg

// g = 9.88
// l = 100
// t = Math.pow(g*l, .5)*2





   //console.log(event.middlePoint)
    var path = new Path.Circle({
    center: { x: 331.5, y: 272.5 }, 
    
    radius: 10})




  path.fillColor = {
    hue: event.count * 3, 
    saturation:1, 
    brightness:1
  
  // }



