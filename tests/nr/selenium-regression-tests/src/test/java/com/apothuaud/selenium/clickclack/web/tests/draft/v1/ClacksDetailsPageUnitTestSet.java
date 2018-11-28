package com.apothuaud.selenium.clickclack.web.tests.draft.v1;

import com.apothuaud.selenium.clickclack.web.pages.ClacksDetailsPage;
import com.apothuaud.selenium.clickclack.web.pages.ClacksCreatePage;
import com.apothuaud.selenium.clickclack.web.pages.ClacksListPage;
import com.apothuaud.selenium.common.TestSet;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import java.io.IOException;

public class ClacksDetailsPageUnitTestSet extends TestSet {

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

    // 1 Clacks details page open and have attributes
    @Test(
            description = "I can open clacks details page and see header and content",
            groups = { "unit", "dev", "rec", "prod" }
    )
    public void testOpenClackDetailsPage(){
        new ClacksDetailsPage(getDriver(), getEnv(), getNewClackId())
                .openPage()
                .verifyHeader()
                .verifyContent()
        ;
    }
}
