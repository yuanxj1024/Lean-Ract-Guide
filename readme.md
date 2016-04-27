#React 学习笔记

**目录**
*	资料
*	语法
*	项目参考


1.	资料
	
	`React.JS`
	*	[v15.0.1实例代码](https://facebook.github.io/react/downloads/react-15.0.1.zip)
	*	[React Demos - 阮一峰](https://github.com/ruanyf/react-demos)
	*	[React 入门实例教程-阮一峰](http://www.ruanyifeng.com/blog/2015/03/react.html)
	*	[React 入门教程-极客学院](http://wiki.jikexueyuan.com/project/react-tutorial/)
	*	[JSX in Depth](https://facebook.github.io/react/docs/jsx-in-depth.html)
	*	[Webpack+React+ES6开发模式入门指南](http://www.cnblogs.com/skylar/p/React-Webpack-ES6.html)
	*	[React&React Native生态-探索学习](https://github.com/icepy/Front-End-Develop-Guide/blob/master/React.md)
	*	[react-redux-starter-kit](https://github.com/davezuko/react-redux-starter-kit)

	`React Native`
	
	*	[我对 React Native 的理解和看法](http://div.io/topic/851)
	*	[React-Native入门指导之iOS篇](http://www.cnblogs.com/jianglan/p/5027315.html)
	
	
*	语法

	*	html使用{}嵌入js
	
	```
		var divHtml = <div>Hello {this.props.name}.</div>;
	```
	*	React.createClass
	
		使用时注意组件名称首字母必须大写。
		
		顶层标签有且只能有一个。

	*	this.props.children
		
		表示组件的子节点
		
		`配合React.Children`使用	
	
	*	React.PropTypes
	
		[类型](http://facebook.github.io/react/docs/reusable-components.html)

	*	获取真实DOM元素
		
		需要在元素上加入ref属性
		
		
		```
		var MyComponent = React.createClass({
		  handleClick: function() {
	      this.refs.myTextInput.focus();
  		},
  		render: function() {
    		return (
      			<div>
        		<input type="text" ref="myTextInput" />
        		<input type="button" value="Focus the text input" onClick={this.handleClick} />
      			</div>
    		);
  		}
		});

		ReactDOM.render(
		  <MyComponent />,
		  document.getElementById('example')
		);
		
		```

	*	style赋值
	
	```
	style={{opacity: this.state.opacity}}
	```		
3.	项目参考
	*	[Amaze UI React](https://github.com/amazeui/react-starter-kit) - web app
	*	[material-ui](https://github.com/callemall/material-ui)
		
		React Components that Implement Google's Material Design
	

