let progSumm = 0;

function addProg1() {
  progSumm += 1;
  txtSum = progSumm + '%';
  $("#my-progress-bar").width(txtSum);
}

function addProg3() {
  progSumm += 3;
  txtSum = progSumm + '%';
  $("#my-progress-bar").width(txtSum);
}

function addProg7() {
  progSumm += 7;
  txtSum = progSumm + '%';
  $("#my-progress-bar").width(txtSum);
}

function init() {
  $("#but1").click(addProg1);
  $("#but3").click(addProg3);
  $("#but7").click(addProg7);
}

$(document).ready(init);