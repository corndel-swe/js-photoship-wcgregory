export function stripRed(rgb) {
  // TODO: set the red value in the rgb array to 0
  // e.g. [10, 105, 39] => [0, 105, 39]
  rgb[0] = 0
  return rgb
}

export function stripGreen(rgb) {
  // TODO: set the green value in the rgb array to 0
  // e.g. [10, 105, 39] => [10, 0, 39]
  rgb[1] = 0
  return rgb
}

export function stripBlue(rgb) {
  // TODO: set the blue value in the rgb array to 0
  // e.g. [10, 105, 39] => [10, 105, 0]
  rgb[2] = 0
  return rgb
}

export function invert(rgb) {
  // TODO: set each value in the array to (255 - value)
  // e.g. [50, 100, 210] => [205, 155, 45]
  return rgb.map(colour => 255 - colour)
}

export function grayScale(rgb) {
  // TODO: set each value of the rgb array to the average
  // e.g. [4, 5, 12] => [7, 7, 7]
  const grgb = []
  const sum = rgb.reduce((colour, value) => colour + value, 0)
  const avg = sum / rgb.length
  
  while (rgb.length !== 0) {
    rgb.pop()
    grgb.push([avg])
  }
  return grgb
}

export function blackAndWhite(rgb) {
  // TODO: calculate the average of r, g, b
  // if it's smaller than 255/2, set all values to 0
  // otherwise set all values to 255
  const bwrgb  = Array()
  const avg = rgb.reduce((colour, value) => colour + value, 0) / rgb.length
  const value = avg < (255/2) ? 0 : 255
  
  while (rgb.length !== 0) {
    rgb.pop()
    bwrgb.push([value])
  }
  return bwrgb
}

export function colorChannel(rgb, color) {
  // TODO: get the color channel
  // if color is 'r', leave red alone and set green and blue to 0
  // similar for 'g' and 'b'
  // e.g. [107, 43, 198], 'g' => [0, 43, 0]
  const ccrgb = Array()

  if (color === 'r') {
    let tmpValue = rgb[0]
    ccrgb.push(tmpValue)
    ccrgb.push(0)
    ccrgb.push(0)
  }

  if (color === 'g') {
    let tmpValue = rgb[1]
    ccrgb.push(0)
    ccrgb.push(tmpValue)
    ccrgb.push(0)
  }

  if (color === 'b') {
    let tmpValue = rgb[2]
    ccrgb.push(0)
    ccrgb.push(0)
    ccrgb.push(tmpValue)
  }
  return ccrgb
}

export function sepia(rgb) {
  // TODO: google "sepia tone rgb formula" and implement it
  // const sepia = [112, 66, 20]
  // return sepia
}

export function adjustBrightness(rgb, brightness) {
  // TODO: add the value of 'brightness' to every element in rgb
  // but make sure the value stays between 0 and 255!
}
