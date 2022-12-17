import Realm from "realm";

const UserSchema = {
    name: "Task",
    properties: {
      user_id: "int",
      user_name: "string",
      user_lastname: "string",
      user_email: "string",
      user_height: "int",
      user_weights: "int"
    },
    primaryKey: "user_id",
  };


function createUserInfo(
    user_name, 
    user_lastname, 
    user_email,
    user_height,
    user_weights
    ) {
        const realm = new Realm({ 
            path: 'UserDatabase.realm', 
            schema: [UserSchema] 
        }); 

        realm.write(() => {
            realm.create('user_details', {
                user_id: 0,
                user_name: user_name,
                user_lastname: user_lastname,
                user_email: user_email,
                user_height: user_height,
                user_weights: user_weights
                });
        });
}

function modifyUserInfo(
    user_name, 
    user_lastname, 
    user_email,
    user_height,
    user_weights
    ) {
        const realm = new Realm({ 
            path: 'UserDatabase.realm', 
            schema: [UserSchema] 
        }); 

        realm.write(() => {
            realm.create('user_details', {
                user_id: 0,
                user_name: user_name,
                user_lastname: user_lastname,
                user_email: user_email,
                user_height: user_height,
                user_weights: user_weights
                });
        });
}