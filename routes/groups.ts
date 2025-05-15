import express from 'express';
import { getUsersByGroupId, updateRsvpStatus } from '../controllers/groups';

var router = express.Router();

router.get('/:groupId', getUsersByGroupId);
router.put('/:groupId', updateRsvpStatus);

export default router;
