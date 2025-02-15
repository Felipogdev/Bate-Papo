
function login() :void {
let loginScreen = document.querySelector('.login-screen');
loginScreen.classList.toggle("hidden");
}

function showSideBar() :void {
    let sideBar :Element = document.querySelector('.side-bar');
    sideBar.classList.toggle("hidden");
}
/*
function teste() :void {
    axios.get('https://mock-api.driven.com.br/api/v4/uol/messages')
        .then(response=>
            console.log(response.data));
}
 */

(
    function teste() :void {
        fetch('https://mock-api.driven.com.br/api/v4/uol/messages')
            .then((response) => {
            console.log(response);
            return response.json();
        })
            .then((data) =>{
                console.log(data);
            })
    }
)()
