const changeColor = require('./changeColor')

test('должен менять цвет строки', () => {
    expect(changeColor('', 'green', 'red')).toBe('')
    expect(changeColor(undefined, 'green', 'red')).toBe('')
    expect(changeColor('green small', 'green', 'red')).toBe('red small')
    expect(changeColor('green small', 'green', 'yellow')).toBe('yellow small')

    expect(changeColor('GREEN smal', 'green', 'red', true)).toBe('red small')
    expect(changeColor('green smal', 'GREEN', 'red', true)).toBe('red small')

});