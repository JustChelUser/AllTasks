const data = require("../../data");
const listUsers = async (req, res) => {
    try {
        return res.status(200).json(await data.getUsers());
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};
module.exports = listUsers;