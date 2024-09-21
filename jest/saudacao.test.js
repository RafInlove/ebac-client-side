const saudacao = require('./saudacao')

describe('Testes para saudacao', () => {
    test('Deverá retornar Olá, Maria', () => {
        const olaMaria = saudacao.dizOla('Maria')
        expect(olaMaria).toBe('Olá, Maria')
        expect(olaMaria).toContain(',')
    })
})
