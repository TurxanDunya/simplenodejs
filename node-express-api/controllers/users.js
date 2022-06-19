import {v4 as uuidv4} from 'uuid'

let users = [
    {
        firstName : "John",
        lastName : "Doe",
        age : 25,
        id: uuidv4()
    }
]

export const getUsers = (req, res) => {
    res.send(users);
}

export const createUser = (req, res) => {
    const user = req.body;

    const userId = uuidv4();
    const userWithId = {...user, id: userId};

    users.push(userWithId);
    res.send(`User was added successfully! Welcome ${user.firstName}!`);
}

export const getById = (req, res) => {
    const foundUser = users.find(user => user.id === id);
    res.send(foundUser);
}

export const deleteById = (req, res) => {
    users = users.filter(user => user.id !== id);
    res.send(`User removed with id: ${id}`);
}

export const patchById = (req, res) => {
    const userToBeUpdated = users.find(user => user.id === id);

    const {firstName, lastName, age} = req.body;

    if(firstName) userToBeUpdated.firstName = firstName;
    if(lastName) userToBeUpdated.lastName = lastName;
    if(age) userToBeUpdated.age = age;

    res.send(`User with id has been updated: ${id}`)
}