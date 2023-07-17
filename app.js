"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const router = express_1.default.Router();
const authRoutes = require('../routes/authRoutes');
const PORT = 9090;
// View engine setup
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, '../', 'views'));
app.get('/', (req, res) => {
    res.render("index");
});
app.use("/register", authRoutes);
app.use("/login", authRoutes);
app.listen(PORT, () => {
    console.log('SERVER IS UP ON PORT:', PORT);
});
