/*!BlogJS v0.1.0, Romello Goodman 2014, romellogoodman.com, MIT License, Thank you for using.*/
(function(window){
  'use strict';
  function define_Library(){
    var BlogJS = {};
    BlogJS.initials = {
      "appendListTo": "#list-of-articles",
      "appendPostTo": "#post",
      "blogPosts": null,
      "postTemplate": "",
      "linkTemplate": "",
      "postLocation": "index",
      "listLocation": "index",
    }
    BlogJS.articlesLoaded = null;
    BlogJS.currentPost = null;
    BlogJS.pageNumber = null;
    BlogJS.getParameterByName = function(name) {
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
          results = regex.exec(location.search);
      return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    };
    BlogJS.loadArticleList = function(amount) {
      if(BlogJS.articlesLoaded === null) {
        BlogJS.articlesLoaded = Object.keys(BlogJS.initials.blogPosts).length-1;
      }
      for(var i = BlogJS.articlesLoaded; i >= 0 && i > BlogJS.articlesLoaded-amount; i--) {
        $(BlogJS.initials.appendListTo).append(
          '<article><a href="page.html?posts=' +i+ '">' +BlogJS.initials.blogPosts[i].title+ '</a> \
          </article><hr>'
        );
      }
      BlogJS.articlesLoaded = i;
      if(BlogJS.articlesLoaded === -1) {
        document.getElementById("load").style.display = "none";
      }
    };
    BlogJS.loadBlogPost = function(post) {
      $(BlogJS.initials.appendPostTo).html('<p id="post-title">' +post.title+ '</p>' +post.body);
    };
    BlogJS.loadPage = function() {
      BlogJS.currentPost = BlogJS.initials.blogPosts[BlogJS.getParameterByName('posts')];
      if(BlogJS.currentPost != undefined) {
        BlogJS.pageNumber = BlogJS.currentPost.number;
        BlogJS.loadBlogPost(BlogJS.currentPost);
      }  else {
        BlogJS.loadArticleList(5);
      }
    };
    return BlogJS;
  }
  if(typeof(BlogJS) === 'undefined'){
    window.BlogJS = define_Library();
  } else{
    console.log("The library BlogJS is already defined.");
  }
})(window);