# c2-education
## auto_auditor.js
### Introduction
At C2 Education, students can buy tutoring hours. A typical tutoring session is two hours. Every time a student comes in for a session, the teacher records the number of hours used by the student by hand. The hours used are also recorded electronically by C2's Smart2 system.

The handwritten logs do this non-cumulatively and cumulatively, while electronic logs do this non-cumulatively with a single total number at the end. Some students have gone to tutoring at more than one C2 location. Each electronic student record is grouped first by location and then by date. Each handwritten student record is grouped only by date.

#### Sample handwritten log

| Date | Cumulative Hours | Daily Hours |
| --- | --- | --- |
| January 1 | 2 | 2 |
| January 2 | 4 | 2 |
| January 3 | 6 | 2 |

#### Sample electronic log

Location: Livingston

| Date | Hours |
| --- | --- |
| January 1 | 2 |
| January 3 | 2 |

Livingston total: 4 hours

---
Location: Denville

| Date | Hours |
| --- | --- |
| January 2 | 2 |

Denville total: 2 hours

---

All locations total: 6 hours

From time to time, C2 Education would have a staff member audit the logs to make sure they match up. A staff member make sure those match the handwritten logs' cumulative hours. Sometimes those don't match, so the staff member would then have to figure out where the error is.

For the records that don't match, the program lead would have to group the electronic records by date and convert the hours to cumulative on a spreadsheet to match the format of the handwritten logs. The staff member would then have to go through each date to make sure the hours match until a non-match is found. The error is where the non-match is. This task can be very tedious.

### Features
```auto_auditor.js``` speeds up the hours auditing process significantly. Features include:

* *Auto-formatting.* The electronic records are grouped by date and hours are converted to cumulative so the program lead doesn't have to do this by hand.

* *Binary search auditing.* A student comes in for tutoring from January 1 to December 31. The student's cumulative hours on December 31 don't match. The program checks if the hours on July 1 match. If they match, the error is between July 2 and December 31. If not, it's between January 1 and July 1. Let's say they don't match. The program then checks if the records on April 1 match, and so on. This allows the search to be done in O(log *n*) time, which is an improvement from the O(*n*) that was previously used.
