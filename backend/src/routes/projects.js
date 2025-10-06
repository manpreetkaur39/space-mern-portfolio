const express = require('express');
const router = express.Router();
const projectsController = require('../controllers/projectsController');

router.get('/', projectsController.getProjects);
router.post('/', projectsController.createProject);
router.delete('/:id', projectsController.deleteProject);

module.exports = router;
