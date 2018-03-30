$(document).ready(function() {
  console.log('app.js loaded!');
  $.ajax({
    method: 'GET',
    url: '/api/manateez',
    success: function(allManatees) {
      allManateesFromServer.forEach(function(eachManatee) {
        renderManatee(eachManatee);
      });
    }
  });
});

// this function takes a single manatee and renders it to the page
function renderPerson(manatee) {
  $('#albums').append(
    `<!-- one manatee -->
      <div class="row manatee">

        <div class="col-md-10 col-md-offset-1">
          <div class="panel">
            <!-- begin manatee internal row -->
              <div class='row'>
                <div class="col-md-3 col-xs-12 thumbnail manatee-art">
                  <img src="${ manatee.img }" alt="manatee image">
                </div>

                <div class="col-md-9 col-xs-12">
                  <h2>${ manatee.name } is ${ manatee.age } year(s) old and was released on ${ manatee.releaseDate }.</h2>
                </div>

              </div>
              <!-- end of manatee internal row -->
          </div>

        </div>
      </div>
      <!-- end one manatee -->
    `
  )
}
