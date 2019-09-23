import { tsx, create } from '@dojo/framework/core/vdom';
import theme from '@dojo/framework/core/middleware/theme';
import dojo from '@dojo/themes/dojo';

import * as css from './App.m.css';
import Page from './page';

const factory = create({ theme });

export default factory(function App({ middleware: { theme } }) {
	if (!theme.get()) {
		theme.set(dojo);
	}
	return (
		<div classes={[css.root]}>
			【IDE】BlockLang 标准库之 UI 组件
			<Page 
				onLoad={()=>{}} 
				onFocus={()=>{}} 
				widget={{id:'1', parentId:'-1', widgetId:1, widgetName:'a', widgetCode:'0001', canHasChildren:true, properties:{id:"1", value:'value'}}} 
				activeWidgetId=""/>
		</div>
	);
});
