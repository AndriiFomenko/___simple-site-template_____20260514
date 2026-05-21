$(document).ready(function () {
  $(".navbar__button").click(function () {
    $(this).toggleClass("active")
    $(".navbar__list").toggleClass("active")
  })
})
