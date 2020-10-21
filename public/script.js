window.addEventListener('load',function(){
    console.log('hello from script.js')
    
    let button = document.getElementById('button-log');
    button.addEventListener('click',()=>{
        let Info = document.getElementById('happy-text').value;
        console.log(Info);
    })

   // make a fetch request - send to server
        //creating obj
       let obj_send = {"Happiness" : Info};
        // stringify obj to json
       let jsonData = JSON.stringify(obj_send);
       console.log(obj_send);


    // post json
        fetch('/happyInput',{
            method:'POST',
            headers:{
                "Content-type":"application/json"
            },
            //send stringify string to body
            body: jsonData
        })
        .then(response=>response.json())
        .then(data=>{
            console.log(data)
        })

        // window.addEventListener('load',()=> {
        //     document.getElementById('button-coffee').addEventListener('click', ()=> {
        //         let noCups = document.getElementById('number-coffee').value;
        //         console.log(noCups);
        
        //         //creating the object 
        //         let obj = {"number" : noCups};
        //         //console.log(obj);
        
        //         //stringify the object
        //         let jsonData = JSON.stringify(obj);
        
        //         //fetch to route noCups
        //         fetch('/noCups', {
        //             method: 'POST',
        //             headers: {
        //                 "Content-type": "application/json"
        //             },
        //             body: jsonData
        //         })
        //         .then(response => response.json())
        //         .then(data => {console.log(data)});
        
        //         //1. make a fetch request of type POST so that we can send the (noCups) info to the server
        //     })
        
        //     document.getElementById('get-tracker').addEventListener('click', ()=> {
        //         //get info on ALL the coffees we've had so far
        //         fetch('/getCups')
        //         .then(resp=> resp.json())
        //         .then(data => {
        //             document.getElementById('coffee-info').innerHTML = '';
        //             console.log(data.data);
        //             for(let i=0;i<data.data.length;i++) {
        //                 let string = data.data[i].date + " : " + data.data[i].coffee;
        //                 let elt = document.createElement('p');
        //                 elt.innerHTML = string;
        //                 document.getElementById('coffee-info').appendChild(elt);
        //             }
        //         })
        //     })
        // })


//     document.getElementById('get-tracker').addEventListener('click',()=>{
//         //统计所有的咖啡总数
//         fetch('/getCups')
//         .then(resp=>resp.json())
//         .then(data=>{
//             document.getElementById('coffee-info').innerHTML = '';
//            console.log(data.data); 
//            for(let i=0;i<data.data.length;i++){
//                let string = data.data[i].date + " : " + data.data[i].coffee;
//                // create P node "elt" 
//                 let elt = document.createElement('p');
//                 elt.innerHTML = string;
//                 // append P to list
//                 document.getElementById('coffee-info').appendChild(elt);
//             //https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_appendchild
//            } 

//         })

//     })
   
})
