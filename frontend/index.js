$(() => {
    $('input[type="button"]').on('click', function(e) {
      if (e.keyCode == 13) {
        const newTask = $(this).val();
        if (newTask) {
          var li = $("<li><input type='checkbox' class='right-margin' <label>" + newTask + "</label></li>");
          $('#tasksUL').append(li);
          $(this).val("");
        }
      }
    });
    
    $('body').on('click', ':checkbox', function(e) {
      $(this).parent().toggleClass('stroked');
    });
  });