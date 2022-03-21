const { config } = require("dotenv");
if(process.env.NODE_ENV !== "production") {
    config();
}

const express = require("express");
const { engine } = require('express-handlebars');

const app = express();

app.use(express.urlencoded({ extended : false }));
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.engine(".hbs", engine({ extname: ".hbs", defaultLayout: "main" }));
app.set("view engine", ".hbs");
app.set("views", "./views");

app.get('/', (req,res) => {
    res.status(200).send("Hello devshelpdevs");
});

app.use((req, res, next) => {
  res.status(404).send("page not found");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("web app running on port " + PORT)
});

export { app };