/**
 * Описывает минимальный контракт, который должна реализовать любая фигура.
 */
export interface IShape {
  readonly id: string
  readonly type: string
  getArea(): number
}

export type TShapeType = 'rectangle' | 'circle' | 'triangle'