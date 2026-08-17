const data=[
{name:"2026 Graduate Trainee Programme",type:"trainee",location:"nigeria",org:"Featured opportunity",desc:"An example listing showing how SkillVault opportunities will appear.",deadline:"Add deadline",url:"#"},
{name:"International Scholarship Opportunity",type:"scholarship",location:"international",org:"Scholarship",desc:"An example scholarship listing ready to be replaced with verified details.",deadline:"Add deadline",url:"#"},
{name:"Remote Graduate Internship",type:"internship",location:"remote",org:"Internship",desc:"An example remote internship listing for the SkillVault catalogue.",deadline:"Add deadline",url:"#"},
{name:"Entry-Level Career Opportunity",type:"job",location:"nigeria",org:"Career opportunity",desc:"An example job listing ready for a real employer and application link.",deadline:"Add deadline",url:"#"},
{name:"Fully Funded Study Opportunity",type:"scholarship",location:"international",org:"Scholarship",desc:"An example funding opportunity for future verified listings.",deadline:"Add deadline",url:"#"},
{name:"Graduate Internship Programme",type:"internship",location:"nigeria",org:"Internship",desc:"An example internship listing for students and recent graduates.",deadline:"Add deadline",url:"#"}
];
const labels={scholarship:"Scholarship",trainee:"Graduate Trainee",internship:"Internship",job:"Job"};
const grid=document.querySelector("#opportunityGrid"),empty=document.querySelector("#empty");
function render(){
 const q=document.querySelector("#search").value.toLowerCase(), c=document.querySelector("#category").value,l=document.querySelector("#location").value;
 const items=data.filter(x=>(c==="all"||x.type===c)&&(l==="all"||x.location===l)&&(`${x.name} ${x.org} ${x.desc}`.toLowerCase().includes(q)));
 grid.innerHTML=items.map(x=>`<article class="opp"><div class="opp-top"><span class="opp-type">${labels[x.type]}</span><span>✨</span></div><h3>${x.name}</h3><p>${x.desc}</p><div class="opp-meta"><span class="pill">${x.org}</span><span class="pill">${x.location==="remote"?"Remote":x.location==="nigeria"?"Nigeria":"International"}</span><span class="pill">Deadline: ${x.deadline}</span></div><a href="${x.url}">View opportunity →</a></article>`).join("");
 empty.hidden=items.length>0;
}
["search","category","location"].forEach(id=>document.querySelector("#"+id).addEventListener("input",render));
render();

document.querySelector(".menu").addEventListener("click",()=>document.querySelector(".links").classList.toggle("open"));
document.querySelectorAll(".links a").forEach(a=>a.addEventListener("click",()=>document.querySelector(".links").classList.remove("open")));
const subscriberForm = document.querySelector("#form");
if (subscriberForm) {
  subscriberForm.addEventListener("submit", () => {
    const button = subscriberForm.querySelector("[data-fs-submit-btn]");
    if (button) button.textContent = "Submitting...";
  });
}
