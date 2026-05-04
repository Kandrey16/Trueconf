import { Shape } from '../base/Shape'

type TShapeConstructor = new (params: any) => Shape

const registry = new Map<string, TShapeConstructor>()

/**
 * Регистрирует конструктор фигуры по указанному типу.
 *
 * @param type Идентификатор типа фигуры.
 * @param ctor Конструктор, который создаёт фигуру.
 */
export function registerShape(type: string, ctor: TShapeConstructor) {
  registry.set(type, ctor)
}

/**
 * Создаёт экземпляр фигуры из реестра.
 *
 * @param type Зарегистрированный тип фигуры.
 * @param params Параметры конструктора фигуры.
 * @returns Созданный экземпляр фигуры.
 * @throws Error Если фигура с таким типом не зарегистрирована.
 */
export function createShape(type: string, params: any): Shape {
  const Ctor = registry.get(type)

  if (!Ctor) {
    throw new Error(`Shape "${type}" not registered`)
  }

  return new Ctor(params)
}