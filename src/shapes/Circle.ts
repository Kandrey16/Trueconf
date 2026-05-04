import { Shape } from '../base/Shape'

/**
 * Параметры, необходимые для создания круга.
 */
export interface ICircleParams {
  radius: number
}

/**
 * Реализация фигуры "Круг".
 */
export class Circle extends Shape {
  readonly type = 'circle'

  /**
   * Создаёт экземпляр круга.
   *
   * @param params Параметры круга.
   */
  constructor(public readonly params: ICircleParams) {
    super()
  }

  /**
   * Радиус круга.
   *
   * @returns Текущее значение радиуса.
   */
  get radius() {
    return this.params.radius
  }

  /**
   * Вычисляет диаметр круга.
   *
   * @returns Диаметр круга.
   */
  getDiameter(): number {
    return this.radius * 2
  }

  /**
   * Вычисляет площадь круга и вызывает событие `areaCalculated`.
   *
   * @returns Площадь круга.
   */
  getArea(): number {
    const area = Math.PI * this.radius ** 2

    this.emit('areaCalculated', { area })
    return area
  }
}
