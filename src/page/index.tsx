import { create, tsx } from '@dojo/framework/core/vdom';
import theme from '@dojo/framework/core/middleware/theme';
//import PageBase from 'std-widget-web/Page';
import * as css from './index.m.css';

const factory = create({ theme });

export default factory(function Page({ middleware: { theme } }) {
    const {root} = theme.classes(css);
    return (
        //<PageBase classes={[root]}/>
        <div classes={[root]}></div>
    );
});
