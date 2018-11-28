package com.apothuaud.selenium.common;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import java.util.HashMap;

public class PageObject {

    public HashMap getEnv() {
        return env;
    }

    public WebDriver getDriver() {
        return driver;
    }

    public void setDriver(WebDriver driver) {
        this.driver = driver;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public void setEnv(HashMap env) {
        this.env = env;
    }

    private HashMap env;
    private WebDriver driver;
    private String url;

    public PageObject(WebDriver driver, HashMap env){
        setEnv(env);
        setDriver(driver);
        PageFactory.initElements(getDriver(), this);
    }
}
