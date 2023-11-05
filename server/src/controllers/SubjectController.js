const { where } = require('sequelize')
const{ Subject } = require('../models')
module.exports = {
  //get all subject
  async index (req, res) {
    try {
      const subjects = await Subject.findAll()
      res.send(subjects)
    } catch (error) {
      res.status(500).send({
         error: 'The subject information was incorrect'
        })
    }
   
  },

  //create subject
  async create(req, res) {
    try {
      const subject = await Subject.create(req.body)
      res.send(subject.toJSON())
    } catch (error) {
      res.status(500).send({
         error: 'Create subjects incorrect'
        })
    }
  },

  //edit subject
  async put(req, res) {
    try {
      await Subject.update(req.body,{
      where: {
        id: req.params.subjectId
      }
    })
    res.send(req.body)
    } catch (error) {
      res.status(500).send({
         error: 'Update subject information was incorrect'
        })
    }
  },

  // delete subject
  async delete(req, res) {
    try {
      const subject = await Subject.findOne({
        where: {
          id: req.params.subjectId
        }
      })
      if (!subject) {
        return res.status(403).send({
          error: 'The subject id is not found'
        })
      }
      await subject.destroy()
      res.send(subject)
    } catch (error) {
      res.status(500).send({
        error: 'Delete subject information was incorrect'
       })
    }
  },

  // show subject by id
  async show (req, res) {
    try {
      const subject = await Subject.findOne({
        where: {
          id: req.params.subjectId
        }
      })
      if (!subject) {
        return res.status(403).send({
          error: 'The subject id is not found'
        })
      }

      res.send(subject)
          
    } catch (error) {
      res.status(500).send({
        error: 'Subjects information was incorrect'
       })
    }
  }
}