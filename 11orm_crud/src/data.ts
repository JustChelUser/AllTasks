import { appendFile } from "fs";
import { AppDataSource } from "./data-source";
import { User } from "./entity/User";
const userRepository = AppDataSource.getRepository(User);


const getUsers = async () => {
    const users = await userRepository.find();
    return users;
};
const addUser = async (user: { name: string, age: number, tel: string, city: string }) => {
    const newUser = userRepository.create(user)
    await userRepository.save(newUser)
    return newUser;
}
const updateUser = async (
    id: number,
    updatedData: { name: string, age: number, tel: string, city: string }
) => {
    const user = await userRepository.findOneBy({ id });
    if (!user) {
        return null;
    }
    userRepository.merge(user, updatedData);
    await userRepository.save(user);
    return user;
};
const deleteUser = async (id: number) => {
    const result = await userRepository.delete(id);
    return result.affected ?? 0;
}
const getUserById = async (id: number) => {
    const user = await userRepository.findOneBy({ id });
    return user;
}
const checkUniqueTel = async (tel: string) => {
    const user = await userRepository.findOneBy({ tel });
    return user;
}
export { getUsers, addUser, updateUser, deleteUser, getUserById, checkUniqueTel }