const getSize = (width, height, depth) => {
  return [(2 * depth * width) + (2 * depth * height) + (2 * height * width), width * height * depth]
}