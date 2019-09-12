require('dotenv').config();

const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const mongoose = require('mongoose');
const api = require('./api');

const {
  PORT: port = 4000, // 값이 존재하지 않으면 기본값 4000
  MONGO_URI: mongoURI
} = process.env;

mongoose.Promise = global.Promise; // Node 의 Promise를 사용하도록 설정
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }).then({
  render() { // unexpected token . 에 대한 처리로 작성 원래는 console.log('connected to mongodb') 였음..
    return console.log('connected to mongodb');
  }
}).catch((e) => {
  console.error(e);
});

const app = new Koa();
const router = new Router();

// 라우터 설정
router.use('/api', api.routes()); // api 라우트 적용

// 라우터 적용 전에 bodyParser 적용
app.use(bodyParser());

// app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
  console.log('listening to port', port);
});