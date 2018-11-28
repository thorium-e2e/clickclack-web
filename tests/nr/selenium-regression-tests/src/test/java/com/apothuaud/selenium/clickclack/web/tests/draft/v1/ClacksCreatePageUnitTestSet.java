package com.apothuaud.selenium.clickclack.web.tests.draft.v1;

import com.apothuaud.selenium.clickclack.web.pages.ClacksCreatePage;
import com.apothuaud.selenium.common.TestSet;
import org.testng.annotations.Test;


public class ClacksCreatePageUnitTestSet extends TestSet {

    // PASSED

    // 1 Clacks create page open and have form
    @Test(
            description = "I can open clacks create page and see header and content",
            groups = { "unit", "dev", "rec", "prod" }
    )
    public void testOpenCreateClackPage(){
        new ClacksCreatePage(getDriver(), getEnv())
                .openPage()
                .verifyHeader()
                .verifyContent()
        ;
    }
}
