const getFile = require('../index')

const arrayResult = [
    {
        FileList : "https://developer.mozilla.org/pt-BR/docs/Web/API/FileList"
    }
]

describe('getFile::', () => {
    it('must be a function', () => {
        expect(typeof getFile).toBe('function');
    })
    it('must return a links array', async  () => {

        const result = await getFile('test/arquives/text.md')
        
        expect(result).toEqual(arrayResult);
    })
    it(`must return message : "there  isn't links" `, async () => {

        const result = await getFile('test/arquives/test-text.md')

        expect(result).toBe("there  isn't links");
    })
})



