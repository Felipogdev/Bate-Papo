import axios from 'axios'

axios.get('https://mock-api.driven.com.br/api/v4/uol/participants')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    });

//API para se conectar ao servidor
axios.post('https://mock-api.driven.com.br/api/v4/uol/status')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    });


//API para pegar mensagem
axios.get('https://mock-api.driven.com.br/api/v4/uol/messages')
.then(response => {
    console.log(response.data);
})
.catch(error => {
    console.error("Error", error)
});


