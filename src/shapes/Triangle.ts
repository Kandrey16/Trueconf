import { Shape } from '../base/Shape'

/**
 * Параметры, необходимые для создания треугольника.
 */
export interface ITriangleParams {
  a: number
  b: number
  c: number
}

/**
 * Реализация фигуры "Треугольник".
 */
export class Triangle extends Shape {
  readonly type = 'triangle'

  /**
   * Создаёт экземпляр треугольника.
   *
   * @param params Длины сторон треугольника.
   */
  constructor(public readonly params: ITriangleParams) {
    super()
  }

  /**
   * Вычисляет площадь треугольника по формуле Герона и вызывает событие `areaCalculated`.
   *
   * @returns Площадь треугольника.
   */
  getArea(): number {
    const { a, b, c } = this.params
    const s = (a + b + c) / 2

    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c))

    this.emit('areaCalculated', { area })
    return area
  }
}
