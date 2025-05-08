import express from 'express';
import groupsRoutes from './groups';

var router = express.Router();

router.use('/groups', groupsRoutes);

export default router;
