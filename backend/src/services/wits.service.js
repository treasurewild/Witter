import Wit from '../models/wit.model.js';

// export const addWitService = async wit => {
//     try {
//         const newWit = new Wit(wit);
//         return await newWit.save();
//     }
//     catch (e) {
//         throw e;
//     }
// }

export const getWitsService = async id => {
    try {
        return await Wit.findById(id);
    }
    catch (e) {
        throw e;
    }
}

// export const getTodosService = async () => {
//     try {
//         return await Todo.find({});
//     }
//     catch (e) {
//         throw e;
//     }
// }

// export const updateTodoService = async (todo, id) => {
//     const updatedTodo = { ...todo };
//     delete updatedTodo._id;

//     try {
//         return await Todo.findByIdAndUpdate({ _id: id }, updatedTodo);
//     }
//     catch (e) {
//         throw e;
//     }
// }