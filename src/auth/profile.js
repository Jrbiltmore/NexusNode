
const users = [];

function createUser(profile) {
    if (!profile.username || !profile.irisData) {
        throw new Error('Username and iris data are required');
    }

    const user = {
        id: users.length + 1,
        username: profile.username,
        irisData: profile.irisData
    };

    users.push(user);
    return user;
}

module.exports = { createUser };
