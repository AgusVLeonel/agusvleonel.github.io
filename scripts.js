// (Setup the copy to clipboard notification and button)
document
  .getElementById("email-link")
  .addEventListener("click", function (event) {
    event.preventDefault();
    copyContent("agustinvleonel@gmail.com");
  });

document
  .getElementById("disc-link")
  .addEventListener("click", function (event) {
    event.preventDefault();
    copyContent("leovnb");
  });

// copyContent: used to copy something (copyText) into the clipboard, also shows and then hides a notification element
function copyContent(copyText) {
  const toCopy = copyText;
  navigator.clipboard.writeText(toCopy).then(() => {
    const notification = document.getElementById("notification");
    notification.classList.add("show");

    setTimeout(() => {
      notification.classList.remove("show");
    }, 3000);
  });
}

// createSkill: used to populate the skill container with skills featuring a name/detail, points (1-6), and an optional css color class
function createSkill(skillName, points, colorClass) {
  // Main Skill container
  const skill = document.createElement("div");
  skill.classList.add("skill");

  // Skill detail
  const skillDetail = document.createElement("p");
  skillDetail.classList.add("skill-detail");
  if (colorClass) {
    skillDetail.classList.add(colorClass);
  }
  skillDetail.textContent = skillName;
  skill.appendChild(skillDetail);

  // Skill points (6, filled / non filled)
  for (let i = 0; i < 6; i++) {
    const point = document.createElement("div");
    point.classList.add("skill-point");
    if (i < points) {
      point.classList.add("fill");
    }
    if (colorClass) {
      point.classList.add(colorClass);
    }
    skill.appendChild(point);
  }

  const column = document.querySelector(".skills-main-container");
  column.appendChild(skill);
}

// Skills
createSkill("C#", 5);
createSkill("C", 4);
createSkill("Java", 4);
createSkill("C++", 3);
createSkill("HTML", 3);
createSkill("SQL", 3);
createSkill("Python", 3);
createSkill("Js", 2);
createSkill("Unity", 5, "color-art");
createSkill("Blender", 3, "color-art");
createSkill("PS", 3, "color-art");
createSkill("CSS", 2, "color-art");
createSkill("Español", 6, "color-lang");
createSkill("English", 5, "color-lang");
