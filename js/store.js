// The in-memory Store. Encapsulates logic to access wine data.
window.store = {
    music: {},
    populate: function () {
        this.music[1] = {
            id: 1,
            name: "林子祥 - 莫再悲",
            src:"http://127.0.0.1/music/music/林子祥 - 莫再悲.mp3",
            Lyric:"[ti:最爱是谁][ar:林子祥][al:爱情故事][by:炫网资讯 Liuxuan.com][00:01.00]莫再悲[00:05.00]演唱：林子祥[00:10.00]曲：中岛美雪 词：郑国江[01:25.00][00:11.00]莫再悲 莫再伤[01:27.00][00:14.00]遇到悲哀休夸张[01:30.00][00:16.00]谁亦要经风与浪[01:32.00][00:19.00]谁遇挫败不受伤[01:35.00][00:22.00]逝去的 莫再想[01:38.00][00:24.00]路正崎岖更漫长[01:41.00][00:27.00]何用叹息风里望[01:43.00][00:30.00]宝贵光阴笑着量[02:30.00][01:46.00][00:33.00]愁和哀 风与霜[02:32.00][01:49.00][00:35.00]不会天天都探访[02:35.00][01:52.00][00:38.00]用幻想与梦想[02:38.00][01:54.00][00:41.00]编织那远大理想[02:40.00][01:57.00][00:43.00]斜阳好 花正香[02:43.00][02:00.00][00:46.00]跟那寂寞和着唱[02:46.00][02:02.00][00:49.00]歌声一句句跳越屏障赴远方[02:51.00][02:08.00][00:55.00]默默的分享 默默的欣赏[02:54.00][02:11.00][00:58.00]路上一切美丽况[02:57.00][02:13.00][01:00.00]人生总会碰着悲哀苦恼[03:00.00][02:17.00][01:03.00]为何流泪看[03:02.00][02:19.00][01:06.00]幸运不稀罕 热泪不轻淌[03:05.00][02:22.00][01:08.00]愿做真正的硬汉[03:08.00][02:24.00][01:11.00]何必口说快乐[03:10.00][02:26.00][01:13.00]心中一个样"
        };
        this.music[2] = {
            id: 2,
            name: "林子祥 - 谁能明白我",
            src:"http://127.0.0.1/music/music/林子祥 - 谁能明白我.mp3",
            Lyric:"[ti:谁能明白我][ar:林子祥][al:林子祥创作歌集][by:Jason][00:05.00]谁能明白我[00:10.00]电影:《猫头鹰与小飞侠》主题曲[00:15.00][00:16.47]昂然踏着前路去[00:19.94]追赶理想旅途上[00:24.00]前行步步怀自信[00:27.76]风吹雨打不退让[00:31.51]无论我去到那方[00:35.32]心里梦想不变样[00:39.10]是新生　是醒觉[00:43.16]梦想永远在世上[00:46.94]前路那怕远　衹要自强[00:50.72]我继续独自寻路向[00:54.57]常为以往梦想发狂[00:58.49]耐心摸索路途上[01:02.45]怀自信　我永不怕夜航[01:06.21]到困倦我自弹自唱[01:09.86]掌声我向梦想里寻[01:13.75]尽管一切是狂想[01:17.63]途人路上回望我[01:21.30]衹因我的怪模样[01:25.15]途人谁能明白我[01:28.97]今天眼睛多雪亮[01:32.83]人是各有各理想[01:36.59]奔向目标不退让[01:40.39]用歌声　用欢笑[01:44.38]来搏知音的赞赏[01:48.75][02:06.00]怀自信我永不怕夜航[02:09.59]到困倦我自弹自唱[02:13.17]掌声我向梦想里寻[02:17.04]尽管一切是狂想[02:21.10]昂然踏着前路去[02:24.65]追赶理想旅途上[02:28.43]前行步步怀自信[02:32.20]依照心中那正确方向[02:36.05]怀着爱与恕的心[02:40.00]充满梦想的笑匠[02:51.64][02:43.73]用歌声　用欢笑[02:55.94][02:47.68]来搏知音的赞赏[03:02.99][03:08.32]"
        };
        this.music[3] = {
            id: 3,
            name: "林子祥 - 真的汉子",
            src:"http://127.0.0.1/music/music/林子祥 - 真的汉子.mp3",
            Lyric:"[ti:真的汉子][ar:林子祥][al:生命之曲][by:活在當下][00:01.12]林子祥 - 真的汉子[00:02.39][00:03.41]作词：郑国江 　作曲：林子祥[00:04.76][03:55.74][00:05.73]LRC制作:活在當下     QQ:6313827[00:07.90][02:03.40][00:08.51]成和败努力尝试 人若有志应该不怕迟[02:12.06][00:17.25]谁人在我未为意 成就靠真本事 [02:21.07][00:26.24]做个真的汉子 承担起苦痛跟失意 [02:29.82][00:34.94]投入要我愿意 全力干要干的事 [02:35.84][00:41.09][02:38.08][00:43.16]谁用敌意扮诚意 行动算了不必多砌词 [02:46.98][00:52.03]迷人是这份情意 谁没有伤心往事 [02:55.77][01:00.83]做个真的汉子 人终归都要死一次 [03:04.28][01:09.29]无谓要我说道理 豪杰也许本疯子 [03:11.65][01:16.79][03:13.25][01:18.32]同做个血性男儿 愿到世间闯一次　[03:17.46][01:22.42]强调给我两手创动人故事[03:21.91][01:26.87]成败也不再犹豫 用我的真心真意　[03:26.11][01:31.11]怀着斗志向竞争的圈里追[03:31.44][01:36.35][03:32.02][01:37.16]人生有特殊意义 （人生有特殊意义）[03:36.33][01:41.46]能改变我的际遇 （人生有大意义）[03:40.64][01:46.02]能演变动人故事 （一生也让你记住）[03:44.97][01:50.02]求献身维护正义[03:52.96][01:56.06]"
        };

    },

findAll:function(){
   return _.values(this.music);
},
findById:function(id){
    return this.music[id];
 },
};

store.populate();

Backbone.sync = function (method, model, options) {

    if (method === "read") {
    	if (model.id) {
    		options.success(store.findById(model.id))
    	}else{
         options.success(store.findAll());
    }
    }

};