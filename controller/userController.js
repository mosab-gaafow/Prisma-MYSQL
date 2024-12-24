import { prisma } from "../server.js";


export const registerUser = async (req, res) => {

   try{
    const {name, age, email} = req.body;

    const isNameExists = await prisma.user.findFirst({where: {name: name.toLowerCase()}});
    if(isNameExists){
        return res.status(400).send("Already Exits..")
    }

    const user = await prisma.user.create({
        data: {
            name,
            email,
            age
        }
    });

    return res.status(200).send({message: "successfuly registered", user});

   }catch(e) {
    console.log("error", e);
    return res.status(400).send( e.message);
   }

}

export const registerPost = async (req, res) => {

   try{
    const {title, content, userId} = req.body;

    const isNameExists = await prisma.post.findFirst({where: {title: title.toLowerCase()}});
    if(isNameExists){
        return res.status(400).send("Already Exits..")
    }

    const post = await prisma.post.create({
        data: {
            title,
            content,
            userId
        }
    });

    return res.status(200).send({message: "successfuly registered", post});

   }catch(e) {
    console.log("error", e);
    return res.status(400).send( e.message);
   }

}


export const readAllUsers = async (req, res) => {

    try{
        const getUsers = await prisma.user.findMany();

        return res.status(200).send(getUsers);

    }catch(e){
        console.log("error", e);
    return res.status(400).send( e.message);
    }

}

export const updateUser = async(req,res) => {

    try{

        const {name, email, age} =  req.body;

        const findUser = await prisma.user.findUnique({where: {id: parseInt(req.params.id)}});
        if(!findUser) {
            return res.status(400).send("Not Found");
        }

        const updateUser = await prisma.user.delete({
            where: {id: parseInt(req.params.id)},
            data: {
                name, email, age
            }
        })

        return res.status(200).send(updateUser)

    }catch(e){
        console.log("error", e);
        return res.status(400).send( e.message);
    }

}


export const delereUser = async (req, res) => {

    const findUser  = await prisma.user.findUnique({where: {id: parseInt(req.params.id)}});

    if(!findUser) {
        return res.status(400).send("No User found with this Id...");
    }

    const delUser = await prisma.user.delete({where: {id: parseInt(req.params.id)}});

    return res.status(200).send("Deleted Successfully✅");
    
}