import { v4 as uuidv4 } from 'uuid'
import type types = require('../types')

/**
 * Базовый класс для всех геометрических фигур в библиотеке.
 */
export abstract class Shape extends EventTarget implements types.IShape {
  readonly id: string
  abstract readonly type: string

  constructor() {
    super()
    this.id = uuidv4()
  }

  /**
   * Отправляет внутреннее событие фигуры с необязательными данными.
   *
   * @param event Название события.
   * @param detail Дополнительные данные события.
   */
  protected emit(event: string, detail?: unknown) {
    this.dispatchEvent(new CustomEvent(event, { detail }))
  }

  /**
   * Вычисляет площадь текущей фигуры.
   *
   * @returns Значение площади.
   */
  abstract getArea(): number
}
