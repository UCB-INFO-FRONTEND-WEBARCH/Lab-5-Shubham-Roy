import "./Landing.css";


function Landing(){
    return (
<>
<head lang="en">
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
  <link rel="stylesheet" href="shubham_roy_styles_lab2.css"/>
  <title>Shubham Roy's Personal Portfolio</title>
  <script src="https://kit.fontawesome.com/3018ac17ab.js" crossorigin="anonymous"></script>
  <link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

</head>


<body>
<main>

<div class="summary_space">
<header>
  <section class="combined">
      <img src="https://i.postimg.cc/L4gx0YpB/Shubham-FEWA.jpg" alt="Display Pic" />
    </section>
    <section class="combined">
      <h2> Hi, I am Shubham Roy! </h2> 
      <p >I identify myself as a data-driven, design-first Product Manager.</p>
  </section>
</header>
</div>


<section>
<h4><i class="material-icons">work</i>  Professional Experience</h4>

<div>
<p class="relative">An industrial exposure of 3 years across Fortune 500 firms like Bain & Company, Deloitte, and high growth startups like Byju's and Zeta Suite has allowed me to build SaaS products for B2B users as well as web & mobile apps for end-users, in Banking & Fintech, Edtech, and Tech, Media & Telecom. </p>
<p class="relative">Off late, I have gathered an enthusiasm for exploring no-code development for building side hustles. I launched <a href="https://anivydream.notion.site/"> "An Ivy Dream"</a>, a no-code based mentoring platform for Master’s aspirants, with 90% NPS across 500+ sessions.</p>
</div>
</section>
<section>
  <h4><i class="material-icons">school</i>  Educational Background</h4>
  <ul class="relative_lists">
      <li>Master of Information Management and Systems, UC Berkeley (2022-2024)</li>
      <li>Bachelors in Computer Engineering, NSIT, India (2015-2019)</li>
    </ul>
</section>

<section>
<h4><i class="material-icons">build</i> A few of my skills</h4>

<ul class="relative_lists">
    <li>Product Analytics</li>
    <li>Consumer Market Research</li>
    <li>Stakeholder Management</li>
    <li>Wireframing and Designing</li>
  </ul>
</section>

<p>To know more about me, reach out on:</p>
  <table class="relative">
    <tr>
      <td>Email</td>
      <td><a href="shubhamroy@berkeley.edu">shubhamroy@berkeley.edu</a></td>
    </tr>
    <tr>
      <td>LinkedIn</td>
      <td><a href="www.linkedin.com/in/-roy">www.linkedin.com/in/-roy</a></td>
    </tr>
  </table>

  <div>
    <h4><i class="material-icons">mail</i>  Reach out for Master's application mentorship</h4>
    <form name="contactForm" id="contactForm">
      Enter your email id: 
      <input type="text" id="email" name="Email" placeholder="xyz@abc.com" required/><br/>
      <p></p>
        <fieldset>
      <legend>Have you already taken GRE?</legend> 
      <input id="Yes" value="Yes" checked type="radio" name="YesNo"/>Yes<br/>
      <input id="No" value="No" type="radio" name="YesNo"/>No<br/>
      </fieldset>
        <p></p>
        <fieldset>
      <legend>Program that you're applying for(select all that apply):</legend>
      <input checked type="checkbox" name="Masters in Data Analytics"/>Masters in Data Analytics <br/>
      <input type="checkbox" name="Masters in Information Management and Systems"/>Masters in Information Management and Systems<br/>
      <input type="checkbox" name="Masters in Engineering Management"/>Masters in Engineering Management<br/>
      </fieldset>
      <p>

      </p>
      <div id="formsubmitbutton">
      <input type="button"  id="submit" onclick="show()" value="Submit"/>
      </div>
   
      <div class="loader" id="buttonreplacement" style={{display: 'none'}} height="2px"></div>
        
        
    </form>
  </div>
</main>

<footer>
  <div class="fixed">
  <p>
    <i class="material-icons">copyright</i> <a href="https://shubhamroy.webflow.io/">Shubham Roy</a>
  </p>
</div>
</footer>
</body>


    
</>
)};
export default Landing;