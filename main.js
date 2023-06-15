//Program Title
document.getElementById("search-btn").addEventListener("click", btnClicked);
outputE1 = document.getElementById("speed-info");

function btnClicked() {
  let speed = +document.getElementById("speed-in").value;
  let limit = +document.getElementById("limit-in").value;

  if (speed >= 20 + limit) {
    outputE1.innerHTML = `<p>BIG TICKET</p>`;
  } else if (speed == limit) {
    outputE1.innerHTML = `<p>NO TICKET<p/>`;
  } else {
    outputE1.innerHTML = `<p>SMALL TICKET<p/>`;
  }
}
