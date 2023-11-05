const UserController = require('./controllers/UserController')
const isAuthenController = require('./authen/isAuthenController')
const SubjectController = require('./controllers/SubjectController')
const Subject = require('./models/Subject')

module.exports = (app) => {
     // get subject by id
     app.get('/subjects', SubjectController.index)

     // create subject
     app.post('/subject', SubjectController.create)

     // edit subject, suspend, active
     app.put('/subject/:subjectId', SubjectController.put)

     // delete subject
     app.delete('/subject/:subjectId', SubjectController.delete)

     // get all subject
     app.get('/subject/:subjectId', SubjectController.show)



}   