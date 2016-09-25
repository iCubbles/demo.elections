(function () {
  'use strict';

  window.com_incowia_demo_elections = {

    // assume the given value in associated connection is an url. Build an axios confirm config object using thie url.
    buildAjaxRequestConfig: function (url, next) {
      next({
        url: url,
        method: 'get',
        responseType: 'json'
      });
    }
  };
})();
