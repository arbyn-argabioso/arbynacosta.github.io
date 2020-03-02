let control = null;

function updatePersons(query)
{
  // Make sure query is not null or undefined
  if (!query) {
    query = ''
  }

  $.getJSON('https://api.jsonbin.io/b/5e58ed5b09ac43054813b795/latest', function(gedcom)
  {
    'use strict';

    // Update configuration
    let options = new primitives.famdiagram.Config();
    options = Object.assign(options, config);

    // Add data and apply preprocesses
    let persons = addRelationships(gedcom.persons, gedcom.relationships);
    persons = getItemizedArray(persons);

    let filteredResults = filterPersons(query, persons);
    options.items = addDisplayDetails(filteredResults.persons);
    options.annotations = filteredResults.annotations;

    // Template to options
    options.defaultTemplateName = template.name;
    options.onItemRender = template.render;
    options.templates = [template];

    $("#tree").animate({
      opacity: 0,
    }, 200, function() {
      $("#tree").empty();
      control = primitives.famdiagram.Control(document.getElementById('tree'), options);

      // Scroll to main item
      let scrollableElement = $('#tree').children().first().children().first();
      $('#tree').children().first().scrollTop((scrollableElement.height() - $(window).height()) / 2);
      $('#tree').children().first().scrollLeft((scrollableElement.width() - $(window).width()) / 2);
      $("#tree").animate({opacity: 1});
    });

    let newTitle = filteredResults.main.names[0].nameForms[0].fullText + ' | Family Tree'
    window.history.pushState('popState', newTitle, window.location.href.split('?')[0] + '?q=' + query);
    $(document).prop('title', newTitle);
  });


}

$(document).ready(function($) {
  let webTyped = true;

  // Disable search submission if the input is empty
  $('#search-button').attr('disabled', 'disabled');
  $('#search-form :input').on('keyup', function() {
    let empty = false;

    $('#search-form :input').each(function() {
      empty = $(this).val().length == 0;
    });

    if (empty)
      $('#search-button').attr('disabled', 'disabled');
    else
      $('#search-button').attr('disabled', false);
  });

  // Do update when search form is submitted
  $("#search-form").submit(function(event) {
    // Get an associative array of just the values.
    var values = {};
    $('#search-form :input').each(function() {
        values[this.name] = $(this).val();
    });

    webTyped = false;
    updatePersons(values['q']);
    event.preventDefault();
  });

  // Do update on back button
  $(window).on('popstate', function() {
    webTyped = false;
    updatePersons(window.location.get('q'));
  });

  // Update on resize
  let doit = null;
  $(window).resize(function() {
    clearTimeout(doit);
    doit = setTimeout(function() {
      control.update(primitives.common.UpdateMode.Refresh);
    }, 100);
  });

  // Only do a separate update on first site enter
  if (webTyped) {
    updatePersons(window.location.get('q'));
  }
});
