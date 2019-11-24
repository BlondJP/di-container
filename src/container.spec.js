describe('testing container behaviour', () => {
    
    const Container = require('./container')

    it('testing with no functions', async () => {
        const initialFunctions = new Map()
        const container = new Container(initialFunctions)

        const res = container.has('unExistingFunc')
        expect(res).toBeFalsy()
    })
  
    it('testing ".has()" getting unregistered func', async () => {
        const initialFunctions = new Map()
        const container = new Container(initialFunctions)

        container.register('lol', () => console.log('I am alive'))
        container.register('test', () => console.log('test'))
        container.register(0, () => console.log('0'))
        container.register(1, () => console.log('1'))

        const res = container.has('func');
        expect(res).toBeFalsy()
    })

    it('testing ".has()" getting registered func', async () => {
        const initialFunctions = new Map()
        const container = new Container(initialFunctions)

        container.register('lol', () => console.log('I am alive'))
        container.register('test', () => console.log('test'))
        container.register(0, () => console.log('0'))
        container.register(1, () => console.log('1'))

        const res = container.has('lol');
        expect(res).toBeTruthy()
    })

    it('testing ".get()" getting unregistered func', async () => {
        const initialFunctions = new Map()
        const container = new Container(initialFunctions)

        container.register('lol', () => console.log('I am alive'))
        container.register('test', () => console.log('test'))
        container.register(0, () => console.log('0'))
        container.register(1, () => console.log('1'))

        try {
            container.get('func');
        } catch (e) {
            expect(e.message).toBe('the function func does not exist in the container')
        }
    
    })

    it('testing ".get()" getting registered func', async () => {
        const initialFunctions = new Map()
        const container = new Container(initialFunctions)

        container.register('lol', () => 42)
        container.register('test', () => 123)
        container.register(0, () => 2019)
        container.register(1, () => 2020)

        const f = container.get('test');
        expect(f()).toBe(123)
    })

    it('testing ".get()" getting registered bound func', async () => {
        const initialFunctions = new Map()
        const container = new Container(initialFunctions)

        container.register('lol', () => 42)
        container.register('test', () => 123)
        container.register('lal', ({dep}) => dep, {dep: 'dependency'})
        container.register('lil', () => 2020)

        const f = container.get('lal');
        expect(f()).toBe('dependency')
    })
})