# 计数器Demo
代码很简单，要用这个简单代码达成以下目的：

TODO:  
1. 时间旅行调试
  chrome安装插件 [https://github.com/zalmoxisus/redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension)  
  改写createStore，如果检测到插件存在就调用插件的启动函数。
  ```js
  const store = createStore(counterReducer, 0,
    window.devToolsExtension ? window.devToolsExtension() : undefined)
  ```
  醉了，用了一会儿就不好用了，action为0显示不出来，revert等按钮点不下去。
  
  非插件方式：
  https://github.com/gaearon/redux-devtools/blob/master/docs/Walkthrough.md
  npm install --save-dev redux-devtools
  npm install --save-dev redux-devtools-log-monitor
  npm install --save-dev redux-devtools-dock-monitor
  
  状态如果不是对象会有警告，所以修改reducer函数，把状态改成对象。
  创建了一个DevTools组件，显示调试用的界面。
  store创建时，增加这个enhancer函数
  ```const store = createStore(counterReducer, DevTools.instrument())```  
  在inde.tsx的render的界面中增加DevTools组件的引用，因为没有使用Provider，所以要手工指定store属性。  
  ```<DevTools store={store}/>```
  增加了调试工具后发现如果监听state变化，会有多余的state变化。  
  编译后运行就可以看到log界面了，可以简单使用。  
  其中logmonitor：  
    reset按钮：恢复到初始状态。
    commit按钮：把当前状态暂存
    revert按钮：回到上一个暂存的状态
    sweep按钮：把标记删除的action都去掉，就当没发生过  
  其中dockmonitor可以配置一些属性，当前设置的是：  
    ctrl+H 显示/隐藏；Ctrl+Q 改变位置； Ctrl+m切换monitor(ts文件太旧还没有)，多个monitor一个dock时就可以切换了。   
  还有其他monitor：
    npm install redux-slider-monitor --save-dev  一个拖动条，随时跳转到某个action
    没有ts头文件，用```var SliderMonitor = require('redux-slider-monitor')```加载    
  还有monitor单独配置参数、和中间件如何使用、还有如何区分生产环境、还有持久化等等可以看上面的文档。      
2. test

3. 热加载




