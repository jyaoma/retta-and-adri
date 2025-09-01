import express from 'express';
import { getGroupById, updateRsvp } from '../controllers/groups';

var router = express.Router();

router.get('/:groupId', getGroupById);
router.put('/:groupId', updateRsvp);

export default router;
