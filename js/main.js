$(() => {
  let tabs = $(".tabs");
  console.log(tabs);
  let arr_tabs = Array.from(tabs);
  let content = $(".content");
  let arr_content = Array.from(content);
  console.log(content);
  /**
   * first tab is active by default
   */
  $("#tabs-container div:first-child").addClass("active_tabs");
  $("#content-container div:first-child").addClass("active_content");
  $("#tabs-container div:first-child")
    .nextAll()
    .addClass("inactive_tabs");
  $("#content-container div:first-child")
    .nextAll()
    .addClass("inactive_content");
  /**
   * get the index of the element on which click
   */
  let index;
  $(".tabs").on("click", function() {
    index = $(this).index();
    console.log(index);
    content_switch(index);
  });
  /**
   * tab switching function
   */
  function content_switch(index) {
    $(".tabs")
      .removeClass("active_tabs inactive_tabs")
      .addClass("inactive_tabs");
    $(".content")
      .removeClass("active_content inactive_content")
      .addClass("inactive_content");
    $(".tabs")
      .eq(index)
      .addClass("active_tabs")
      .removeClass("inactive_tabs");
    $(".content")
      .eq(index)
      .addClass("active_content")
      .removeClass("inactive_content");
  }
});
