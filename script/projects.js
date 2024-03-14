const projects = [
  {
    img1: "./Media/airbnb.png",
    name: "Airbnb-Clone",
    about:
      "Airbnb is a popular online marketplace and hospitality service that allows people to rent out their homes,apartments, or other types of lodging to travelers.It  provides a more authentic and personalized experience for guests, as they have the opportunity to stay in unique and local accommodations and interact with their hosts.",
    collaborator: "5 Collaborators",
    duration: "06 Days",
    tool: "HTML | CSS |Javascript",
    githubLink: "https://github.com/Prathameshschavan/Project_Airbnb.com",
    deployedLink: "https://dashing-lokum-307e4a.netlify.app/html/product.html",
    airbnb: true,
    hotstart: false,
  },
  {
    img1: "./Media/hotstar.png",
    name: "Disney plus Hotstar -Clone",
    about:
      "Disney+ Hotstar is a popular streaming service that offers a wide variety of content, including TV shows, movies, and live sports.Disney+ Hotstar has different subscription plans, including a free plan with limited content, a premium plan with access to all content, and a VIP plan that offers access to local content and live sports.",
    collaborator: "5 Collaborators",
    duration: "06 Days",
    tool: "React | CSS | Chakra-UI ",
    githubLink: "https://github.com/ritikraj07/Project_Disney-Hotstar.com",
    deployedLink: "https://hotstarclone07.netlify.app/",
    airbnb: false,
    hotstart: true,
  },
  //,
  // {
  //   img1: "filmix",
  //   name: "Movix",
  //   about:
  //     "A versatile streaming platform akin to Hotstar, offering a wide range of movies, TV shows, and series to audiences",
  //   collaborator: "1 Collaborators",
  //   duration: "12 Days",
  //   tool: "React |  SASS ",
  //   githubLink: "https://github.com/VaishnaviR99/filmix",
  //   deployedLink: "https://movix-eight-lac.vercel.app/",
  //   airbnb: false,
  //   hotstart: true,
  // },
];

const projectCards = document.querySelector(".project_cards");

$(document).ready(function () {
  projects.map((project) => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");

    // Card image
    const displayImg = document.createElement("div");
    displayImg.classList.add("displayimg");
    const img = document.createElement("img");
    img.classList.add("displayimg");
    img.dataset.aos = "flip-left";
    img.dataset.aosDuration = "1300";
    img.alt = project.name;
    img.src = project.img1;
    displayImg.appendChild(img);
    projectCard.appendChild(displayImg);

    // Card details
    const cardDetails = document.createElement("div");
    const title = document.createElement("h2");
    title.classList.add("project-title");
    title.textContent = project.name;
    const description = document.createElement("p");
    description.classList.add("project-description");
    description.textContent = project.about;
    const group = document.createElement("p");
    group.classList.add("group");
    group.innerHTML = `<b>Group Project:</b> ${project.collaborator} | <b>Duration:</b> ${project.duration}`;
    const techStack = document.createElement("div");
    techStack.classList.add("project-tech-stack");
    const techStackTitle = document.createElement("h3");
    techStackTitle.style.color = "purple";
    techStackTitle.textContent = "Tech-Stack";
    const techStackTools = document.createElement("h3");
    techStackTools.textContent = project.tool;
    techStack.appendChild(techStackTitle);
    techStack.appendChild(techStackTools);
    cardDetails.appendChild(title);
    cardDetails.appendChild(description);
    cardDetails.appendChild(group);
    cardDetails.appendChild(techStack);
    projectCard.appendChild(cardDetails);

    // View links
    const viewDiv = document.createElement("div");
    viewDiv.classList.add("view_div");
    const githubLink = document.createElement("img");
    githubLink.classList.add("project-github-link");
    githubLink.alt = "github";
    githubLink.src = "./Media/github.png";
    githubLink.onclick = () => window.open(project.githubLink, "_blank");
    const deployedLink = document.createElement("img");
    deployedLink.classList.add("project-deployed-link");
    deployedLink.alt = "deploy";
    deployedLink.src = "./Media/deploy.png";
    deployedLink.onclick = () => window.open(project.deployedLink, "_blank");
    viewDiv.appendChild(githubLink);
    viewDiv.appendChild(deployedLink);
    projectCard.appendChild(viewDiv);

    projectCards.appendChild(projectCard);
  });
});

$(".contact-linkedin").click(function () {
  const link = "https://www.linkedin.com/in/vaishnavir31/";
  window.open(link, "_blank");
});
$(".contact-github").click(function () {
  const link = "https://github.com/VaishnaviR99";
  window.open(link, "_blank");
});

$(".contact-email").click(function () {
  const recipient = "ralegaonkarvaishnavi@gmail.com";
  window.location.href = `mailto:${recipient}`;
});

$(".contact-phone").click(function () {
  const phoneNumber = "+8788824031";
  window.location.href = `tel:${phoneNumber}`;
  window.open(`tel://${phoneNumber}`);
});
