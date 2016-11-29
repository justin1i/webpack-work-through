var render = require('./render');

window.onLinkToPage = function(name) {
  var pageBundle = require('bundle!./' + name + 'Page');
  pageBundle(function(page) {
    render(page);
  });
};
