const express = require('express')
    , bodyParser = require('body-parser');

const app = express();

// 서버가 읽을수있도록 html위치 정의
app.set('views', __dirname+'/views')
// 서버가 html렌더링 할때 ejs엔진 사용하도록 설정
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile)

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(express.static(__dirname+'/public'))

app.get('/', (req,res)=> {
    res.render('index.html')
})

app.listen(8080, ()=> {
    console.log('Connected!')
})