import express from 'express'
import { registerUser } from '../controller/userController.js';

const userRoute = express.Router();

userRoute.post('/register-user', registerUser)
// postRoute.get('/read-posts', readAllPosts)
// postRoute.put('/update-post/:id', updatePost)
// postRoute.delete('/delete-post/:id', delereUser)
export default userRoute;