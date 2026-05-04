import { Circle } from '../shapes/Circle'
import { Rectangle } from '../shapes/Rectangle'
import { Triangle } from '../shapes/Triangle'
import { TShapeType } from '../types'

/**
 * Создаёт одну из встроенных фигур по её типу.
 *
 * @param type Тип встроенной фигуры.
 * @param params Параметры конструктора фигуры.
 * @returns Созданный экземпляр фигуры.
 * @throws Error Если передан неизвестный тип фигуры.
 */

export function createShape(type: TShapeType, params: any) {
  switch (type) {
    case 'rectangle':
      return new Rectangle(params)
    case 'circle':
      return new Circle(params)
    case 'triangle':
      return new Triangle(params)
    default:
      throw new Error(`Unknown shape: ${type}`)
  }
}
