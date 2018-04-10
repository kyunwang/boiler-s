import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
	res.render('homePage', { message: 'Hello Server' });
});

export default router;