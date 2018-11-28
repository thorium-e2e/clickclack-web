package com.apothuaud.selenium.common;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.pmw.tinylog.Logger;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.BeforeSuite;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.concurrent.TimeUnit;

public class TestSet {

    private static HashMap env;

    public static HashMap getEnv() {
        return env;
    }

    private static void setEnv(HashMap env) {
        TestSet.env = env;
    }

    public static WebDriver getDriver() {
        return driver;
    }

    public static void setDriver(WebDriver driver) {
        TestSet.driver = driver;
    }

    private static WebDriver driver;

    @SuppressWarnings("unused")
    @BeforeSuite
    public static void setUp() throws IOException {
        Logger.info("Setting up test suite for Selenium...");
        String JSON_SOURCE_PATH = "src/test/resources/config/env.json";
        File JSON_SOURCE = new File(JSON_SOURCE_PATH);
        setEnv(new ObjectMapper().readValue(JSON_SOURCE, HashMap.class));
        if (OSValidator.isMac()) {
            System.setProperty("webdriver.chrome.driver", "src/test/resources/drivers/chromedriver_mac");
        } else if (OSValidator.isWindows()) {
            System.setProperty("webdriver.chrome.driver", "src/test/resources/drivers/chromedriver_win.exe");
        } else if (OSValidator.isUnix()) {
            System.setProperty("webdriver.chrome.driver", "src/test/resources/drivers/chromedriver_linux.exe");
        }
        setDriver(new ChromeDriver());
        getDriver().manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
    }

    @AfterSuite
    public void cleanUp(){
        driver.manage().deleteAllCookies();
        driver.close();
    }
}
