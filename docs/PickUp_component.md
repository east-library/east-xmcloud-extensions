# PickUp component

## Overview

This component selects one or more of the site's pages and displays them side by side.\
It is suitable for displaying recommended and related article pages side by side.

## Installation

1. Implement [the README Installation (common to each component)](../README.md#installation-common-to-all-components)
1. Create a PickUp Folder (template:**/sitecore/templates/Project/East Extensions/Components/Pick Up Folder**) in the Data folder of the site
1. Specify the pages you want to select in the Source field of the **PickUpItem** field of the PickUp template(**/sitecore/templates/Project/East Extensions/Components/Pick Up**) by using a Sitecore query, etc.
   - As a default value, you can select pages that uses the News Page template on the site

## Usage

### Basis

1. Drag and drop PickUp component in Pages to place them
1. Create a PickUp item in the Data folder of the page or site
1. Set heading and link
1. Open the PickUp item in the Content Editor, select the pages you want to view and save it

### About News Page Template

- The **/sitecore/templates/Project/East Extensions/News Page** template has been created as a sample of the page data structure
  - Thumbnail, summary, and publication date can be set
  - If you want to use it as it is, move it to the **/sitecore/templates/Project/{your site}** folder
  - **Note**:**/sitecore/templates/Project/{your site}/Page** Please re-inherit the template\
    Also, please break broken links
