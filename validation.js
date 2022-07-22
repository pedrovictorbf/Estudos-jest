


const fetch = (...args) => import('node-fetch').
then(({default: fetch}) => fetch(...args));


function errorHandler(err) {
    throw new Error(err.message);
};

async function statusCheck(arrayURLs) {

    try {
        const arrayStatus = await Promise
        .all(arrayURLs
            .map(async url => {
                const res = await fetch(url)
                return res.status;
    }));
    return arrayStatus;
    } catch (err) {
        errorHandler(err);
    }
    
};

function generateURLsArray(arrayLinks) {
    return arrayLinks
    .map(objetoLink => Object
        .values(objetoLink).join())
};


async function URLsValidation(arrayLinks) {
    const links = generateURLsArray(arrayLinks);
    const linksStatus = await statusCheck(links)

    const results =arrayLinks.map((objeto, index) => ({ 
        ...objeto, 
        status: linksStatus[index] 
    }))
    return results;
};

module.exports = URLsValidation;