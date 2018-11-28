package com.apothuaud.selenium.clickclack.web.tests.draft.v1;

import com.apothuaud.selenium.clickclack.web.pages.ClacksListPage;
import com.apothuaud.selenium.clickclack.web.pages.HomePage;
import com.apothuaud.selenium.common.TestSet;
import org.testng.Assert;
import org.testng.annotations.Test;

public class HomePageIntegrationTestSet extends TestSet {

    // PASSED

    @Test(
            description = "I can navigate to List page from Home page",
            groups = { "int", "dev", "rec", "prod" }
    )
    public void testHomePageToListPage() {
        new HomePage(getDriver(), getEnv())
                .openPage()
                .gotoListPage();
        Assert.assertEquals(getDriver().getCurrentUrl(), new ClacksListPage(getDriver(), getEnv()).getUrl());
    }
}
