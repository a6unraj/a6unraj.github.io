---
layout: post
title: "Make available SAP GUI report on CRM Web UI"
comments: true
description: "Make available SAP GUI report on CRM Web UI"
keywords: "SAP CRM"
---

I have a GUI report (standard or z-report) and want it to be available in WebUI. <br/>

![img7](https://a6unraj.com/sap/assets/images/img7.jpg)

###### STEP 1: Create T-code <br/>

T-code has to be created for the report. In the tcode setup(SE93) enable SAP GUI for HTML.
![img8](https://a6unraj.com/sap/assets/images/img8.jpg)

###### STEP 2 : Transaction Launcher Setup <br/>
Configure transaction launcher using wizard and generate launch transaction ID.

![img9](https://a6unraj.com/sap/assets/images/img9.jpg)
![img10](https://a6unraj.com/sap/assets/images/img10.jpg)
![img11](https://a6unraj.com/sap/assets/images/img11.jpg)
![img12](https://a6unraj.com/sap/assets/images/img12.jpg)
Use the T-code of your Z-report in the below step : The below Tcode is taken for example, so don’t forget to change the Tcode here
![img13](https://a6unraj.com/sap/assets/images/img13.jpg)
![img14](https://a6unraj.com/sap/assets/images/img14.jpg)
After the completion of the wizard setup verify that the transaction launcher setup is available under the Copy/Delete launch transactions
![img15](https://a6unraj.com/sap/assets/images/img15.jpg)
![img16](https://a6unraj.com/sap/assets/images/img16.jpg)
![img17](https://a6unraj.com/sap/assets/images/img17.jpg)
![img18](https://a6unraj.com/sap/assets/images/img18.jpg)
![img19](https://a6unraj.com/sap/assets/images/img19.jpg)

###### STEP 3 : Navigation Bar Profile Setup <br/>
Goto Navigation Bar profile setup and Create a logical link for the above created Transaction Launch ID(pass Transaction launch ID to the parameter below)
![img20](https://a6unraj.com/sap/assets/images/img20.jpg)
![img21](https://a6unraj.com/sap/assets/images/img21.jpg)

###### STEP 4: Workcenter Group setup <br/>
Identity where the links have to be made available in CRM web UI.
For example I want the links to be added in the below 2 places- in menu and under search section,
![img22](https://a6unraj.com/sap/assets/images/img22.jpg)

The workcenter ID for Accounts & Products is SRV-MD.
![img23](https://a6unraj.com/sap/assets/images/img23.jpg)

The workcenter further contains different WorkCenter Link Groups and we need to add the logical link to one of the relevant workcenter link group.
MD-BP-SR is the workcenter link group for Business Partner Search, so we have to use that to bring the link under search section
![img24](https://a6unraj.com/sap/assets/images/img24.jpg)

Insert the logic link to the work center link group id
![img25](https://a6unraj.com/sap/assets/images/img25.jpg)

###### STEP 5: Navigation Bar Profile Setup for business roles <br/>
Identify the business roles for which the links of the report have to be shown.
![img26](https://a6unraj.com/sap/assets/images/img26.jpg)

Find the Navigation Bar profile linked to these business role to perform the Navigation Bar Profile Setup
For ex : Y_BR_DA_MAIN-CRM - Data Maintainer
![img27](https://a6unraj.com/sap/assets/images/img27.jpg)
![img28](https://a6unraj.com/sap/assets/images/img28.jpg)

Make available the link in the Navigation Bar Profile setup linked to the Business Role
![img29](https://a6unraj.com/sap/assets/images/img29.jpg)

After which the link will be available under the Accounts & Products menu, 
![img30](https://a6unraj.com/sap/assets/images/img30.jpg)
And also under work center area
![img31](https://a6unraj.com/sap/assets/images/img31.jpg)
Clicking the link will open the report in the web UI frame
![img32](https://a6unraj.com/sap/assets/images/img32.jpg)

<div class="divider"></div>
