const data = require("../../data");
const getUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await data.getUserById(parseInt(id));  
        if (user) {
            return res.status(200).json(user); 
        } else {
            return res.status(404).json({ message: 'User not found' });  
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });  
    }
};
module.exports = getUser;