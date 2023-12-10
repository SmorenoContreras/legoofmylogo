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