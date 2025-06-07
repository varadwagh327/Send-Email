import sendEmail from '../config/sendEmail.js';
import  UserModel from '../models/user.model.js';
import verifyEmailTemplate from '../utils/verifyEmailTemplate.js'

export async function EmailUserController(request, response){
    try{
        const {name, email} = request.body

        if(!name || !email ){
            return response.status(400).json({
                message : "provide email, name",
                error : true,
                success : false
            })
        }

        const user = await UserModel.findOne({ email })

        if(user){
            return response.json({
                message : "Already have email",
                error : true,
                success : false
            })
        }

        const payload = {
            name, 
            email
        }

        const newUser = new UserModel(payload)
        const save = await newUser.save()


        const verifyEmail = await sendEmail({
            sendTo : email,
            subject : "Verify email from ProductServer",
            html : verifyEmailTemplate({
                name
            })
        })

        return response.json({
            message : "User Email successfully",
            error : false,
            success : true,
            data : save
        })

    }catch(error){
        return response.status(500).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}
