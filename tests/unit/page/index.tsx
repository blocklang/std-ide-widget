const { describe, it } = intern.getInterface("bdd");
const { assert } = intern.getPlugin("chai");

import harness from "@dojo/framework/testing/harness/harness";
import { tsx } from "@dojo/framework/core/vdom";
import { stub } from "sinon";

import Page from "../../../src/page";
import * as css from "../../../src/page/index.m.css";
import ide from "@blocklang/designer-core/middleware/ide";
import createMockIdeMiddleware from "@blocklang/designer-core/testing/mocks/middleware/ide";
import { EditableProperties } from "@blocklang/designer-core/interfaces";

describe("page", () => {
	it("autoFocus is false", () => {
		const onFocusedStub = stub();
		const widget = { id: "1", parentId: "-1", widgetCode: "0001", widgetName: "Page", canHasChildren: true };
		const extendProperties: EditableProperties = {
			onFocused: onFocusedStub,
			onFocusing: () => {},
			onUnhighlight: () => {},
			onHighlight: () => {},
			autoFocus: () => false,
		};
		const ideMock = createMockIdeMiddleware();
		const h = harness(() => <Page widget={widget} extendProperties={extendProperties} />, {
			middleware: [[ide, ideMock]],
		});
		h.expect(() => (
			<div
				key="root"
				onmouseout={() => {}}
				onmouseover={() => {}}
				onmouseup={() => {}}
				classes={[css.root]}
			></div>
		));
		assert.isTrue(onFocusedStub.notCalled);
	});

	it("autoFocus is true", () => {
		const onFocusedStub = stub();
		const widget = { id: "1", parentId: "-1", widgetCode: "0001", widgetName: "Page", canHasChildren: true };
		const extendProperties: EditableProperties = {
			onFocused: onFocusedStub,
			onFocusing: () => {},
			onUnhighlight: () => {},
			onHighlight: () => {},
			autoFocus: () => true,
		};
		const ideMock = createMockIdeMiddleware();
		const h = harness(() => <Page widget={widget} extendProperties={extendProperties} />, {
			middleware: [[ide, ideMock]],
		});
		h.expect(() => (
			<div
				key="root"
				onmouseout={() => {}}
				onmouseover={() => {}}
				onmouseup={() => {}}
				classes={[css.root]}
			></div>
		));
		assert.isTrue(onFocusedStub.calledOnce);
	});
});
