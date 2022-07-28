
// This function runs axios request //

function the_axios(){
    axios.request({
        url: `http://www.boredapi.com/api/activity/`
    }).then(success_function).catch(failure_function);
}

// If api works this function will change the innerHTML // 
function success_function(response){
    box[`innerHTML`] = `<h1>${response[`data`][`activity`]}</h1>`;
    }
    // If api fails this error message will print //
    function failure_function(response){
    box[`innerHTML`] = `<h1>Sorry there has been an ERROR </h1>`;
    }
   

    // Adding event lisenter to button //
    let button = document.getElementById(`the_axios`);
    button.addEventListener(`click`,the_axios);
    let box = document.getElementById(`box`);


