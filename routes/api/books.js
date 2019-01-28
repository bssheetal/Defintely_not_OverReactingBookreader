const router = require("express").Router();
const axios = require("axios");
const booksController = require("../../controllers/bookscontroller");

router.route("/")
    .get(booksController.findAll)
    .post(booksController.create);


router.route("/searchbooks", (req, res) => {
    var title = "The+Hunger+Games";
    var bookurl = `https://www.googleapis.com/books/v1/volumes?q=title:The+Hunger+Games`;
    axios
    .get(bookurl)
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

module.exports = router;