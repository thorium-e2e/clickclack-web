package com.apothuaud.selenium.clickclack.web.pages;

import com.apothuaud.selenium.common.PageObject;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.pmw.tinylog.Logger;
import org.testng.Assert;

import java.util.HashMap;

@SuppressWarnings({"WeakerAccess", "UnusedReturnValue"})
public class ClacksDetailsPage extends PageObject {

    private String clackId;

    public String getClackId() {
        return clackId;
    }

    private void setClackId(String clackId) {
        this.clackId = clackId;
    }

    @FindBy(id = "link-list")
    WebElement btn_list;

    @FindBy(id = "link-update")
    WebElement btn_update;

    public ClacksDetailsPage(WebDriver driver, HashMap env, String clackId) {
        super(driver, env);
        setClackId(clackId);
        setUrl(env.get("domain") +"/clacks/" + getClackId() + "/details");
    }

    public ClacksDetailsPage openPage() {
        System.out.println("Open page: " + getClass().getName() + " with url: " + getUrl());
        getDriver().get(getUrl());
        return this;
    }

    public ClacksDetailsPage gotoListPage() {
        System.out.println("going to ListPage from: " + getClass().getName());
        btn_list.click();
        return this;
    }

    public ClacksDetailsPage gotoUpdatePage() {
        System.out.println("going to updatePage from: " + getClass().getName());
        btn_update.click();
        return this;
    }

    public ClacksDetailsPage verifyContent() {
        Assert.assertTrue(btn_list.isDisplayed());
        Assert.assertTrue(btn_update.isDisplayed());
        return this;
    }

    public ClacksDetailsPage verifyError() {
        Assert.assertTrue(getDriver().getPageSource().contains("API Call Failed"));
        return this;
    }

    public ClacksDetailsPage verifyHeader() {
        Assert.assertEquals(getDriver().getTitle(), "Clack " + getClackId());
        return this;
    }
}
