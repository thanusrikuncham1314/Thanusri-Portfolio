/* =========================================================
   THANUSRI PORTFOLIO
   FULL-SCREEN TRANSFORMATION NAVIGATION
   No scrolling • No popup • Smooth section transitions
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* -----------------------------------------------------
       SECTION DATA
       ----------------------------------------------------- */

    const sections = {
        home: {
            title: "Welcome",
            eyebrow: "01 / HOME",
            description:
                "Turning curiosity into code, and ideas into intelligent solutions."
        },

        about: {
            title: "About Me",
            eyebrow: "02 / ABOUT",
            description:
                "A curious learner exploring technology through code, creativity and hands-on projects."
        },

        skills: {
            title: "Skills & Tools",
            eyebrow: "03 / SKILLS",
            description:
                "Technologies I use to learn, experiment, build and solve problems."
        },

        projects: {
            title: "Selected Projects",
            eyebrow: "04 / PROJECTS",
            description:
                "A collection of projects built while learning Python, web development and problem solving."
        },

        education: {
            title: "Education",
            eyebrow: "05 / EDUCATION",
            description:
                "My academic journey and the foundation behind my technical growth."
        },

        achievements: {
            title: "Achievements",
            eyebrow: "06 / ACHIEVEMENTS",
            description:
                "Experiences, certifications and challenges that helped me grow beyond the classroom."
        },

        experience: {
            title: "Experience",
            eyebrow: "07 / EXPERIENCE",
            description:
                "Practical exposure through internship work, projects and collaborative learning."
        },

        contact: {
            title: "Let's Connect",
            eyebrow: "08 / CONTACT",
            description:
                "Have an idea, opportunity or project? Let's build something meaningful."
        }
    };


    /* -----------------------------------------------------
       FIND NAVIGATION LINKS
       ----------------------------------------------------- */

    const navLinks = document.querySelectorAll(
        'nav a[href^="#"], header a[href^="#"]'
    );


    /* -----------------------------------------------------
       CREATE FULL-SCREEN TRANSFORMATION LAYER
       ----------------------------------------------------- */

    const transitionLayer = document.createElement("div");

    transitionLayer.className = "portfolio-transition";

    transitionLayer.innerHTML = `
        
        <div class="transition-glow glow-one"></div>
        <div class="transition-glow glow-two"></div>

        <div class="transition-grid"></div>

        <div class="transition-content">

            <span class="transition-eyebrow">
                00 / PORTFOLIO
            </span>

            <h1 class="transition-title">
                Explore
            </h1>

            <div class="transition-line"></div>

            <p class="transition-description">
                Loading experience...
            </p>

        </div>

        <div class="transition-number">
            00
        </div>

    `;

    document.body.appendChild(transitionLayer);


    /* -----------------------------------------------------
       CREATE SECTION VIEW
       ----------------------------------------------------- */

    const sectionView = document.createElement("div");

    sectionView.className = "section-view";

    sectionView.innerHTML = `

        <div class="section-view-background"></div>

        <div class="section-view-top">

            <div class="section-view-brand">
                Thanusri
            </div>

            <div class="section-view-location">
                K. Naga Thanusri
            </div>

        </div>


        <div class="section-view-content">

            <span class="section-view-eyebrow">
                00 / SECTION
            </span>

            <h1 class="section-view-title">
                Section
            </h1>

            <p class="section-view-description">
                Description
            </p>

            <div class="section-view-original-content">
            </div>

        </div>


        <button class="section-view-back">
            <span>←</span>
            Back to Home
        </button>


        <div class="section-view-counter">
            <span class="current-section-number">00</span>
            <span class="counter-line"></span>
            <span>08</span>
        </div>

    `;

    document.body.appendChild(sectionView);


    /* -----------------------------------------------------
       GET ELEMENTS
       ----------------------------------------------------- */

    const transitionTitle =
        transitionLayer.querySelector(".transition-title");

    const transitionEyebrow =
        transitionLayer.querySelector(".transition-eyebrow");

    const transitionDescription =
        transitionLayer.querySelector(".transition-description");

    const transitionNumber =
        transitionLayer.querySelector(".transition-number");

    const sectionTitle =
        sectionView.querySelector(".section-view-title");

    const sectionEyebrow =
        sectionView.querySelector(".section-view-eyebrow");

    const sectionDescription =
        sectionView.querySelector(".section-view-description");

    const sectionOriginalContent =
        sectionView.querySelector(".section-view-original-content");

    const sectionBack =
        sectionView.querySelector(".section-view-back");

    const sectionNumber =
        sectionView.querySelector(".current-section-number");


    /* -----------------------------------------------------
       SECTION NUMBER
       ----------------------------------------------------- */

    const sectionNumbers = {
        home: "01",
        about: "02",
        skills: "03",
        projects: "04",
        education: "05",
        achievements: "06",
        experience: "07",
        contact: "08"
    };


    /* -----------------------------------------------------
       OPEN SECTION
       ----------------------------------------------------- */

    function openSection(sectionID) {

        if (sectionID === "home") {
            closeSection();
            return;
        }


        const data = sections[sectionID];

        if (!data) return;


        const originalSection =
            document.getElementById(sectionID);


        if (!originalSection) return;


        /* -----------------------------------------------
           PREPARE TRANSITION
           ----------------------------------------------- */

        transitionEyebrow.textContent =
            data.eyebrow;

        transitionTitle.textContent =
            data.title;

        transitionDescription.textContent =
            data.description;

        transitionNumber.textContent =
            sectionNumbers[sectionID];


        /* -----------------------------------------------
           PREPARE FINAL VIEW
           ----------------------------------------------- */

        sectionEyebrow.textContent =
            data.eyebrow;

        sectionTitle.textContent =
            data.title;

        sectionDescription.textContent =
            data.description;

        sectionNumber.textContent =
            sectionNumbers[sectionID];


        /*
         * Copy the actual section content.
         * This keeps your existing information.
         */

        sectionOriginalContent.innerHTML =
            originalSection.innerHTML;


        /* -----------------------------------------------
           START TRANSFORMATION
           ----------------------------------------------- */

        document.body.classList.add(
            "transforming"
        );

        transitionLayer.classList.add(
            "transition-active"
        );


        /* -----------------------------------------------
           AFTER FIRST ANIMATION
           ----------------------------------------------- */

        setTimeout(() => {

            transitionLayer.classList.add(
                "transition-expand"
            );

        }, 250);


        /* -----------------------------------------------
           SHOW NEW SECTION
           ----------------------------------------------- */

        setTimeout(() => {

            transitionLayer.classList.remove(
                "transition-active"
            );

            transitionLayer.classList.remove(
                "transition-expand"
            );

            sectionView.classList.add(
                "section-active"
            );

            document.body.classList.add(
                "section-open"
            );

        }, 850);

    }


    /* -----------------------------------------------------
       CLOSE SECTION
       ----------------------------------------------------- */

    function closeSection() {

        sectionView.classList.remove(
            "section-active"
        );

        document.body.classList.remove(
            "section-open"
        );


        /* small delay for reverse transition */

        setTimeout(() => {

            document.body.classList.remove(
                "transforming"
            );

        }, 300);

    }


    /* -----------------------------------------------------
       NAVIGATION CLICK
       ----------------------------------------------------- */

    navLinks.forEach(link => {

        link.addEventListener("click", event => {

            const href =
                link.getAttribute("href");


            if (!href || href === "#") {
                return;
            }


            const sectionID =
                href.replace("#", "");


            if (!sections[sectionID]) {
                return;
            }


            /* STOP NORMAL SCROLL */

            event.preventDefault();

            event.stopPropagation();


            /* OPEN TRANSFORMED VIEW */

            openSection(sectionID);

        });

    });


    /* -----------------------------------------------------
       BACK BUTTON
       ----------------------------------------------------- */

    sectionBack.addEventListener(
        "click",
        closeSection
    );


    /* -----------------------------------------------------
       ESC KEY
       ----------------------------------------------------- */

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            if (
                document.body.classList.contains(
                    "section-open"
                )
            ) {

                closeSection();

            }

        }

    });


    /* -----------------------------------------------------
       PREVENT HASH SCROLL
       ----------------------------------------------------- */

    window.addEventListener(
        "hashchange",
        () => {

            history.replaceState(
                null,
                "",
                window.location.pathname
            );

        }
    );

});