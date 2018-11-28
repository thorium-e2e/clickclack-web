package com.apothuaud.selenium.clickclack.web.tests.draft.v1;

import com.apothuaud.selenium.clickclack.web.pages.HomePage;
import com.apothuaud.selenium.common.TestSet;
import com.aventstack.extentreports.testng.listener.ExtentITestListenerClassAdapter;
import org.testng.annotations.Listeners;
import org.testng.annotations.Test;

public class HomePageUnitTestSet extends TestSet {

    // PASSED

    // 1 Home page open and have introduction, content list and clacks link
    @Test(
            description = "I can open home page and see header and content",
            groups = { "unit", "dev", "rec", "prod" }
    )
    public void testOpenHomePage() {
        new HomePage(getDriver(), getEnv())
                .openPage()
                .verifyHeader()
                .verifyContent()
        ;
    }
}
