<textarea id="source">

  <h1 class="slide-header">Introduction to CSS</h1>
  
  <span id=time-estimate class="color-grey-500">20 mins</span>
  
  <p id="lesson-description">
    If HTML is the raw ingredients for your website, CSS is the recipe that determines how it’s all put together (and makes it look good in the process). In this lesson, we’ll learn what CSS is, why it’s useful, and how it works.
  </p>
  
  <h5 id="topics-header" class="color-grey-500">Topics</h5>
  
  How CSS Works
  
  <hr>
  
  CSS Syntax
  
  <hr>
  
  <a href="https://ga-create-api.s3.amazonaws.com/studyguides/html-meet-css-12491d.pdf" target="_blank" download="introduction_to_css_study_guide.pdf" class="ant-btn" data-trackable="true" data-track-category="study guide" data-track-section="lesson page" data-track-action="download study guide"><span role="img" class="anticon"><svg viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><g class="download_svg__nc-icon-wrapper"><path d="M8 12c.3 0 .5-.1.7-.3L14.4 6 13 4.6l-4 4V0H7v8.6l-4-4L1.6 6l5.7 5.7c.2.2.4.3.7.3z"></path><path data-color="color-2" d="M1 14h14v2H1z"></path></g></svg></span><span> Download Study Guide</span></a>
  
  ---
  
  <h1 class="slide-header">Learning Objectives</h1>
  
  <p>By the end of this lesson, you'll be able to:</p>
  
  <ul>
    <li>Describe what CSS is and why it’s important to web design.</li>
    <li>Explain how CSS interacts with HTML to visually render a webpage.</li>
    <li>Recognize the structure of CSS rules.</li>
  </ul>
  
  ---
  
  <h1 class="slide-header">Let's Get To Work</h1>
  
  While practicing CSS, you’ll work with your first client, Hannah, a mural artist whose pieces are popular on social media. She heard that you’ve been upgrading your website skills and has asked you to revise her home page. By the end of this unit, you’ll make a site so fresh that all of Hannah’s followers will be asking for your help, too!
  
  Here’s how it looks right now:
  
  ![link text](https://s3.amazonaws.com/ga-instruction/assets/intro-tech/css-unit-assets/lesson-2-starter.jpg)
  
  ---
  
  <h1 class="slide-header">Hannah's HTML</h1>
  
  Hannah shared her code with you, and she’s stripped it down to just the HTML for you to play around.
  
  This is what we’re working toward:
  
  ![link text](https://s3.amazonaws.com/ga-instruction/assets/intro-tech/css-unit-assets/lesson-5-final.jpg)
  
  ---
  
  
  <h1 class="slide-header">In the Beginning (of the Internet)</h1>
  <!--
    WISTIA EXAMPLE. REPLACE 11dit621rx with the id
  -->
  <div class="wistia_embed wistia_async_bblwz9u0rm wistia_embed_initialized" id="wistia-bblwz9u0rm"
    style="width: 100%; height: 50%;">
    <div id="wistia_chrome_23" class="w-chrome notranslate" tabindex="-1">
      <div id="wistia_grid_57_wrapper" style="display: block; width: 630px; height: 354.375px;">
        <div id="wistia_grid_57_above" style="height: 0px; font-size: 0px; line-height: 0px;"> </div>
        <div id="wistia_grid_57_main" style="width: 630px; left: 0px; height: 354.375px; margin-top: 0px;">
          <div id="wistia_grid_57_center" style="width: 100%; height: 100%;">
            <div class="w-video-wrapper w-css-reset"
              style="height: 100%; position: absolute; top: 0px; width: 100%; opacity: 1;">
              <video id="wistia_simple_video_135" crossorigin="anonymous"
                poster="https://fast.wistia.com/assets/images/blank.gif" aria-label="Video" controlslist="nodownload"
                playsinline="" preload="auto" type="video/m3u8" x-webkit-airplay="allow"
                style="background: transparent; display: block; height: 100%; max-height: none; max-width: none; position: static; visibility: visible; width: 100%; object-fit: contain;"></video>
            </div>
            <div class="w-ui-container"
              style="height: 100%; left: 0px; position: absolute; top: 0px; width: 100%; opacity: 1;">
              <div class="w-vulcan-v2 w-css-reset" id="w-vulcan-v2-56"
                style="border-radius: 0px; box-sizing: border-box; cursor: default; direction: ltr; height: 100%; left: 0px; position: absolute; visibility: visible; top: 0px; width: 100%;">
                <div class="w-vulcan--background w-css-reset"
                  style="height: 100%; left: 0px; position: absolute; top: 0px; width: 100%;">
                  <div class="w-css-reset" data-handle="statusBar"></div>
                  <div class="w-css-reset" data-handle="backgroundFocus"><button
                      aria-label="Play Video: A Brief History of the Web" class="w-css-reset w-vulcan-v2-button"
                      tabindex="0" style="width: 0px; height: 0px; pointer-events: none;"></button></div>
                </div>
                <div aria-live="polite" class="w-vulcan--aria-live w-css-reset" aria-atomic="true"
                  style="position: absolute; left: -99999em;"></div>
                <div class="w-vulcan-overlays-table w-css-reset"
                  style="display: table; pointer-events: none; position: absolute; width: 100%;">
                  <div class="w-vulcan-overlays--left w-css-reset"
                    style="display: table-cell; vertical-align: top; position: relative; width: 0px;">
                    <div class="w-css-reset" style="height: 321.375px;"></div>
                  </div>
                  <div class="w-vulcan-overlays--center w-css-reset"
                    style="display: table-cell; vertical-align: top; position: relative; width: 100%;">
                    <div class="w-css-reset" style="height: 321.375px;">
                      <div class="w-css-reset" data-handle="bigPlayButton" style="pointer-events: auto;">
                        <div class="w-bpb-wrapper w-css-reset w-css-reset-tree"
                          style="border-radius: 0px; display: none; left: calc(50%); margin-left: -61.5234px; margin-top: -39.375px; overflow: hidden; position: absolute; top: calc(50% + 0px);">
                          <button class="w-big-play-button w-css-reset-button-important w-vulcan-v2-button" tabindex="0"
                            type="button" style="cursor: pointer; height: 78.75px; box-shadow: none; width: 123.047px;">
                            <div
                              style="background: rgb(1, 121, 145); display: block; left: 0px; height: 78.75px; mix-blend-mode: darken; position: absolute; top: 0px; width: 123.047px;">
                            </div>
                            <div
                              style="background-color: rgba(1, 121, 145, 0.7); height: 78.75px; left: 0px; position: absolute; top: 0px; transition: background-color 150ms ease 0s; width: 123.047px;">
                            </div><svg x="0px" y="0px" viewBox="0 0 125 80" enable-background="new 0 0 125 80"
                              aria-hidden="true" alt=""
                              style="fill: rgb(255, 255, 255); height: 78.75px; left: 0px; stroke-width: 0px; top: 0px; width: 100%; position: absolute;">
                              <rect fill-rule="evenodd" clip-rule="evenodd" fill="none" width="125" height="80"></rect>
                              <polygon fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" points="53,22 53,58 79,40">
                              </polygon>
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div class="w-css-reset" data-handle="clickForSoundButton" style="pointer-events: auto;">
    <div class="w-css-reset w-css-reset-tree" data-handle="click-for-sound-backdrop"
      style="display: none; height: 100%; left: 0px; pointer-events: auto; position: absolute; top: 0px; width: 100%;">
      <button aria-label="Click for sound" class="w-vulcan-v2-button click-for-sound-btn"
        style="background: rgba(0, 0, 0, 0.8); border: 2px solid transparent; border-radius: 60px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; outline: none; pointer-events: auto; position: absolute; right: 20.1484px; top: 20.1484px; max-width: 589.703px;">
        <div
          style="display: flex; align-items: center; justify-content: flex-end; white-space: nowrap; overflow: hidden; max-width: 0px; transition: max-width 200ms ease 0s;">
          <span
            style="color: rgb(255, 255, 255); font-family: WistiaPlayerInter, Helvetica, sans-serif; font-size: 15px; font-weight: 500; padding-left: 1em; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 630px;">Click
            for sound</span>
        </div><svg viewBox="0 0 237 237" width="51.6796875" height="51.6796875"></svg>
      </button>
  </div>
  </div>
  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- YOUTUBE -->
  <!-- VIMEO -->
  <details>
    <summary>Transcript</summary>
    
    <p class="transcript-text">
      A long time ago, in a far away land (1994, Norway), websites were dull and boring because they didn’t have any “style.”
  
  At the time, computer text was mostly monotone and hard to read. The internet was slow, so hardly anyone used images, and there weren’t many common layouts to help users navigate websites.
  
  One day, CSS inventor Håkon Lie was lamenting this fact, wishing he could make the web look “more like a newspaper.” He wanted to give users the ability to style their HTML any way they wanted. “Perhaps they’d like to spice things up, add a little color...”
  
  Luckily, Håkon knew the right people. He worked at CERN with his friend Tim Berners-Lee, the original inventor of the World Wide Web. Håkon proposed that the internet would benefit from a single unifying standard for rendering text, color, and images across different web browsers.
  
  He called it “CSS” — aka, Cascading Style Sheets.
  
  Håkon worked with the web browser inventors, including Bert Bos and the World Wide Web Consortium, to implement CSS, which quickly became a great success!
  
  Today, CSS is used for a wide variety of tasks, including responsive web design, usability, and localization. It offers a scalable, versatile framework that simplifies the task of creating engaging, readable, and — yes — stylish online content.
    </p>
  </details>
  
  ---
  
  <h1 class="slide-header">Knowledge Check</h1>
  
  Which of the following functionalities are controlled by CSS?
  
  <fieldset>
    <legend>Please select all that apply</legend>
    <input type="checkbox" id="uniqueAnswer2" name="unique2" /><label for="uniqueAnswer2">Creating a pop-up box that appears when a user clicks a button.</label><br />
    <input type="checkbox" id="uniqueAnswer" name="unique" correct="true"/><label for="uniqueAnswer">Developing a website that looks good on desktop, tablets, and mobile devices.</label><br />
    <input type="checkbox" id="uniqueAnswer3" name="unique3" /><label for="uniqueAnswer3">Retrieving information from the proper data sources.</label><br />
    <input type="checkbox" id="uniqueAnswer4" name="unique4" correct="true"/><label for="uniqueAnswer4">Ensuring that all of a page’s components look and feel consistent.</label><br />
    <input type="checkbox" id="uniqueAnswer5" name="unique5" /><label for="uniqueAnswer5">Adding content to a webpage.</label><br />
  
  </fieldset>
  
  <button class="ant-btn ant-btn-primary multiple-choice-checkbox-submit">Submit Answer</button>
  
  ---
  
  <h1 class="slide-header">What Does CSS Actually Do?</h1>
  
  <div class="wistia_embed wistia_async_5a1ifelknh wistia_embed_initialized" id="wistia-5a1ifelknh"
    style="width: 100%; height: 50%;">
    <div id="wistia_chrome_23" class="w-chrome notranslate" tabindex="-1">
      <div id="wistia_grid_57_wrapper" style="display: block; width: 630px; height: 354.375px;">
        <div id="wistia_grid_57_above" style="height: 0px; font-size: 0px; line-height: 0px;"> </div>
        <div id="wistia_grid_57_main" style="width: 630px; left: 0px; height: 354.375px; margin-top: 0px;">
          <div id="wistia_grid_57_center" style="width: 100%; height: 100%;">
            <div class="w-video-wrapper w-css-reset"
              style="height: 100%; position: absolute; top: 0px; width: 100%; opacity: 1;">
              <video id="wistia_simple_video_135" crossorigin="anonymous"
                poster="https://fast.wistia.com/assets/images/blank.gif" aria-label="Video" controlslist="nodownload"
                playsinline="" preload="auto" type="video/m3u8" x-webkit-airplay="allow"
                style="background: transparent; display: block; height: 100%; max-height: none; max-width: none; position: static; visibility: visible; width: 100%; object-fit: contain;"></video>
            </div>
            <div class="w-ui-container"
              style="height: 100%; left: 0px; position: absolute; top: 0px; width: 100%; opacity: 1;">
              <div class="w-vulcan-v2 w-css-reset" id="w-vulcan-v2-56"
                style="border-radius: 0px; box-sizing: border-box; cursor: default; direction: ltr; height: 100%; left: 0px; position: absolute; visibility: visible; top: 0px; width: 100%;">
                <div class="w-vulcan--background w-css-reset"
                  style="height: 100%; left: 0px; position: absolute; top: 0px; width: 100%;">
                  <div class="w-css-reset" data-handle="statusBar"></div>
                  <div class="w-css-reset" data-handle="backgroundFocus"><button
                      aria-label="Play Video: A Brief History of the Web" class="w-css-reset w-vulcan-v2-button"
                      tabindex="0" style="width: 0px; height: 0px; pointer-events: none;"></button></div>
                </div>
                <div aria-live="polite" class="w-vulcan--aria-live w-css-reset" aria-atomic="true"
                  style="position: absolute; left: -99999em;"></div>
                <div class="w-vulcan-overlays-table w-css-reset"
                  style="display: table; pointer-events: none; position: absolute; width: 100%;">
                  <div class="w-vulcan-overlays--left w-css-reset"
                    style="display: table-cell; vertical-align: top; position: relative; width: 0px;">
                    <div class="w-css-reset" style="height: 321.375px;"></div>
                  </div>
                  <div class="w-vulcan-overlays--center w-css-reset"
                    style="display: table-cell; vertical-align: top; position: relative; width: 100%;">
                    <div class="w-css-reset" style="height: 321.375px;">
                      <div class="w-css-reset" data-handle="bigPlayButton" style="pointer-events: auto;">
                        <div class="w-bpb-wrapper w-css-reset w-css-reset-tree"
                          style="border-radius: 0px; display: none; left: calc(50%); margin-left: -61.5234px; margin-top: -39.375px; overflow: hidden; position: absolute; top: calc(50% + 0px);">
                          <button class="w-big-play-button w-css-reset-button-important w-vulcan-v2-button" tabindex="0"
                            type="button" style="cursor: pointer; height: 78.75px; box-shadow: none; width: 123.047px;">
                            <div
                              style="background: rgb(1, 121, 145); display: block; left: 0px; height: 78.75px; mix-blend-mode: darken; position: absolute; top: 0px; width: 123.047px;">
                            </div>
                            <div
                              style="background-color: rgba(1, 121, 145, 0.7); height: 78.75px; left: 0px; position: absolute; top: 0px; transition: background-color 150ms ease 0s; width: 123.047px;">
                            </div><svg x="0px" y="0px" viewBox="0 0 125 80" enable-background="new 0 0 125 80"
                              aria-hidden="true" alt=""
                              style="fill: rgb(255, 255, 255); height: 78.75px; left: 0px; stroke-width: 0px; top: 0px; width: 100%; position: absolute;">
                              <rect fill-rule="evenodd" clip-rule="evenodd" fill="none" width="125" height="80"></rect>
                              <polygon fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" points="53,22 53,58 79,40">
                              </polygon>
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div class="w-css-reset" data-handle="clickForSoundButton" style="pointer-events: auto;">
    <div class="w-css-reset w-css-reset-tree" data-handle="click-for-sound-backdrop"
      style="display: none; height: 100%; left: 0px; pointer-events: auto; position: absolute; top: 0px; width: 100%;">
      <button aria-label="Click for sound" class="w-vulcan-v2-button click-for-sound-btn"
        style="background: rgba(0, 0, 0, 0.8); border: 2px solid transparent; border-radius: 60px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; outline: none; pointer-events: auto; position: absolute; right: 20.1484px; top: 20.1484px; max-width: 589.703px;">
        <div
          style="display: flex; align-items: center; justify-content: flex-end; white-space: nowrap; overflow: hidden; max-width: 0px; transition: max-width 200ms ease 0s;">
          <span
            style="color: rgb(255, 255, 255); font-family: WistiaPlayerInter, Helvetica, sans-serif; font-size: 15px; font-weight: 500; padding-left: 1em; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 630px;">Click
            for sound</span>
        </div><svg viewBox="0 0 237 237" width="51.6796875" height="51.6796875"></svg>
      </button>
  </div>
  </div>
  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- YOUTUBE -->
  <!-- VIMEO -->
  <details>
    <summary>Transcript</summary>
    
    <p class="transcript-text">
      CSS refers to Cascading. Style. Sheets.
  
      “Style sheets” refers to how CSS code is stored in — you guessed it — a sheet listing different style rules. These rules determine how your HTML content will be displayed by web browsers across different devices.
      
      The term “cascading” alludes to the way water falls down a waterfall. It was Håkon Lie’s (Remember him?) way of describing the logic of CSS, which falls gracefully through multiple sheets to ensure a consistent look and feel.
      
      You see, web browsers are not all the same — I know, you’re shocked! Some web browsers are older, some are pickier, and some are built for speed.
      
      CSS provides “cascading” logic so that your HTML style rules work the way you want, no matter which browser you use. CSS rules cascade, or “fall gracefully,” as web browsers implement them in a logical, hierarchical manner. For example, CSS lets you prioritize different rules for different screen sizes. You can also use CSS to design backup rules so that if some of your styles don’t work, your content will still be displayed as you intended.</p>
  </details>
  
  ---
  
  <h1 class="slide-header">Our First CSS Rule</h1>
  
  CSS can be added to a site in two ways:
  
  By including a `<style>` tag in your HTML that contains CSS code. This is called _internal_ CSS, because we are going to set aside our CSS code within our HTML file.
  In a separate CSS file that’s linked to your site with a `<link>` tag. This is called _external_ CSS, or an external style sheet.
  
  In most projects, it’s recommended to use separate CSS files linked to your HTML page. Keeping it separate will help you stay organized, especially when you start building large, complex pages with lots of HTML and CSS. 
  
  In our project for Hannah, we’ll be adding our styling elements in the CSS panel of myGA’s code editor. We’ve taken care of linking the CSS and HTML, so all you have to do is code away — no need for `<style>` or `<link>` tags!
  
  Let’s try giving Hannah’s website its first _CSS rule_. In your CodePen, add the following in the CSS panel:
  
  ```css
  h1 {
    text-align: center;
    color: purple;
  }
  ```
  
  **Pro tip**: Make sure to include punctuation, line breaks, and indentation! This makes your code more readable and ensures that it will run correctly.

<iframe height="300" style="width: 100%;" scrolling="no" title="Our First CSS Rule" src="https://codepen.io/GAmarketing/embed/KKYNXMY?default-tab=css%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/GAmarketing/pen/KKYNXMY">
  Our First CSS Rule</a> by General Assembly (<a href="https://codepen.io/GAmarketing">@GAmarketing</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
  
  ---
  
  <h1 class="slide-header">Using CSS to Style HTML</h1>
  
  <div class="wistia_embed wistia_async_0bcgeyr6s0 wistia_embed_initialized" id="wistia-0bcgeyr6s0"
    style="width: 100%; height: 50%;">
    <div id="wistia_chrome_23" class="w-chrome notranslate" tabindex="-1">
      <div id="wistia_grid_57_wrapper" style="display: block; width: 630px; height: 354.375px;">
        <div id="wistia_grid_57_above" style="height: 0px; font-size: 0px; line-height: 0px;"> </div>
        <div id="wistia_grid_57_main" style="width: 630px; left: 0px; height: 354.375px; margin-top: 0px;">
          <div id="wistia_grid_57_center" style="width: 100%; height: 100%;">
            <div class="w-video-wrapper w-css-reset"
              style="height: 100%; position: absolute; top: 0px; width: 100%; opacity: 1;">
              <video id="wistia_simple_video_135" crossorigin="anonymous"
                poster="https://fast.wistia.com/assets/images/blank.gif" aria-label="Video" controlslist="nodownload"
                playsinline="" preload="auto" type="video/m3u8" x-webkit-airplay="allow"
                style="background: transparent; display: block; height: 100%; max-height: none; max-width: none; position: static; visibility: visible; width: 100%; object-fit: contain;"></video>
            </div>
            <div class="w-ui-container"
              style="height: 100%; left: 0px; position: absolute; top: 0px; width: 100%; opacity: 1;">
              <div class="w-vulcan-v2 w-css-reset" id="w-vulcan-v2-56"
                style="border-radius: 0px; box-sizing: border-box; cursor: default; direction: ltr; height: 100%; left: 0px; position: absolute; visibility: visible; top: 0px; width: 100%;">
                <div class="w-vulcan--background w-css-reset"
                  style="height: 100%; left: 0px; position: absolute; top: 0px; width: 100%;">
                  <div class="w-css-reset" data-handle="statusBar"></div>
                  <div class="w-css-reset" data-handle="backgroundFocus"><button
                      aria-label="Play Video: A Brief History of the Web" class="w-css-reset w-vulcan-v2-button"
                      tabindex="0" style="width: 0px; height: 0px; pointer-events: none;"></button></div>
                </div>
                <div aria-live="polite" class="w-vulcan--aria-live w-css-reset" aria-atomic="true"
                  style="position: absolute; left: -99999em;"></div>
                <div class="w-vulcan-overlays-table w-css-reset"
                  style="display: table; pointer-events: none; position: absolute; width: 100%;">
                  <div class="w-vulcan-overlays--left w-css-reset"
                    style="display: table-cell; vertical-align: top; position: relative; width: 0px;">
                    <div class="w-css-reset" style="height: 321.375px;"></div>
                  </div>
                  <div class="w-vulcan-overlays--center w-css-reset"
                    style="display: table-cell; vertical-align: top; position: relative; width: 100%;">
                    <div class="w-css-reset" style="height: 321.375px;">
                      <div class="w-css-reset" data-handle="bigPlayButton" style="pointer-events: auto;">
                        <div class="w-bpb-wrapper w-css-reset w-css-reset-tree"
                          style="border-radius: 0px; display: none; left: calc(50%); margin-left: -61.5234px; margin-top: -39.375px; overflow: hidden; position: absolute; top: calc(50% + 0px);">
                          <button class="w-big-play-button w-css-reset-button-important w-vulcan-v2-button" tabindex="0"
                            type="button" style="cursor: pointer; height: 78.75px; box-shadow: none; width: 123.047px;">
                            <div
                              style="background: rgb(1, 121, 145); display: block; left: 0px; height: 78.75px; mix-blend-mode: darken; position: absolute; top: 0px; width: 123.047px;">
                            </div>
                            <div
                              style="background-color: rgba(1, 121, 145, 0.7); height: 78.75px; left: 0px; position: absolute; top: 0px; transition: background-color 150ms ease 0s; width: 123.047px;">
                            </div><svg x="0px" y="0px" viewBox="0 0 125 80" enable-background="new 0 0 125 80"
                              aria-hidden="true" alt=""
                              style="fill: rgb(255, 255, 255); height: 78.75px; left: 0px; stroke-width: 0px; top: 0px; width: 100%; position: absolute;">
                              <rect fill-rule="evenodd" clip-rule="evenodd" fill="none" width="125" height="80"></rect>
                              <polygon fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" points="53,22 53,58 79,40">
                              </polygon>
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div class="w-css-reset" data-handle="clickForSoundButton" style="pointer-events: auto;">
    <div class="w-css-reset w-css-reset-tree" data-handle="click-for-sound-backdrop"
      style="display: none; height: 100%; left: 0px; pointer-events: auto; position: absolute; top: 0px; width: 100%;">
      <button aria-label="Click for sound" class="w-vulcan-v2-button click-for-sound-btn"
        style="background: rgba(0, 0, 0, 0.8); border: 2px solid transparent; border-radius: 60px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; outline: none; pointer-events: auto; position: absolute; right: 20.1484px; top: 20.1484px; max-width: 589.703px;">
        <div
          style="display: flex; align-items: center; justify-content: flex-end; white-space: nowrap; overflow: hidden; max-width: 0px; transition: max-width 200ms ease 0s;">
          <span
            style="color: rgb(255, 255, 255); font-family: WistiaPlayerInter, Helvetica, sans-serif; font-size: 15px; font-weight: 500; padding-left: 1em; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 630px;">Click
            for sound</span>
        </div><svg viewBox="0 0 237 237" width="51.6796875" height="51.6796875"></svg>
      </button>
  </div>
  </div>
  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- YOUTUBE -->
  <!-- VIMEO -->
  <details>
    <summary>Transcript</summary>
    
    <p class="transcript-text">
  “<h1>” is an HTML tag found in an HTML file. 
  
  HTML is styled with CSS.
  
  In this CSS declaration, we are telling CSS to style any HTML text tagged as an <h1>.
  
  To start, we define our selector. This tells our code which HTML ingredient should be styled by our CSS recipe.
  
  Next, we set a parameter for our code using curly braces. These contain the styles we want CSS to apply to our selector. 
  
  Finally, we state the style we want to declare within our curly braces. For now, we’ve included a single instruction.
  
  A CSS declaration is broken into two parts: a property and a value. A “property” is any HTML element that you wish to style. A “value” is any particular style you wish to apply. Whenever we write CSS, we’ll use our declaration to define what HTML element should be changed and how to change it.
  </details>
  
  ---
  
  <h1 class="slide-header">Code Challenge</h1>
  
  <iframe height="500" style="width: 100%;" scrolling="no" title="Code Challenge Test" src="https://codepen.io/Ryan-Brodsky/embed/VwNwXqq?default-tab=html%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
      See the Pen <a href="https://codepen.io/Ryan-Brodsky/pen/VwNwXqq">
      Code Challenge Test</a> by Ryan Brodsky (<a href="https://codepen.io/Ryan-Brodsky">@Ryan-Brodsky</a>)
      on <a href="https://codepen.io">CodePen</a>.
    </iframe>
  
  ---
  
  <h1 class='slide-header'>Knowledge Check</h1>
  
  Match each part of the code snippet below with its proper definition. 
  
  ```css
  h2 {
    text-weight: bold;
    color: red;
  }
  ```
  
  <fieldset>
    <legend>Please select all that apply</legend>
    <input type="checkbox" id="uniqueAnswer2" name="unique2" correct="true"/><label for="uniqueAnswer2" >h2 is a selector</label><br />
    <input type="checkbox" id="uniqueAnswer" name="unique"/><label for="uniqueAnswer">"red" is the name of a property</label><br />
    <input type="checkbox" id="uniqueAnswer3" name="unique3" correct="true" /><label for="uniqueAnswer3" >"color" is the name of a property</label><br />
    <input type="checkbox" id="uniqueAnswer4" name="unique4" correct="true"/><label for="uniqueAnswer4" >"bold" is a value given to one of the properties</label><br />
    <input type="checkbox" id="uniqueAnswer5" name="unique5" /><label for="uniqueAnswer5">h2 is a declaration</label><br />
      <input type="checkbox" id="uniqueAnswer5" name="unique5" /><label for="uniqueAnswer5">text-weight is a selector</label><br />
  
    ---
  
    <h1 class='slide-header'>Adding Rules</h1>
  
    As you style more elements of your HTML, you’ll add additional rules to your style sheet. If we wanted to style the `<h1>` and the `<p>`, for example, it would look like this:
  
  ```css
  h1 {
    text-align: center;
    color: blue;
  }
  p {
    background-color: red;
  }
  ```
  
  What’s more, CSS makes it easy to style several elements similarly. You just separate the selectors with a comma in one rule! So, if you wanted to give the `<h1>` and the `<p>` the same style, you would just write:
  
  ```css
  h1, p {
    text-align: center;
    color: red;
  }
  ```
  
  ---
  
  <h1 class="slide-header">Knowledge Check</h1>
  
  In your own words, describe what would happen as a result of this CSS rule:
  
  ```css
  h3 {
    color: yellow;
    background-color: black;
    text-align: right;
  }
  ```
  
  <details>
    <summary>Reveal Answer</summary>
    With this CSS rule, the `<h3>` text would be yellow with a black background and would be aligned at the right side of the page.
  </details>
  
  ---
  
  <h1 class='slide-header'>Knowledge Check</h1>
  
  There’s one more important consideration with regard to adding rules in CSS. Remember how the “C” in CSS stands for “cascading”? That just means that CSS is read by your browser in a cascade from top to bottom. 
  
  What does that mean in practice? The rules that come later take precedence over any earlier ones. Consider this code snippet:
  
  ```css
  h1, p {
    background-color: blue;
    text-align: center;
  }
  p {
    background-color: red;
  }
  ```
  
  The `<p>` would end up with a red background, as that rule supersedes the earlier rule that gave it a blue background.
  
  ---
  
  <h1 class='slide-header'>Over to You</h1>
  
  Let’s get to work on Hannah’s website! 
  
  In the CSS panel, add these styles:
  
  1. The `<h2>` should have the same styling as the `<h1>`.
  2. The `<p>` should be center-aligned and the font should be gray.

<iframe height="300" style="width: 100%;" scrolling="no" title="Hannahs h2" src="https://codepen.io/GAmarketing/embed/oNOYGzZ?default-tab=css%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/GAmarketing/pen/oNOYGzZ">
  Hannahs h2</a> by General Assembly (<a href="https://codepen.io/GAmarketing">@GAmarketing</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
  
  ---
  
  <h1 class="slide-header">Conclusion</h1>
  
  Interested in learning more about CSS? Check out the following resources:
  
  * The <a href="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank" rel="noreferrer noopener">World Wide Web Consortium</a> — its working group determines the features of CSS.
  * The <a href="https://www.w3.org/Style/LieBos2e/enter/" target="_blank" rel="noreferrer noopener">original CSS tutorial</a> by Håkon Lie and Bert Bos.
  * The <a href="https://www.w3schools.com/css/default.asp" target="_blank" rel="noreferrer noopener">current CSS reference site</a> by W3.
  * <a href="https://css-tricks.com/guides/beginner/" target="_blank" rel="noreferrer noopener">CSS Tricks: Best Articles for Beginners</a>.
  
  </textarea>