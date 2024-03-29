import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import { Path } from "mongoose";
import { fileURLToPath } from "url";

// add paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb, extended: true" }));
app.use(cros());
app.use("/assets", express.static(path.join(__dirname, 'public/asstes')));


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/asstes");
    },
    __filename: function (req, file, cb) {
        cb(null, file.crossOriginname);
    },
});


const upload = multer({ storage });


// const upload=multer({storage });

const PORT = process.env.PORT || 6001;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => console.log('Server Port: ${PORT}'));
}).catch((error) => console.log('${error} did not connect'))


