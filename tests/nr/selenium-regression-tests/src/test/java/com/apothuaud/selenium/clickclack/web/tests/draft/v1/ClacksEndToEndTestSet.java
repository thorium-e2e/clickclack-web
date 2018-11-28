package com.apothuaud.selenium.clickclack.web.tests.draft.v1;

import com.apothuaud.selenium.clickclack.web.pages.*;
import com.apothuaud.selenium.common.TestSet;
import org.testng.annotations.Test;

import java.io.IOException;

public class ClacksEndToEndTestSet extends TestSet {

    // PASSED

    private String clackId;

    private String getClackId() {
        return clackId;
    }

    private void setClackId(String clackId) {
        this.clackId = clackId;
    }

    @Test(
            description = "I can CRUD clack",
            groups = { "e2e", "dev", "rec", "prod" }
    )
    public void testCRUDClack() throws IOException {
        new ClacksCreatePage(getDriver(), getEnv())
                .openPage()
                .createEmpty();
        setClackId(new ClacksListPage(getDriver(), getEnv())
                .getLastClackId());
        new ClacksDetailsPage(getDriver(), getEnv(), getClackId())
                .openPage()
                .verifyContent();
        new ClacksUpdatePage(getDriver(), getEnv(), getClackId())
                .openPage()
                .addFields()
                .submit();
        new ClacksListPage(getDriver(), getEnv())
                .openPage()
                .gotoDeleteLastClack();
        new ClacksDeletePage(getDriver(), getEnv(), getClackId())
                .accept();
    }
}
