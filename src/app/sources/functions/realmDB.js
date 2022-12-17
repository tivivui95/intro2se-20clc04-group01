import Realm from "realm";

const UserSchema = {
    name: "user_details",
    properties: {
      user_id: "int",
      user_name: "string",
      user_lastname: "string",
      user_email: "string",
      user_height: "int",
      user_weights: "int"
    }
  };


export function createUserInfo(
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
        realm.close();
}

export function modifyUserInfo(
    user_name, 
    user_lastname, 
    user_height,
    user_weights
    ) {
        const realm = new Realm({ 
            path: 'UserDatabase.realm', 
            schema: [UserSchema] 
        }); 

        realm.write(() => {
            var obj = realm.objects('user_details')
            obj[0].user_name = user_name,
            obj[0].user_lastname = user_lastname,
            obj[0].user_height = user_height,
            obj[0].user_weights = user_weights
        });
        realm.close();
}

export function getUserInfo() {
    const realm = new Realm({ path: 'UserDatabase.realm' }); 
    const data = realm.objects('user_details')[0];
    return data;
}