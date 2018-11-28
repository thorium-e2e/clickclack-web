package com.apothuaud.selenium.clickclack.web.pages;

import com.apothuaud.selenium.common.PageObject;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.pmw.tinylog.Logger;
import org.testng.Assert;

import java.util.HashMap;
import java.util.List;

@SuppressWarnings("unused")
public class HomePage extends PageObject {

    @FindBy(id = "title")
    WebElement h_title;

    @FindBy(id = "intro")
    WebElement div_intro;

    @FindBy(id = "content")
    WebElement div_content;

    @FindBy(id = "content-list")
    WebElement div_contentList;

    @FindBy(className = "content-list-item")
    List<WebElement> li_contentItems;

    @FindBy(id = "link-list-clacks")
    WebElement lnk_listClacks;

    @FindBy(id = "content-info")
    WebElement div_contentInfo;

    public HomePage(WebDriver driver, HashMap env) {
        super(driver, env);
        setUrl(getEnv().get("domain") + "/");
    }

    public HomePage openPage() {
        System.out.println("Open page: " + getClass().getName() + " with url: " + getUrl());
        getDriver().get(getUrl());
        return this;
    }

    public HomePage verifyHeader() {
        Assert.assertEquals(getDriver().getTitle(), "ClickClack");
        return this;
    }

    public HomePage verifyContent() {
        Assert.assertTrue(h_title.isDisplayed());
        Assert.assertTrue(div_intro.isDisplayed());
        Assert.assertTrue(div_content.isDisplayed());
        Assert.assertTrue(div_contentList.isDisplayed());
        Assert.assertTrue(lnk_listClacks.isDisplayed());
        Assert.assertTrue(div_contentInfo.isDisplayed());
        return this;
    }

    public HomePage gotoListPage() {
        System.out.println("going to ListPage from: " + getClass().getName());
        lnk_listClacks.click();
        return this;
    }
}
