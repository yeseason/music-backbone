window.list=Backbone.View.extend({
   initialize:function(){
   this.render();      
},
render:function(){
  $(this.el).html(this.template(this.model.toJSON()));
        _.each(this.model.models, function(music) {
            $("#main",this.el).append(new list_text({model:music}).render().el);
        }, this);
   return this;
   },
});

window.list_text=Backbone.View.extend({
	tagName:"li",
    initialize:function(){
    this.model.bind("change", this.render, this);
},
events:{
    "click .music" :"play",
},

render:function(){
   $(this.el).html(this.template(this.model.toJSON()));
   return this;
},

play:function(){
	 var audio=document.getElementById("audio"),
	 src=$("#audio").attr('src'),
	 rel=$(this.el.firstChild).attr('rel'),
	 next_id=this.el.childNodes[1].id,
	 next=$(this.el.childNodes[1]);
     song_id="#some/"+next_id;
     if(src!=rel){
     $("#audio").attr('src',rel);
     this.close();
     next.addClass('playing');
}
this.error(audio);
this.timeupdate(audio);
  if(audio.paused){
  audio.play();
  $("#some").attr('href',song_id);
  }else{
  audio.pause();
  }
},	
error:function(audio){
     audio.addEventListener("error",function(){
      switch (audio.error.code){
      case 1:
      alert("下载过程中被终止");
      break;
      case 2:
      alert("网络故障");
      break;
      case 3:
      alert("解码失败");
      break;
      case 4:
      alert("不支持播放类型");
      break;
      default:
     alert("发生未知错误");
     }
    })
},
timeupdate:function(audio){
      var num;
      audio.addEventListener("timeupdate",function(){
   	  num=Math.floor(audio.currentTime/audio.duration*1000000000);
   	  num=num/10000000;
      $(".playing").width(num+"%");
	   })
},
close:function(){
   $(".long").width("0");
   $(".long").removeClass("playing");
}
});