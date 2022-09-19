// Defining the variable for Save Button
var saveBtn = $(".saveBtn");
console.log(saveBtn);
//get current Date and time 
//var getDateTime = moment().format('MMMM Do YYYY, h:mm:ss a');
//current day displays after the h1 using moment.js library
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

// function for timeblock each time-block is color-coded whether it is past present and future
function timeblockColor(){
    var hour = moment().hours();
    //console.log(hour);
    $(".time-block").each(function(){
        var currentHour = parseInt($(this).attr("id"));
        console.log(this);

        if(currentHour > hour){
            $(this).addClass("future");
        }
        else if(currentHour === hour){
            $(this).addClass("present");
        }
        else{
            $(this).addClass("past");
        }
    })

};

//click on save button for that time block using saveBtn variable 
saveBtn.on('click', function(){
    console.log(this); //save button

    var time = $(this).siblings(".hour").text();
    var desc = $(this).siblings(".description").val();
   //console.log(time,desc); 

   localStorage.setItem(time,desc); // event saved in local storage when save button clicked

});

//whaen refersh the page saved event persist
function plannerFunc(){
    $(".hour").each(function(){

        var currHour = $(this).text();
        var description = localStorage.getItem(currHour);
        //console.log(this);
        console.log(currHour);

        if(description != null){
            $(this).siblings(".desc").val(description);
        }


    });
}
timeblockColor(); // calling function for time-block colour
plannerFunc();  //calling function to read the data from storage 

