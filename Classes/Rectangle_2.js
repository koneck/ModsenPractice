class Rectangle {
  constructor(width, height) {
      this.width = width;
      this.height = height;
  }

  Area() {
      return this.width * this.height;
  }

  Perimeter() {
      return 2 * (this.width + this.height);
  }
}

const rectangle = new Rectangle(14, 2);
const area = rectangle.Area();
const perimeter = rectangle.Perimeter();

console.log("Площадь", area);
console.log("Периметр", perimeter);
