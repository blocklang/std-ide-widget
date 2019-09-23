import PageBase from 'std-widget-web/page';
// 注意：此处引入 default，在 build 时会有警告信息
import {WidgetDesignableMixin} from 'designer-core/mixins/WidgetDesignable';

export default class Page extends WidgetDesignableMixin(PageBase) {

}
