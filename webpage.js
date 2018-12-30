const webpage = (function() {

function watchSubmit() {
  $('#inner-form-box').submit( (event) => {
    
    event.preventDefault();
  })
}
function eventListeners() {

}
return {
    eventListeners,
}
}())
