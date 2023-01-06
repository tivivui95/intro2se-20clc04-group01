import Realm from "realm";

const UserSchema = {
    name: "user_details",
    properties: {
      user_id: "int",
      user_name: "string",
      user_lastname: "string",
      user_gender: "int",
      user_email: "string",
      user_height: "int",
      user_weights: "int"
    }
  };

const CurSchema = {
    name: "cur_user",
    properties: {
      user_email: "string"
    }
}

export function saveCurSession(
    user_email
) {
    const curRealm = new Realm({ 
        path: 'CurrentDatabase.realm', 
        schema: [CurSchema] 
    });

    curRealm.write(() => {
        curRealm.create('cur_user', {
            user_email: user_email
            });
    });
    curRealm.close();
}

export function getCurSession() {
    const curRealm = new Realm({ 
        path: 'CurrentDatabase.realm', 
        schema: [CurSchema] 
    });
    const data = curRealm.objects('cur_user');
    if (data[0])
    return data[0].user_email;
    return data;
}

export function createUserInfo(
    user_name, 
    user_lastname, 
    user_gender,
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
                user_gender: user_gender,
                user_email: user_email,
                user_height: user_height,
                user_weights: user_weights
                });
        });
        realm.close();
}

export function modifyUserInfo(
    user_name, 
    user_email,
    user_lastname, 
    user_gender,
    user_height,
    user_weights
    ) {
        const realm = new Realm({ 
            path: 'UserDatabase.realm', 
            schema: [UserSchema] 
        }); 

        realm.write(() => {
            const obj = realm.objects('user_details')
            const finder = obj.filtered("user_email = $0", user_email);
            finder[0].user_name = user_name,
            finder[0].user_lastname = user_lastname,
            finder[0].user_gender = user_gender,
            finder[0].user_height = user_height,
            finder[0].user_weights = user_weights
        });
        realm.close();
}

export function getUserInfo(user_email="van23112002@gmail.com") {
    const realm = new Realm({ path: 'UserDatabase.realm' }); 
    try {
        const data = realm.objects('user_details');
        const finder = data.filtered("user_email = $0", user_email);
        if (finder[0]) return finder[0];
    } catch (error) {
        console.log(error);
    }
    
    return "";
}

export function deleteCur() {
    const curRealm = new Realm({ 
        path: 'CurrentDatabase.realm', 
        schema: [CurSchema] 
    });
    curRealm.write(() => {
        const data = curRealm.objects('cur_user');
        // Delete the task from the realm.
        curRealm.delete(data);
    });
    
}

export function deleteUserDB() {
    const curRealm = new Realm({ 
        path: 'UserDatabase.realm', 
        schema: [UserSchema] 
    });

    curRealm.write(() => {
        const data = curRealm.objects('user_details');
        // Delete the task from the realm.
        curRealm.delete(data);
    });
}