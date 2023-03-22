const router = require('express').Router();
const { verifyToken } = require('../middlewares/verifyToken')
const { verifyRole } = require('../middlewares/verifyRole')
const { uploadFile } = require('../middlewares/upload-file')

const eventController = require('../controllers/eventController')

/**
 * as a user i can create new event  
 */

router.post('/v1/event/create', uploadFile(), verifyToken, eventController.createEvent);

/**
 * as a user i can get all events  
 */

router.get('/v1/events', eventController.getEvents);

/**
 * as a user i can update event  
 */

router.put('/v1/event', verifyToken, uploadFile(), eventController.updateEvent);


/**
 * as a user i can update event  
 */

router.get('/v1/event/:id', verifyToken, eventController.getEventById);


/**
 * as a user i can search for events by title  
 */

router.get('/v1/events/title/:title', verifyToken, eventController.getEventsByTitle);


module.exports = router