const requireLogin = require('../middlewares/requireLogin')
const requireCredits = require('../middlewares/requireCredits')

module.exports = app => {
    app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {
        const { title, body, subject, recipients } = req.body
    })
}