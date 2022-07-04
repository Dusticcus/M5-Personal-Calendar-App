var scheduleArray = new Array(8);
$('#eventSaved').hide();






function getscheduleArray() {
    var scheduledEvent1 = localStorage.getItem("scheduleArray1");
    var scheduledEvent2 = localStorage.getItem("scheduleArray2");
    var scheduledEvent3 = localStorage.getItem("scheduleArray3");
    var scheduledEvent4 = localStorage.getItem("scheduleArray4");
    var scheduledEvent5 = localStorage.getItem("scheduleArray5");
    var scheduledEvent6 = localStorage.getItem("scheduleArray6");
    var scheduledEvent7 = localStorage.getItem("scheduleArray7");
    var scheduledEvent8 = localStorage.getItem("scheduleArray8");
    var scheduledEvent9 = localStorage.getItem("scheduleArray9");

    var writeStoredEvents = document.getElementsByTagName('textarea');

    writeStoredEvents[0].innerHTML = scheduledEvent1;
    writeStoredEvents[1].innerHTML = scheduledEvent2;
    writeStoredEvents[2].innerHTML = scheduledEvent3;
    writeStoredEvents[3].innerHTML = scheduledEvent4;
    writeStoredEvents[4].innerHTML = scheduledEvent5;
    writeStoredEvents[5].innerHTML = scheduledEvent6;
    writeStoredEvents[6].innerHTML = scheduledEvent7;
    writeStoredEvents[7].innerHTML = scheduledEvent8;
    writeStoredEvents[8].innerHTML = scheduledEvent9;

    // var eventsNumber = storedEvents.length;

    // for (i = 0; i < storedEvents.length; i++) {
    //     writeStoredEvents[i].innerHTML = storedEvents[i];
    //     console.log(storedEvents[i]);
    // }
}
getscheduleArray();

var printTime = setInterval(showDateTime, 1000);

var saveButtonArea = $('.saveBtn');

var hourArea = $('.hour');
var hourAreaFinal = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var hourOfDayFinal = [];
var hourOfDay = moment().format("HH A");
var hourOfDayNumbers = hourOfDay.replace(/\D/g, '');
var hourOfDayNumbersConverted = parseInt(hourOfDayNumbers, 10);
// console.log(hourOfDayNumbersConverted);
hourOfDayFinal.push(hourOfDayNumbersConverted);


console.log(hourAreaFinal);

console.log(hourOfDayFinal);

$(".col-8").each(function (i) {
    // Test if the div element is empty
    if (hourAreaFinal[i] > hourOfDayFinal[0]) {
        $(this).addClass('future');
    } else if (hourAreaFinal[i] < hourOfDayFinal[0]) {
        $(this).addClass('past');
    } else {
        $(this).addClass('present');
    }
});

function showDateTime() {
    var today = moment().format("dddd, MMMM Do YYYY| h:mm:ss A");
    var currentDay = $('#currentDay');
    currentDay.text(today);
}

function successfulSave() {
    var timeSpace = 3;
    var myTimer = setInterval(eventSavedTimer, 1000);

    function eventSavedTimer() {
        $('#eventSaved').show();
        timeSpace--;
        if (timeSpace == 0) {
            stopTimer();
            $('#eventSaved').hide();
        }
        function stopTimer() {
            clearInterval(myTimer)
            // timeSpace = 3;
        }
    }

}








saveButtonArea.on('click', function () {

    if (this.previousSibling.previousSibling.children.item(0).value !== '') {










        if (this.getAttribute('data-sb') == 1) {
            var textAreaValues = this.previousSibling.previousSibling.children.item(0).value;
            scheduleArray.splice(0, 1, textAreaValues)
            localStorage.setItem("scheduleArray1", scheduleArray[0])
        } else if (this.getAttribute('data-sb') == 2) {
            var textAreaValues = this.previousSibling.previousSibling.children.item(0).value;
            scheduleArray.splice(1, 1, textAreaValues)
            localStorage.setItem("scheduleArray2", scheduleArray[1])
        } else if (this.getAttribute('data-sb') == 3) {

            var textAreaValues = this.previousSibling.previousSibling.children.item(0).value;
            scheduleArray.splice(2, 1, textAreaValues)
            localStorage.setItem("scheduleArray3", scheduleArray[2])
        } else if (this.getAttribute('data-sb') == 4) {

            var textAreaValues = this.previousSibling.previousSibling.children.item(0).value;
            scheduleArray.splice(3, 1, textAreaValues)
            localStorage.setItem("scheduleArray4", scheduleArray[3])
        } else if (this.getAttribute('data-sb') == 5) {

            var textAreaValues = this.previousSibling.previousSibling.children.item(0).value;
            scheduleArray.splice(4, 1, textAreaValues)
            localStorage.setItem("scheduleArray5", scheduleArray[4])
        } else if (this.getAttribute('data-sb') == 6) {

            var textAreaValues = this.previousSibling.previousSibling.children.item(0).value;
            scheduleArray.splice(5, 1, textAreaValues)
            localStorage.setItem("scheduleArray6", scheduleArray[5])
        } else if (this.getAttribute('data-sb') == 7) {

            var textAreaValues = this.previousSibling.previousSibling.children.item(0).value;
            scheduleArray.splice(6, 1, textAreaValues)
            localStorage.setItem("scheduleArray7", scheduleArray[6])
        } else if (this.getAttribute('data-sb') == 8) {

            var textAreaValues = this.previousSibling.previousSibling.children.item(0).value;
            scheduleArray.splice(7, 1, textAreaValues)
            localStorage.setItem("scheduleArray8", scheduleArray[7])
        } else if (this.getAttribute('data-sb') == 9) {

            var textAreaValues = this.previousSibling.previousSibling.children.item(0).value;
            scheduleArray.splice(8, 1, textAreaValues)
            localStorage.setItem("scheduleArray9", scheduleArray[8])
        } else {
            alert("empty textbox");
        }
    }
    successfulSave();
    console.log(scheduleArray);
});









