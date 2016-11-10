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
    var html = '&middot;&middot;<img src="//dn-cnode.qbox.me/FjfPMJYFAbyV1-OM-CcCC5Wk2tmY" alt="江湖网页版01.jpg"><code>元素code</code><h1>块级函数</h1> <h1>元素H1</h1> <h2>元素H2</h2> <h3>元素H3</h3> <h4>元素H4</h4> <h5>元素H5</h5> <h6>元素H6</h6> <blockquote>元素blockquote</blockquote> <h1>内联函数</h1> <strong>元素strong</strong> <s>元素s</s><em>元素em</em> <font>元素font</font><i>元素i</i> <label>元素label</label> <small>元素small</small> <span>元素span</span> <strike>元素strike</strike> <sub>元素sub</sub> <sub>元素sup</sub> <tt>元素tt</tt> <u>元素u</u> <abbr title="">元素abbr</abbr> <acronym title="">元素acronym</acronym> <b>元素b</b> <bdo dir="">元素bdo</bdo> <big>元素big</big> <br/> <cite>元素cite</cite> <code>元素code</code> <dfn>元素dfn</dfn> <kbd>元素kbd</kbd> <q>元素q</q> <samp>元素samp</samp> <var>元素var</var> <del>元素del</del>';

    var that = this
    console.log(that.__route__);
    //更新数据
    // that.setData({
    //   wxParseData:WxParse('html',html)
    // })

    WxParse.wxParse('html',html,that)

  },
  wxParseImgTap: function(e){
    var that = this
    WxParse.wxParseImgTap(e,that)
  }
})

