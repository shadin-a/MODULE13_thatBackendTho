const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

//GETTING ALL THE CATEGORIES WITH ID AND CATEGORY_NAME FORMATTING. THROW ERROR IF IT CAN'T FIND. RETURN INFO IF FOUND.INCLUDE THE MODEL PRODUCT
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      attributes: ['id', 'category_name'],
      include: {
        model: Product
      },
    });
  res.status(200).json(categoryData);
  } catch (err) {res.status(500).json(err)}
});

//GETTING CATEGORY USING PRIMARY KEY, INCLUDING PRODUCT.
router.get('/:id', async (req, res) => {
  try{
    const categoryByID = await Category.findOne(
      {
        where: {id: req.params.id},
      include: {
        model: Product
      },
  });
    res.status(200).json(categoryByID);
  } catch (err) {res.status(500).json(err)}
});

//CREATING A NEW CATEGORY
router.post('/', async (req, res) => {
  try{
    const newCategory = await Category.create({
      category_name: req.body.category_name,
    });
    res.status(200).json(newCategory);
  } catch (err) {res.status(500).json(err)}
});

//UPDATING A CATEGORY BY THE ID
router.put('/:id', async (req, res) => {
  try {
  const updatedCategorybyID = await Category.update({
    category_name: req.body.category_name
    },
      {
    where: {id: req.params.id},
  });
  res.status(200).json(updatedCategorybyID)
  } catch(err) {res.status(500).json(err)}
});

//DELETE CATEGORY USING ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedCategory = await Category.destroy(
    {where: {id: req.params.id},
    });
    res.status(200).json(deletedCategory)
  } catch (err) {res.status(500).json(err)}
});

module.exports = router;
