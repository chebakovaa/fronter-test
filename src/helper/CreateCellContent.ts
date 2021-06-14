export function createRandomIntArray(count: number, maxCount: number): number[] {
  return [...Array(maxCount).keys()].sort((a, b) => Math.random() - 0.5).slice(0, count);   // .map(v => (Math.random() >= 0.5 ? 1: -1)*v).filter(v => v >= 0).slice(count);
}

export function createRandomDoubleArray(source: number[]): number[] {
  return source.concat(source).sort((a, b) => Math.random() - 0.5);
}

export function makeIdContentArray(count: number, maxCount: number): number[] {
  return createRandomDoubleArray(createRandomIntArray(count * count / 2, maxCount * maxCount));
}

export function makeContent(maxCount: number): Map<number, string> {
  return new Map<number, string>([...Array(maxCount * maxCount).keys()].map(v => [v, v.toString()])); //`../assets/cells/${v.toString()}.svg`
}
