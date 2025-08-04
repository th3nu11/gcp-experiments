const functions = require('@google-cloud/functions-framework');

functions.http('cloudrunfunction-cloudbuildyaml', async (req, res) => {

    const random = Math.floor(Math.random() * 10);

    if (random === 0) {
        await new Promise(resolve => setTimeout(resolve, 50));
    }

    res.send(`Hello ${req.query.name || req.body.name || 'World'}! (v1)`);
});
