const data = require("../../data");
const deleteUser = async (req, res) => {
    const { id } = req.params;
    const success = await data.deleteUser(id);
    try {
        if (success) {
            return res.status(200).json({ message: 'User was successfully deleted' });
        }
        else {
            return res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};
module.exports = deleteUser;
