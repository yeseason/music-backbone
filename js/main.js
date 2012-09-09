var AppRouter =Backbone.Router.extend({
routes:{
"":"list",
"list":"list",
"some":"some",
"some/:id":"someid",
},
initialize: function () {
	this.head = new head();
	$('header').append(this.head.el);
	this.foot = new foot();
	$('footer').append(this.foot.el);
},
list: function() {
var listcollection=new musicCollection,
	that=this;
	listcollection.fetch({success:function(data){
		that.slidePage(new list({model: listcollection}).el);
			}});
},
some:function(){
   alert("无歌词");
},
someid: function(id) {
	var employee = new music({id: id}),
	that = this;
	employee.fetch({
	success: function(data) {
	that.slidePage2(new some({model: data}).el);
    },
    error:function(){
      alert("无歌词");
    },
  });
},  	
slidePage: function(page) {
	var myScroll;	
	if (!this.currentPage) {
	 $(page).attr('class', 'content-list stage-center');
	$("#content").append(page);
	this.currentPage = page;
};

myScroll = new iScroll('content-list');
     setTimeout(function() {
        $(".content-some").attr('class', 'content-some stage-right');
        $(".content-list").attr('class', 'content-list stage-center');
	     });
},
slidePage2: function(page) {
    var myScroll;  	
	$(".content-some").remove();
     $(page).attr('class', 'content-some stage-right');
     $("#content").append(page);
     this.lyic();
     myScroll = new iScroll('content-some');
     setTimeout(function() {
        $(".content-list").attr('class', 'content-list stage-left');
        $(".content-some").attr('class', 'content-some stage-center');
     });
},
  
lyic:function(){
	this.lrc=$(".music-time").html().split("["),
	array=[],
	that=this,
	this.currIndex = 0,
	this.preTime = 0,
	this.nextTime = 0,
	tc = '';
	if (this.lrc.length > 5){
	for (var i = 0; i < this.lrc.length; i++){
	var g = {};
	var t = this.lrc[i].split("]");
	g.time = this.getTime(t[0]);
	if (isNaN(g.time))
	continue;
	g.c = t[1];
	if (g.c == "")
	g.c = this.getNext(i);
	array.push(g);
	}
	array.sort(function(x, y) {
	if (x.time > y.time)
	return 1;
	else if (x.time < y.time)
	return -1;
	else
	return 0;
});

for (var i = 0; i < array.length; i++){
	var g = array[i];
	if (!g.c) {
	g.c = "";
	}
	tc+=("<div id='lrc" + i + "'>" + g.c + "</div>");
}
$('.photo').html(tc);

setInterval(function() {
	that.lrcList();
	}, 500);
	} 
	this.lines = array;
},

getTime:function(str){
	var time = 0,
	ta = str.split(":");
	if (ta.length < 2)
	return time;
	if (ta[1].indexOf(".") > 0) {
	var tb = ta[1].split(".");
	time = ta[0] * 60 * 1000 + tb[0] * 1000 + tb[1] * 10;
	}
	else
	time = ta[0] * 60 * 1000 + ta[1] * 1000;
	return time;
	},
	getNext:function(i){
	var that=this,
	result = "",
	i = i + 1;
	if(that.lrc[i]){
	t = that.lrc[i].split("]");
	if (t[1] == "")
	result = this.getNext(i);
	else
	result = t[1]
	}
	return result;
	},
	lrcList:function(){
	var that=this,
	currenttime=0,
	audio=document.getElementById("audio");
	currenttime=audio.currentTime;
	currenttime=currenttime*1000;

	function getTop(idx) {
	var	top=$("#lrc" + idx).offset(),
	ch = window.innerHeight/3.5;
	return Math.max(ch, top.top - 24) - ch;
	}

	function moveScrollbar(idx) {
	var t = getTop(idx);
	$("#scroller").css("-webkit-transform","translate3d(0px, -"+t+"px, 0)");
	}
	if (currenttime == 0) {
	that.currIndex = 0;
	moveScrollbar(that.currIndex);

	for (var i = 0; i < that.lines.length; i++) {
	$("#lrc" + i).css("color","#fff");
	}
	return;
}

if (currenttime > 0 && that.currIndex < that.lines.length - 1){
	that.preTime = that.lines[that.currIndex].time;
	that.nextTime = that.lines[that.currIndex + 1].time;
	if (currenttime >= that.preTime && currenttime < that.nextTime) {

} else if (currenttime >= that.nextTime) {
	$("#lrc" + that.currIndex).css("color","#fff");
	moveScrollbar(++that.currIndex);
	$("#lrc" + that.currIndex).css("color","#06adf3");
	that.lrcList();
	} else {
	$("#lrc" + that.currIndex).css("color","#fff");
	moveScrollbar(--that.currIndex);
	$("#lrc" + that.currIndex).css("color","#06adf3");
	that.lrcList();
	}
}
else
{
	if (currenttime < that.lines[that.lines.length - 1].time) {
	that.currIndex = 0;
	moveScrollbar(that.currIndex);
	for (var i = 0; i < that.lines.length; i++) {
	$("#lrc" + i).css("color","#fff");
}
	that.lrcList();
}
}
}
});
utils.loadTemplate(['head','foot','list','some','list_text'],function(){
	app =new AppRouter();
	Backbone.history.start();
});