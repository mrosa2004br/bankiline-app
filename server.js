// importar express
const express = require('express');

const app = express();

const appName = 'bankiline-app';

const outputPath = `${__dirname}/dist/${appName}`;

// setar o diretorio de build do angular
app.use(express.static(outputPath));

app.get('/*',(req,resp ) =>{
  resp.sendFile(`${outputPath}/index.html`);
})

// ouvir a porta do heroku
app.listen(process.env.PORT);



