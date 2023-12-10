const { Circle } = require('./shapes');

describe('Circle Tests', () => {
    test('will this shape pass', () => {
        const circle = new Circle('circle')
        expect(circle.text).toEqual('circle')
    });

    test('will render circle', () => {
        const circle = new Circle('text', 'textColor', 'shapeColor');

        expect(circle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="shapeColor" />
      
        <text x="150" y="117" font-size="60" text-anchor="middle" fill="textColor">text</text>
      
      </svg>`)
    });



});

describe('Triangle Tests', () => {
    test('will the new shape pass', () => {
        const triangle = new Triangle('triangle')
        expect(triangle.text).toEqual('triangle')
    });

    test('will render triangle', () => {
        const triangle = new Triangle('text', 'textColor', 'shapeColor');

        expect(triangle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points="150, 18 244, 182 56, 182" fill="shapeColor" />
      
        <text x="150" y="173" font-size="60" text-anchor="middle" fill="textColor">text</text>
      
      </svg>`)

    });

});

describe('Square Tests', () => {
    test('will this shape pass', () => {
        const square = new Square('square')
        expect(square.text).toEqual('square')
    });

    test('will render square', () => {
        const square = new Square('text', 'textColor', 'shapeColor');

        expect(square.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <rect x="73" y="40" width="160" height="160" fill="shapeColor" />
      
        <text x="153" y="135" font-size="60" text-anchor="middle" fill="textColor">text</text>
      
      </svg>`)
    });

});