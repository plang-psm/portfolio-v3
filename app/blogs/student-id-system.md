---
title: 'Student ID System'
date: '2024-09-06'
desc: 'Student ID System to track student basic information.'
---

![Student Id image](/assets/student-id.png)

<br/>
<span style="color: #02ec88; font-weight: bold;">What is it:</span>

The Student Information System was created to give office personnel access to tracking and identifying student information such as the student name, student ID, amount of tardies, advisory room, etc. This program was requested by the attendance counselor who was concerned on how long it was taking to manually find student IDs without their ID card and the lack of data analysis provided. With the school year starting and student IDs being delivered, a tight deadline of 1-2 days was set.
<br/>
<br/>

<span style="color: #02ec88; font-weight: bold;">How it was built:</span>

The system itself was built using Google Forms to enter the student’s ID and the current period which is then displayed on a linked Google Spreadsheet. 

<br/>
The linked spreadsheet has two sheets, one that holds student data and the other for entries from the Google form. The entries sheet includes the student ID, period, and timestamp as well as additional information such as full name, using the VSLOOKUP formula which uses the ID to identify their full name, and the amount of tardies.

<br/>
A search system was also integrated to easily find a student’s information using a dropdown filled with student names. Scripts were created in the Google Apps Script to have the student’s basic information is displayed when a user selects and searches for the student. This system is separate from the form/spreadsheet mentioned above but is linked to automatically update the necessary fields from the original spreadsheet.


<br/>
<span style="color: #02ec88; font-weight: bold;">Struggles:</span>
**Deadline**: To overcome the short deadline, I discussed different outcomes with the counselor to ensure we have a working product available by the deadline. It was agreed upon that we would release a basic version to meet our deadline and continue enhancing the program as we go.

<br/>
**Name/ID input:** One of the requirements requested was to have the google form submit an ID or name to generate an entry but was changed due to issues with data integrity. It was decided that it would be best to use a unique identifier (student id) to reduce risk. 

<br/>
**The ID Card:** During the planning period, I suggested we improve the process of obtaining a student’s ID for those who do not bring their ID or do not know their ID. This resulted in a Student ID Search System which was integrated with the student information system mentioned above. 

<br/>
<span style="color: #02ec88; font-weight: bold;">In Result:</span>
The system is live and working as intended. Staff has seen a significant decrease in time needed to check students in/out, identify student IDs and has improved analyzing important student metrics for reports. The system will expand on the data analysis front in the near future to provide a more detailed report.

<br/>
<span style="color: #02ec88; font-weight: bold;">Tools Used:</span>
<div classname="mt-2 flex justify-between flex-wrap gap-2">
 <div>Google Apps Script</div>
 <div>JavaScript</div>
 <div>Google Forms</div>
 <div>Google Sheets</div>
</div>

<br/>
<span style="font-family: sans; color: #02ec88; font-weight: lighter; font-size: 44px; display: flex; justify-content: center;"> P.S.</span>