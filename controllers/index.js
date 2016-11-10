let express = require('express')
    , router = express.Router()

// router.use('/comments', require('./comments'))
// router.use('/users', require('./users'))

router.get('/', function (req, res) {
    res.send('index')
})

module.exports = router