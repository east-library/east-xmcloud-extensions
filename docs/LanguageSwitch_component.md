# LanguageSwitch component

![LanguageSwitch component](/docs/images/LanguageSwitch.png)

## 概要

This component displays a link to switch to another language version of the currently displayed page.\
If there are multiple versions in different languages, this component displays them side by side, separated by slashes.\
If there is no alternate language version, it will be left blank.

## 導入方法

1. Implement [the README Installation (common to each component)](../README.md#installation-common-to-all-components)
   - No other steps

## Usage

### Basis

1. Drag and drop LanguageSwitch component in Pages to place them
   - It is recommended to place them in common areas such as headers and footers
1. Create alternate language versions of pages as needed

### About the language displayed

- Language names are displayed in the respective language, not in English, because nativeName is used.
  - Example: For a link to switch to Japanese -> "日本語" will be displayed
- Display order of languages is not controlled
