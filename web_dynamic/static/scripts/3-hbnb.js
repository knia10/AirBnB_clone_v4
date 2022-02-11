// A $( document ).ready() block. task 1
$(document).ready(function () {
  const dir = {};
  $('input[type=checkbox]').change(function () {
    if ($(this).prop('checked')) {
      dir[$(this).attr('data-id')] = $(this).attr('data-name');
    } else if (!$(this).prop('checked')) {
      delete dir[$(this).attr('data-id')]
    }
    if (Object.keys(dir).length > 0) {
      $('div.amenities h4').html(Object.values(dir).join(', '))
    }
  });
  // task 2
  const url = 'http://172.17.36.148:5001/api/v1/status/';
  $.getJSON(url, (data) => {
    if (data.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  });

$.ajax({
  type:'POST',
  url: 'http://172.17.36.148:5001/api/v1/status/',
  data: JSON.stringify({}),
  ContentType: application/json,
  success: data => {
    for (const place of data) {
      const template = `<article>

      <div class="title_box">

        <h2>${ place.name }</h2>

        <div class="price_by_night">${ place.price_by_night }</div>
      </div>

      <div class="information">
          <div class="max_guest">${ place.max_guest } Guest</div>
          <div class="number_rooms">${ place.number_rooms } Bedroom </div>
          <div class="number_bathrooms">${ place.number_rooms } bathrooms </div>
          <div class="number_bathrooms">${place.number_bathrooms } Bathroom </div>;
    </article>`;
    $('section.places').append(template)
    });
  });

