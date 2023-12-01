const { Triangle, Circle, Square } = require('./shapes');

describe('Triangle', () => {
  test('should render triangle SVG', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');
    expect(triangle.render()).toBe('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  });
});

describe('Square', () => {
  test('should render square SVG', () => {
    const square = new Square();
    square.setColor('green');
    expect(square.render()).toBe('<rect x="73" y="40" width="160" height="160" fill="green" />');
  });
});

describe('Circle', () => {
  test('should render circle SVG', () => {
    const circle = new Circle();
    circle.setColor('red');
    expect(circle.render()).toBe('<circle cx="150" cy="115" r="80" fill="red" />');
  });
});