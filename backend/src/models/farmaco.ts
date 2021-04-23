import mongoose, { Schema, Document} from 'mongoose';

// Model of the object that is saved in the BBDD of MongoDB
const farmacoSchema = new Schema({
    name: {
        type: String
    },
    descripcion: {
        type: String
    },
    responsable: {
        type: String
    },
    telefono: {
        type: String
    },

});



//Interface to treat the reply as a document
export interface IFarmaco extends Document {
    name: string;
    descripcion: string;
    responsable: string;
    telefono: string;
   
    
}

//Export the model to use it from outside
export default mongoose.model<IFarmaco>('farmaco', farmacoSchema);