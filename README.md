# Sitecore XM Cloud Extension Components

[日本語版 README](README_ja-JP.md)

## Overview

This repository provides components created independently using Sitecore XM Cloud's JSS.\
You can use it as is or modify it to suit your own project.

## Precautions for use

The components in this repository have been tested to work only with specific versions of JSS.\
If you are using a version that has not been tested, please follow the official Sitecore changelog and documentation to make the necessary modifications.\
Please note that **we do not guarantee that the code or Sitecore items will work if modified.**

### Operation Confirmation Table

On the left side of the table below are the versions of the components in this repository.\
On the right is the version of JSS that was tested with those components.

| Components Version | JSS Version |
| ------------------ | ----------- |
| 1.0.0 - 1.1.0      | 22.0.0      |

## Components Overview

Currently, this repository has the following components.

- [Breadcumb](docs/Breadcrumb_component.md)
  - Displays the hierarchy from the current page to Home
- [Hero](docs/Hero_component.md)
  - Display the image in full width and place rich text and link over it
- [PickUp](docs/PickUp_component.md)
  - Select one or more pages of the site and view their thumbnails and summaries side by side
- [Expand](docs/Expand_component.md)
  - A component that can expand/store rich text

## Installation (common to all components)

For detailed usage of each component, please refer to the documentation in [**docs**](docs).

1. Download the tsx files for the components you will use from the **/src/frontend/src/components** directory and place them in the **components** directory of your project
   - If the line feed code is LF, correct it to CRLF
1. Download the following files from the **/src/frontend/src/assets** directory and place them on the same level of your project's **assets** directory
   - **main.scss**
     - Add `@import 'eastExtensions'` if changes have already been made
   - **eastExtensions/index.scss**
     - Remove or comment out `@import` for unused components
   - **eastExtensions/\_{components used}.scss**
1. Download the zip file of the components you want to use from the **/src/items** directory and install it as a package on the Sitecore desktop
   - If there is an overwrite confirmation (**Item being installed already exists in database.**) during installation, select **Merge->Merge** for all
1. Make the components available in the **Presentation** of the site
   1. Add **Available Renderings** to **/sitecore/content/{your tenant}/{your site}/Presentation/Available Renderings** with any name(EastExtensions etc.)
   1. Add the components to the **Rendrings** field
   1. Add the components Variants to **/sitecore/content/{your tenant}/{your site}/Presentation/Headless Variants**
   1. Create a **Default** variant for the above child item
1. Configure settings specific to each component
1. (Optional) Edit tsx files, scss files, Sitecore templates, etc. to your preferred structure

## When problems occur

If you encounter a problem or find a bug while using components in this repository, please create a GitHub Issue.

1. Click on [the Issues tab](https://github.com/east-library/XM-Cloud-Components/issues)
2. Click on the “New Issue” button
3. Fill in the problem details
   - **For bug reports:** Please include a detailed description of the problem, steps to reproduce, expected results, actual results, etc.
   - **For Feature Requests:** Please provide a detailed description of the proposed feature(s), rationale, expected benefits, etc.
4. If possible, please attach additional information to help us identify the problem, such as screenshots or log files

We look forward to your feedback.\
Please help us improve the components.

[Create an Issue](https://github.com/east-library/XM-Cloud-Components/issues/new)

## Author

- Nagata(永田)
  - Affiliation: EAST Co.,Ltd.

## License

This repository is released under the MIT License. For more information, see [LICENSE file](LICENSE).

Thank you!
