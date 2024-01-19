$(document).ready(function () {
  var todaysDate = dayjs().format("dddd, MMMM D, YYYY h:mm A");
  $("#currentDay").text(todaysDate);

  var row = "";
  //loop to display 9am-6pm
  for (var i = 9; i <= 18; i++) {
    // Create rows and columns
    row = $(`<div class="row">`);
    columnOne = $(`<div class ="col-lg-2 hour">${mornAft(i)}</div>`);
    columnTwo = $(
      `<div class ="col-lg-8 inputContent"><input data-input="${i}" id="calInput${i}" class="form-control calInput" type="text" name="inputText"></div>`
    );
    columnThree = $(
      `<div class ="col-lg-2"><button data-id="${i}" id="saveEntry" class="btn btn-outline-primary mx-auto d-block"><i class="fas fa-save"></i> Save</button></div>`
    );
    row.append(columnOne);
    row.append(columnTwo);
    row.append(columnThree);
    $("#timeSlots").append(row);
    getlocalStorage(i);
  }
  $("button.btn.btn-primary").click(function () {
    var id = $(this).data("id")
    var calInput = $(this).parent().siblings().find("input").val()
    localStorage.setItem(id, calInput)
  })

  // Function for morning or afternoon
  function mornAft(hour) {
    var y = "";
    if (hour <= 12) {
      y = "AM";
    } else {
      y = "PM";
    }
    hour = hour % 12;
    hour = hour ? hour : 12;
    return hour + " " + y;
  }
});

/////////////////////////////////////

function getlocalStorage(hour) {
  let inputVal = localStorage.getItem(hour)
  if (true) {
    var text = $(`input#calInput${hour}`).val(inputVal)
    console.log(text)
  }
}
//Change colours
function changeColour() {
  var hour = new Date().getHours();
  for (var i = 9; i <= 18; i++) {
    console.log(hour, i);
    if (hour == i) {
      $(`#calInput${i}`).css("background", "orange");
    } else if (hour < i) {
      $(`#calInput${i}`).css("background", "lightblue");
    }
  }
}
setInterval(function () {
  changeColour();
}, 1000);
