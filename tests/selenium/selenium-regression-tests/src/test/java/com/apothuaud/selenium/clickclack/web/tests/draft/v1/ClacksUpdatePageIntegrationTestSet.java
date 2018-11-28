package com.apothuaud.selenium.clickclack.web.tests.draft.v1;

import com.apothuaud.selenium.clickclack.web.pages.*;
import com.apothuaud.selenium.common.TestSet;
import org.testng.Assert;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import java.io.IOException;

public class ClacksUpdatePageIntegrationTestSet extends TestSet {

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

    @Test(
            description = "I can navigate to List page from Details page",
            groups = { "int", "dev", "rec", "prod" }
    )
    public void testDetailsPageToListPage(){
        new ClacksUpdatePage(getDriver(), getEnv(), getNewClackId())
                .openPage()
                .gotoListPage();
        Assert.assertEquals(getDriver().getCurrentUrl(), new ClacksListPage(getDriver(), getEnv()).getUrl());
    }
}
