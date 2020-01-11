import { create, tsx } from "@dojo/framework/core/vdom";
import { PageProperties } from "std-widget-web/page";
import ide from "designer-core/middleware/ide";
import * as css from "./index.m.css";

const factory = create({ ide }).properties<PageProperties>();

export default factory(function Page({ children, middleware: { ide } }) {
	ide.config("root");
	ide.tryFocus();
	const activeWidgetEvents = ide.activeWidgetEvents();

	return (
		<div key="root" classes={[css.root]} {...activeWidgetEvents}>
			{children()}
		</div>
	);
});
