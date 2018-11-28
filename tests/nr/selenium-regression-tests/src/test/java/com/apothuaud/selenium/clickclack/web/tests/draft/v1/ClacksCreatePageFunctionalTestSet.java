package com.apothuaud.selenium.clickclack.web.tests.draft.v1;

import com.apothuaud.selenium.clickclack.web.pages.ClacksCreatePage;
import com.apothuaud.selenium.common.TestSet;
import org.testng.annotations.Test;

public class ClacksCreatePageFunctionalTestSet extends TestSet {

    // PASSED

    // 1. add fields in create clack form
    @Test(
            description = "I can add fields in create clack form",
            groups = { "fun", "dev", "rec", "prod" }
    )
    public void testCreateFormAddFields(){
        new ClacksCreatePage(getDriver(), getEnv())
                .openPage()
                .verifyNbFields(1)
                .addFields()
                .verifyNbFields(2);
    }

    // 1. remove fields in create clack form
    @Test(
            description = "I can remove fields in create clack form",
            groups = { "fun", "dev", "rec", "prod" },
            dependsOnMethods = { "testCreateFormAddFields" }
    )
    public void testCreateFormRemoveFields(){
        new ClacksCreatePage(getDriver(), getEnv())
                .removeFields()
                .verifyNbFields(1);
    }
}
