const express = require("express");
const app = express();
const Comic = require("./models/comic");
const addModels = require("./middleware/add-models");
const apiRoutes = require("./routes");

app.use(express.json());
app.use(addModels);
app.use("/api", apiRoutes);

const port = process.env.PORT || 3000;

const seed = () => {
  Comic.create("Spider-Man", 150, "Stan Lee");
  Comic.create("Batman", 200, "Bob Kane");
  Comic.create("X-Men", 180, "Stan Lee");
  Comic.create("Superman", 170, "Jerry Siegel");
  Comic.create("Wonder Woman", 120, "William Moulton Marston");
  Comic.create("The Avengers", 160, "Stan Lee");
  Comic.create("Iron Man", 130, "Stan Lee");
  Comic.create("Thor", 140, "Stan Lee");
  Comic.create("Green Lantern", 110, "Martin Nodell");
};

seed();

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
