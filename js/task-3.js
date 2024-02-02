"use strict";

const sortByDescendingFriendCount = (users) => {
    return users.toSorted((firstUser, secondUser) => secondUser.friends.length - firstUser.friends.length);
}
