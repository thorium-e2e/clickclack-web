package com.apothuaud.selenium.clickclack.web.tests.draft.v1;

import com.apothuaud.selenium.clickclack.web.pages.*;
import com.apothuaud.selenium.common.TestSet;
import org.testng.Assert;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import java.io.IOException;

public class ClacksListPageIntegrationTestSet extends TestSet {

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

    // 1 From Clacks list page I can go to Home, Create Clack, Clack Details and Update Clack pages
    @Test(
            description = "I can navigate to Home page from List page",
            groups = { "int", "dev", "rec", "prod" }
    )
    public void testListPageToHomePage(){
        new ClacksListPage(getDriver(), getEnv())
                .openPage()
                .gotoHomePage();
        Assert.assertEquals(getDriver().getCurrentUrl(), new HomePage(getDriver(), getEnv()).getUrl());
    }

    @Test(
            description = "I can navigate to Create page from List page",
            groups = { "int", "dev", "rec", "prod" }
    )
    public void testListPageToCreatePage(){
        new ClacksListPage(getDriver(), getEnv())
                .openPage()
                .gotoCreatePage();
        Assert.assertEquals(getDriver().getCurrentUrl(), new ClacksCreatePage(getDriver(), getEnv()).getUrl());
    }

    @Test(
            description = "I can navigate to Details page from List page",
            groups = { "int", "dev", "rec", "prod" }
    )
    public void testListPageToDetailsPage(){
        new ClacksListPage(getDriver(), getEnv())
                .openPage()
                .gotoDetailsLastClack();
        Assert.assertEquals(getDriver().getCurrentUrl(), new ClacksDetailsPage(getDriver(), getEnv(), getNewClackId()).getUrl());
    }

    @Test(
            description = "I can navigate to Update page from List page",
            groups = { "int", "dev", "rec", "prod" }
    )
    public void testListPageToUpdatePage(){
        new ClacksListPage(getDriver(), getEnv())
                .openPage()
                .gotoUpdateLastClack();
        Assert.assertEquals(getDriver().getCurrentUrl(), new ClacksUpdatePage(getDriver(), getEnv(), getNewClackId()).getUrl());
    }
}
