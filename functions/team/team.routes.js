const express = require('express');
const { validate } = require('express-validation');
const router = express.Router();

const TEAM = require('./team.service')
const { getTeam, deleteTeam, createTeam, updateTeam } = require('./team.validation')

router.get('/teams', TEAM.getAll)
router.get('/teams/:id', validate(getTeam), TEAM.getById)
router.post('/teams', validate(createTeam), TEAM.create)
router.delete('/teams/:id', validate(deleteTeam), TEAM.deleteById)
router.put('/teams/:id', validate(updateTeam), TEAM.update)

module.exports = router;
