package com.apothuaud.selenium.clickclack.web.tests.draft.v1;

import com.apothuaud.selenium.clickclack.web.pages.ClacksCreatePage;
import com.apothuaud.selenium.clickclack.web.pages.ClacksListPage;
import com.apothuaud.selenium.common.TestSet;
import org.testng.Assert;
import org.testng.annotations.Test;

public class ClacksCreatePageIntegrationTestSet extends TestSet {

    // PASSED

    // 1. From Create Clack page I can go to Clacks list page
    @Test(
            description = "I can navigate to Clacks page from Create page",
            groups = { "int", "dev", "rec", "prod" }
    )
    public void testCreatePageToListPage(){
        new ClacksCreatePage(getDriver(), getEnv())
                .openPage()
                .gotoListPage();
        Assert.assertEquals(getDriver().getCurrentUrl(), new ClacksListPage(getDriver(), getEnv()).getUrl());
    }
}
