export default function divideArrayIntoChunks<T>(src: Array<T>, size = 1) {
  return src.reduce((acc, _, index) => (index % size ? acc : [...acc, src.slice(index, index + size)]), [])
}
