function login() {
    var loginScreen = document.querySelector('.login-screen');
    loginScreen.classList.toggle("hidden");
}
function showSideBar() {
    var sideBar = document.querySelector('.side-bar');
    sideBar.classList.toggle("hidden");
}
/*
function teste() :void {
    axios.get('https://mock-api.driven.com.br/api/v4/uol/messages')
        .then(response=>
            console.log(response.data));
}
 */
(function teste() {
    fetch('https://mock-api.driven.com.br/api/v4/uol/messages')
        .then(function (response) {
        console.log(response);
        return response.json();
    })
        .then(function (data) {
        console.log(data);
    });
})();
