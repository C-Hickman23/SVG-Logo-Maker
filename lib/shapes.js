class Shape {
    constructor() {
      this.color = "";
    }
  
    setColor(colorVar) {
      this.color = colorVar;
    }
  }
  
  class Triangle extends Shape {
    render() {
      return `<polygon width="300" height="200" points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    render() {
      return `<rect width="300" height="200" x="73" y="40" fill="${this.color}" />`;
    }
  }
  
  class Circle extends Shape {
    render() {
      return `<circle width="300" height="200" cx="150" cy="115" r="80" fill="${this.color}" />`;
    }
  }
  
  module.exports = { Triangle, Square, Circle };