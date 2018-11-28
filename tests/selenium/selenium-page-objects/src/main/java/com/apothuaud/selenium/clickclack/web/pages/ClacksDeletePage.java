package com.apothuaud.selenium.clickclack.web.pages;

import com.apothuaud.selenium.common.PageObject;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.pmw.tinylog.Logger;
import org.testng.Assert;

import java.util.HashMap;

@SuppressWarnings("UnusedReturnValue")
public class ClacksDeletePage extends PageObject {

    private String clackId;

    private String getClackId() {
        return clackId;
    }

    private void setClackId(String clackId) {
        this.clackId = clackId;
    }

    @FindBy(id = "confirm-delete-label")
    WebElement lbl_confirmDelete;

    @FindBy(xpath = "/html/body/p[3]/a[1]/button")
    WebElement btn_delete;

    @FindBy(className = "button-create")
    WebElement btn_create;

    @FindBy(xpath = "//*[@id=\"link-back\"]")
    WebElement lnk_listPage;

    public ClacksDeletePage(WebDriver driver, HashMap env, String id) {
        super(driver, env);
        setClackId(id);
        setUrl(getEnv().get("domain") + "/clacks/" +  getClackId() + "/delete_confirm");
    }

    public ClacksDeletePage openPage() {
        System.out.println("Open page: " + getClass().getName() + " with url: " + getUrl());
        getDriver().get(getUrl());
        return this;
    }

    public ClacksDeletePage verifyHeader() {
        Assert.assertEquals(getDriver().getTitle(), "Delete Clack " + getClackId());
        return this;
    }

    public ClacksDeletePage verifyContent() {
        Assert.assertTrue(lbl_confirmDelete.isDisplayed());
        Assert.assertTrue(btn_create.isDisplayed());
        Assert.assertTrue(btn_delete.isDisplayed());
        return this;
    }

    public ClacksDeletePage gotoListPage() {
        System.out.println("going to ListPage from: " + getClass().getName());
        lnk_listPage.click();
        return this;
    }

    public ClacksDeletePage refuse() {
        System.out.println("Refuse delete in page: " + getClass().getName());
        btn_delete.click();
        return this;
    }

    public ClacksDeletePage accept() {
        System.out.println("Accept delete in page: " + getClass().getName());
        btn_create.click();
        return this;
    }
}
