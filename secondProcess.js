///// one nodejs server can also send the request to another nodejs server
//// example below



var sendObj ={
    method:"GET"
}

function logResponseBody(jsonBody){

     console.log(jsonBody)

}
function callBack(result){
     result.json().then(logResponseBody)
}

fetch("http://localhost:3000/handleSum?counter=20",sendObj).then(callBack)