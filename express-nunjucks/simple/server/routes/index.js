import express from 'express';
import controller from '../controllers/controller';

const router = express.Router();

router.get('/', controller.homePage);

// module.exports = router;
export default router;