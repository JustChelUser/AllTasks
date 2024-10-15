const data = require("../../data");
const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const success = await data.deleteUser(id);
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
