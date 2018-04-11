This proposal should include: 

objectives/purpose of the redesign
state of the current site
accessibility audit
mobile friendliness
performance (how quickly does it load?)
functionality (does it work?)
ease of use (is it pleasant to use?
user research (who are expected users? What do they want to accomplish?)
device support necessary
recommendations
deliverables- each with description & acceptance terms
Use the tools and strategies we've learned so far to do this research. You will not be responsible for completing all of your recommendations for the redesign. This will be a document to demonstrate your understanding of the domain.

# Website Redesign Proposal for Florida Energy Systems Consortium
<http://floridaenergy.ufl.edu/>

## Objective of Redesign
To create a more user friendly and responsive website across devices that will visit the page. Ease of use and quick navigation to find content is desired.

## State of the Current Site
The current website uses a busy layout for the homepage:
* cycling images in the header
* multiple navigation bars (with some overlapping links and some unique)
* more than five different fonts
* more than five different font colors
* styles change on linked pages

W3C Validator:
34 Errors, 25 warnings
Many errors are undefined entity references
Many warnings are "&" characters occurring as data while in a delimiter

### Accessibility Audit
#### Google Accessibility Developer Tools Audit
Score: 59%
Some elements fail the following criteria:
- image elements do not have "alt" attributes
- not all elements have discernable names and do not describe contents well, impacting screen readers
- low contrast text makes it difficult or impossible for many users to read

#### WAVE Web Accessibility Evaluation Tool
Errors (11):
- 3 missing alternative text
- 6 linked images missing alternative text
- 1 missing label
- 1 empty heading

Alerts (7):
- 1 suspicious link text
- 4 redundant links
- 1 link to PDF document
- 1 Noscript element

Features (17):
- 16 linked images with alt text
- 1 form label

HTML5 and ARIA (1):
- 1 search


### Mobile Friendliness

### Performance
#### Google Accessibility Developer Tools Audit
Score: 13%
First meaningful paint: 9,480ms
First Interactive (beta): 19,250ms
Consistently Interactive (beta): 20,360ms

Perceptual Speed Index: 12,031ms (13)
Estimated Input Latency: 521ms

Opportunities to increase optimization:
Reduce render-blocking scripts - 7,550ms
Reduce render-blocking stylesheets - 6,460ms
Serve images in next-gen formats - 2,850ms/314KB
Keep server response times low - 1,200 ms (for root doc to get the first byte)
Optimize images - 1,000ms/110KB
Unused CSS rules - 900ms/99KB
Offscreen images - 830ms/91KB
Properly size images - 390ms/42KB

Diagnostics:
Uses inefficient cache policy on static assets: 49 assets found
JavaScript boot-up time is too high: 3,180ms

#### WebPagetest.org
Grades: | 
----- | -----
First Byte Time | F
Keep-alive Enabled | A
Compress Transfer | A
Compress Images | C
Cache static content | F
Effective use of CDN | N/A

Performance Test Results | 
----- | -----
Load Time | 4.577s
First Byte | 1.180s
Start Render | 2.200s
Speed Index | 2994
First Interactive (beta) | >4.479s

Document Completed in 4.577s with 60 Requests in 1,254KB; and Fully Loaded in 4.663s with 61 Requests in 1255KB

### Functionality
Current website functions for users with no impairments. This site scored a 59% for Accessibility and has missing functionality for screen readers. Search function works, but output is not easily evaluated. Links work properly, but there are redundancies. Page layout changes on certain pages and is not consistent.

### Ease of Use
Current website is visually confusing and possibly unusable for some visual disabilites based on testing. Navigation is overwhelming, with two separate navigation bars, some links are repeated and others are unique. There are inconsistencies across both and it is unintuitive. Design aesthetics are not visually pleasing in general - multiple fonts and conflicting colors.

## User Research
User Base Attribute | My User Base | Impact | Notes
------ | ------- | ------- | -------
Age and age groups | Professionals, possibly students (most likely high school age and up) | M | 
Personal life-style | Business, researching, education-based | M | 
Gender | Male and female | L | 
Language | Most likely english as a first language | L | 
Education | Most likely GED and higher | M | 
Learning preferences | Visual and readability | H | Text should be accessible for screen readers
Work attributes | Many users will be visiting for work purposes, information pertaining to their business | H | 
Expectations | Based on what information they are searching for | H | Should be intuitive to find information
Existing knowledge | Familiarity the subject and terms| M | 
Web and computer experience | Familiar with the subject and terms | M | 
On what device they will read it | Mobile, tablet, desktop | H | 
Internet connection speed | Variable | H | Should keep image sizes managable for slower speeds
User's location | Unknown | M | Users could be viewing this site for research purposes from locations outside of the US
Place where the page is read | For professional and academic purposes | H |
Why users seek the content | Informational purposes | H | 
Importance of the content to them | They are seeking this content out | H | 
How they found the page | Directed by a contact, SEO of the website, prior knowledge of the organization | H | 
When it is read | Anytime of day | L | 

## Device and Browser Support
### Screen Testing
Device | Resolution | Screen Size | Orientation | Notes
------- | ------- | ------- | ------- | -------
Samsung - S24D590L | 1920 x 1080 | 23.6" | Landscape | 
Dell - unknown older model | 1280 x 1024 | 19" | Landscape | 
Acer Aspire e15 | 1920 x 1080 | 15.6" | Landscape | 
iPhone 6S | 1334 x 750 | 4.7" | Landscape and portrait | 
iPhone 5c | 1136 x 640 | 4" | Landscape and portrait | 
Amazon Fire 7 | 1024 x 600 | 7" | Landscape and portrait | 

#### Screen Testing Outcomes


### Browser Testing
Browser | Testing Notes
------ | -----
Chrome and Chrome for iOS | 
Safari for iOS | 
Safari Reader View | 
Opera for Windows 10 | 
Mozilla Firefox Reader View | 
Microsoft Edge and Microsoft Edge for iOS | 
Microsoft Edge Reader View | 
Amazon Silk | 


#### Browser Testing Outcomes


## Recommendations

## Deliverables

