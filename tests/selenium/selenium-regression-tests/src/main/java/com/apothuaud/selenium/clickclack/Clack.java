package com.apothuaud.selenium.clickclack;

import java.util.HashMap;
import java.util.Map;

public class Clack {

    Map<String, String> attributes;

    public Clack(Map<String, String> attrs) {
        attributes = attrs;
    }

    public Clack() {
        attributes = new HashMap<String, String>();
    }

    public Map<String, String> getAttributes() {
        return attributes;
    }

    public void setAttributes(Map<String, String> attributes) {
        this.attributes = attributes;
    }

    public String getID() {
        return attributes.get("id");
    }
}
