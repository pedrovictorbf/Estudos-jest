


const fs = require('fs');


function getLinks(text) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;

    const result = [];

    let temp;

    while((temp = regex.exec(text)) !== null) {
        result.push({ [temp[1]] : temp[2]})
    }
    return result.length === 0 ? "there  isn't links" : result;
};



function errorHandler(err) {
    throw new Error(err.code , "there isn't files in the path")
};

 async function fileReading(filePath) {
     const encoding = 'utf-8'
     try {
    const data =  await fs.promises.readFile(filePath , encoding)
    return (getLinks(data))
     } catch (err) {
        errorHandler(err)
     }

 }

module.exports = fileReading;