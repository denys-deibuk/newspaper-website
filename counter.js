$(document).ready(() => {
  let counter = 0;

  $("#increment").click(() => {
    counter++;
    $("#counter").text(counter);
  });

  $("#visibility-toggler").click(() => {
    $("#text-element").toggle();
  });
});
