


// var xhr = new XMLHttpRequest()
// console.log(xhr)

// $('.header').load('header.html');

// $('.body_page').load('body.html')

// if(statusTxt == "sucess"){
//     console.log('data loaded successfully')
// }else if (statusTxt == "error"){
//     console.log('something went wrong' + xhr.status+xhr.statusText)

// }
// else if(statusText == "404"){
//     console.log('this 404' + xhr.status +" "+xhr.statusText)

// }


// $('.header').load('header.html');
// $('.footer_page').load('footer.html');
// $('.body_page').load('body.html')

// $.get('body.html', function(data){
//     // console.log(data)

//     $('.body_page').html(data)
// })

// var plc = $('.body_page');
// var out ='';
// $.get('products.json', (data)=>{
//     // console.log(data)
//     for(i in data){
//         out +=`${data[i].name},price: ${data[i].price}+<br>`
//         plc.html(out)
//         console.log(data[i].name + "price" + data[i].price)
//     }
// })


// $.getJSON('products.json', (data)=>{
//     console.log(data)
    // for(i in data){
    //     out +=`${data[i].name},price: ${data[i].price}+<br>`
    //     plc.html(out)
    //     console.log(data[i].name + "price" + data[i].price)
    // }
            
//     $.each(data,(i,pro)=>{
//         $('.body_page').append(pro.name+ '<br>');

//     })
// })

$.ajax({
    method:'GET',
    url:"https://jsonplaceholder.typicode.com/posts",
    dataType:'json'

})

.done((data)=>{
    // console.log(data)
    $.each(data, (i,val)=>{
        $('.body_page').append(`<b>${val.title}</b><br><p>${val.body} </p><br><hr> `)
    })
})

$('#postFrom').submit((e)=>{
    e.preventDefult();
    var title =$('#title').val();
    var body =$('#body').val();
    var url = $(this).attr('action');

    $.post(url,{title:title, body:body})
    console.log(title,body + "saved to the API server")
    $.done((data)=>{
        console.log(data)
    })

    


    // alert('submited successfully')
})
// $.fetch;"https://jsonplaceholder.typicode.com/posts/'1)" , data =>
//     console.log(data)
// })


