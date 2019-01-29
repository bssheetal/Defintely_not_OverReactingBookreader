const router = require("express").Router();
const axios = require("axios");
const booksController = require("../../controllers/bookscontroller");

router.route("/")
    .get(booksController.findAll)
    .post(booksController.create);

router.route('/:id')
    .delete(booksController.remove);

router.get("/searchbooks", (req, res) => {
    
    var title = "The+Hunger+Games";
    var bookurl = `https://www.googleapis.com/books/v1/volumes?q=title:${title}`;
    axios.get(bookurl, { params: { q: req.query } })
        .then(response => {
            res.json(response.data);
        })
        .catch(err => res.json(err.message));
});

module.exports = router;