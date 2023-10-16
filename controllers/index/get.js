module.exports = (req, res) => {
  return res.render('index/index', {
    page: 'index/index',
    includes: {
      external: {
        css: ['general', 'page'],
        js: ['page', 'serverRequest', 'header']
      },
      meta: {
        title: res.__('Cryptist'),
        description: res.__('Cryptist is a blockchain event in Istanbul'),
        image: '/img/meta/header.png',
        twitter: true
      }
    },
  });
};
