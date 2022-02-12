export enum TempUnit {
  CELCIUS
}

export function kelvinToCelcius(num: number) {
  return Math.round(num - 273.15);
}
