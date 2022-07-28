let colors = window.prompt("Enter a color.");

switch (colors) {
  case "blue":
    document.write("<h1>This is blue</h1>");
    break;
  case "red":
    document.write("<h1>This is red</h1>");
    break;
  case "green":
    document.write("<h1>This is green.</h1>");
    break;
  case "orange":
    document.write("<h1>This is orange.</h1>");
    break;
  default:
    document.write("<h1>No color found.</h1>");
}
