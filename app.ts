import express, { Application, Request, Response , Router } from 'express';
import path , {} from 'path';

const app: Application = express();
const router: Router = express.Router();

const authRoutes: any = require('./routes/authRoutes');
const PORT: number = 9090;


// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,  '../'  , 'views'));

app.use(router);

router.get('/', (req: Request, res: Response): void => {
    res.render("index");
});

app.use("/register",authRoutes);
app.use("/login" ,authRoutes );

app.listen(PORT, (): void => {
    console.log('SERVER IS UP ON PORT:', PORT);
});
