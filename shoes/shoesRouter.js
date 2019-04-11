const router = require("express").Router();
const db = require('./shoesModel.js');

router.get("/", async (req, res) => {
  try {
    const shoes = await db.getAll();
    res.status(200).json(shoes);
  } catch (error) {
    res.status(500).json({ message: "error getting shoes" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const shoe = await db.findById(id);
    res.status(200).json(shoe);
  } catch (error) {
    res.status(500).json({ message: "error retrieving shoe" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newShoe = await db.insert(req.body);
    res.status(201).json(newShoe);
  } catch (error) {
    res.status(500).json({ message: "error posting" });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const change = await db.update(id, req.body)
    res.status(200).json(change)
  } catch (error) {
    res.status(500).json({ message: 'error updating' })
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const {id} = req.params;
    await db.remove(id);
    res.status(200).json({ message: 'successfully deleted' })
  } catch (error) {
    res.status(500).json({ message: 'error deleting' })
  }
})

module.exports = router;
