const Friend = require("../models/Friend");
const friendsList = require("../data/Friends");


class Friends {
    #friendsList = friendsList
    constructor(friend=null) {
        // this.friendsList = friendsList
        if(friend){
            this.friend =  new Friend(friend)
        }

    }

    addFriend(){
        friendsList.push(this.friend)
    }
    getFriends(){
        return  this.#friendsList;
    }

}

module.exports = Friends