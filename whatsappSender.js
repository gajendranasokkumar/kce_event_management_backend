const wbm = require('wbm');

wbm.start().then(async () => {
    const phones = ['+919944919805'];
    const message = 'Good Morning.';
    await wbm.send(phones, message);
    await wbm.end();
}).catch(err => console.log(err));