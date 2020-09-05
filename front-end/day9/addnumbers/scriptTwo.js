// document.getElementById('clickMe').onclick = () => {
//     console.log("hello ");
// }

// let toggle = true;
// $('#clickMe').click(()=>{
//     if(toggle){
//         console.log("hello from JQ");
//         $('#clickDiv').css('background-color','blue')
//         toggle = false
//     } else {
//         console.log("hello from JQ");
//     $('#clickDiv').css('background-color','red')
//     toggle = true
//     }
    
// })

$('#clickMe').click(()=> {
    $('#clickDiv').fadeOut(3000);
})

$('#clickMeTwo').click(()=> {
    $('#clickDiv').show(3000);
})