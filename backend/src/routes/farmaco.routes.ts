import {Router} from "express"; 
import farmacoController from '../controllers/farmaco.controller'

//Router to manage the API endpoints
const router = Router();

// HTTP Requests (route, controller function)
router.get('/all', farmacoController.getFarmacos);
router.get('/get/:name',farmacoController.getFarmaco);
router.post('/add', farmacoController.postFarmaco);
router.post('/delete', farmacoController.deleteFarmaco);



//Export router to use the routes in app.ts
export default router;