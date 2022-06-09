const {Router} = require("express");
const router=Router();
const moviesController=require('../controllers/moviesController');
const controller=new moviesController();
router.get('/',controller.getAllMovies);
router.get('/:id',controller.showMovie);

module.exports=router;