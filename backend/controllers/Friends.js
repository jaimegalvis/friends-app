import Friend from "../models/Friend";
import friendsList from "../data/Friends";


class Friends {
    constructor(friend) {
        this.friend =  new Friend(friend)
    }

    addFriend(){
        friendsList.push(this.friend)
    }
    getFriends(){
        return friendsList;
    }

}