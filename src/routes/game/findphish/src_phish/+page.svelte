<script>
    const phishingEmails = {
  emails: [
    {
      subject: "Urgent: Mandatory Security Update Required",
      from: "IT Department <security-update@gov-secure.net>",
      body: "Dear Employee, To ensure the safety of your account, please update your credentials immediately. Failure to do so may result in account suspension. Click the link below to verify your details: [Click Here to Update](http://gov-security-update.com) Regards, Government IT Support"
    },
    {
      subject: "Security Breach Detected – Reset Your Password Now",
      from: "Government Security Team <it-alert@gov-sec.net>",
      body: "We have detected suspicious activity on your account. Please reset your password immediately to prevent unauthorized access. Click below to secure your account: [Reset Password](http://gov-verify.net) Failure to act may result in deactivation."
    },
    {
      subject: "🎉 Congratulations! Bonus Issued!",
      from: "HR Department <hr@gov-bonus.com>",
      body: "As a valued employee, you have received a performance bonus of ₹50,000. To claim your bonus, log in to the HR portal and confirm your bank details. [Claim Your Bonus Now](http://gov-bonus-hr.com)"
    },
    {
      subject: "Immediate Payment Required – Invoice #A1223",
      from: "Vendor Payment Team <billing@gov-finance.net>",
      body: "Your department has an outstanding invoice of ₹2,45,000. Kindly process the payment using the link below to avoid penalties. [Process Payment](http://gov-payments.net)"
    },
    {
      subject: "Unauthorized Login Attempt – Verify Now",
      from: "Cyber Security <alerts@gov-verify.com>",
      body: "We detected an unauthorized login attempt from Beijing, China. If this wasn’t you, secure your account now. [Verify Your Identity](http://gov-secure-id.com)"
    },
    {
      subject: "Congratulations! Your Bid Has Been Selected",
      from: "Procurement Office <contracts@gov-tender.com>",
      body: "Your department has won a contract worth ₹10 crore. To proceed, confirm your details and pay a processing fee. [Proceed Now](http://gov-tender-verification.com)"
    },
    {
      subject: "Action Required: IT Server Maintenance",
      from: "IT Support <server-migration@gov-it.com>",
      body: "To maintain system integrity, all employees must reauthenticate their credentials by logging into the new IT portal. [Authenticate Now](http://gov-server-migration.com)"
    },
    {
      subject: "Quick Favor Needed",
      from: "deep Kumar <deep.kumar@gov-mail.com>",
      body: "Hey, can you send me the latest project files ASAP? I need them for a quick review. You can upload them here: [Secure Document Upload](http://gov-file-transfer.com)"
    },
    {
      subject: "Payment Issue – Bank Details Required",
      from: "Finance Dept. <finance@gov-pay.com>",
      body: "Your recent salary payment failed due to incorrect banking details. Please update your details immediately. [Update Bank Details](http://gov-salary-verification.com)"
    },
    {
      subject: "Confidential: New Project Guidelines",
      from: "Project Manager <pm@gov-projects.com>",
      body: "Please find attached the latest project guidelines. Review and submit your feedback by EOD. Attachment: project_guidelines.pdf.exe (Hidden Malware)"
    }
  ]
};

const legitimateEmails = {
  emails: [
    {
      subject: "Important: Monthly Cybersecurity Awareness Training",
      from: "IT Security Team <security@gov.in>",
      body: "Dear Team, As part of our ongoing cybersecurity initiative, we require all employees to complete the latest training module. [Access Training Here](https://gov.in/security-training)"
    },
    {
      subject: "📌 Revised Leave Policy – 2025",
      from: "HR Department <hr@gov.in>",
      body: "We have updated our leave policy for 2025. Please review the attached document for details. Attachment: Leave_Policy_2025.pdf"
    },
    {
      subject: "Weekly Project Status Meeting",
      from: "Project Director <director@gov.in>",
      body: "A reminder for our weekly status meeting on Monday, 10 AM. Please be prepared with your updates."
    },
    {
      subject: "Server Downtime Scheduled – Sunday 2 AM - 6 AM",
      from: "IT Support <support@gov.in>",
      body: "Dear Employee, Our servers will undergo maintenance this weekend. Expect downtime between 2 AM - 6 AM."
    },
    {
      subject: "🏥 New Health Benefits for Employees",
      from: "HR Benefits Team <benefits@gov.in>",
      body: "We are pleased to announce extended health benefits for employees. Click below for details. [View Benefits](https://gov.in/health-benefits)"
    },
    {
      subject: "📊 Your Feedback Matters – Annual Survey",
      from: "HR Team <survey@gov.in>",
      body: "Participate in our Employee Satisfaction Survey to improve workplace policies."
    },
    {
      subject: "⚠️ Reminder: Submit Tax Declarations Before Deadline",
      from: "Finance Team <finance@gov.in>",
      body: "Please submit your tax declarations before March 31st to avoid penalties."
    },
    {
      subject: "🚨 Stay Alert: Avoid Phishing Attacks!",
      from: "IT Security Team <security@gov.in>",
      body: "Reminder: Never click on unknown links or provide credentials to unverified sources."
    },
    {
      subject: "📢 Annual Performance Review Process",
      from: "HR Team <hr@gov.in>",
      body: "We are initiating the annual performance review process. Kindly fill in the self-assessment form before the deadline."
    },
    {
      subject: "🎉 Employee Appreciation Day – Join Us!",
      from: "Admin Office <admin@gov.in>",
      body: "We appreciate your hard work! Join us for Employee Appreciation Day celebrations in the conference hall at 4 PM."
    }
  ]
};

