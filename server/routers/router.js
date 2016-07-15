const router = require('express').Router();
const requestHandler = require('../requestHandlers/requestHandlers.js')

router.route('/api/assetAlloc')
  .get(requestHandler.getDistribution);

module.exports = router;