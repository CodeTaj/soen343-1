let user = require('../../domain-layer/classes/user');
let userTDG = require('../../data-source-layer/TDG/userTDG');

/**
 * user object mapper
 * @class userMapper
 * @export
 */
class userMapper {
  /**
   * Maps the returned value to an object of type user.
   * @static
   * @param {string} id id of user to be found.
   * @return user object.
   */
    static find(id) {
        let user = userTDG.find(id);
        return new user(user.id, user.isAdmin, user.firstName,
            user.weight, user.price);
    }

  /**
   * Maps all returned values into objects of type user.
   * @static
   * @return array of user objects.
   */
    static findAll() {
        let users = [];
        let allusers = userTDG.findAll();
        for (var user of allusers){
            users.push(new user(user.id, user.isAdmin, user.firstName,
                user.lastName, user.address, user.email, user.phone));
        }
    }


  /**
   * Maps an objects attributes to seperate values for TDG insert method.
   * @static
   * @param {Object} userObject an object of type user.
   */
    static insert(userObject) {
        userTDG.insert(userObject.id, userObject.isAdmin, userObject.firstName,
            userObject.lastName, userObject.address, userObject.email, userObject.phone);
    }

  /**
   * Maps an objects attributes to seperate values for TDG update method.
   * @static
   * @param {Object} userObject an object of type user.
   */
    static update(userObject) {
        userTDG.update(userObject.id, userObject.isAdmin, userObject.firstName,
            userObject.lastName, userObject.address, userObject.email, userObject.phone);
    }

  /**
   * Extracts an objects id to use with TDG delete method.
   * @static
   * @param {Object} userObject an object of type user.
   */
    static delete(userObject) {
        userTDG.delete(userObject.id);
    }
}

module.exports = userMapper;
