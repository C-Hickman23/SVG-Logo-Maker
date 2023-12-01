const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes');

function createSVGFile(text, textColor, shape, shapeColor) {
  shape.setColor(shapeColor);

  const shapeSVG = shape.render();

  let svgContent = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
    ${shapeSVG}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>`;

  fs.writeFileSync('logo.svg', svgContent);

  console.log('Generated logo.svg');
}

async function main() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color:',
    },
    {
      type: 'list',
      name: 'chosenShape',
      message: 'Choose a shape:',
      choices: ['Circle', 'Triangle', 'Square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color:',
    },
  ]);

  const { text, textColor, chosenShape, shapeColor } = answers;

  let shape;
  switch (chosenShape) {
    case 'Circle':
      shape = new Circle();
      break;
    case 'Triangle':
      shape = new Triangle();
      break;
    case 'Square':
      shape = new Square();
      break;
    default:
      console.error('Invalid shape choice');
      return;
  }

  createSVGFile(text, textColor, shape, shapeColor);
}

main();