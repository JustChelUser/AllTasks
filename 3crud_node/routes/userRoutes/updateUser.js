const data = require("../../data");
const updateUser = async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;
    try {
        const user = await data.getUserById(parseInt(id));
        if (user.length === 0) {
            console.log(user)
            return res.status(404).json({ message: 'User not found' });
        }
        const checkTel = await data.checkUniqueTel(updateData.tel);
        //таких же номеров не найдено либо найден но принадлежит этому же пользователю, а потому этот номер вставить можно
        if (checkTel.length === 0 || (checkTel.length === 1 && checkTel[0].id === parseInt(id))) {
            const updatedUser = await data.updateUser(parseInt(id), updateData);
            if (updatedUser) {
                return res.status(200).json(updatedUser);
            } else {
                return res.status(400).json({ message: 'User was not updated' });
            }
        }
        else {
            return res.status(409).json({ message: 'Tel is not unique' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};
module.exports = updateUser;