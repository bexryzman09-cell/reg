const form = document.querySelector(".form")
const email = document.querySelector(".email")
const password = document.querySelector(".password")


form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (password.value.trim() == "" || email.value.trim() == "") {
        alert("запольните все поля")
    }
    else {
        const loginData = {
            password: password.value,
            email: email.value,
        }
        login(loginData)
    }
});



async function login(data) {
    try {
        const api = await fetch("https://api.restful-api.dev/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "6c5bb768-6cae-49b2-9e2f-4d17bd6d6bbe",
            },
            body: JSON.stringify(data)
        });
        const result = await api.json();
        if (result.token) {
            window.location = "dash.html";
            localStorage.setItem("token", result.token)
            localStorage.setItem("user", JSON.stringify(result.user));
        }
    }
    catch (error) {
        console.error("error")
        alert("Ошибка сети")
    }
}
