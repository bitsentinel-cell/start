import express, { Application, Request, Response , Router   } from 'express';
const app: Application = express();
const router: Router = express.Router()

router.get('/', (req: Request, res: Response): void => {
    res.render("auth/register");
});

router.get('/', (req: Request, res: Response): void => {
    res.render("auth/login");
});

module.exports = router;