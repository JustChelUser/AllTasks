"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const data = require("../../data");
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const updateData = req.body;
    try {
        const user = yield data.getUserById(parseInt(id));
        if (!user) {
            console.log(user);
            return res.status(404).json({ message: 'User not found' });
        }
        const checkTel = yield data.checkUniqueTel(updateData.tel);
        //таких же номеров не найдено либо найден но принадлежит этому же пользователю, а потому этот номер вставить можно
        if (checkTel === null || (checkTel !== null && checkTel.id === parseInt(id))) {
            const updatedUser = yield data.updateUser(parseInt(id), updateData);
            if (updatedUser) {
                return res.status(200).json(updatedUser);
            }
            else {
                return res.status(400).json({ message: 'User was not updated' });
            }
        }
        else {
            return res.status(409).json({ message: 'Tel is not unique' });
        }
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
});
module.exports = updateUser;
//# sourceMappingURL=updateUser.js.map