//index.js
//获取应用实例
var app = getApp()

// Button的官方示例
// var types = [ 'default', 'primary', 'warn' ]
// var pageObject = {
//   data: {
//     defaultSize: 'default',
//     primarySize: 'default',
//     warnSize: 'default',
//     disabled: false,
//     plain: false,
//     loading: false
//   },
//   //函数是给bindtap等事件用的
//   setDisabled: function( e ) {
//     this.setData( {
//       disabled: !this.data.disabled
//     })
//   },
//   setPlain: function( e ) {
//     this.setData( {
//       plain: !this.data.plain
//     })
//   },
//   setLoading: function( e ) {
//     this.setData( {
//       loading: !this.data.loading
//     })
//   }
// }

// for( var i = 0;i < types.length;++i ) {
//   ( function( type ) {
//     pageObject[ type ] = function( e ) {
//       var key = type + 'Size'
//       var changedData = {}
//       changedData[ key ] =
//         this.data[ key ] === 'default' ? 'mini' : 'default'
//       this.setData( changedData )
//     }
//   })( types[ i ] )
// }



// Icon的官方示例
// Page( {
//   data: {
//     iconSize: [ 20, 30, 40, 50, 60, 70 ],
//     iconColor: [
//       'red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple'
//     ],
//     iconType: [
//       'success', 'info', 'warn', 'waiting', 'safe_success', 'safe_warn',
//       'success_circle', 'success_no_circle', 'waiting_circle', 'circle', 'download',
//       'info_circle', 'cancel', 'search', 'clear'
//     ]
//   }
// })


//Text 的官方示例
// var initData = 'this is first line\nthis is second line'
// var extraLine = ['a','b'];
// Page({
//   data: {
//     text: initData
//   },
//   add: function(e) {
//     extraLine.push('other mtto')
//     this.setData({
//       text: initData + '\n' + extraLine.join('\n')
//     })
//   },
//   remove: function(e) {
//     if (extraLine.length > 0) {
//       extraLine.shift();
//       this.setData({
//         text: initData + '\n' + extraLine.join('\n')
//       })
//     }
//   }
// })



Page( {
  data: {
    myiconSize: [ 15, 25, 35, 45, 55, 45, 35, 25, 15 ],
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo( {
      url: '../logs/logs'
    })
  },
  //my_btn
  bindbtn: function() {
    wx.navigateTo( {
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    console.log( 'onLoad' )
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo( function( userInfo ) {
      //更新数据
      that.setData( {
        userInfo: userInfo
      })
    })
  }
})
