package com.apothuaud.selenium.clickclack.web.tests.draft.v1;

import com.apothuaud.selenium.clickclack.web.pages.ClacksCreatePage;
import com.apothuaud.selenium.clickclack.web.pages.ClacksDeletePage;
import com.apothuaud.selenium.clickclack.web.pages.ClacksListPage;
import com.apothuaud.selenium.common.TestSet;
import org.testng.Assert;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import java.io.IOException;

public class ClacksDeletePageFunctionalTestSet extends TestSet {

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

    // 1. On Delete page I can refuse delete
    @Test(
            description = "On Delete page I can refuse delete",
            groups = { "fun", "dev", "rec", "prod" }
    )
    public void testDeletePageRefuseToDelete() throws IOException {
        new ClacksDeletePage(getDriver(), getEnv(), getNewClackId())
                .openPage()
                .refuse();
        Assert.assertTrue(new ClacksListPage(getDriver(), getEnv())
                .verifyPresenceOfClackById(getNewClackId())
        );
    }

    // 1. On Delete page I can confirm delete
    @Test(
            description = "On Delete page I can confirm delete",
            groups = { "int", "dev", "rec", "prod" }
    )
    public void testDeletePageConfirmToDelete() throws IOException {
        new ClacksDeletePage(getDriver(), getEnv(), getNewClackId())
                .openPage()
                .accept();
        Assert.assertFalse(new ClacksListPage(getDriver(), getEnv())
                .verifyPresenceOfClackById(getNewClackId())
        );
    }
}
