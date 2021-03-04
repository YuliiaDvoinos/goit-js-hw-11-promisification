// Перепиши функцию toggleUserState() так,
// чтобы она не использовала callback - функцию callback,
// а принимала всего два параметра allUsers и userName и возвращала промис.

const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];
//1 вариант
const toggleUserState = (allUsers, userName) => {
    return new Promise(resolve => {
        const updatedUsers = allUsers.map(user => user.name === userName ? { ...user, active: !user.active } : user);
        resolve(updatedUsers);
    })
 };
//2 вариант
//  const toggleUserState = (allUsers, userName) => {
//     const updatedUsers = allUsers.map(user =>
//         user.name === userName ? { ...user, active: !user.active } : user,
//     );
  //     return new Promise(resolve => resolve(updatedUsers))
// };
const logger = updatedUsers => console.table(updatedUsers);

toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);