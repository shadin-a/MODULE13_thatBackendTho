const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

//GETTING ALL THE CATEGORIES WITH ID AND CATEGORY_NAME FORMATTING. THROW ERROR IF IT CAN'T FIND. RETURN INFO IF FOUND.
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      attributes: ['id', 'category_name'],
      include: {
        model: Product
      },
    });
  res.status(200).json(categoryData);
  }
  catch (err) {res.status(500).json(err)}
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
