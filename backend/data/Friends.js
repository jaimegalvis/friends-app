const Friend = require("../models/Friend");

const newFriend = new Friend(1,'Name',1234234,'email@email.com')
const newFriend2 = new Friend(2,'Name2',1234234,'email2@email2.com')

let friendsList = []

friendsList.push(newFriend)
friendsList.push(newFriend2)



module.exports = friendsList