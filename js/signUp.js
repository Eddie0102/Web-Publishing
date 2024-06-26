// signUp 

document.addEventListener("DOMContentLoaded", function() {
    // ID 및 비밀번호 입력 필드를 가져옵니다.
    let signUpIdInput = document.getElementById("input_signUp_id");
    let signUpPwdInput1 = document.getElementById("input_signUp_pwd1");
    let signUpPwdInput2 = document.getElementById("input_signUp_pwd2");

    // 부모 컨테이너를 가져옵니다.
    let idContainer = signUpIdInput.closest('.signUp_input_container');
    let pwdContainer1 = signUpPwdInput1.closest('.signUp_input_container');
    let pwdContainer2 = signUpPwdInput2.closest('.signUp_input_container');

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

    signUpPwdInput1.addEventListener("input", function() {
        checkInputValue(signUpPwdInput1, pwdContainer1);
    });
    signUpPwdInput2.addEventListener("input", function() {
        checkInputValue(signUpPwdInput2, pwdContainer2);
    });

    // 페이지 로드 시 초기 상태를 설정합니다.
    checkInputValue(signUpIdInput, idContainer);
    checkInputValue(signUpPwdInput1, pwdContainer1);  // 이 부분을 수정했습니다.
    checkInputValue(signUpPwdInput2, pwdContainer2);  // 이 부분을 수정했습니다.
});



document.getElementById("signUp_form").addEventListener("input", function(){
    let username = document.getElementById("input_signUp_id").value;
    let password1 = document.getElementById("input_signUp_pwd1").value;
    let password2 = document.getElementById("input_signUp_pwd2").value;
    let signUpButton = document.querySelector(".signUp_button");

    signUpButton.disabled = username === "" || password1 === "" || password2 === "";
});


document.getElementById('signUp_form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('input_signUp_id').value;
    const password1 = document.getElementById('input_signUp_pwd1').value;
    const password2 = document.getElementById('input_signUp_pwd2').value;

    function saveData(key, value) {
        if(localStorage.getItem(key) !== null){
            alert("이미 존재하는 계정입니다");
        } else{
            if(password1 === password2){
                localStorage.setItem(key, value);
                alert("회원가입 성공! 로그인 페이지로 이동합니다.");
                window.location.href = 'login.html';
            }else{
                alert("비밀번호가 일치하지 않습니다.");
            }
        }
    }
    
    saveData(username,password1);

});
