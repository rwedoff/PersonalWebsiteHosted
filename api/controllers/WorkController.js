/**
 * WorkController
 *
 * @description :: Server-side logic for managing works
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  /**
   * `WorkController.download()`
   */
  download: function (req, res) {
    return res.redirect('https://github.com/rwedoff/PersonalWebsiteHosted/blob/master/assets/images/Ryan%20Wedoff%20Resume.pdf');
  }
};

