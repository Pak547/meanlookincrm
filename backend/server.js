const express = require("express");
const errorHandler = require("./middleware/errorHandler");
require("dotenv").config;
const app = express();
const port = process.env.PORT || 4200;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`)
});
