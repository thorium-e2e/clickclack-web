package com.apothuaud.selenium.clickclack.web.tests.draft.v1;

import com.apothuaud.selenium.clickclack.web.pages.ClacksCreatePage;
import com.apothuaud.selenium.clickclack.web.pages.ClacksDeletePage;
import com.apothuaud.selenium.clickclack.web.pages.ClacksListPage;
import com.apothuaud.selenium.common.TestSet;
import org.testng.Assert;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import java.io.IOException;

public class ClacksDeletePageIntegrationTestSet extends TestSet {

    // PASSED

    private String newClackId;

    private String getNewClackId() {
        return newClackId;
    }

    private void setNewClackId(String newClackId) {
        this.newClackId = newClackId;
    }

    @BeforeMethod
    public void beforeTest() throws IOException {
        new ClacksCreatePage(getDriver(), getEnv())
                .openPage()
                .createEmpty();
        setNewClackId(new ClacksListPage(getDriver(), getEnv())
                .getLastClackId());
    }

    // 1. From Delete page I can go to Clacks page
    @Test(
            description = "I can navigate to Clacks page from Delete page",
            groups = { "int", "dev", "rec", "prod" }
    )
    public void testDeletePageToListPage(){
        new ClacksDeletePage(getDriver(), getEnv(), getNewClackId())
                .openPage()
                .gotoListPage();
        Assert.assertEquals(getDriver().getCurrentUrl(), new ClacksListPage(getDriver(), getEnv()).getUrl());
    }
}
