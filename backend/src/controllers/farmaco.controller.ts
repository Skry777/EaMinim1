import { Request, Response} from "express";
import  farmaco  from '../models/farmaco';

//Get all farmacos
const getFarmacos= async(req:Request, res:Response)=>{

    //Retrieve all farmacos from the database
    await farmaco.find({}).then((data)=>{

        //Display data obatained
        console.log(data);

        let status: number = 200;
        if(data==null) status = 404;
        return res.status(status).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}

// Get a farmaco by name
const getFarmaco= async(req:Request, res:Response) =>{
    
    //Find a farmaco by name
    await farmaco.find({"name":req.params.name}).then((data)=>{

        //Display data obatained
        console.log(data);

        let status: number = 200;
        if(data==null) status = 404;
        return res.status(status).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}

//Add new farmaco
const postFarmaco = async (req: Request, res: Response)=>{

    //Display request
    console.log(req.body);

    //Create a new farmaco entity with the data found in request
    const newfarmaco = new farmaco({
        "name": req.body.name,
        "descripcion": req.body.descripcion,
        "responsable": req.body.responsable,
        "telefono": req.body.telefono,
        
    });

    //Save new farmaco in the database
    await newfarmaco.save().then((data) => {
        return res.status(201).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}

const deleteFarmaco = async (req: Request, res: Response)=>{

 
   console.log(req.body);

   let result = await farmaco.findOneAndRemove({name: req.body});
   res.status(200).send(result);

    
}


    

//Export the functions to use them from outside
export default { getFarmacos, getFarmaco, postFarmaco , deleteFarmaco};