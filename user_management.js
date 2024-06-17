
let userList = [];
let emptyUser = {
    name: "",
    username: "",
    password: ""
};

let user = {
    ...emptyUser
}

function renderTable() {
    const userTableBody = document.querySelector(".user-table-body");
    userTableBody.innerHTML = userList.map(({name, username, password}, index) => {
        return `
            <tr>
                <td>${index + 1}</td>
                <td>${name}</td>
                <td>${username}</td>
                <td>${password}</td>
                <th><button>삭제</button></th>
            </tr>
        `;
    }).join("");
}

function handleUserInputKeyDown(e) {
    user = {
        ...user,
        [e.target.name]: e.target.value
    }

    if(e.keyCode === 13) {
        const nameInput = document.querySelector(".name-input");
        const usernameInput = document.querySelector(".username-input");
        const passwordInput = document.querySelector(".password-input");

        if(e.target.name === "name") {
            usernameInput.focus();
        }

        if(e.target.name === "username") {
            passwordInput.focus();
        }
        if(e.target.name === "password") {
            userList = [ ...userList, { ...user } ];

            renderTable();
            
            nameInput.value = emptyUser.username;
            usernameInput.value = emptyUser.username;
            passwordInput.value = emptyUser.password;

            nameInput.focus();
        }
    }
}

function saveUserList() {
    localStorage.setItem("userList", JSON.stringify(userList));
}

function loadUserList() {
    const lsUserList = localStorage.getItem("userList");
    userList = !lsUserList ? [] : JSON.parse(lsUserList);
}