const calculator = require('./index')

test('Calculo realizado com sucesso!', () => {
    expect(calculator.soma(2, 2)).toBe(4)
})

//execute o comando [npm test]  para realizar test unitário