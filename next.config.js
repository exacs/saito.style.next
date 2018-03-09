// next.config.js
module.exports = {
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/resume': { page: '/resume' }
    }
  }
}
