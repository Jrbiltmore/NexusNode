
const users = [];

function authenticateUser(irisData) {
    const user = users.find(user => user.irisData === irisData);
    if (!user) {
        throw new Error('Authentication failed');
    }
    return user;
}

module.exports = { authenticateUser };
