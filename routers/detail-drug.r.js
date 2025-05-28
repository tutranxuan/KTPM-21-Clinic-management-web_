const app=require('express');
const router=app.Router();
const detailC=require('../controllers/drug-detail.c');
router.use('/:Name',detailC.viewDetail)
router.post(detailC.viewDetail);
module.exports=router;