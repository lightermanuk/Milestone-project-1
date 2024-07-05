## **During Development Testing**
During the development process, I was manually testing in the following ways:-

1. Manually tested each element for appearance and responsiveness with a simulated live server extension in VSCode.
 
### ***Manual Testing:***
* During testing, I used four different browsers to ensure cross-compatibility. The desktop browsers used by myself were:

  1. Chrome
  2. Edge
  3. Opera
  4. Firefox

* I then used the devtools to simulate different screen sizes/devices.
* In addition to this, I tested using an iPhone 12 Pro Max using safari. There were reported no issues or bugs, only font changes.

### ***Bugs,Fixes, Automated validators testing.

Below is a list of bugs I found during the development process by testing myself via the live server extension on VSCode. Also it contains the automated validation errors and warnings.

1. **Intended Outcome** - Same font used in all browsers (font-family: fantasy)
    * ***Issue Found:*** 
        * Font changed Firefox to a different font for 'fantasy' as Chrome, Edge and Opera .
    * ***Solution Used:*** 
        * fallback used "Lucida Console". I also realised the html footer didnt have a class applied so I added class="footer" so it is uniform with Firefox fallback ("Lucida Console") . however font didnt change on mobile devices.
2. **Intended Outcome** - Weather showing below Title on all screen sizes on main background 
    * ***Issue Found:*** 
        * Weather showing in blurb box on walks.html and tourist attractions page
    * ***Solution Used:***    
        * positioned reasons class under weather to keep the weather out of blurb background.
3. **Intended Outcome** - A fully responsive Nav bar suited to all screen sizes.
    * ***Issue Found:*** 
        * On smaller screen sizes, the walks.html minimised menu was unreponsive.
    * ***Solution Used***:
        *   yet to be resolved, despite copying code from working pages and simpliying code. 
4. **Intended Outcome** - Weather icon showing on all pages
    * ***Issue Found:*** 
        * Not showing on History.html
    * ***Solution Used:*** 
        * I decided the weather was not required on the history page as it was not relevent.
5. **Intended Outcome** - blurb class uniform using custom css file.
    * ***Issue Found:*** 
        * blurb class background not pulling through for blurb.
    * ***Solution Used:***
        * put style in html for each page seperately. Class background then worked in full.
6. **Intended Outcome** - fonts all the same on all browsers
    * ***Issue Found:***
        * Opera & Safari using completely different fonts.
    * ***Solution Used:***
        * Google font . 'Anton' implemented to replace fantasy.  Font is uniform now, apart form on Safari of which the subject heading and reasons classes didnt change but the blurb is also 'Anton'. 
7. **Intended Outcome** - W3 HTML validator to show no errors for index.html
    * ***Issue Found:***
        * 5 Warnings: 'Section lacks heading. Consider using h2-h6 elements to add identifying headings to all sections, or else use a div element instead for any cases where no heading is needed.   '
    * ***Solution Used:***
        * This is just a warning and there is no need for a h2 - h6 element.  I added the section elements for semantic purposes to define the content.  Div adding would make it less easy to follow for another developer, there are enough divs.
8. **Intended Outcome** - W3 HTML validator to show no errors for history.html
    * ***Issue Found:***
        * 5 Warnings: 'Section lacks heading. same as above, ignored.  Validator also found 2 errors; 1 =The frameborder attribute being obselete on an iframe. 2 = At a space was not allowed in path segment.  
    * ***Solution Used:***
        * 1 = Deleted the frame border attribute as the value was set at 0 anyway. 2 = Added an underscore to filename instead of a space, despite the image working on browser. "portland-5 rings-more-zoom.jpg"    
9. **Intended Outcome** - W3 HTML validator to show no errors for walks.html
    * ***Issue Found:***
        * 5 Warnings: 'Section lacks heading. same as above, ignored.  Validator also found 1 warning a potentially bad value about script integrity attribute as it should be a multiple of 4 bytes.
    * ***Solution Used:***
        * I think this is a validation error as column 199 it relates to, is empty and the integrity is a sha reference and must be set as anoymous.
10.**Intended Outcome** - W3 HTML validator to show no errors for touristattractions.html
    * ***Issue Found:***
        * 2 Warnings: 'Section lacks heading. same as above, ignored. 
    * ***Solution Used:***
        *  There are plenty of divs and the simpler the better.  Sections elements applied serve the semantic element purpose appropriately.

    ### **Validators used**

#### ***HTML*** - https://validator.w3.org/nu/

#### ***CSS*** - https://jigsaw.w3.org/css-validator/

* CSS page tested, no issues found via text input.

![CSS validator badge](https://jigsaw.w3.org/css-validator/images/vcss)


[return to README.md](README.md)
