var data = [];
var scale = 15;
var white =
  '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABmSURBVChTY/z//z8DIQBStOn+3qWPNn36/QUqBgN8rDzRcn5+is5MQA5QxRfWH0xcLGgIKAiUAioAKcI0Aw4gUiBFBMFgVQQMDwgHE0CkQIqAIcbzm+Pftz9oCCgIlAIqICJaGBgA+uU2Da3tqxgAAAAASUVORK5CYII=">';
var black =
  '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAMCAIAAAA7y9DJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABTSURBVChTY/z//z8DXsD4+s3bb99//vv3DyoAA0xMTFyc7CLCQowPHz/j4uKCCqOCb9++yclIMmHqhgOIFBOEgwcMGhVAAGViAIgUESFGINQZGACdviQFopZaMQAAAABJRU5ErkJggg==">';
$(function () {
  $("#white").change(function () {
    if ($('input[name="radio"]:radio').val() == "5") {
      white = $("#white").val();
    }
  });
  $("#black").change(function () {
    if ($('input[name="radio"]:radio').val() == "5") {
      black = $("#black").val();
    }
  });

  var table = $("tbody");
  for (var i = 0; i < 3 * scale; i++) {
    table.append("<tr></tr>");
  }
  for (var i = 0; i < 4 * scale; i++) {
    $("tr").append("<td>â—</td>");
  }
  var tr = $("table tr");
  for (var i = 0, l = tr.length; i < l; i++) {
    var cells = tr.eq(i).children();
    for (var j = 0, m = cells.length; j < m; j++) {
      if (typeof data[i] == "undefined") data[i] = [];
      data[i][j] = cells.eq(j);
    }
  }
  audio_play();
});

var frame = 0;
setInterval(function () {
  if (frame == badata10.length) {
    location.reload();
  }

  for (var x = 0; x < scale * 3; x++) {
    for (var y = 0; y < scale * 4; y++) {
      if (badata10[frame][x][y] == 1) {
        data[x][y].html(white);
      } else {
        data[x][y].html(black);
      }
    }
  }
  frame++;
}, 100);

setInterval(function () {
  var audio = $("audio");
  if (Math.abs(Math.floor(audio[0].currentTime) * 10 - frame) > 10) {
    audio[0].currentTime = Math.floor(frame / 10);
    console.log("play");
  }
}, 1000 * 5);

function audio_play() {
  audio.play();
}
