import { render } from "@testing-library/react";
import SaasListStories from "./SaasList.fixture";
import { test } from "vitest";
import { expectTL } from "../../../../siheom/expectTL";
import { queryTL } from "../../../../siheom/queryTL";

test("render hello", async () => {
	render(SaasListStories["Saas가 여럿 있음"]);

	await expectTL(queryTL.list("SaaS 목록")).toBeVisible();
});
