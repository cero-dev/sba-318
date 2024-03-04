const express = require("express");
const router = express.Router();
const Comic = require("./models/comic");

router.get("/", (req, res) => {
    res.send({ msg: "hello world!" });
  });

router.get("/comics", (req, res) => {
    const { Comic } = req.db;
    res.send(Comic.list());
  });

  router.get("/comics/:id", (req, res) => {
    const { id } = req.params;
    const { Comic } = req.db;
    const comic = Comic.find(Number(id));
  
    if (!comic) return res.sendStatus(404);
  
    res.send(comic);
  });

  router.post("/comics", (req, res) => {
    const { seriesName, amountOfIssues, creator } = req.body;
    if (!seriesName) return res.sendStatus(400);
    if (!amountOfIssues) return res.sendStatus(400);
    if (!creator) return res.sendStatus(400);
  
    const newComic = Comic.create(seriesName, amountOfIssues, creator);
    res.status(201).send(newComic);
  });

  router.patch("/comics/:id", (req, res) => {
    const {
      params: { id },
      body: { seriesName, amountOfIssues, creator },
      db: { Comic },
    } = req;
  
    if (!seriesName) return res.sendStatus(404);
    if (!amountOfIssues) return res.sendStatus(404);
    if (!creator) return res.sendStatus(404);
  
    const comic = Comic.update(Number(id), req.body.seriesName, req.body.amountOfIssues, req.body.creator);
    if (!comic) return res.sendStatus(404);
  
    res.send(comic);
  });

  router.delete("/comics/:id", (req, res) => {
    const {
      params: { id },
      db: { Comic },
    } = req;
    const didDelete = Comic.destroy(Number(id));
    if (!didDelete) return res.sendStatus(404);
  
    res.sendStatus(204);
  });

  module.exports = router;
