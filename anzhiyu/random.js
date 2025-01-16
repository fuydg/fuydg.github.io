var posts=["2025/01/16/hello-world/","2025/01/17/很奇怪的/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };