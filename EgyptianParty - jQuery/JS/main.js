
//Home section 
const openWidth = $('#menu').outerWidth(true);

var isOpen = false;
var test = 0;
$('.open').animate({left: -openWidth},0);

$('#open-slider').on('click',function(){
    console.log('hi');
    test = isOpen ? 0 : -openWidth;
   
    // $('.open').removeClass('w-25');
    // $('.open').addClass('end-0'); 
    // $('.open').removeClass('end-50');
    // $('#open-slider').removeClass('start-0');
    $(this).parent().animate({left: test},1000)
    isOpen = !isOpen;
})


$('#closeBtn').on('click',function(){
    console.log('hi');
    test = isOpen ? 0 : -openWidth;
    // $('.open').removeClass('w-25');
    // $('.open').removeClass('end-0'); 
    // $('.open').addClass('end-50');
    // $('#open-slider').addClass('start-0');
    $('.open').animate({left: test},1000);
    isOpen = !isOpen;
})
// ------------------------------------------------------------------------

// slider section

$('.singer-btn').on('click',function(){
    $('.singer-content').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
})

// const sliderHeight = $('.singer-content').outerHeight(true);
// var test = isOpen? 0: sliderHeight;
// $('.singer-content').animate({height: 0})
//                     .removeClass('p-2');
// $('.singer-btn').on('click', function(){
    
//     $(this).siblings().animate({height: test},1000);
    
//     // $(this).siblings().toggleClass({height: sliderHeight});
//     $(this).parent().siblings().children('p').animate({height: 0},1000);
    
//     isOpen = !isOpen;
// })

//-----------------------------------------------------------------------------


//counter section

function countDown(countTo){
    let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime()/1000); // to return time in secs instead of ms since jan 1 1970

    let currentDate = new Date();
    currentDate = (currentDate.getTime()/1000);

    time = (futureDate - currentDate);

    let days = Math.floor( time / (24*60*60)); //divide the time by no of secs a day
   let hours = Math.floor((time - (days * (24*60*60))) / 3600); //then divide by no of seconds an hr 
   let mins = Math.floor((time - (days * (24*60*60)) - (hours * 3600 )) / 60);
   let secs = Math.floor((time - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))

    $(".days").html(`${days} D`);
    $(".hrs").html(`${hours} h`);
    $(".mins").html(`${mins} m`);
    $(".secs").html(`${secs} s`);

    setInterval(function() {  countDown(countTo); }, 1000); //calls the function every 1 sec to update the values
}

window.onload = function(){
    countDown("25 august 2024 9:56:00");
}


//-----------------------------------------------------------------------------


//contact section

var maxLength = 100;
$('textarea').keyup(function() {
  var currentLength = $(this).val().length;
  var AmountLeft = maxLength-currentLength;
  if(AmountLeft<=0)
            {
                 $("#chars").text("your available characters finished");
                
            }
        else{
        
        $("#chars").text(AmountLeft);
        }
});








