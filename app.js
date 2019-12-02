const express = require('express');

const app = express();

app.get('/sum', (req, res)=> {
    const a = req.query.a;
    const b = req.query.b;
    let numA = Number(a);
    let numB = Number(b);
    const c = numA + numB;
    res.send(`'the sum of ${a} and ${b} is ${c}'`);
});

app.listen(8000, () => {
console.log('listening')
});
