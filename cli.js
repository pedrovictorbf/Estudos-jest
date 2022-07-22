


const fileReading = require('./index');
const path = process.argv;
const URLsValidation = require('./validation')

async function textProcess(filePath) {
    const resultado = await  fileReading(filePath[2]);
    if(path[3] === 'validate'){
        console.log('validated links' , await URLsValidation(resultado))
    } else {
        console.log('links list' , resultado)
    }
};

textProcess(path);