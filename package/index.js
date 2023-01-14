const { default: axios } = require('axios');


function getResponse() {
    axios({
        method: 'get',
        url: 'https://project-7-373914.uc.r.appspot.com/',
        credentials: 'include',
    }).then((response) => {
        console.log(response.data, "response");
    }, (error) => {
        console.log(error.message, 'error');
    });


    return false
}

getResponse()