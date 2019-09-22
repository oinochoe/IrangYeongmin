require('dotenv').config();

const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const mongoose = require('mongoose');
const api = require('./api');
const session = require('koa-session');
const ssr = require('./ssr');
const path = require('path');
const serve = require('koa-static');

const staticPath = path.join(__dirname, '../../blog-frontend/build');

const {
  PORT: port = 4000, // 값이 존재하지 않으면 기본값 4000
  MONGO_URI: mongoURI,
  COOKIE_SIGN_KEY: signKey
} = process.env;

mongoose.Promise = global.Promise; // Node의 Promise를 사용하도록 설정
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log('connected to mongodb');
}).catch((e) => {
  console.error(e);
});

const app = new Koa();
const router = new Router();

// 라우터 설정
router.use('/api', api.routes()); // api 라우트 적용
router.get('/', ssr);

// 라우터 적용 전에 bodyParser 적용
app.use(bodyParser());
app.use(serve(staticPath)); // 주의: serve가 ssr전에 와야 합니다.
app.use(ssr); // 일치하는 것이 없으면 ssr을 실행합니다.

// 세션/키 적용
const sessionConfig = {
  maxAge: 86400000, // 하루
  // signed: true(기본으로 설정되어 있음)
};

app.use(session(sessionConfig, app));
app.keys = [signKey];

// app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
  console.log('listening to port', port);
});