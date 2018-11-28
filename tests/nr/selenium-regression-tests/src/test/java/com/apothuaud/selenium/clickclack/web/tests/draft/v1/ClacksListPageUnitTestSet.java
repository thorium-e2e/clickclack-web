package com.apothuaud.selenium.clickclack.web.tests.draft.v1;

import com.apothuaud.selenium.clickclack.web.pages.ClacksListPage;
import com.apothuaud.selenium.common.TestSet;
import org.testng.annotations.Test;

public class ClacksListPageUnitTestSet extends TestSet {

    // PASSED

    // 1 Clacks list page open and have list
    @Test(
            description = "I can open clacks page and see header and content",
            groups = { "unit", "dev", "rec", "prod" }
    )
    public void testOpenClacksPage(){
        new ClacksListPage(getDriver(), getEnv())
                .openPage()
                .verifyHeader()
                .verifyContent()
        ;
    }
}
