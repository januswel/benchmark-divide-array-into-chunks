export default function divideArrayIntoChunks<T>(src: Array<T>, size = 1) {
  const numofChunks = Math.ceil(src.length / size)
  const result: Array<Array<T>> = []
  for (let i = 0; i < numofChunks; ++i) {
    const start = i * size
    result.push(src.slice(start, start + size))
  }
  return result
}
