module.exports = (req, res) => {
  return res.render('index/index', {
    page: 'index/index',
    title: res.__('Cryptist'),
    includes: {
      external: {
        css: ['general', 'page'],
        js: ['page', 'serverRequest']
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
