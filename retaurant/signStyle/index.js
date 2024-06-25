// login
document.addEventListener("DOMContentLoaded", function() {
    // ID 및 비밀번호 입력 필드를 가져옵니다.
    let loginIdInput = document.getElementById("input_login_id");
    let loginPwdInput = document.getElementById("input_login_pwd");

 
    // 부모 컨테이너를 가져옵니다.
    let idContainer = loginIdInput.closest('.login_input_container');
    let pwdContainer = loginPwdInput.closest('.login_input_container');

    // 입력 필드의 상태를 확인하고 클래스를 추가/제거하는 함수입니다.
    function checkInputValue(input, container) {
        if (input.value.trim() !== "") {
            container.classList.add("isTyping");
        } else {
            container.classList.remove("isTyping");
        }
    }

    // 이벤트 리스너를 추가하여 입력 필드의 상태가 변경될 때마다 함수를 호출합니다.
    loginIdInput.addEventListener("input", function() {
        checkInputValue(loginIdInput, idContainer);
    });

    loginPwdInput.addEventListener("input", function() {
        checkInputValue(loginPwdInput, pwdContainer);
    });

    // 페이지 로드 시 초기 상태를 설정합니다.
    checkInputValue(loginIdInput, idContainer);
    checkInputValue(loginPwdInput, pwdContainer);
});


document.getElementById("login_form").addEventListener("input", function(){
    let username = document.getElementById("input_login_id").value;
    let password = document.getElementById("input_login_pwd").value;
    let loginButton = document.querySelector(".login_button");

    loginButton.disabled = username === "" || password === "";
});



// signUp 

document.addEventListener("DOMContentLoaded", function() {
    // ID 및 비밀번호 입력 필드를 가져옵니다.
    let signUpIdInput = document.getElementById("input_login_id");
    let signUpPwdInput = document.getElementById("input_login_pwd");

 
    // 부모 컨테이너를 가져옵니다.
    let idContainer = signUpIdInput.closest('.login_input_container');
    let pwdContainer = signUpPwdInput.closest('.login_input_container');

    // 입력 필드의 상태를 확인하고 클래스를 추가/제거하는 함수입니다.
    function checkInputValue(input, container) {
        if (input.value.trim() !== "") {
            container.classList.add("isTyping");
        } else {
            container.classList.remove("isTyping");
        }
    }

    // 이벤트 리스너를 추가하여 입력 필드의 상태가 변경될 때마다 함수를 호출합니다.
    signUpIdInput.addEventListener("input", function() {
        checkInputValue(signUpIdInput, idContainer);
    });

    loginPwdInput.addEventListener("input", function() {
        checkInputValue(signUpPwdInput, pwdContainer);
    });

    // 페이지 로드 시 초기 상태를 설정합니다.
    checkInputValue(signUpIdInput, idContainer);
    checkInputValue(signUpPwdInput, pwdContainer);
});
// document.getElementById("signUp_form").addEventListener("input", function(){
//     let username = document.getElementById("input_signUp_id").value;
//     let password1 = document.getElementById("input_signUp_pwd1").value;
//     let password2 = document.getElementById("input_signUp_pwd2").value;
//     let signUpButton = document.querySelector(".signUp_button");

//     signUpButton.disabled = username === "" || password1 === "" || password2 === "";
// });
