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
    example: [
      {
        text: 'Example 1',
        link: '/example1',
        image: '/img/example1.png'
      },
      {
        text: 'Example 2',
        link: '/example2',
        image: '/img/example2.png'
      },
      {
        text: 'Example 3',
        link: '/example3',
        image: '/img/example3.png'
      }
    ]
  });
};
