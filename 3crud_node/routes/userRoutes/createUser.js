const data = require("../../data");
const createUser = async (req, res) => {
    const { name, age, tel, city } = req.body;
    if (!name || !age || !tel || !city) {
        return res.status(400).json({ message: 'name, age, tel, and city are required' });
    }
    try {
        const checkTel = await data.checkUniqueTel(tel);
        if (checkTel.length > 0) {
            return res.status(409).json({ message: 'tel is not unique' });
        }
        const user = { name, age: parseInt(age), tel, city };
        const createdUser = await data.addUser(user);
        return res.status(201).json(createdUser);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};
module.exports = createUser;