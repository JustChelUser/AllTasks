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
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, age, tel, city } = req.body;
    if (!name || !age || !tel || !city) {
        return res.status(400).json({ message: 'name, age, tel, and city are required' });
    }
    try {
        const checkTel = yield data.checkUniqueTel(tel);
        if (checkTel) {
            return res.status(409).json({ message: 'tel is not unique' });
        }
        const user = { name, age: parseInt(age), tel, city };
        const createdUser = yield data.addUser(user);
        return res.status(201).json(createdUser);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
});
module.exports = createUser;
//# sourceMappingURL=createUser.js.map