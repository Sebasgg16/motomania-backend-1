const {encryptedPassword} = require("../helpers/bcrypt.helper");
const UserModel = require("../models/user.model")

async function dbInsertUser( newUser ) {
    // return await UserModel.create( newUser );

    const dbUser = new UserModel( newUser );
    console.log( "dbUser", dbUser );

    dbUser.password = encryptedPassword( dbUser.password );

    await dbUser.save();

    const objsUser = dbUser.toObject();

    delete objsUser.password;
    delete objsUser.createdAt;
    delete objsUser.updatedAt;

    return objsUser;
}

async function dbGetUser() {
    return await UserModel.find( {},
        { password: 0, createdAt: 0, updatedAt: 0 }
    );
}

async function dbGetUserById( id ) {
    return await UserModel.findById( id,
        { password: 0, createdAt: 0, updatedAt: 0, _id: 0 }
     );
}

async function dbDeleteUserById( id ) {
    return await UserModel.findByIdAndDelete( {_id: id},
        { password: 0 }
     );
}

async function dbUpdateUserById( id, newProduct ) {
    return await UserModel.findByIdAndUpdate( 
        id,
        newProduct,
        { new: true, selec: "-password" }      
    );
}

async function dbGetUserByUsername( email ) {
    return await UserModel.findOne({ username: email });
} 

module.exports = {
    dbInsertUser,
    dbGetUser,
    dbGetUserById,
    dbDeleteUserById,
    dbUpdateUserById,
    dbGetUserByUsername
};