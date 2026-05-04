# Библиотека для работы с геометрическими фигурами

## Установка
```
npm install trueconf-shapes
```

## Использование

```ts
import { Rectangle } from 'trueconf-shapes';

const rect = new Rectangle({ width: 10, height: 5 });

console.log(rect.id);
rect.getArea();

rect.addEventListener('areaCalculated', (e) => {
  console.log(e.detail.area);
});
```

### Круг

```ts
import { Circle } from 'trueconf-shapes';

const circle = new Circle({ radius: 7 });

console.log(circle.id);
console.log(circle.getDiameter());
console.log(circle.getArea());

circle.addEventListener('areaCalculated', (e) => {
  console.log('Circle area:', e.detail.area);
});
```

### Треугольник

```ts
import { Triangle } from 'trueconf-shapes';

const triangle = new Triangle({ a: 3, b: 4, c: 5 });

console.log(triangle.id);
console.log(triangle.getArea());

triangle.addEventListener('areaCalculated', (e) => {
  console.log('Triangle area:', e.detail.area);
});
```

### Через фабрику

```ts
import { createShape } from 'trueconf-shapes';

const shape = createShape('circle', { radius: 10 });

console.log(shape.id);
console.log(shape.getArea());
```