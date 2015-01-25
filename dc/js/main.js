$(document).ready(function () {
  loadPage();
  $(window).on('scroll', function() {
    if($(window).scrollTop() > 78) $('#mini-header').show();
      else $('#mini-header').hide();
  });
  $('#arrow').on({
    'click': function() { $('html,body').animate({ scrollTop: 0 }, 500); }
  });
});
function loadPage() {
  blogPost = posts[getParameterByName('posts')];
  if(blogPost != undefined) loadBlogPost(blogPost);
    else loadArticleList();
}
function loadArticleList() {
  for(var post in posts){
    $("#links").append(
      '<article><a href="page.html?posts=' +post+ '">' +posts[post].title+ '</a> \
      <p class="date">' +posts[post].date+ '</p></article><hr>'
    );
  }
}
function loadBlogPost(post) {
  $("title").append(formatNumber(post.number));
  $("#post").html('<article class="post-title"><p>' +post.title+ '</p></article>' +post.body);
}
function formatNumber(number) {
  if(number < 10) return ('00' + number);
    else return ('0' + number);
}
function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}