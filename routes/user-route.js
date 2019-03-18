const userService = require('../services/user-service')
const reviewService = require('../services/review-service')
const BASE = '/user'

function addRoutes(app) {
    app.get(BASE, (req, res) => {
        userService.query()
            .then(users => res.json(users))
    })
    app.get(`${BASE}/:id`, (req, res) => {
        const userId = req.params.id
        Promise.all([
            userService.getById(userId),
            reviewService.query({ userId })
        ])
            .then(([user, reviews]) => {
                console.log({ user })
                res.json({ user, reviews })
            })
    })

    app.post('/signup', (req, res) => {
        const nickname = req.body.nickname
        userService.addUser({ nickname })
            .then(user => res.json(user))
    })

    app.post('/login', (req, res) => {
        const userName = req.body.userName
        console.log('first', userName);

        userService.checkLogin({ userName })
            .then(user => {
                console.log('after ', user);
                req.session.user = user
                if (user) {
                    var userToReturn = { ...user }
                    delete userToReturn.password
                }
                res.json(userToReturn)
            }).catch(() => res.status(500).send('Wrong Credentials'))
    })

}


module.exports = addRoutes;