const { describe, it } = intern.getInterface("bdd");
const { assert } = intern.getPlugin("chai");

import harness from "@dojo/framework/testing/harness";
import { tsx } from "@dojo/framework/core/vdom";
import { stub } from "sinon";

import Page from "../../../src/page";
import * as css from "../../../src/page/index.m.css";

describe("page", () => {
	it("autoFocus is false", () => {
		const onFocusStub = stub();
		const widget = { id: "1", parentId: "-1", widgetCode: "0001", widgetName: "Page", canHasChildren: true };
		const originalProperties = {};
		const extendProperties = { onFocus: onFocusStub, onHighlight: () => {}, autoFocus: () => false };

		const page = new Page();
		page.__setProperties__({
			onLoad: () => {},
			widget,
			originalProperties,
			extendProperties
		});
		page.__render__();

		assert.isTrue(onFocusStub.notCalled);
	});

	it("autoFocus is true", () => {
		const onFocusStub = stub();

		const widget = { id: "1", parentId: "-1", widgetCode: "0001", widgetName: "Page", canHasChildren: true };
		const originalProperties = {};
		const extendProperties = { onFocus: onFocusStub, onHighlight: () => {}, autoFocus: () => true };

		const page = new Page();
		page.__setProperties__({
			onLoad: () => {},
			widget,
			originalProperties,
			extendProperties
		});
		page.__render__();

		assert.isTrue(onFocusStub.calledOnce);
	});
});
