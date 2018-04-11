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


### Functionality

### Ease of Use

## User Research

## Device Support

## Recommendations

## Deliverables

