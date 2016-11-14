//index.js
//获取应用实例
const util = require( '../../utils/util.js' );
var WxParse = require('../../wxParse/wxParse.js');
//var WxParse = require('../../wxParse/showdown.js');
var Util = require('../../utils/util.js');
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    wxParseData:[]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    //添加测试html；增加一个video标签
    var html = '<table border="1"> <thead> <tr> <th>Month</th> <th>Savings</th> </tr> </thead> <tfoot> <tr> <td>Sum</td> <td>$180</td> </tr> </tfoot> <tbody> <tr> <td>January</td> <td>$100</td> </tr> <tr> <td>February</td> <td>$80</td> </tr> </tbody> </table><code>元素code</code><h1 class="cus-h1 sus-h2">块级函数</h1> <h1>元素H1</h1> <h2>元素H2</h2> <h3>元素H3</h3> <h4>元素H4</h4> <h5>元素H5</h5> <h6>元素H6</h6> <blockquote>元素blockquote</blockquote><img src="//dn-cnode.qbox.me/FjfPMJYFAbyV1-OM-CcCC5Wk2tmY" alt="江湖网页版01.jpg"> <h1>内联函数</h1> <strong>元素strong</strong> <s>元素s</s><em>元素em</em> <font>元素font</font><i>元素i</i> <label>元素label</label> <small>元素small</small> <span>元素span</span> <strike>元素strike</strike> <sub>元素sub</sub> <sub>元素sup</sub> <tt>元素tt</tt> <u>元素u</u> <abbr title="">元素abbr</abbr> <acronym title="">元素acronym</acronym> <b>元素b</b> <bdo dir="">元素bdo</bdo> <big>元素big</big> <br/> <cite>元素cite</cite> <code>元素code</code> <dfn>元素dfn</dfn> <kbd>元素kbd</kbd> <q>元素q</q> <samp>元素samp</samp> <var>元素var</var> <del>元素del</del> ';
    // 测试html
    var html1 = '<p> <span><strong>湖畔福利大放送</strong>，向马云背后的军师曾鸣教授面对面学习创业心法，</span>11月18日湖畔大讲堂线下公开课《从0到0.1：卓越企业的孕育》入场券限时大派送<strong>：</strong> </p> <p> <span><strong>报名方式：</strong></span><strong>11月5日开始，在更新的双十一特别节目下，留言【你在湖畔三板斧的学习心得】+【您的职位】含有这两点内容被视为报名成功！</strong>（示例：听了湖畔三板斧，我的思考/心得/体会……我的职位：APP创始人） </p> <p> <span><strong>报名时间：</strong></span>11月5日-11月10日 24:00截至 </p> <p> <strong>筛选条件：</strong>因线下讲座名额有限，我们会邀请最走心评论报名者，请耐心等待筛选结果的通知 </p> <p> <span><strong>结果通知：</strong>湖畔黑衣人会在双十一当天发送邀请通知、与您确认信息，请报名者注意查收喜马拉雅</span>FM站内私信 </p> <p> <strong>&nbsp; &nbsp;&nbsp;</strong> </p> <p> <strong>【湖畔大学首次公开阿里巴巴17年创业心法】</strong> </p> <p> <strong>【 马云及阿里巴巴合伙人首次回顾创业历程， 锤炼创业三板斧】</strong> </p> <p> 11月课程特别奉献【双十一特辑】除了买买买，还要听听听！听陪伴天猫走过6年双十一的资深HR菲蓝， 为大家揭秘双十一，HR都在忙些什么？听连续7年担任双十一技术战区指挥官的振飞，为大家揭秘双十一零点大战的背后，技术团队都经历了哪些不为人知却又惊心动魄的故事？ </p> <p> <b>&nbsp; &nbsp; &nbsp;&nbsp;</b> </p> <p> <strong>《湖畔三板斧》系列课程</strong> </p> <p> 阿里巴巴将作为首个开放企业，马云以及阿里巴巴合伙人首次共同回顾阿里巴巴创业历程，以CEO视角，亲述阿里17年的艰难抉择和感悟。 </p>  <p> <span><strong>课程主线</strong></span></p>  <p> ▪使命、愿景、价值观 </p> <p> ▪战略 </p> <p> ▪组织、人才、KPI </p>  <p> <strong>&nbsp; &nbsp;&nbsp;</strong> </p> <p> <strong>马云关于《湖畔三板斧》核心概述</strong> </p> <p> “战略的上三板斧是使命、愿景、价值观，下三板斧是组织、人才、KPI。这叫战略的合一。讲战略之前一定要讲使命、讲愿景、讲价值观。based&nbsp;on这三样东西，你再考虑你的战略，战略就是你要去哪里，你为客户提供什么价值。如果说你们调整了战略，我一点兴趣都没有，我有兴趣的是调整了什么组织，关掉了哪几个部门，合并了哪两个部门，哪一个领导被fire掉，哪一个领导被调整了，这是战略的开始。<span>有了组织以后，最后一个很重要的点就是KPI，KPI是一门艺术。没有KPI，你的战略毫无意义，你的愿景更是空话。”</span></p>';
    var html2 = '<strong>【9月导师阵容】</strong><br /><strong>马云</strong><br />湖畔大学校长，乡村教师代言人，阿里巴巴董事局主席<br />处女座，阿里人称“马老师”<br />马云曾在湖畔大学招生面试现场说：“来湖畔大学，我们不叫你怎么挣快钱，挣多钱。活好了活长了，活着，就是成功”<br />&nbsp;&nbsp;<br /><strong>曾鸣</strong><br />湖畔大学教务长，阿里巴巴合伙人<br />金牛座，阿里人和湖畔同学都称之“教授”<br />2006年之前，在加入阿里巴巴任参谋长之前，任教于长江商学院和INSEAD，专注于企业战略发展研究。<br />马云曾经有言，参谋长这个职位，就是为曾鸣设的<br />&nbsp;<br /><strong>彭蕾</strong><br />湖畔大学保荐人，阿里巴巴合伙人<br />“十八罗汉”之一，工号为7<br />2010年开始出任蚂蚁金服董事长兼CEO<br />处女座，人称Lucy<br /><p> 历年来带领过市场、服务和HR等多个部门，打造出了一套具有阿里巴巴特色的组织文化体系 </p> <p> &nbsp; &nbsp;&nbsp; </p> <p> <strong>【10月讲师阵容】</strong> </p> <p> <span></span><strong>吴敏芝</strong><br />阿里巴巴合伙人，阿里巴巴集团资深副总裁，B2B事业群总裁，村淘主要负责人。<br />2000年入职阿里，未曾离开过B2B团队，是典型的老阿里人。阿里人喜欢叫她敏芝姐姐，然而从sales到资深副总裁，无论是B2B还是村淘业务，她一直坚持带领团队用新的管理思路和服务心态不断开创新的服务模式和商业化模式，在打造新商业文明的前提下，建立阿里独创的商业服务生态圈，旨在更好的为中小企业服务。<br />&nbsp; &nbsp; </p> <p> <span><strong>戴珊</strong></span><br /><span>阿里巴巴合伙人，阿里巴巴首席客服官（CCO）</span></p> <p> <span>巨蟹座，花名苏荃，阿里人称之“MM”，</span><span>阿里巴巴“十八罗汉”之一，工号11。</span><br /><span>自阿里巴巴集团成立以来，分管过销售、市场及人力资源等多项业务，现任阿里巴巴集团首席客户服务官。</span><span>她曾说：“公司让我做销售我就做销售，让我做客服我就做客服，我不会想太多，就愿意乐呵呵地做。</span><br />&nbsp;&nbsp;<br /><strong>卫哲</strong> </p> <p> 2006年11月正式加盟阿里巴巴，并出任阿里巴巴集团执行副总裁，兼阿里巴巴企业（B2B）电子商务总裁。2011年2月21日 从阿里巴巴辞职后成立“嘉御基金。<br />&nbsp; </p> <p> <strong>【11月讲师阵容】</strong> </p>  <p> <strong>石旻</strong> </p> <p> 阿里巴巴集团&nbsp;HR资深总监，花名菲蓝，2006年加入阿里，负责口碑网人力资源工作，后转入天猫，陪伴天猫走过6年双十一。 </p><br />';
    var html3 = '<p> <strong>《每年双十一，HR都在忙些什么</strong><span><strong>》</strong></span><strong> 菲蓝（石旻）</strong> </p> <p> <strong>&nbsp;</strong> </p> <p> 我认为双11这样的大战中，HR可以做以下<strong>四件事情：</strong> </p> <p> <strong>第一是，定目标</strong>，当业务目标定了以后，HR要和我们业务伙伴一起定组织目标，组织目标有三点必须要抓住：第一点是文化的主题，第二是人才梯队的培养目标，第三点，复杂大战当中我们怎么样提高我们组织运作的效率。 </p> <p> <strong>第二步，搭场子</strong>，围绕一颗心一张图，HR要非常敏锐的去搭很多的场子，能够让我们每个小二和大战总体的目标要非常清晰自己的战位是什么？ </p> <p> <strong>第三步，摸温度</strong>，HR在这个过程当中要敏锐根据业务实战的场景、实战的节奏，非常敏锐的捕捉和感知这个过程当中，我们如何有效的抓住关键的节点，推动业务和组织的目标能够实现。 </p> <p> <strong>第四步，做复盘</strong>，做复盘也要分为三个纬度，我们要一起和我们的业务伙伴一起复盘我们双11踩过的坑是什么？我们一起复盘我们文化沉淀了什么好的特质？我们来复盘哪<span>些人才长出来了，通过什么样的路径长出来了？</span></p>  <p> <span>……</span></p> <p> <span>更多精华干货，请关注节目更新！</span></p>';
    var html4 = '<p> <span>▲马云生日（教师节）首发节目，免费收听，</span><u>预告和花絮</u><span></span><strong>不算</strong><span>在主体课程之内；<span>本课程为虚拟内容服务，订阅成功后概不退款，请您理解</span></span></p>  <div>  <span><span>▲</span>本课程为全年订阅课程，99元/年，订阅成功后，即可收听全年（2016年9月10号——2017年9月10号期间）更新的52期全部课程，每周六更新1期，全年52周无间断</span></div> <div>  <span><span>▲</span>版权归原作者所有，严禁翻录成任何形式，严禁在任何第三方平台传播，<strong><u>违者将追究其法律责任</u></strong></span></div> <div>  <span><span>▲</span>如在充值/购买环节遇到问题，可以通过页面左上方按钮，分享至微信内使用微信支付完成购买</span></div> <div>  <span><span>▲</span>在购买过程中，如果你有任何问题，可以在微信搜索公众号【bestxmly】或搜索【喜马拉雅付费精品】来随时咨询问题，也可以拨打客服电话：0514-82395811</span></div>';

    var that = this
    console.log(that.__route__);
    //更新数据
    // that.setData({
    //   wxParseData:WxParse('html',html)
    // })

    WxParse.wxParse('html',html,that)

    var text = '# wxParse-微信小程序富文本解析自定义组件，支持HTML及markdown解析 \n'
    +' > 微信小程序富文本解析自定义组件，支持HTML及markdown解析 \n\n' 
    +'## 功能列表 \n * 动态加载代码  \n * html转json \n * markdown转html转json \n * 富文本markdown解析 \n * 自定义层级解析 \n * 自定义样式表 \n'
    +'## 文件作用 \n'
    +' ``` // wxParse.wxml //用于解析使用的模版 ``` \n'
    +'## 开发信息 \n '
    +' [微信小程序开发论坛](http://weappdev.com) \n'
    +' ![微信小程序logo](http://weappdev.com/uploads/default/original/1X/9156b32bd04323f35d0957796f126b8a54595c97.png)';
    WxParse.wxMoreParse('testData','md',text,that)
    

  },
  wxParseImageLoad: function(e){
    
  },
  wxParseImgTap: function(e){
    var that = this
    WxParse.wxParseImgTap(e,that)
  }
})

