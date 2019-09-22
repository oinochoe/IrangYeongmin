const render = require('./render').default;

module.exports = async (ctx) => {
  const rendered = render(ctx);
  ctx.body = rendered; // 임시코드, 추후 구현예정
};