let current_emails = $state([]);
let checked = $state([]);
let randomLegit, randomNonLegit;
for(var i = 1; i <= 5; i++){
  randomLegit = legitimateEmails['emails'][Math.floor(Math.random() * $state.snapshot(legitimateEmails['emails']).length)];
  randomLegit['what'] = "legit";
  randomNonLegit = phishingEmails['emails'][Math.floor(Math.random() * $state.snapshot(phishingEmails['emails']).length)];
  randomNonLegit['what'] = "phish";
  current_emails.push(randomLegit);
  current_emails.push(randomNonLegit);
}
let current_mail_from = $state("");
let current_mail_sub = $state("");
let current_mail_content = $state("");
function showMail(from, sub){
  for(var i = 0; i < phishingEmails['emails'].length; i++){
    if(from == phishingEmails['emails'][i]["from"] && sub == phishingEmails['emails'][i]["subject"]){
      current_mail_from = from;
      current_mail_sub = sub;
      current_mail_content = phishingEmails['emails'][i]["body"];
      flag = 1;
    }
    else if(from == legitimateEmails['emails'][i]["from"] && sub == legitimateEmails['emails'][i]["subject"]){
      current_mail_from = from;
      current_mail_sub = sub;
      current_mail_content = legitimateEmails['emails'][i]["body"];
      flag = 1;
    }
  }
}

function clearAll(){
  current_mail_from = "";
}
function check(from, sub){
  for(var i = 0; i < phishingEmails['emails'].length; i++){
    if(from == phishingEmails['emails'][i]["from"] && sub == phishingEmails['emails'][i]["subject"]){
    }
    else if(from == legitimateEmails['emails'][i]["from"] && sub == legitimateEmails['emails'][i]["subject"]){
    }
  }
}
</script>
<style>
  .parent{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin: 13vh 0vw 10vh 15vw;
    border-radius: 20px;
    background-color: rgb(124, 124, 255, 0.1);
    width: 70vw;
    height: 70vh;
    gap: 0.4rem;
  }
  .mail{
    background-color: rgb(184, 184, 184);
    color: black;
    display: flex;
    justify-content: space-evenly;
    width: 90%;
    border: 1px solid black;
    padding: 12px 20px 12px 20px;
    border-radius: 10px;
    transition: all 0.3s ease;
  }
  .mail:hover{
    background-color: rgb(184, 184, 184, 0);
    border: 1px solid black;
    color: white;
  }

  button{
      box-shadow: 0 0 10px rgb(124, 124, 255);
      background-color: rgb(124, 124, 255);
      padding: 15px 60px 15px 60px;
      border: 0px solid transparent;
      border-radius: 10px;
      transition: all 0.3s ease;
  }
  button:hover{
      box-shadow: 0 0 10px rgb(255, 255, 255);
      background-color: white;
  }
  .overlay {
    border: 0px solid transparent;
    border-radius: 20px;
    padding: 30px;
    width: 60vw;
    height: 60vh;
    background: rgba(133, 133, 133, 0.6);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 15.6vh;
    left: 18.6vw;
    font-size: 2rem;
    z-index: 1000;
    gap: 2rem;
    backdrop-filter: blur(10px);
    opacity: 0;
    animation: fadeIn 1s forwards;
    overflow: scroll;
  }
  @keyframes fadeIn{
      from{
          opacity: 0;
      }
      to{
          opacity: 1;
      }
  }
  p{
      font-size: 60%;
  }
  .button2{
    padding: 3px 20px 3px 20px ;
    border-radius: 5px;
  }
</style>

<div class="parent">
  <button on:click={()=>{check()}}>Submit!</button>
  {#each current_emails as mail}
    <div class="mail">
      <div>
        {mail["from"]}
      </div>  
      <div>
        {mail["subject"]}
      </div>
      <div>
        <input on:click={()=>{}} type="checkbox" id="isPhish{mail['subject']}"> Is it a phishing mail?
      </div>
      <button class="button2" on:click={()=>{showMail(mail['from'], mail['subject'])}}>
        Open!
      </button>
    </div>
  {/each}
  {#if current_mail_from == ""}
    <div></div>
  {:else}
    <div class="overlay">
      <div>From: {current_mail_from}</div>
      <div>Subject: {current_mail_sub}</div>
      <p>
        {current_mail_content}
      </p>
      <button on:click={()=>{clearAll()}}>Close</button>
  </div>
  {/if}
</div>