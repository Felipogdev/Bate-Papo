let userName :string = "";

let message  = {
    from: "",
    to: "",
    text: "",
    type: "",
    time: "",
}



function login() :void {
let loginScreen :Element = document.querySelector('.login-screen');
loginScreen.classList.toggle("hidden");
userName = (document.getElementById('input-name') as HTMLInputElement).value;

if (!userName) {
    console.log("Nome vazio");
    return;
}

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
