import Shape = require('../base/Shape')

/**
 * Параметры, необходимые для создания прямоугольника.
 */
export interface IRectangleParams {
  width: number
  height: number
}

/**
 * Реализация фигуры "Прямоугольник".
 */
export class Rectangle extends Shape.Shape {
  readonly type = 'rectangle'

  /**
   * Создаёт экземпляр прямоугольника.
   *
   * @param params Размеры прямоугольника.
   */
  constructor(public readonly params: IRectangleParams) {
    super()
  }

  /**
   * Ширина прямоугольника.
   *
   * @returns Текущее значение ширины.
   */
  get width() {
    return this.params.width
  }

  /**
   * Высота прямоугольника.
   *
   * @returns Текущее значение высоты.
   */
  get height() {
    return this.params.height
  }

  /**
   * Вычисляет площадь прямоугольника и вызывает событие `areaCalculated`.
   *
   * @returns Площадь прямоугольника.
   */
  getArea() {
    const area = this.width * this.height

    this.emit('areaCalculated', { area })
    return area
  }
}
