const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

//GETTING ALL THE TAGS INCLUDING PRODUCTS
router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      attributes: ['id', 'tag_name'],
      include: {
        model: Product
      },
    });
  res.status(200).json(tagData);
  } catch (err) {res.status(500).json(err)}
});

router.get('/:id', async (req, res) => {
  try{
    const tagByID = await Tag.findOne(
      {
        where: {id: req.params.id},
      include: {
        model: Product
      },
  });
    res.status(200).json(tagByID);
  } catch (err) {res.status(500).json(err)}
});

router.post('/', async (req, res) => {
  try{
    const newTag = await Tag.create({
      tag_name: req.body.tag_name,
    });
    res.status(200).json(newTag);
  } catch (err) {res.status(500).json(err)}
});

router.put('/:id', async (req, res) => {
  try {
    const updatedTagbyID = await Tag.update({
      tag_name: req.body.tag_name
      },
        {
      where: {id: req.params.id},
    });
    res.status(200).json(updatedTagbyID)
    } catch(err) {res.status(500).json(err)}
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedTag = await Tag.destroy(
    {where: {id: req.params.id},
    });
    res.status(200).json(deletedTag)
  } catch (err) {res.status(500).json(err)}
});

module.exports = router;
