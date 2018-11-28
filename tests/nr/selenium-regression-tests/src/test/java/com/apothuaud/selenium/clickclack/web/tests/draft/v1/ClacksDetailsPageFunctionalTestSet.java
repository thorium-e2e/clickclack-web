package com.apothuaud.selenium.clickclack.web.tests.draft.v1;

import com.apothuaud.selenium.clickclack.web.pages.ClacksDetailsPage;
import com.apothuaud.selenium.common.TestSet;
import org.testng.annotations.Test;

public class ClacksDetailsPageFunctionalTestSet extends TestSet {

    // PASSED

    // 1. Details page with bad id is 404 page
    @Test(
            description = "Error clack not found on details page",
            groups = { "fun", "dev", "rec", "prod" }
    )
    public void testErrorClackNotFound() {
        new ClacksDetailsPage(getDriver(), getEnv(), "er45tgjlkfh565653ezsfkjh")
                .openPage()
                .verifyError();
    }
}
