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

app.get('/cipher', (req,res) => {
    const text = req.query.text;
    const shift = req.query.shift;

    let code = text.split('').map(char => char.toUpperCase().charCodeAt(0))
    let cipher = code.map(num => num - shift)
    console.log(cipher)
    let message = cipher.map(num => String.fromCharCode(num))
    

    res.send(`'the cipher is: ${message.join('')}'`)
})

app.listen(8000, () => {
console.log('listening')
});
