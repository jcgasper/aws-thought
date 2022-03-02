const {v4: uuidv4 } = require('uuid');

const params = fileName => {
    const myFile = fileName.originalname.split('.');
    const fileType = myFile[myFile.length -1];

    const imageParams = {
        Bucket: 'user-images-3cc2039a-2703-4d49-a588-08b2632cffdf',
        Key: `${uuidv4()}.${fileType}`,
        Body: fileName.buffer
    };
    return imageParams;
};

module.exports = params;
