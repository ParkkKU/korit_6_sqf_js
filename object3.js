function modifyUser(user, target, value) {
    const newUser = {
        ...user,
        [target]: value
    };
    return newUser;
}

function main() {
    const user = {
        username : "admin",
        password : "1234"
    }

    // delete user.password;

    console.log(user);

    const newUser = modifyUser(user, "username", "test-user");
    console.log(newUser);

    const newUser2 = modifyUser(user, "password", "1111");
    console.log(newUser2);

    const userList = [ user, newUser ];     //100
    const newUserList = [ ...userList, newUser2 ];    //200

    // 스프레드 -> 깊은 복사 (안에 있는 값 새로운 주소에)
    
    const userList2 = userList; // 얕은 복사
}

main();