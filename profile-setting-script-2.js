console.warn("Hidden elements change 5");

let activefileuploaderId = "";
let theLawyerPronouns = [];
let theCategory2 = [];
let theSubcategory2 = [];
let thecasefiles = [];
let thecertificates = [];
let alleducation = [];
let theuserGeolocation;
let thelawyercerticates = [];
let theLawyersHobbies = [];

let allCategories = {
  categories: [
    {
      name: "Business & Corporate Law",
      subfields: [
        "Business Law",
        "Corporate Law",
        "Commercial Law",
        "Mergers & Acquisitions (M&A)",
        "Securities Law",
        "Franchise Law",
        "Startup Law",
        "Antitrust & Competition Law",
        "Private Equity & Venture Capital Law",
        "Banking & Finance Law",
        "Financial Regulation Law",
      ],
    },
    {
      name: "Civil Litigation & Dispute Resolution",
      subfields: [
        "Civil Litigation",
        "Class Action Lawsuits",
        "Alternative Dispute Resolution (ADR)",
        "Mediation",
        "Arbitration",
        "Commercial Litigation",
        "Defamation & Libel Law",
        "Civil Rights Litigation",
      ],
    },
    {
      name: "Criminal Law",
      subfields: [
        "Criminal Defense",
        "White Collar Crime",
        "Cybercrime Law",
        "Juvenile Law",
        "Traffic & DUI/DWI Law",
        "Expungement Law",
        "Organized Crime Law",
        "Death Penalty Defense",
        "Drug Crimes Defense",
      ],
    },
    {
      name: "Employment & Labor Law",
      subfields: [
        "Employment Law",
        "Labor Law",
        "Workers’ Compensation",
        "Wrongful Dismissal",
        "Workplace Discrimination & Harassment Law",
        "Occupational Health & Safety Law",
        "Employee Benefits Law",
        "Union & Collective Bargaining Law",
        "Executive Compensation Law",
      ],
    },
    {
      name: "Family & Matrimonial Law",
      subfields: [
        "Family Law",
        "Divorce Law",
        "Child Custody & Support",
        "Adoption Law",
        "Fertility & Surrogacy Law",
        "Domestic Violence & Protective Orders",
        "Prenuptial & Postnuptial Agreements",
        "Grandparents’ Rights Law",
      ],
    },
    {
      name: "Estate Planning, Probate & Elder Law",
      subfields: [
        "Estate Planning",
        "Wills & Trusts",
        "Probate Law",
        "Elder Law",
        "Guardianship & Conservatorship",
        "Special Needs Planning",
      ],
    },
    {
      name: "Personal Injury & Insurance Law",
      subfields: [
        "Personal Injury Law",
        "Medical Malpractice Law",
        "Product Liability Law",
        "Professional Malpractice (Legal, Financial, etc.)",
        "Insurance Law",
        "Car Accident & Motor Vehicle Law",
        "Wrongful Death Law",
      ],
    },
    {
      name: "Real Estate & Property Law",
      subfields: [
        "Real Estate Law",
        "Landlord-Tenant Law",
        "Construction Law",
        "Property Development Law",
        "Condominium & HOA Law",
        "Zoning & Land Use Law",
        "Eminent Domain & Property Seizure Law",
        "Foreclosure Defense",
      ],
    },
    {
      name: "Financial, Banking & Tax Law",
      subfields: [
        "Tax Law",
        "Bankruptcy Law",
        "Investment Law",
        "Financial Services Regulation",
        "Asset Protection Law",
        "Corporate Restructuring & Insolvency",
      ],
    },
    {
      name: "Intellectual Property (IP) & Technology Law",
      subfields: [
        "Intellectual Property Law",
        "Patent Law",
        "Copyright Law",
        "Trademark Law",
        "Trade Secrets Law",
        "Licensing & Royalties Law",
        "AI & Emerging Technologies Law",
        "Cybersecurity & Data Privacy Law",
      ],
    },
    {
      name: "Immigration & International Law",
      subfields: [
        "Immigration Law",
        "Refugee & Asylum Law",
        "International Law",
        "Extradition Law",
        "Foreign Investment Law",
        "Diplomatic & Consular Law",
        "Cross-Border Business Law",
      ],
    },
    {
      name: "Constitutional, Human Rights & Public Interest Law",
      subfields: [
        "Constitutional Law",
        "Human Rights Law",
        "Civil Rights Law",
        "Indigenous & Aboriginal Law",
        "Public Interest Law",
        "Disability Rights Law",
      ],
    },
    {
      name: "Environmental, Energy & Natural Resources Law",
      subfields: [
        "Environmental Law",
        "Climate Change Law",
        "Renewable Energy Law",
        "Oil & Gas Law",
        "Mining Law",
        "Water Rights Law",
        "Wildlife & Conservation Law",
        "Sustainable Development Law",
      ],
    },
    {
      name: "Regulatory, Administrative & Government Law",
      subfields: [
        "Administrative Law",
        "Municipal Law",
        "Professional Licensing Law",
        "Government Contracts & Procurement Law",
        "Public Utilities Law",
        "Public Policy & Legislative Advocacy",
        "Cannabis Law",
        "Consumer Protection Law",
      ],
    },
    {
      name: "Health, Medical & Science Law",
      subfields: [
        "Health Law",
        "Pharmaceutical Law",
        "Biotech Law",
        "Medical Ethics & Bioethics Law",
        "Hospital & Healthcare Compliance Law",
        "Public Health Law",
      ],
    },
    {
      name: "Transportation & Maritime Law",
      subfields: [
        "Transportation Law",
        "Maritime & Admiralty Law",
        "Aviation Law",
        "Space Law (Emerging)",
        "Railroad & Public Transit Law",
      ],
    },
    {
      name: "Military & Security Law",
      subfields: [
        "Military Law",
        "National Security Law",
        "International Humanitarian Law",
        "War Crimes & Human Rights Violations Law",
        "Intelligence & Surveillance Law",
      ],
    },
    {
      name: "Technology, Media & Entertainment Law",
      subfields: [
        "Technology Law",
        "Media & Broadcasting Law",
        "Entertainment Law",
        "Gaming & Esports Law",
        "Music Law",
        "Film & TV Law",
        "Social Media & Influencer Law",
        "Defamation & Libel Law",
      ],
    },
    {
      name: "Sports & Recreational Law",
      subfields: [
        "Sports Law",
        "Athlete Representation & Contract Law",
        "Olympic & International Sports Law",
        "Stadium & Venue Law",
      ],
    },
    {
      name: "Niche & Emerging Legal Areas",
      subfields: [
        "Space Law",
        "Fashion Law",
        "Art Law",
        "Animal Law",
        "Drone Law",
        "Psychedelics & Drug Policy Law",
        "Religious Institutions & Church Law",
        "Foreclosure Defense Law",
        "Cryptocurrency & Blockchain Law",
        "Digital Assets & NFT Law",
        "Reputation Management Law",
        "AI Ethics & Regulation Law",
      ],
    },
  ],
};

async function delaysomeminutes() {
  setTimeout(() => {
    document.getElementById("thesavealertshow").style.display = "none";
    document.getElementById("thesaveqa").style.display = "none";
    document.getElementById("deletetheeducationcontainer").style.display =
      "none";
    document.getElementById("deletecasesmaindiv").style.display = "none";
    document.getElementById("deleteclientstestimonials").style.display = "none";
    document.getElementById("pressdeletecontainer").style.display = "none";
    document.getElementById("casestudiesdeletecontainer").style.display =
      "none";
    document.getElementById("personalqacontainer").style.display = "none";
    document.getElementById("certdeletecontainer").style.display = "none";
    document.getElementById("theloadingwait").style.display = "none";
    alleducation = [];
  }, 2000); // 2000 milliseconds = 2 seconds
  return "continue";
}

async function addlanguages() {
  const images = document.querySelectorAll(".thelanguagesimage");

  images.forEach((img) => {
    theselectedelement = document.getElementById("thelanguage");
    const url = img.src;
    const langy = img.getAttribute("thename");
    console.log({ "Image URL": url, Language: langy });
    const option = document.createElement("option");
    option.value = langy.toLowerCase();
    option.textContent = langy;
    if (url) {
      option.setAttribute("data-image", url);
    }
    theselectedelement.appendChild(option);
  });
}

async function addCategories() {
  let categoryNames = allCategories.categories.map((cat) => cat.name);
  categoryNames.forEach((thiscategory) => {
    theselectedelement = document.getElementById("mySelect");
    const option = document.createElement("option");
    option.value = thiscategory.toLowerCase();
    option.textContent = thiscategory;
    theselectedelement.appendChild(option);
  });
}

async function readselect(id) {
  let selectedValuesWithoutImage = [];
  let selectedwithImage = [];

  $(`#${id}`)
    .find(":selected")
    .each(function () {
      const value = $(this).val();
      const image = $(this).data("image");

      if (!image) {
        theSelectedneeded = {
          value: value,
          image: null,
        };
        selectedwithImage.push(theSelectedneeded);
      } else {
        theSelectedneeded = {
          value: value,
          image: image,
        };
        selectedwithImage.push(theSelectedneeded);
      }
    });
  return selectedwithImage;
}

async function readselectnoImage(id) {
  let selectedValuesWithoutImage = [];
  let selectedwithImage = [];

  $(`#${id}`)
    .find(":selected")
    .each(function () {
      const value = $(this).val();
      const image = $(this).data("image");
      selectedValuesWithoutImage.push(value);
    });
  return selectedValuesWithoutImage;
}
let thenewsubcategories = [
  "Business Law",
  "Corporate Law",
  "Civil Litigation",
  "Dispute Resolution / Mediation / Arbitration",
  "Criminal Law",
  "Employment Law",
  "Labour Law",
  "Family Law",
  "Matrimonial Law",
  "Estate Planning",
  "Probate Law",
  "Elder Law",
  "Personal Injury Law",
  "Insurance Law",
  "Real Estate Law",
  "Property Law",
  "Banking Law",
  "Financial Law",
  "Tax Law",
  "Intellectual Property (IP) Law",
  "Technology Law",
  "Immigration Law",
  "International Law",
  "Constitutional Law",
  "Human Rights Law",
  "Public Interest Law",
  "Environmental Law",
  "Energy Law",
  "Natural Resources Law",
  "Regulatory Law",
  "Administrative Law",
  "Government Law",
  "Health Law",
  "Medical Law",
  "Science & Research Law",
  "Transportation Law",
  "Maritime / Admiralty Law",
  "Military Law",
  "Security / National Security Law",
  "Media Law",
  "Entertainment Law",
  "Sports Law",
  "Recreational Law",
  "Niche & Emerging Legal Areas",
];

async function addSubCategories(thetargetCategories) {
  let selectedValuesWithoutImage = [];

  $("#mySelect")
    .find(":selected")
    .each(function () {
      const value = $(this).val();
      const image = $(this).data("image");

      if (!image) {
        selectedValuesWithoutImage.push(value);
      }
    });

  console.log("🦸🏽‍♂️🦸🏽‍♂️🦸🏽‍♂️🦸🏽‍♂️🦸🏽‍♂️🦸🏽‍♂️", selectedValuesWithoutImage);
  let targetCategories = selectedValuesWithoutImage;
  if (targetCategories.length <= 0) {
    targetCategories = thetargetCategories;
  }
  /*
    [
    "Business & Corporate Law"
    ];
    */
  const selectedAreaOfExpertise = thenewsubcategories;

  console.log("🔐🔐🔐🔐🔐🔐🔐💧💧💧", selectedAreaOfExpertise);

  selectedAreaOfExpertise.forEach((thissubcategory) => {
    theselectedelement = document.getElementById("subSelect");
    const option = document.createElement("option");
    option.value = thissubcategory.toLowerCase();
    option.textContent = thissubcategory;
    theselectedelement.appendChild(option);
  });
}

async function generateUniqueId() {
  const timestamp = Date.now().toString(36); // base36 for compactness
  const random = Math.random().toString(36).substring(2, 10); // remove "0." and take 8 chars
  return `${timestamp}-${random}`;
}

document.addEventListener("DOMContentLoaded", async () => {
  // scroll to the saved position
  const savedScrollY = localStorage.getItem("scrollY-ps");

  console.log("Retrieved saved scroll position:", savedScrollY);

  if (savedScrollY !== null) {
    // Make sure we convert the string to a number
    const scrollPosition = parseInt(savedScrollY, 10);

    console.log("Restoring to position:", scrollPosition);

    // Use setTimeout to ensure the page has time to render
    // before attempting to scroll
    setTimeout(function () {
      window.scrollTo({
        top: scrollPosition,
        behavior: "auto", // Use "auto" for immediate scrolling
      });

      console.log(
        "Scroll restoration complete. Current position:",
        window.scrollY
      );
    }, 100);

    // Optional: Clear the saved position after restoring
    // localStorage.removeItem("scrollY-ps");
  }

  const minRateInput = document.getElementById("minRate");
  const maxRateInput = document.getElementById("maxRate");

  minRateInput.addEventListener("change", () => {
    const minValue = parseFloat(minRateInput.value);

    if (!isNaN(minValue)) {
      // Set min attribute for maxRate input
      maxRateInput.min = minValue + 1; // or just `minValue` if you allow equal
    }
  });

  minRateInput.addEventListener("change", () => {
    const minValue = parseFloat(minRateInput.value);

    if (!isNaN(minValue)) {
      const newMinForMax = minValue + 1;
      maxRateInput.min = newMinForMax;

      if (parseFloat(maxRateInput.value) < newMinForMax) {
        maxRateInput.value = newMinForMax;
      }
    }
  });

  maxRateInput.addEventListener("change", () => {
    if (parseFloat(maxRateInput.value) <= parseFloat(minRateInput.value)) {
      maxRateInput.setCustomValidity("Max rate must be greater than min rate");
    } else {
      maxRateInput.setCustomValidity("");
    }
  });

  // Get all uploadcare inputs
  const inputs = document.querySelectorAll("[role=uploadcare-uploader]");
  let theUrls;

  inputs.forEach((input, index) => {
    const widget = uploadcare.Widget(input);
    const uploaderId = input.id; // Capture the uploader's ID here

    widget.onUploadComplete(async (info) => {
      document.getElementById("theloadingwait").style.display = "flex";

      if (info.uuid.includes("~")) {
        try {
          const group = await uploadcare.loadFileGroup(info.uuid);

          const fileInfos = await group.files(); // ← correct way

          const urls = await Promise.all(
            fileInfos.map((file) =>
              typeof file.then === "function"
                ? file.then((f) => f.cdnUrl)
                : file.cdnUrl
            )
          );

          console.log("✅ Final URLs:", urls);
          theUrls = urls;
        } catch (error) {
          console.error("❌ Failed to load file group:", error);
        }
      } else {
        console.log("Upload info:", info); // Log the entire info object to see its structure
        console.log("💧🌮🔐🧑🏿‍❤️‍💋‍🧑🏾👩🏽‍💻🧑🏿‍❤️‍💋‍🧑🏽", uploaderId);

        const fileUrl = info.cdnUrl; // The base URL without file extension
        const fileName = info.name; // Check if 'original' exists
        const fullFileUrl = fileName ? fileUrl + fileName : fileUrl;

        let theuploadFile = await uploadFile(fileUrl, fileName);
        console.log("🐇🐇🐇🐇", theuploadFile);
        let thejsonfile = JSON.parse(theuploadFile);
        url = thejsonfile.url;
      }
      let updateemail = localStorage.getItem("userEmail");
      let dbuser = await getItem(updateemail);
      let mongodbuser = JSON.parse(dbuser);
      let userData = mongodbuser.data.body;
      let jsonUser = JSON.parse(JSON.parse(userData));
      // Construct the full URL if 'original' is present
      if (uploaderId == "uploadfile") {
        let thedata = {
          "profile video": url,
        };
        let theupdatedItem = await updateItem(updateemail, thedata);
        console.log(theupdatedItem);
        updatedom = await updateallthefields(updateemail);
        document.getElementById("thesavealertshow").style.display = "flex";
        let hidepopup = await delaysomeminutes();
      }

      if (uploaderId == "uploadtestimonials") {
        let thetestimonials = jsonUser["client video testimonials"] ?? [];
        let thisuniqueId = await generateUniqueId();
        let thisvideo = {
          url: url,
          "unique id": thisuniqueId,
        };
        thetestimonials.push(thisvideo);
        let thedata = {
          "client video testimonials": thetestimonials,
        };
        let theupdatedItem = await updateItem(updateemail, thedata);
        console.log(theupdatedItem);
        location.reload();
        updatedom = await updateallthefields(updateemail);
        document.getElementById("thesavealertshow").style.display = "flex";
        let hidepopup = await delaysomeminutes();
      }

      if (uploaderId == "casestudywalkthroughuploader") {
        let casestudywalkthroughs = jsonUser["case study walkthroughs"] ?? [];
        let thisuniqueId = await generateUniqueId();
        let thiscasestudy = {
          url: url,
          "unique id": thisuniqueId,
        };
        casestudywalkthroughs.push(thiscasestudy);
        let thedata = {
          "case study walkthroughs": casestudywalkthroughs,
        };
        let theupdatedItem = await updateItem(updateemail, thedata);
        console.log(theupdatedItem);
        location.reload();
        updatedom = await updateallthefields(updateemail);
        document.getElementById("thesavealertshow").style.display = "flex";
        let hidepopup = await delaysomeminutes();
      }

      if (uploaderId == "certicateUpload") {
        let thelawyercerticates = jsonUser["certificates"] ?? [];
        let thisuniqueId = await generateUniqueId();

        // Handle single file upload
        if (!info.uuid.includes("~")) {
          let thiscertificates = {
            url: url,
            "unique id": thisuniqueId,
          };
          thelawyercerticates.push(thiscertificates);
        } else if (theUrls && Array.isArray(theUrls)) {
          // Handle file group (multiple files)
          for (let fileUrl of theUrls) {
            let thiscertificates = {
              url: fileUrl,
              "unique id": await generateUniqueId(),
            };
            thelawyercerticates.push(thiscertificates);
          }
        }

        let thedata = {
          certificates: thelawyercerticates,
        };
        let theupdatedItem = await updateItem(updateemail, thedata);
        console.log(theupdatedItem);
        reloadWindowAndPreserveScroll();
        updatedom = await updateallthefields(updateemail);
        document.getElementById("thesavealertshow").style.display = "flex";
        await delaysomeminutes();

        // for (let eachurl in thelawyercerticates) {
        //   let theUserContainer = document.querySelectorAll(".slide-img");

        //   theUserContainer.forEach((e) => {
        //     let containusermain = e.getAttribute("itemindex");
        //     if (containusermain != `cert${eachurl}`) {
        //       let certcontain = document.createElement("div");
        //       certcontain.classList.add("slide-img", "2ne", "w-slide");
        //       certcontain.setAttribute("itemindex", `cert${eachurl}`);
        //       certcontain.style.maxWidth = "300px";
        //       let theimageWrap = document.createElement("div");
        //       /*
        //         theimageWrap.style.backgroundImage = `url('${mongodbcertificates[eachcert]}')`;
        //         theimageWrap.style.backgroundSize = "cover"; // Makes the image cover the div
        //         theimageWrap.style.backgroundPosition = "center"; // Centers the image
        //         */
        //       theimageWrap.classList.add("img-wrap", "certificatewrap");
        //       let thecertimage = document.createElement("img");
        //       thecertimage.classList.add("imagyclass");
        //       thecertimage.src = thelawyercerticates[eachurl];
        //       let certdelete = document.createElement("img");
        //       certdelete.classList.add("deletebriefs");
        //       certdelete.src =
        //         "https://cdn.prod.website-files.com/67e360f08a15ef65d8814b41/67f6dfbc2b16d9977c85eeb2_Group%201597881168.png";
        //       certdelete.setAttribute("itemindex", `cert${eachurl}`);

        //       certdelete.addEventListener("click", async () => {
        //         let thedeleteButton = event.target;
        //         let todeleteindex = thedeleteButton.getAttribute("itemindex");
        //         let elements = document.querySelectorAll(".slide-img.\\32 ne");
        //         thelawyercerticates.splice(eachurl, 1);

        //         elements.forEach((e) => {
        //           let theelemattr = e.getAttribute("itemindex");
        //           if (theelemattr == todeleteindex) {
        //             document
        //               .getElementById("thecertimaincontainer")
        //               .removeChild(e);
        //           }
        //         });
        //       });

        //       theimageWrap.append(certdelete, thecertimage);
        //       certcontain.append(theimageWrap);
        //       document
        //         .getElementById("thecertimaincontainer")
        //         .append(certcontain);
        //     }
        //   });
        // }
        //console.log(`Uploader ${index + 1} uploaded:`, fileName);
        //console.log(`File name with extension:`, fileName);

        // Optional: send to backend or store in hidden input
        // Example: document.querySelector(`#file-url-${index}`).value = fullFileUrl;
        // Example: document.querySelector(`#file-name-${index}`).value = fileName;
      }

      if (uploaderId == "uploadprofileimage") {
        let thedata = {
          "profile image": url,
        };
        let theupdatedItem = await updateItem(updateemail, thedata);
        console.log(theupdatedItem);
        updatedom = await updateallthefields(updateemail);
        document.getElementById("thesavealertshow").style.display = "flex";
        let hidepopup = await delaysomeminutes();
      }

      if (uploaderId == "uploadbannerimage") {
        let thedata = {
          "profile banner": url,
        };
        let theupdatedItem = await updateItem(updateemail, thedata);
        console.log(theupdatedItem);
        updatedom = await updateallthefields(updateemail);
        document.getElementById("thesavealertshow").style.display = "flex";
        let hidepopup = await delaysomeminutes();
      }
    });
  });
});

async function getUserautoGeoLocation() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLongitude = position.coords.longitude;
          const userLat = position.coords.latitude;

          console.log("Latitude:", userLat || 0);
          console.log("Longitude:", userLongitude || 0);
          const thelocationdata = {
            lat: userLat,
            long: userLongitude,
            city: "",
            province: "",
            postalcode: "",
            country: "",
          };

          resolve(thelocationdata);
        },
        (error) => {
          console.warn("Geolocation error:", error.message);
          const thelocationdata = {
            lat: 0,
            long: 0,
            city: "",
            province: "",
            postalcode: "",
            country: "",
          };

          resolve(thelocationdata);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
      const thelocationdata = {
        lat: 0,
        long: 0,
        city: "",
        province: "",
        postalcode: "",
        country: "",
      };

      resolve(thelocationdata);
    }
  });
}

$(document).ready(async function () {
  let themember;
  let themembership;

  document
    .getElementById("thepreviewlinkinput")
    .addEventListener("change", function () {
      document
        .getElementById("thepreviewdisplay")
        .setAttribute(
          "href",
          "https://lawggle-b065c1-7854620dcb65bd8d14aa462e.webflow.io/"
        );
      document.getElementById("thepreviewtestcont").style.display = "flex";
    });
  //save data in mongodb

  document.querySelectorAll(".selectyesno").forEach((parent) => {
    const children = parent.querySelectorAll("*");

    children.forEach((child) => {
      child.addEventListener("click", (event) => {
        // Prevent any default Webflow handling
        // event.stopPropagation(); // optional
        // event.preventDefault();  // optional

        // Create and dispatch a custom event on the parent
        const relay = new CustomEvent("child-click", {
          detail: {
            originalEvent: event,
            child: child,
          },
          bubbles: false, // to avoid unintended propagation
        });

        parent.dispatchEvent(relay);
      });
    });

    parent.addEventListener("child-click", async (e) => {
      console.log("Parent:", parent.id);
      let buttonId = parent.id;

      if (buttonId == "freeconsulationyes") {
        document.getElementById("theloadingwait").style.display = "flex";
        let updateemail = localStorage.getItem("userEmail");
        let savedata = {
          "free consultation": "yes",
        };
        console.log(updateemail, savedata);
        updateduser = await updateItem(updateemail, savedata);
        updatedom = await updateallthefields(updateemail);
        document.getElementById("thesavealertshow").style.display = "flex";
        let todelay = await delaysomeminutes();
      }
      if (buttonId == "freeconsultationno") {
        document.getElementById("theloadingwait").style.display = "flex";
        let updateemail = localStorage.getItem("userEmail");
        let savedata = {
          "free consultation": "no",
        };
        console.log(updateemail, savedata);
        updateduser = await updateItem(updateemail, savedata);
        updatedom = await updateallthefields(updateemail);
        document.getElementById("thesavealertshow").style.display = "flex";
        let todelay = await delaysomeminutes();
      }
      if (buttonId == "offercontingencyyes") {
        document.getElementById("theloadingwait").style.display = "flex";
        let updateemail = localStorage.getItem("userEmail");
        let savedata = {
          "offer contingency": "yes",
        };
        console.log(updateemail, savedata);
        updateduser = await updateItem(updateemail, savedata);
        updatedom = await updateallthefields(updateemail);
        document.getElementById("thesavealertshow").style.display = "flex";
        let todelay = await delaysomeminutes();
      }
      if (buttonId == "offercontingencyno") {
        document.getElementById("theloadingwait").style.display = "flex";
        let updateemail = localStorage.getItem("userEmail");
        let savedata = {
          "offer contingency": "no",
        };
        console.log(updateemail, savedata);
        updateduser = await updateItem(updateemail, savedata);
        updatedom = await updateallthefields(updateemail);
        document.getElementById("thesavealertshow").style.display = "flex";
        let todelay = await delaysomeminutes();
      }
      if (buttonId == "probonoyes") {
        document.getElementById("theloadingwait").style.display = "flex";
        let updateemail = localStorage.getItem("userEmail");
        let savedata = {
          "community pro bono work": "yes",
        };
        console.log(updateemail, savedata);
        updateduser = await updateItem(updateemail, savedata);
        updatedom = await updateallthefields(updateemail);
        document.getElementById("thesavealertshow").style.display = "flex";
        let todelay = await delaysomeminutes();
      }
      if (buttonId == "probonono") {
        document.getElementById("theloadingwait").style.display = "flex";
        let updateemail = localStorage.getItem("userEmail");
        let savedata = {
          "community pro bono work": "no",
        };
        console.log(updateemail, savedata);
        updateduser = await updateItem(updateemail, savedata);
        updatedom = await updateallthefields(updateemail);
        document.getElementById("thesavealertshow").style.display = "flex";
        let todelay = await delaysomeminutes();
      }
    });
  });

  let savethemapdetails = document.getElementById("savethemapdetails");

  if (savethemapdetails) {
    savethemapdetails.addEventListener("click", async () => {
      console.log("clicked", savethemapdetails);

      document.getElementById("theloadingwait").style.display = "flex";
      let thisUserId = localStorage.getItem("userEmail");
      let dbuser = await getItem(thisUserId);
      let mongodbuser = JSON.parse(dbuser);
      let userData = mongodbuser.data.body;
      let jsonUser = JSON.parse(JSON.parse(userData));
      let address = jsonUser["address"];

      let toChangeData = { address: theuserGeolocation };
      console.log(toChangeData);
      let updateduser = await updateItem(thisUserId, toChangeData);
      let updatenewestdom = await updateallthefields(thisUserId);
      document.getElementById("thesavealertshow").style.display = "flex";
      let todelay = await delaysomeminutes();
    });
  }

  mapboxgl.accessToken =
    "pk.eyJ1IjoibGF3Z2dsZSIsImEiOiJja2RraDU0ZnYwb2lqMnhwbWw2eXVrMjNrIn0.ShD8eyKTv7exWDKR44bSoA";

  const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    types: "address,place,postcode",
    placeholder: "Search for address",
    mapboxgl: mapboxgl,
  });

  geocoder.addTo("#geocoder");

  // Optional: Get coordinates on selection
  geocoder.on("result", (e) => {
    const result = e.result;

    const coords = result.center;
    const fullAddress = result.place_name;

    // Helper function to get a context value by id prefix
    const getContext = (context, type) => {
      const item = context.find((c) => c.id.startsWith(type));
      return item ? item.text : "";
    };

    const context = result.context || [];

    // Sometimes the street address is in result.address
    const addressNumber = result.address || "";
    const street = result.text || "";
    const address = addressNumber ? `${addressNumber} ${street}` : street;

    const city = getContext(context, "place");
    const province = getContext(context, "region");
    const country = getContext(context, "country");
    const postalCode = getContext(context, "postcode");

    theuserGeolocation = {
      lat: coords[1],
      long: coords[0],
      city: city,
      province: province,
      postalcode: postalCode,
      country: country,
    };

    console.log({
      coords,
      address,
      city,
      province,
      country,
      postalCode,
    });
  });

  let deleteButtons = document.querySelectorAll(".deletebuttons");

  deleteButtons.forEach((thisbutton) => {
    thisbutton.addEventListener("click", async (event) => {
      let button = event.target;
      let buttonIdentifier = button.getAttribute("sect");
      let theindextodeletetext = document
        .getElementById("deletetheeducationcontainer")
        .getAttribute("itemindex");
      let theindextodelete = Number(theindextodeletetext);

      if (buttonIdentifier == "education") {
        let thisUserId = localStorage.getItem("userEmail");
        let dbuser = await getItem(thisUserId);
        let mongodbuser = JSON.parse(dbuser);
        let userData = mongodbuser.data.body;
        let jsonUser = JSON.parse(JSON.parse(userData));
        let savededucation = jsonUser["AllEducation"]
          ? jsonUser["AllEducation"]
          : ["education"];
        savededucation.splice(theindextodelete, 1);

        console.log(savededucation);

        document.getElementById("theloadingwait").style.display = "flex";
        let thefirsteducationObject = alleducation[0];
        let educationsave = "";
        if (
          thefirsteducationObject != undefined &&
          thefirsteducationObject != null
        ) {
          educationsave = thefirsteducationObject.education;
        } else {
          educationsave = "";
        }
        let updateemail = localStorage.getItem("userEmail");
        let savedata = {
          education: educationsave,
          AllEducation: savededucation,
        };
        console.log(updateemail, savedata);
        updateduser = await updateItem(updateemail, savedata);
        updatedom = await updateallthefields(updateemail);
        document.getElementById("thesavealertshow").style.display = "flex";
        let todelay = await delaysomeminutes();
      }

      if (buttonIdentifier == "casewins") {
        let theindextodeletetext = document
          .getElementById("deletecasesmaindiv")
          .getAttribute("itemindex");
        let theindextodelete = Number(theindextodeletetext);

        console.log("🕌🕌🕌😄🏄🏽", typeof theindextodelete, theindextodelete);
        document.getElementById("theloadingwait").style.display = "flex";
        let thisUserId = localStorage.getItem("userEmail");
        let dbuser = await getItem(thisUserId);
        let mongodbuser = JSON.parse(dbuser);
        let userData = mongodbuser.data.body;
        let jsonUser = JSON.parse(JSON.parse(userData));
        let notablecasewins = jsonUser["notable case wins"];
        notablecasewins.splice(theindextodelete, 1);
        console.log("🦸🏽‍♂️🦸🏽‍♂️🦸🏽‍♂️", notablecasewins);

        let toChangeData = { "notable case wins": notablecasewins };
        console.log(toChangeData);
        let updateduser = await updateItem(thisUserId, toChangeData);
        location.reload();
        let updatenewestdom = await updateallthefields(thisUserId);
        document.getElementById("thesavealertshow").style.display = "flex";
        let todelay = await delaysomeminutes();
      }
      if (buttonIdentifier == "testimonials") {
        document.getElementById("theloadingwait").style.display = "flex";
        let updateemail = localStorage.getItem("userEmail");
        let theindextodelete = document
          .getElementById("deleteclientstestimonials")
          .getAttribute("itemindex");
        let thisUserId = localStorage.getItem("userEmail");
        let dbuser = await getItem(thisUserId);
        let mongodbuser = JSON.parse(dbuser);
        let userData = mongodbuser.data.body;
        let jsonUser = JSON.parse(JSON.parse(userData));
        let thetestimonials = jsonUser["client video testimonials"];
        let thisuniqueId = await generateUniqueId();
        thetestimonials.splice(theindextodelete, 1);

        let thedata = {
          "client video testimonials": thetestimonials,
        };

        let theupdatedItem = await updateItem(updateemail, thedata);
        console.log(theupdatedItem);
        location.reload();
        updatedom = await updateallthefields(updateemail);
        document.getElementById("thesavealertshow").style.display = "flex";
        let hidepopup = await delaysomeminutes();
      }
      if (buttonIdentifier == "mediapress") {
        let theindextodelete = document
          .getElementById("deleteclientstestimonials")
          .getAttribute("itemindex");
        document.getElementById("theloadingwait").style.display = "flex";
        let thisUserId = localStorage.getItem("userEmail");
        let dbuser = await getItem(thisUserId);
        let mongodbuser = JSON.parse(dbuser);
        let userData = mongodbuser.data.body;
        let jsonUser = JSON.parse(JSON.parse(userData));
        let mediapressbriefings = jsonUser["media press mentions"];

        mediapressbriefings.splice(theindextodelete, 1);

        let toChangeData = { "media press mentions": mediapressbriefings };
        console.log(toChangeData);
        let updateduser = await updateItem(thisUserId, toChangeData);
        location.reload();
        let updatenewestdom = await updateallthefields(thisUserId);
        document.getElementById("thesavealertshow").style.display = "flex";
        let todelay = await delaysomeminutes();
      }
      if (buttonIdentifier == "casestudy") {
        let theindextodelete = document
          .getElementById("casestudiesdeletecontainer")
          .getAttribute("itemindex");
        let updateemail = localStorage.getItem("userEmail");
        let dbuser = await getItem(updateemail);
        let mongodbuser = JSON.parse(dbuser);
        let userData = mongodbuser.data.body;
        let jsonUser = JSON.parse(JSON.parse(userData));
        let casestudywalkthroughs = jsonUser["case study walkthroughs"];
        let thisuniqueId = await generateUniqueId();
        casestudywalkthroughs.splice(theindextodelete, 1);

        let thedata = {
          "case study walkthroughs": casestudywalkthroughs,
        };
        let theupdatedItem = await updateItem(updateemail, thedata);
        console.log(theupdatedItem);
        location.reload();
        updatedom = await updateallthefields(updateemail);
        document.getElementById("thesavealertshow").style.display = "flex";
        let hidepopup = await delaysomeminutes();
      }
      if (buttonIdentifier == "qa") {
        let theindextodelete = document
          .getElementById("personalqacontainer")
          .getAttribute("itemindex");
        document.getElementById("theloadingwait").style.display = "flex";
        let thisUserId = localStorage.getItem("userEmail");
        let dbuser = await getItem(thisUserId);
        let mongodbuser = JSON.parse(dbuser);
        let userData = mongodbuser.data.body;
        let jsonUser = JSON.parse(JSON.parse(userData));
        let qaquestions = jsonUser["personal qa"];
        qaquestions.splice(theindextodelete, 1);

        let toChangeData = { "personal qa": qaquestions };
        console.log(toChangeData);
        let updateduser = await updateItem(thisUserId, toChangeData);
        location.reload();
        let updatenewestdom = await updateallthefields(thisUserId);
        document.getElementById("thesavealertshow").style.display = "flex";
        let todelay = await delaysomeminutes();
      }
      if (buttonIdentifier == "certificates") {
        let theindextodelete = document
          .getElementById("certdeletecontainer")
          .getAttribute("itemindex");
        let thisUserId = localStorage.getItem("userEmail");

        let dbuser = await getItem(thisUserId);
        let mongodbuser = JSON.parse(dbuser);
        let userData = mongodbuser.data.body;
        let jsonUser = JSON.parse(JSON.parse(userData));
        let thecurrentCerts = jsonUser["certificates"];
        thecurrentCerts.splice(theindextodelete, 1);

        let toChangeData = { certificates: thecurrentCerts };
        console.log(toChangeData);
        let updateduser = await updateItem(thisUserId, toChangeData);
        location.reload();
        let updatenewestdom = await updateallthefields(thisUserId);
        document.getElementById("thesavealertshow").style.display = "flex";
        let todelay = await delaysomeminutes();
      }
    });
  });

  let switchButtons = document.querySelectorAll(".selectyesno");
  switchButtons.forEach((thisbutton) => {
    thisbutton.addEventListener("click", async (event) => {
      let button = event.target;
      let buttonId = button.id;

      if (buttonId == "freeconsulationyes") {
        document.getElementById("theloadingwait").style.display = "flex";
        let updateemail = localStorage.getItem("userEmail");
        let savedata = {
          "free consultation": "yes",
        };
        console.log(updateemail, savedata);
        updateduser = await updateItem(updateemail, savedata);
        updatedom = await updateallthefields(updateemail);
        document.getElementById("thesavealertshow").style.display = "flex";
        let todelay = await delaysomeminutes();
      }
      if (buttonId == "freeconsultationno") {
        document.getElementById("theloadingwait").style.display = "flex";
        let updateemail = localStorage.getItem("userEmail");
        let savedata = {
          "free consultation": "no",
        };
        console.log(updateemail, savedata);
        updateduser = await updateItem(updateemail, savedata);
        updatedom = await updateallthefields(updateemail);
        document.getElementById("thesavealertshow").style.display = "flex";
        let todelay = await delaysomeminutes();
      }
      if (buttonId == "offercontingencyyes") {
        document.getElementById("theloadingwait").style.display = "flex";
        let updateemail = localStorage.getItem("userEmail");
        let savedata = {
          "offer contingency": "yes",
        };
        console.log(updateemail, savedata);
        updateduser = await updateItem(updateemail, savedata);
        updatedom = await updateallthefields(updateemail);
        document.getElementById("thesavealertshow").style.display = "flex";
        let todelay = await delaysomeminutes();
      }
      if (buttonId == "offercontingencyno") {
        document.getElementById("theloadingwait").style.display = "flex";
        let updateemail = localStorage.getItem("userEmail");
        let savedata = {
          "offer contingency": "no",
        };
        console.log(updateemail, savedata);
        updateduser = await updateItem(updateemail, savedata);
        updatedom = await updateallthefields(updateemail);
        document.getElementById("thesavealertshow").style.display = "flex";
        let todelay = await delaysomeminutes();
      }
      if (buttonId == "probonoyes") {
        document.getElementById("theloadingwait").style.display = "flex";
        let updateemail = localStorage.getItem("userEmail");
        let savedata = {
          "community pro bono work": "yes",
        };
        console.log(updateemail, savedata);
        updateduser = await updateItem(updateemail, savedata);
        updatedom = await updateallthefields(updateemail);
        document.getElementById("thesavealertshow").style.display = "flex";
        let todelay = await delaysomeminutes();
      }
      if (buttonId == "probonono") {
        document.getElementById("theloadingwait").style.display = "flex";
        let updateemail = localStorage.getItem("userEmail");
        let savedata = {
          "community pro bono work": "no",
        };
        console.log(updateemail, savedata);
        updateduser = await updateItem(updateemail, savedata);
        updatedom = await updateallthefields(updateemail);
        document.getElementById("thesavealertshow").style.display = "flex";
        let todelay = await delaysomeminutes();
      }
    });
  });

  let saveButtons = document.querySelectorAll(".savethedtails");
  saveButtons.forEach((thisbutton) => {
    thisbutton.addEventListener("click", async (event) => {
      let button = event.target;
      let buttonIdentifier = button.getAttribute("sect");

      if (buttonIdentifier == "section1save") {
        let thisUserId = localStorage.getItem("userEmail");
        let dbuser = await getItem(thisUserId);
        let mongodbuser = JSON.parse(dbuser);
        let userData = mongodbuser.data.body;
        let jsonUser = JSON.parse(JSON.parse(userData));
        let savededucation = jsonUser["AllEducation"]
          ? jsonUser["AllEducation"]
          : [];

        document.getElementById("theloadingwait").style.display = "flex";
        let pronouns = await readselectnoImage("selectpronouns");
        let name = document.getElementById("firstlastname").value;
        let minhourlyRate = document.getElementById("minRate").value;
        let maxhourlyRate = document.getElementById("maxRate").value;
        let firmurl = document.getElementById("firmurl").value;
        let expertCategory = await readselectnoImage("mySelect");
        let expertSubCategory = await readselectnoImage("subSelect");
        let thefirsteducationObject = alleducation[0];
        let educationsave = "";
        if (
          thefirsteducationObject != undefined &&
          thefirsteducationObject != null
        ) {
          educationsave = thefirsteducationObject.education;
        } else {
          educationsave = "";
        }
        let updateemail = localStorage.getItem("userEmail");
        let savedata = {
          pronouns: pronouns,
          name: name,
          "min hourly rate": minhourlyRate,
          "max hourly rate": maxhourlyRate,
          "firm url": firmurl,
          "area of expertise": expertSubCategory,
          education: educationsave,
          AllEducation: [...alleducation, ...savededucation],
        };
        console.log(updateemail, savedata);
        updateduser = await updateItem(updateemail, savedata);
        updatedom = await updateallthefields(updateemail);
        document.getElementById("thesavealertshow").style.display = "flex";
        let todelay = await delaysomeminutes();
      }
      if (buttonIdentifier == "section2save") {
        document.getElementById("theloadingwait").style.display = "flex";
        let thisUserId = localStorage.getItem("userEmail");
        let dbuser = await getItem(thisUserId);
        let mongodbuser = JSON.parse(dbuser);
        let userData = mongodbuser.data.body;
        let jsonUser = JSON.parse(JSON.parse(userData));
        let notablecasewins = jsonUser["notable case wins"] ?? [];
        let caseTitle = document.getElementById("casewinstitle").value;
        let caseDescription = document.getElementById(
          "casewinsdescription"
        ).value;
        if (caseTitle && caseDescription) {
          theuniqueId = await generateUniqueId();
          let thiscase = {
            uniqueId: theuniqueId,
            title: caseTitle,
            description: caseDescription,
          };
          notablecasewins.push(thiscase);
          let toChangeData = { "notable case wins": notablecasewins };
          console.log(toChangeData);
          let updateduser = await updateItem(thisUserId, toChangeData);
          let updatenewestdom = await updateallthefields(thisUserId);
          document.getElementById("thesavealertshow").style.display = "flex";
          let todelay = await delaysomeminutes();
        } else {
        }
      }
      if (buttonIdentifier == "sectionhobbysave") {
        document.getElementById("theloadingwait").style.display = "flex";
        let thisUserId = localStorage.getItem("userEmail");
        let dbuser = await getItem(thisUserId);
        let mongodbuser = JSON.parse(dbuser);
        let userData = mongodbuser.data.body;
        let jsonUser = JSON.parse(JSON.parse(userData));
        let interestsHobbies = jsonUser["interests and hobbies"] ?? [];
        let interestOrHobby = document.getElementById("interestedinput").value;
        if (interestOrHobby) {
          theuniqueId = await generateUniqueId();
          let thiscase = {
            uniqueId: theuniqueId,
            title: interestOrHobby,
          };
          interestsHobbies.push(thiscase);
          let toChangeData = { "interests and hobbies": interestsHobbies };
          console.log(toChangeData);
          let updateduser = await updateItem(thisUserId, toChangeData);
          let updatenewestdom = await updateallthefields(thisUserId);
          document.getElementById("thesavealertshow").style.display = "flex";
          let todelay = await delaysomeminutes();
        } else {
        }
      }

      if (buttonIdentifier == "section3save") {
        document.getElementById("theloadingwait").style.display = "flex";
        let thisUserId = localStorage.getItem("userEmail");
        let dbuser = await getItem(thisUserId);
        let mongodbuser = JSON.parse(dbuser);
        let userData = mongodbuser.data.body;
        let jsonUser = JSON.parse(JSON.parse(userData));
        let mediapressbriefings = jsonUser["media press mentions"] ?? [];
        let mediapresslink = document.getElementById(
          "thepreviewlinkinput"
        ).value;
        let theuniqueId = await generateUniqueId();
        let thismediapressdata = {
          uniqueId: theuniqueId,
          url: mediapresslink,
        };
        mediapressbriefings.push(thismediapressdata);
        let toChangeData = { "media press mentions": mediapressbriefings };
        console.log(toChangeData);
        let updateduser = await updateItem(thisUserId, toChangeData);
        reloadWindowAndPreserveScroll();
        let updatenewestdom = await updateallthefields(thisUserId);
        document.getElementById("thesavealertshow").style.display = "flex";
        let todelay = await delaysomeminutes();
      } else {
      }
      if (buttonIdentifier == "section4save") {
        document.getElementById("theloadingwait").style.display = "flex";
        let thisUserId = localStorage.getItem("userEmail");
        let dbuser = await getItem(thisUserId);
        let mongodbuser = JSON.parse(dbuser);
        let userData = mongodbuser.data.body;
        let jsonUser = JSON.parse(JSON.parse(userData));
        let qaquestions = jsonUser["personal qa"] ?? [];
        let qaquiz = document.getElementById("theqaquizinput").value;
        let qaanswer = document.getElementById("qaanswerinput").value;
        if (qaanswer && qaquiz) {
          let theuniqueId = await generateUniqueId();
          let thisqadata = {
            uniqueId: theuniqueId,
            title: qaquiz,
            description: qaanswer,
          };
          qaquestions.push(thisqadata);
          let toChangeData = { "personal qa": qaquestions };
          console.log(toChangeData);
          let updateduser = await updateItem(thisUserId, toChangeData);
          let updatenewestdom = await updateallthefields(thisUserId);
          document.getElementById("thesavealertshow").style.display = "flex";
          let todelay = await delaysomeminutes();
        }
      }
      if (buttonIdentifier == "section5save") {
        document.getElementById("theloadingwait").style.display = "flex";
        let thisUserId = localStorage.getItem("userEmail");
        let lawyerlanguages = await readselect("thelanguage");
        // No need to handle the interests and hobbies here it's handled in sectionhobbysave
        // let theinterestsandhobbies = await readselectnoImage("HobbySelect");
        let thelawyercerticates = thecertificates;
        let awardText = document.getElementById("awardsrecognition").value;
        let awardList = awardText.split(/\r?\n/);
        let blogContributer = await readselectnoImage("BlogSelect");
        let clientcentricMisssionStatement = document.getElementById(
          "clientcentricMission"
        ).value;
        let dynamicbio = document.getElementById("dynamicbio").value;

        let dbuser = await getItem(thisUserId);
        let mongodbuser = JSON.parse(dbuser);
        let userData = mongodbuser.data.body;
        let jsonUser = JSON.parse(JSON.parse(userData));
        let thecurrentCerts = jsonUser["certificates"] ?? [];

        let toChangeData = {
          languages: lawyerlanguages,
          // "interests and hobbies": theinterestsandhobbies,
          certificates: [...thelawyercerticates, ...thecurrentCerts],
          "awards recognition": awardList,
          "blog contributor": blogContributer,
          "client centric mission": clientcentricMisssionStatement,
          "dynamic bio": dynamicbio ? dynamicbio.trim() : "",
        };

        let updateduser = await updateItem(thisUserId, toChangeData);
        document.getElementById("thesavealertshow").style.display = "flex";
        let updatenewestdom = await updateallthefields(thisUserId);
        let todelay = await delaysomeminutes();
      }

      if (buttonIdentifier == "section6save") {
        let theinstitution = document.getElementById(
          "institutioneducation"
        ).value;
        let thedregree = document.getElementById("degreeinput").value;
        let thestartDate = document.getElementById("thestartdate").value;
        let theenddate = document.getElementById("endyear").value;

        if (
          theinstitution == undefined ||
          theinstitution == null ||
          theinstitution == ""
        ) {
          document.getElementById("messagetext").style.display = "block";
          setTimeout(() => {
            document.getElementById("messagetext").style.display = "none";
          }, 1500);
        } else {
          let youreducation = {
            education: theinstitution,
            degree: thedregree,
            "start date": thestartDate,
            "end date": theenddate,
          };
          alleducation.push(youreducation);

          if (
            theinstitution == null ||
            theinstitution == undefined ||
            theinstitution == ""
          ) {
            theinstitution = "N/A";
          }
          if (
            thedregree == null ||
            thedregree == undefined ||
            thedregree == ""
          ) {
            thedregree = "N/A";
          }
          if (
            thestartDate == null ||
            thestartDate == undefined ||
            thestartDate == ""
          ) {
            thestartDate = "N/A";
          }
          if (
            theenddate == null ||
            theenddate == undefined ||
            theenddate == ""
          ) {
            theenddate = "N/A";
          }

          let createeducation = createEducationBox(
            theinstitution,
            thedregree,
            thestartDate,
            theenddate,
            alleducation.length
          );
          document.getElementById("thesavededucation").style.display = "none";
        }
      }

      if (buttonIdentifier == "section7save") {
        let thisUserId = localStorage.getItem("userEmail");
        document.getElementById("theloadingwait").style.display = "flex";
        let socialMedias = [
          {
            platform: "Twitter",
            url: document.getElementById("thexlink").value,
          },
          {
            platform: "Linkedin",
            url: document.getElementById("thelinkedinlink").value,
          },
          {
            platform: "Facebook",
            url: document.getElementById("thefacebooklink").value,
          },
          {
            platform: "Instagram",
            url: document.getElementById("theinstagramlink").value,
          },
        ];

        let toChangeData = { "social media": socialMedias };
        console.log(toChangeData);
        let updateduser = await updateItem(thisUserId, toChangeData);
        let updatenewestdom = await updateallthefields(thisUserId);
        document.getElementById("thesavealertshow").style.display = "flex";
        let todelay = await delaysomeminutes();
      }

      if (buttonIdentifier == "sectionmapsave") {
      }
    });
  });

  //Memberstack read
  MemberStack.onReady.then(async function (member) {
    if (member.loggedIn) {
      const memberships = member.membership; // Array of memberships
      //const membershipNames = memberships.map(m => m.name).join(', ');
      console.log(member, memberships);
      memberemail = member.email;
      localStorage.setItem("userEmail", member.email);
      let thegetuser = await updateallthefields(memberemail, member);
    } else {
      console.log("Not logged in");
    }
  });

  async function configureSelect(theid, containerId, theselected) {
    const containerSelector = `${containerId}`;
    const style = document.createElement("style");
    style.innerHTML = `
        ${containerSelector} {
          overflow-x: hidden;
        }
    
        ${containerSelector} * {
          box-sizing: border-box;
        }
    
        ${containerSelector} .select2-container {
          max-width: 100%;
        }
    
        ${containerSelector} .select2-selection__rendered {
          display: flex !important;
          flex-wrap: wrap;
          align-items: center;
          gap: 6px;
        }
    
        ${containerSelector} .select2-selection__choice {
          padding-right: 8px !important;
          border-radius: 8px !important;
        }
      `;
    document.head.appendChild(style);

    let elementId = theid;
    $(`#${elementId}`).select2({
      templateResult: formatOption,
      templateSelection: formatOption, // optional: shows image inside selected tag too
      placeholder: "Select an option",
    });
    function formatOption(option) {
      if (!option.id) return option.text;

      const imageUrl = $(option.element).data("image");
      const text = option.text;

      if (!imageUrl) return text;

      return $(`
        <div style="display: flex; align-items: center; gap: 8px;">
          <img src="${imageUrl}" style="width: 20px; height: 20px; border-radius: 50%;" />
          <span>${text}</span>
        </div>
      `);
    }

    $(`#${elementId}`).on("change", function () {
      const selected = $(this).find(":selected");
      const elementId = this.id;
      selected.each(async function () {
        const value = $(this).val();
        const text = $(this).text();
        const image = $(this).data("image");

        if (elementId == "mySelect") {
          document.getElementById("subSelect").innerHTML = "";
          await addSubCategories(["Business & Corporate Law"]);
          await configureSelect("subSelect", "#thesubselectcontain");
        }

        console.log("Selected: ", {
          value,
          text,
          image,
        });
      });
    });
  }

  let selectelements = [
    {
      id: "selectpronouns",
      container: "#pronounselecthold",
      select: theLawyerPronouns,
    },
    { id: "mySelect", container: "#expertiseselecthold", select: 2 },
    {
      id: "subSelect",
      container: "#thesubselectcontain",
      select: theSubcategory2,
    },
    { id: "thelanguage", container: "#thelangy", select: "theLawyerPronouns" },
    {
      id: "HobbySelect",
      container: "#hobbyselecthold",
      select: "theLawyerPronouns",
    },
    {
      id: "BlogSelect",
      container: "#blogselecthold",
      select: "theLawyerPronouns",
    },
  ];

  async function fillallSelect() {
    //await addCategories()
    await addSubCategories(["Business & Corporate Law"]);
    await addlanguages();
    for (let element in selectelements) {
      configureSelect(
        selectelements[element].id,
        selectelements[element].container,
        selectelements[element].select
      );
    }
  }

  fillallSelect();
});

async function updateItem(email, data) {
  try {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      email: email,
      data: data,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const response = await fetch(
      "https://7zsvpwqz67pnyridifgchw7gda0sxhqy.lambda-url.eu-north-1.on.aws/updateitem",
      requestOptions
    );
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error("Error updating item:", error);
  }
}

//getitem function
async function getItem(email) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    email: email,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      "https://7zsvpwqz67pnyridifgchw7gda0sxhqy.lambda-url.eu-north-1.on.aws/getitem",
      requestOptions
    );
    const result = await response.text(); // or use .json() if you're returning JSON
    console.log(result);
    return result;
  } catch (error) {
    console.error("Error:", error);
  }
}

async function sendCreateItemRequest(data) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify(data);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  try {
    const response = await fetch(
      "https://7zsvpwqz67pnyridifgchw7gda0sxhqy.lambda-url.eu-north-1.on.aws/createitem",
      requestOptions
    );
    const result = await response.text(); // or response.json() if server returns JSON
    console.log(result);
  } catch (error) {
    console.error("Error:", error);
  }
}

async function uploadFile(url, name) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    fileUrl: url,
    fileName: name,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      "https://7zsvpwqz67pnyridifgchw7gda0sxhqy.lambda-url.eu-north-1.on.aws/upload-file",
      requestOptions
    );
    const result = await response.text();
    console.log(result);
    return result;
  } catch (error) {
    console.error("Upload error:", error);
    return { status: "error" };
  }
}

async function updateallthefields(email, member = {}) {
  try {
    let dbuser = await getItem(email);
    let mongodbuser = JSON.parse(dbuser);
    console.log("🤑🤑🤑🤑", mongodbuser.status, typeof mongodbuser.status);
    if (mongodbuser.status == "true") {
      console.log("user exist in database");
      let userData = mongodbuser.data.body;
      let jsonUser = JSON.parse(JSON.parse(userData));
      console.log("🧑🏿‍❤️‍💋‍🧑🏽🧑🏿‍❤️‍💋‍🧑🏽🧑🏿‍❤️‍💋‍🧑🏽🧑🏿‍❤️‍💋‍🧑🏽🧑🏿‍❤️‍💋‍🧑🏽👩🏽‍💻", jsonUser.name, jsonUser, typeof userData);
      const pageinputs = document.querySelectorAll("input");
      theCategory2 = jsonUser["expertise category"];
      theLawyerPronouns = jsonUser["theLawyerPronouns"];
      theSubcategory2 = jsonUser["area of expertise"];
      let alltheIDS = ["selectpronouns"];
      let languagelist = [];
      let lawyerlanguages = jsonUser["languages"];
      for (let eachlangy in lawyerlanguages) {
        languagelist.push(lawyerlanguages[eachlangy].value);
      }
      let awards = jsonUser["awards recognition"];
      document.getElementById("awardsrecognition").value = awards;
      let clientcentricMission = jsonUser["client centric mission"];
      document.getElementById("clientcentricMission").value =
        clientcentricMission;
      let dynamicBio = jsonUser["dynamic bio"];
      document.getElementById("dynamicbio").value = dynamicBio;
      let offerconsultation = jsonUser["free consultation"];

      let thegeolocationaddress = jsonUser["address"];

      if (
        thegeolocationaddress != null &&
        thegeolocationaddress != undefined &&
        thegeolocationaddress != ""
      ) {
        theuserGeolocation = thegeolocationaddress;
        let lati = thegeolocationaddress.lat;
        let longi = thegeolocationaddress.long;
        if (lati & longi) {
          let themapstart = mapBoxMap(lati, longi);

          getAddressFromCoords(lati, longi).then((addressText) => {
            // Instead of using addressText (full address), fetch city, province, country
            fetch(
              `https://api.mapbox.com/geocoding/v5/mapbox.places/${longi},${lati}.json?access_token=pk.eyJ1IjoibGF3Z2dsZSIsImEiOiJja2RraDU0ZnYwb2lqMnhwbWw2eXVrMjNrIn0.ShD8eyKTv7exWDKR44bSoA`
            )
              .then((res) => res.json())
              .then((data) => {
                const features = data.features[0]?.context || [];
                let city = "";
                let province = "";
                let country = "";

                features.forEach((item) => {
                  if (item.id.startsWith("place")) city = item.text;
                  if (item.id.startsWith("region")) province = item.text;
                  if (item.id.startsWith("country")) country = item.text;
                });

                // Fallback to main feature if context is missing
                if (!city && data.features[0]?.place_type.includes("place")) {
                  city = data.features[0].text;
                }
                if (
                  !province &&
                  data.features[0]?.place_type.includes("region")
                ) {
                  province = data.features[0].text;
                }
                if (
                  !country &&
                  data.features[0]?.place_type.includes("country")
                ) {
                  country = data.features[0].text;
                }

                const shortAddress = [city, province, country]
                  .filter(Boolean)
                  .join(", ");

                const geocoderInput = document.querySelector(
                  '.mapboxgl-ctrl-geocoder input[type="text"]'
                );
                if (geocoderInput) {
                  geocoderInput.value = shortAddress;
                }
              });
          });
        }
      } else {
        theuserGeolocation = await getUserautoGeoLocation();
        let lati = theuserGeolocation.lat;
        let longi = theuserGeolocation.long;
        if (lati & longi) {
          let themapstart = mapBoxMap(lati, longi);
        }
      }

      let theSocialMedias = jsonUser["social media"];
      if (theSocialMedias != null && theSocialMedias != undefined) {
        let linkedinObject = theSocialMedias[1];
        if (linkedinObject != null && linkedinObject != undefined) {
          let theurl = linkedinObject.url;

          if (theurl != null && theurl != undefined) {
            document.getElementById("thelinkedinlink").value = theurl;
            document.getElementById("linkedinnavigate").href = theurl;
          }
        }

        let twitterObject = theSocialMedias[0];
        if (twitterObject != null && twitterObject != undefined) {
          let theurl = twitterObject.url;

          if (theurl != null && theurl != undefined) {
            document.getElementById("thexlink").value = theurl;
            document.getElementById("thexnavigate").href = theurl;
          }
        }

        let facebookObject = theSocialMedias[2];
        if (facebookObject != null && facebookObject != undefined) {
          let theurl = facebookObject.url;

          if (theurl != null && theurl != undefined) {
            document.getElementById("thefacebooklink").value = theurl;
            document.getElementById("thefacebooknavigate").href = theurl;
          }
        }

        let instagramObject = theSocialMedias[3];
        if (instagramObject != null && instagramObject != undefined) {
          let theurl = instagramObject.url;

          if (theurl != null && theurl != undefined) {
            document.getElementById("theinstagramlink").value = theurl;
            document.getElementById("theinstagramnavigate").href = theurl;
          }
        }
      }
      let bannerImage = jsonUser["profile banner"];

      if (
        bannerImage != null &&
        bannerImage != "" &&
        bannerImage != undefined
      ) {
        let bannerMainImage = document.getElementById("thebannerimage");
        bannerMainImage.style.backgroundImage = `url(${bannerImage})`;
        bannerMainImage.style.backgroundSize = "cover";
        bannerMainImage.style.backgroundPosition = "center";
        bannerMainImage.style.backgroundRepeat = "no-repeat";
      }

      let theProfileImage = jsonUser["profile image"];

      if (
        theProfileImage != null &&
        theProfileImage != "" &&
        theProfileImage != undefined
      ) {
        let theprofyImage = document.getElementById("theprofileimage");
        theprofyImage.style.backgroundImage = `url(${theProfileImage})`;
        theprofyImage.style.backgroundSize = "cover";
        theprofyImage.style.backgroundPosition = "center";
        theprofyImage.style.backgroundRepeat = "no-repeat";
      }

      let allEducation = jsonUser["AllEducation"]
        ? jsonUser["AllEducation"]
        : jsonUser["education"];

      console.log("allEducation", allEducation);

      let thecaseslider5 = document.getElementById("educationCarrier");
      thecaseslider5.innerHTML = "";

      for (let eachEducation in allEducation) {
        let educationText = allEducation[eachEducation].education;
        if (
          educationText != "" &&
          educationText != null &&
          educationText != undefined
        ) {
          let thequizcarrier = document.createElement("div");
          thequizcarrier.classList.add("theqadiv");
          let headcarrier = document.createElement("div");
          headcarrier.classList.add("qaheader", "foreducation");
          //let headertext=document.createElement("p")
          //headertext.classList.add("qaheadertext")
          //headertext.innerText=questionsAndAnswers[eachquiz].question
          let qadelete = document.createElement("img");
          qadelete.classList.add("qaicons");
          qadelete.src =
            "https://cdn.prod.website-files.com/67e360f08a15ef65d8814b41/67f6dfbc2b16d9977c85eeb2_Group%201597881168.png";
          qadelete.setAttribute("itemindex", eachEducation);

          qadelete.addEventListener("click", async () => {
            let thedeleteButton = event.target;
            let todeleteindex = thedeleteButton.getAttribute("itemindex");
            let thedeletecontainer = document.getElementById(
              "deletetheeducationcontainer"
            );
            thedeletecontainer.style.display = "flex";
            thedeletecontainer.setAttribute("itemindex", todeleteindex);
          });
          let iconsHolder = document.createElement("div");
          iconsHolder.classList.add("qaiconsholder");
          let qaedit = document.createElement("img");
          qaedit.classList.add("qaicons");
          qaedit.src =
            "https://cdn.prod.website-files.com/67e360f08a15ef65d8814b41/67f6df9d8c1aed7f8f8c1fc7_Group%201597881167.png";
          qaedit.setAttribute("itemindex", eachEducation);

          qaedit.addEventListener("click", async () => {
            let theeditButton = event.target;
            let toeditindex = theeditButton.getAttribute("itemindex");
            let theeditcontainer = document.getElementById("editedededucation");
            theeditcontainer.style.display = "flex";
            theeditcontainer.setAttribute("itemindex", toeditindex);
          });

          let theeducationwrap = document.createElement("div");
          theeducationwrap.classList.add("wraptheelements");
          let educationheader = document.createElement("p");
          educationheader.classList.add("Institutionhead");
          educationheader.innerText = "Institution";
          let educationParagraph = document.createElement("p");
          educationParagraph.classList.add("theparagraph");
          let youreducation = allEducation[eachEducation].education;
          if (
            youreducation == "" ||
            youreducation == null ||
            youreducation == undefined
          ) {
            youreducation = "N/A";
          }
          educationParagraph.innerText = youreducation;
          theeducationwrap.append(educationheader, educationParagraph);

          let thedegreewrap = document.createElement("div");
          thedegreewrap.classList.add("wraptheelements");
          let degreeheader = document.createElement("p");
          degreeheader.classList.add("Institutionhead");
          degreeheader.innerText = "Degree";
          let degreeParagraph = document.createElement("p");
          degreeParagraph.classList.add("theparagraph");
          let yourdegree = allEducation[eachEducation].degree;
          if (
            yourdegree == "" ||
            yourdegree == null ||
            yourdegree == undefined
          ) {
            yourdegree = "N/A";
          }
          degreeParagraph.innerText = yourdegree;
          thedegreewrap.append(degreeheader, degreeParagraph);

          let allDatesWrap = document.createElement("div");
          allDatesWrap.classList.add("thedateswrap");

          let startdatewrap = document.createElement("div");
          startdatewrap.classList.add("wraptheelements");
          let startdateheader = document.createElement("p");
          startdateheader.classList.add("Institutionhead");
          startdateheader.innerText = "Start Year";
          let startdateParagraph = document.createElement("p");
          startdateParagraph.classList.add("theparagraph");
          let yourstartyear = (innerText =
            allEducation[eachEducation]["start date"]);
          if (
            yourstartyear == "" ||
            yourstartyear == null ||
            yourstartyear == undefined
          ) {
            yourstartyear = "N/A";
          }
          startdateParagraph.innerText = yourstartyear;
          startdatewrap.append(startdateheader, startdateParagraph);

          let enddatewrap = document.createElement("div");
          enddatewrap.classList.add("wraptheelements");
          let enddateheader = document.createElement("p");
          enddateheader.classList.add("Institutionhead");
          enddateheader.innerText = "End Year";
          let enddateParagraph = document.createElement("p");
          enddateParagraph.classList.add("theparagraph");
          let yourendyear = (innerText =
            allEducation[eachEducation]["start date"]);
          if (
            yourendyear == "" ||
            yourendyear == null ||
            yourendyear == undefined
          ) {
            yourendyear = "N/A";
          }
          enddateParagraph.innerText = yourendyear;
          enddatewrap.append(enddateheader, enddateParagraph);

          iconsHolder.append(qaedit, qadelete);
          headcarrier.append(iconsHolder);
          allDatesWrap.append(startdatewrap, enddatewrap);
          thequizcarrier.append(
            headcarrier,
            theeducationwrap,
            thedegreewrap,
            allDatesWrap
          );
          thecaseslider5.append(thequizcarrier);
        }
      }
      if (offerconsultation == "yes") {
        document.getElementById("offerconsultancyimageno").src =
          "https://cdn.prod.website-files.com/67e360f08a15ef65d8814b41/67f688109c8eaf330c0f0e34_icons8-unchecked-checkbox-50.png";
        document.getElementById("offerconsultancyimageyes").src =
          "https://cdn.prod.website-files.com/67e360f08a15ef65d8814b41/67f689ee9a1a8514a23f8919_icons8-checked-box-24.png";
      } else if (offerconsultation == "no") {
        document.getElementById("offerconsultancyimageno").src =
          "https://cdn.prod.website-files.com/67e360f08a15ef65d8814b41/67f689ee9a1a8514a23f8919_icons8-checked-box-24.png";
        document.getElementById("offerconsultancyimageyes").src =
          "https://cdn.prod.website-files.com/67e360f08a15ef65d8814b41/67f688109c8eaf330c0f0e34_icons8-unchecked-checkbox-50.png";
      }
      let offercontingency = jsonUser["offer contingency"];
      if (offercontingency == "yes") {
        document.getElementById("offercontingencyimageno").src =
          "https://cdn.prod.website-files.com/67e360f08a15ef65d8814b41/67f688109c8eaf330c0f0e34_icons8-unchecked-checkbox-50.png";
        document.getElementById("offercontingencyimageyes").src =
          "https://cdn.prod.website-files.com/67e360f08a15ef65d8814b41/67f689ee9a1a8514a23f8919_icons8-checked-box-24.png";
      } else if (offercontingency == "no") {
        document.getElementById("offercontingencyimageno").src =
          "https://cdn.prod.website-files.com/67e360f08a15ef65d8814b41/67f689ee9a1a8514a23f8919_icons8-checked-box-24.png";
        document.getElementById("offercontingencyimageyes").src =
          "https://cdn.prod.website-files.com/67e360f08a15ef65d8814b41/67f688109c8eaf330c0f0e34_icons8-unchecked-checkbox-50.png";
      }
      let probonowork = jsonUser["community pro bono work"];
      if (probonowork == "yes") {
        document.getElementById("probonoimageno").src =
          "https://cdn.prod.website-files.com/67e360f08a15ef65d8814b41/67f688109c8eaf330c0f0e34_icons8-unchecked-checkbox-50.png";
        document.getElementById("probonoimageyes").src =
          "https://cdn.prod.website-files.com/67e360f08a15ef65d8814b41/67f689ee9a1a8514a23f8919_icons8-checked-box-24.png";
      } else if (probonowork == "no") {
        document.getElementById("probonoimageno").src =
          "https://cdn.prod.website-files.com/67e360f08a15ef65d8814b41/67f689ee9a1a8514a23f8919_icons8-checked-box-24.png";
        document.getElementById("probonoimageyes").src =
          "https://cdn.prod.website-files.com/67e360f08a15ef65d8814b41/67f688109c8eaf330c0f0e34_icons8-unchecked-checkbox-50.png";
      }
      $(`#BlogSelect`).val(jsonUser["blog contributor"]).trigger("change");
      $(`#HobbySelect`)
        .val(jsonUser["interests and hobbies"])
        .trigger("change");
      $(`#thelanguage`).val(languagelist).trigger("change");
      $(`#selectpronouns`).val(jsonUser["pronouns"]).trigger("change");
      $(`#mySelect`).val(jsonUser["expertise category"]).trigger("change");
      document.getElementById("subSelect").innerHTML = "";
      let recreate = await addSubCategories("");
      $(`#subSelect`).val(jsonUser["area of expertise"]).trigger("change");

      // page inputs set initial values
      pageinputs.forEach((input) => {
        console.log(input.name, input.value);
        inputfor = input.getAttribute("inputfor");
        if (inputfor != undefined) {
          try {
            input.value = jsonUser[inputfor];
          } catch (e) {
            input.value = jsonUser[inputfor];
          }
        }
      });

      if (
        jsonUser["profile video"] != null &&
        jsonUser["profile video"] != undefined &&
        jsonUser["profile video"] != ""
      ) {
        document.getElementById("showcaseprofile").src =
          jsonUser["profile video"];
        document.getElementById("uploadfilesprompt").style.display = "none";
        document.getElementById("profileimagecontainer").style.display = "flex";
      } else {
        document.getElementById("uploadfilesprompt").style.display = "flex";
        //document.getElementById("profileimagecontainer").style.display="none"
      }

      let theusersHobbies = jsonUser["interests and hobbies"] ?? [];

      let thehobbyCarrier = document.getElementById("Hobbymaincontainer");
      thehobbyCarrier.innerHTML = "";
      thehobbyCarrier.classList.remove("hide-container");

      if (theusersHobbies.length > 0) {
        for (let thehobby of theusersHobbies) {
          console.log(thehobby);
          theHobbycontainer = document.createElement("div");
          theHobbycontainer.classList.add("theqadiv");
          thehobbyheader = document.createElement("div");
          thehobbyheader.classList.add("qaheader");
          let thehobbyiconholder = document.createElement("div");
          thehobbyiconholder.classList.add("qaiconsholder");
          thehobbyname = document.createElement("p");
          thehobbyname.classList.add("qaheadertext");
          thehobbyname.innerText = thehobby.title;
          hobbydeleteicon = document.createElement("img");
          hobbydeleteicon.src =
            "https://cdn.prod.website-files.com/67e360f08a15ef65d8814b41/67f6dfbc2b16d9977c85eeb2_Group%201597881168.png";

          thehobbyiconholder.append(hobbydeleteicon);
          thehobbyheader.append(thehobbyname, thehobbyiconholder);
          theHobbycontainer.append(thehobbyheader);
          thehobbyCarrier.append(theHobbycontainer);
        }
      }

      let caseWins = jsonUser["notable case wins"] ?? [];
      if (caseWins.length > 0) {
        caseWins <= 3
          ? $("#case-wins-error-text").hide()
          : $("#case-wins-error-text").show();
        caseWins > 3 ? $("#save-cases").hide() : $("#save-cases").show();

        let thecaseslider = document.getElementById("casewinsContainer");
        thecaseslider.innerHTML = "";
        for (let eachcase in caseWins) {
          console.log(eachcase);
          let thequizcarrier = document.createElement("div");
          thequizcarrier.classList.add("theqadiv");
          let headcarrier = document.createElement("div");
          headcarrier.classList.add("qaheader");
          let headertext = document.createElement("p");
          headertext.classList.add("qaheadertext");
          headertext.innerText = caseWins[eachcase].title;
          let qadelete = document.createElement("img");
          qadelete.classList.add("qaicons");
          qadelete.src =
            "https://cdn.prod.website-files.com/67e360f08a15ef65d8814b41/67f6dfbc2b16d9977c85eeb2_Group%201597881168.png";
          qadelete.setAttribute("itemindex", eachcase);

          qadelete.addEventListener("click", async () => {
            let thedeleteButton = event.target;
            let todeleteindex = thedeleteButton.getAttribute("itemindex");
            let thedeletecontainer =
              document.getElementById("deletecasesmaindiv");
            thedeletecontainer.style.display = "flex";
            thedeletecontainer.setAttribute("itemindex", todeleteindex);
          });

          let iconsHolder = document.createElement("div");
          iconsHolder.classList.add("qaiconsholder");
          let qaedit = document.createElement("img");
          qaedit.classList.add("qaicons");
          qaedit.src =
            "https://cdn.prod.website-files.com/67e360f08a15ef65d8814b41/67f6df9d8c1aed7f8f8c1fc7_Group%201597881167.png";

          qaedit.setAttribute("itemindex", eachcase);

          qaedit.addEventListener("click", async () => {
            let theeditButton = event.target;
            let toeditindex = theeditButton.getAttribute("itemindex");
            let theeditcontainer = document.getElementById("theeditcases");
            theeditcontainer.style.display = "flex";
            theeditcontainer.setAttribute("itemindex", toeditindex);
          });

          let qaanswer = document.createElement("p");
          qaanswer.classList.add("qapragraph");
          qaanswer.innerText = caseWins[eachcase].description;
          iconsHolder.append(qaedit, qadelete);
          headcarrier.append(headertext, iconsHolder);
          thequizcarrier.append(headcarrier, qaanswer);
          thecaseslider.append(thequizcarrier);
        }
      } else {
        let thecaseslider = document.getElementById("casewinsContainer");
        thecaseslider.innerHTML = "";
      }

      let clientTestimonials = jsonUser["client video testimonials"] ?? [];
      if (clientTestimonials.length > 0) {
        let testimonialSlider = document.getElementById("testimonialholder");
        testimonialSlider.innerHTML = "";
        console.warn("reached editclientvideotestimonials");

        // Create navigation buttons
        const prevBtn = document.createElement("div");
        prevBtn.className = "swiper-button-prev cert-nav-btn";
        prevBtn.style.display = "none"; // Hide by default

        const nextBtn = document.createElement("div");
        nextBtn.className = "swiper-button-next cert-nav-btn";
        nextBtn.style.display = "none"; // Hide by default

        // Create pagination
        const pagination = document.createElement("div");
        pagination.className = "swiper-pagination";

        let swiperWrapper = document.createElement("div");
        swiperWrapper.classList.add("swiper-wrapper");

        for (let testimonialvideos in clientTestimonials) {
          let slide = document.createElement("div");
          slide.classList.add("swiper-slide");

          let testimonialvideo = document.createElement("video");
          testimonialvideo.controls = true;
          testimonialvideo.playsInline = true;
          testimonialvideo.preload = "auto";
          testimonialvideo.classList.add("testimonial-video");
          let videosource = document.createElement("source");
          videosource.src = clientTestimonials[testimonialvideos].url;
          testimonialvideo.append(videosource);

          let theimagecheck = document.createElement("img");
          theimagecheck.classList.add("deleteicongroup");
          theimagecheck.src =
            "https://cdn.prod.website-files.com/67e360f08a15ef65d8814b41/67f6dfbc2b16d9977c85eeb2_Group%201597881168.png";
          theimagecheck.setAttribute("itemindex", testimonialvideos);

          theimagecheck.addEventListener("click", async (event) => {
            let thedeleteButton = event.target;
            let todeleteindex = thedeleteButton.getAttribute("itemindex");
            let thedeletecontainer = document.getElementById(
              "deleteclientstestimonials"
            );
            thedeletecontainer.style.display = "flex";
            thedeletecontainer.setAttribute("itemindex", todeleteindex);
          });

          slide.append(testimonialvideo, theimagecheck);
          swiperWrapper.append(slide);
        }

        testimonialSlider.append(swiperWrapper, prevBtn, nextBtn, pagination);

        if (window.innerWidth < 1024) {
          loadSwiperJS().then(() => {
            new Swiper(testimonialSlider, {
              slidesPerView: 1.3,
              spaceBetween: 16,
              slidesOffsetAfter: 60,
              centeredSlides: false,

              shortSwipes: true,
              threshold: 6,
              longSwipesRatio: 0.3,
              longSwipesMs: 200,

              touchRatio: 1.2,
              touchAngle: 45,
              grabCursor: true,
              followFinger: true,

              freeMode: false,

              speed: 400,
              longSwipes: true,
              longSwipesRatio: 0.2,
              longSwipesMs: 200,

              touchStartPreventDefault: false,
              touchStartForcePreventDefault: false,
              touchMoveStopPropagation: true,

              preventClicks: false,
              preventClicksPropagation: false,
              allowTouchMove: true,
              simulateTouch: true,

              resistance: true,
              resistanceRatio: 0.5,

              updateOnWindowResize: true,
              observer: true,
              observeParents: true,
              watchOverflow: true,

              pagination: false,
              navigation: false,

              cssMode: false,

              breakpoints: {
                768: {
                  slidesPerView: 2.2,
                  spaceBetween: 15,
                },
                1024: {
                  slidesPerView: 3.1,
                  spaceBetween: 20,
                },
                1200: {
                  slidesPerView: 4.1,
                  spaceBetween: 20,
                },
              },

              on: {
                touchStart: function () {
                  this.el.style.transition = "none";
                },
                touchEnd: function () {
                  this.el.style.transition = "";
                },
                slideChange: function () {
                  // Stop all videos when sliding
                  const videos = this.el.querySelectorAll("video");
                  videos.forEach((video) => {
                    video.pause();
                  });
                },
              },
            });
          });
        }
      } else {
        let thecaseslider2 = document.getElementById("testimonialholder");
        thecaseslider2.innerHTML = "";
        thecaseslider2.style.display = "none";
      }
      setupMediaAndPress(jsonUser);

      // let mediaPressBriefs = jsonUser["media press mentions"] ?? [];
      // if (mediaPressBriefs.length > 0) {
      //   let thecaseslider3 = document.getElementById(
      //     "themediaslidingcontainer"
      //   );
      //   thecaseslider3.innerHTML = "";
      //   thecaseslider3.setAttribute("style", "display: block !important");
      //   console.warn("reached themediaslidingcontainer");

      //   for (let pressbrief in mediaPressBriefs) {
      //     let thepressSlider = document.createElement("div");
      //     thepressSlider.classList.add("slide-5c", "media", "w-slide");
      //     let presscontainer = document.createElement("div");
      //     presscontainer.classList.add("presscontainer");
      //     let previewBox = document.createElement("previewbox-link");
      //     previewBox.setAttribute("href", mediaPressBriefs[pressbrief].url);
      //     let pressdeleteicon = document.createElement("img");
      //     pressdeleteicon.src =
      //       "https://cdn.prod.website-files.com/67e360f08a15ef65d8814b41/67f6dfbc2b16d9977c85eeb2_Group%201597881168.png";
      //     pressdeleteicon.classList.add("deletebriefs");
      //     pressdeleteicon.setAttribute("itemindex", pressbrief);

      //     pressdeleteicon.addEventListener("click", async () => {
      //       let thedeleteButton = event.target;
      //       let todeleteindex = thedeleteButton.getAttribute("itemindex");
      //       let thedeletecontainer = document.getElementById(
      //         "pressdeletecontainer"
      //       );
      //       thedeletecontainer.style.display = "flex";
      //       thedeletecontainer.setAttribute("itemindex", todeleteindex);
      //     });

      //     presscontainer.append(previewBox, pressdeleteicon);
      //     thepressSlider.append(presscontainer);
      //     thecaseslider3.append(thepressSlider);
      //   }
      // } else {
      //   let thecaseslider3 = document.getElementById(
      //     "themediaslidingcontainer"
      //   );
      //   thecaseslider3.innerHTML = "";
      //   document.getElementById("themediapressy").style.display = "none";
      // }

      let caseStudyWalkthroughs = jsonUser["case study walkthroughs"] ?? [];

      if (caseStudyWalkthroughs.length > 0) {
        let thecaseslider4 = document.getElementById(
          "thecasestudywalkthriughedit"
        );
        thecaseslider4.innerHTML = "";
        thecaseslider4.setAttribute("style", "display: block !important");
        console.warn("reached thecasestudywalkthriughedit");

        for (let eachcasestudy in caseStudyWalkthroughs) {
          let sliderelement4 = document.createElement("div");
          sliderelement4.classList.add("slide-img", "2ni", "w-slide");
          let casediv = document.createElement("div");
          casediv.classList.add("img-wrap", "editpage");

          let casevideo = document.createElement("video");
          casevideo.controls = true;
          casevideo.classList.add("videoclass2");
          let casevideosource = document.createElement("source");
          casevideosource.src = caseStudyWalkthroughs[eachcasestudy].url;
          casevideo.append(casevideosource);
          let casetheimagecheck = document.createElement("img");
          casetheimagecheck.classList.add("deleteicongroup");
          casetheimagecheck.src =
            "https://cdn.prod.website-files.com/67e360f08a15ef65d8814b41/67f6dfbc2b16d9977c85eeb2_Group%201597881168.png";
          casetheimagecheck.setAttribute("itemindex", eachcasestudy);

          casetheimagecheck.addEventListener("click", async () => {
            let thedeleteButton = event.target;
            let todeleteindex = thedeleteButton.getAttribute("itemindex");
            let thedeletecontainer = document.getElementById(
              "casestudiesdeletecontainer"
            );
            thedeletecontainer.style.display = "flex";
            thedeletecontainer.setAttribute("itemindex", todeleteindex);
          });

          casediv.append(casevideo, casetheimagecheck);
          sliderelement4.append(casediv);
          thecaseslider4.append(sliderelement4);
        }
        if (window.Webflow && Webflow.require) {
          Webflow.require("slider").ready();
        }
      } else {
        let thecaseslider4 = document.getElementById(
          "thecasestudywalkthriughedit"
        );
        thecaseslider4.innerHTML = "";
        document.getElementById("casestudyeditshowcase").style.display = "none";
      }

      let questionsAndAnswers = jsonUser["personal qa"] ?? [];
      if (questionsAndAnswers.length > 0) {
        let thecaseslider5 = document.getElementById("qaquzicontainer");
        thecaseslider5.innerHTML = "";
        //document.getElementById("casestudyeditswitch").style.display="flex"
        for (let eachquiz of questionsAndAnswers) {
          //let thequizcontainer=document.createElement("div")
          //thequizcontainer.classList.add("qacarrierdiv")
          let thequizcarrier = document.createElement("div");
          thequizcarrier.classList.add("theqadiv");
          let headcarrier = document.createElement("div");
          headcarrier.classList.add("qaheader");
          let headertext = document.createElement("p");
          headertext.classList.add("qaheadertext");
          headertext.innerText = eachquiz.title;
          let qadelete = document.createElement("img");
          qadelete.classList.add("qaicons");
          qadelete.src =
            "https://cdn.prod.website-files.com/67e360f08a15ef65d8814b41/67f6dfbc2b16d9977c85eeb2_Group%201597881168.png";
          qadelete.setAttribute("itemindex", eachquiz);

          qadelete.addEventListener("click", async () => {
            let thedeleteButton = event.target;
            let todeleteindex = thedeleteButton.getAttribute("itemindex");
            let thedeletecontainer = document.getElementById(
              "personalqacontainer"
            );
            thedeletecontainer.style.display = "flex";
            thedeletecontainer.setAttribute("itemindex", todeleteindex);
          });

          let iconsHolder = document.createElement("div");
          iconsHolder.classList.add("qaiconsholder");
          let qaedit = document.createElement("img");
          qaedit.classList.add("qaicons");
          qaedit.src =
            "https://cdn.prod.website-files.com/67e360f08a15ef65d8814b41/67f6df9d8c1aed7f8f8c1fc7_Group%201597881167.png";
          qaedit.setAttribute("itemindex", eachquiz);

          qaedit.addEventListener("click", async () => {
            let theeditButton = event.target;
            let toeditindex = theeditButton.getAttribute("itemindex");
            let theeditcontainer = document.getElementById("theeditqa");
            theeditcontainer.style.display = "flex";
            theeditcontainer.setAttribute("itemindex", toeditindex);
          });

          let qaanswer = document.createElement("p");
          qaanswer.classList.add("qapragraph");
          qaanswer.innerText = eachquiz.description;
          iconsHolder.append(qaedit, qadelete);
          headcarrier.append(headertext, iconsHolder);
          thequizcarrier.append(headcarrier, qaanswer);
          thecaseslider5.append(thequizcarrier);
        }
      } else {
      }

      let mongodbcertificates = jsonUser["certificates"] ?? [];
      if (mongodbcertificates.length > 0) {
        let thecaseslider6 = document.getElementById("thecertimaincontainer");
        thecaseslider6.innerHTML = "";
        thecaseslider6.setAttribute("style", "display: block !important");
        console.warn("reached thecertimaincontainer");

        for (let eachcert in mongodbcertificates) {
          let certcontain = document.createElement("div");
          certcontain.classList.add("slide-img", "2ne", "w-slide");
          certcontain.style.maxWidth = "300px";
          let theimageWrap = document.createElement("div");
          /*
                theimageWrap.style.backgroundImage = `url('${mongodbcertificates[eachcert]}')`;
                theimageWrap.style.backgroundSize = "cover"; // Makes the image cover the div
                theimageWrap.style.backgroundPosition = "center"; // Centers the image
                */
          theimageWrap.classList.add("img-wrap", "certificatewrap");
          let thecertimage = document.createElement("img");
          thecertimage.classList.add("imagyclass");
          thecertimage.src = mongodbcertificates[eachcert].url;
          let certdelete = document.createElement("img");
          certdelete.classList.add("deletebriefs");
          certdelete.src =
            "https://cdn.prod.website-files.com/67e360f08a15ef65d8814b41/67f6dfbc2b16d9977c85eeb2_Group%201597881168.png";
          certdelete.setAttribute("itemindex", eachcert);

          certdelete.addEventListener("click", async () => {
            let thedeleteButton = event.target;
            let todeleteindex = thedeleteButton.getAttribute("itemindex");
            let thedeletecontainer = document.getElementById(
              "certdeletecontainer"
            );
            thedeletecontainer.style.display = "flex";
            thedeletecontainer.setAttribute("itemindex", todeleteindex);
          });

          theimageWrap.append(certdelete, thecertimage);
          certcontain.append(theimageWrap);
          thecaseslider6.append(certcontain);
        }
      } else {
        let thecaseslider6 = document.getElementById("thecertimaincontainer");
        thecaseslider6.innerHTML = "";
        document.getElementById("thercerties").style.display = "none";
      }

      document.getElementById("thepageloader").style.display = "none";
    }
    if (mongodbuser.status == "false") {
      data = {
        "canada-or-usa": member["canada-or-usa"],
        email: member.email,
        "firm-name": member["firm-name"],
        name: `${member["first-name"]} ${member["last-name"]}`,
        "profile image": "",
        id: member.id,
        memberstackid: member.id,
        membership: member.membership,
        Phone: member.phone,
        created_at: "",
        pronouns: [],
        "hourly rate": "",
        "firm url": "",
        "expertise category": [],
        "expertise subcategory": [],
        education: [],
        address: "",
        "free consultation": "",
        "offer contingency": "",
        "community pro bono work": "",
        "profile video": "",
        "notable case wins": [],
        "client video testimonials": [],
        "media press mentions": [],
        "case study walkthroughs": [],
        blogs: [],
        "personal qa": [],
        language: "",
        "interests and hobbies": [],
        certificates: [],
        "awards recognition": [],
        "blog contributor": "",
        "client centric mission": "",
        "dynamic bio": "",
      };
      itemcreated = await sendCreateItemRequest(data);
      console.log(itemcreated);

      if (window.Webflow && Webflow.require) {
        Webflow.require("slider").ready();
      }
    }
    if (window.Webflow && Webflow.require) {
      Webflow.require("slider").ready();
    }
    document.getElementById("thepageloader").style.display = "none";
  } catch (e) {
    console.log(e);
    if (window.Webflow && Webflow.require) {
      Webflow.require("slider").ready();
    }
    document.getElementById("thepageloader").style.display = "none";
  }
}

async function mapBoxMap(latitude, longitude) {
  // Your Mapbox access token
  mapboxgl.accessToken =
    "pk.eyJ1IjoibGF3Z2dsZSIsImEiOiJja2RraDU0ZnYwb2lqMnhwbWw2eXVrMjNrIn0.ShD8eyKTv7exWDKR44bSoA";

  // Coordinates: [latitude, longitude]
  lat = Number(latitude);
  long = Number(longitude);
  console.log(lat, "💧💧💧💧", long);
  const coordinates = [long, lat]; // San Francisco

  // Initialize the map
  const map = new mapboxgl.Map({
    container: "mapbox",
    style: "mapbox://styles/lawggle/ckdkhap9e159e1imq6foj0ln5",
    center: coordinates,
    zoom: 12,
  });

  // Add a marker
  new mapboxgl.Marker()
    .setLngLat(coordinates)
    .setPopup(new mapboxgl.Popup().setText("Lawyer's Address")) // Optional popup
    .addTo(map);
}

async function getAddressFromCoords(lat, lng) {
  const accessToken =
    "pk.eyJ1IjoibGF3Z2dsZSIsImEiOiJja2RraDU0ZnYwb2lqMnhwbWw2eXVrMjNrIn0.ShD8eyKTv7exWDKR44bSoA";
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${accessToken}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    const features = data.features;
    // Return the full formatted address (first result)
    return features[0]?.place_name || "Unknown";
  } catch (err) {
    console.error("Error fetching address:", err);
    return "Unknown";
  }
}

function getComponent(features, type) {
  const match = features.find((f) => f.place_type.includes(type));
  return match ? match.text : null;
}

async function getCoordsFromAddress(address) {
  const accessToken =
    "pk.eyJ1IjoibGF3Z2dsZSIsImEiOiJja2RraDU0ZnYwb2lqMnhwbWw2eXVrMjNrIn0.ShD8eyKTv7exWDKR44bSoA"; // pk.*
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=${accessToken}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const result = data.features[0];

      if (!result) {
        console.error("No results found.");
        return;
      }

      const [lng, lat] = result.center;
      const fullAddress = result.place_name;

      const components = {
        fullAddress,
        latitude: lat,
        longitude: lng,
        city: getComponent(data.features, "place"),
        province: getComponent(data.features, "region"),
        country: getComponent(data.features, "country"),
        postalCode: getComponent(data.features, "postcode"),
      };

      console.log("Geocoded info:", components);

      return components;
    })
    .catch((err) => console.error("Geocoding failed:", err));
}

function getComponent(features, type) {
  const match = features.find((f) => f.place_type.includes(type));
  return match ? match.text : null;
}

async function createEducationBox(
  yourinstution,
  yourdegree,
  yearstart,
  yearend,
  indexnumber
) {
  let thecaseslider5 = document.getElementById("educationCarrier");
  let thequizcarrier = document.createElement("div");
  thequizcarrier.classList.add("theqadiv");
  thequizcarrier.style.display = "flex";
  thequizcarrier.setAttribute("itemindex", `static${indexnumber}`);
  let headcarrier = document.createElement("div");
  headcarrier.classList.add("qaheader", "foreducation");
  //let headertext=document.createElement("p")
  //headertext.classList.add("qaheadertext")
  //headertext.innerText=questionsAndAnswers[eachquiz].question
  let qadelete = document.createElement("img");
  qadelete.classList.add("qaicons");
  qadelete.src =
    "https://cdn.prod.website-files.com/67e360f08a15ef65d8814b41/67f6dfbc2b16d9977c85eeb2_Group%201597881168.png";
  qadelete.setAttribute("itemindex", `static${indexnumber}`);

  qadelete.addEventListener("click", async () => {
    let thedeleteButton = event.target;
    let todeleteindex = thedeleteButton.getAttribute("itemindex");
    alleducation.splice(todeleteindex, 1);

    let allstaticDivs = document.querySelectorAll(".theqadiv");
    allstaticDivs.forEach((staticdiv) => {
      let thedivcontattr = staticdiv.getAttribute("itemindex");
      if (thedivcontattr == todeleteindex) {
        document.getElementById("educationCarrier").removeChild(staticdiv);
      }
    });
  });
  let iconsHolder = document.createElement("div");
  iconsHolder.classList.add("qaiconsholder");

  let theeducationwrap = document.createElement("div");
  theeducationwrap.classList.add("wraptheelements");
  let educationheader = document.createElement("p");
  educationheader.classList.add("Institutionhead");
  educationheader.innerText = "Institution";
  let educationParagraph = document.createElement("p");
  educationParagraph.classList.add("theparagraph");

  educationParagraph.innerText = yourinstution;
  theeducationwrap.append(educationheader, educationParagraph);

  let thedegreewrap = document.createElement("div");
  thedegreewrap.classList.add("wraptheelements");
  let degreeheader = document.createElement("p");
  degreeheader.classList.add("Institutionhead");
  degreeheader.innerText = "Degree";
  let degreeParagraph = document.createElement("p");
  degreeParagraph.classList.add("theparagraph");
  degreeParagraph.innerText = yourdegree;
  thedegreewrap.append(degreeheader, degreeParagraph);

  let allDatesWrap = document.createElement("div");
  allDatesWrap.classList.add("thedateswrap");

  let startdatewrap = document.createElement("div");
  startdatewrap.classList.add("wraptheelements");
  let startdateheader = document.createElement("p");
  startdateheader.classList.add("Institutionhead");
  startdateheader.innerText = "Start Year";
  let startdateParagraph = document.createElement("p");
  startdateParagraph.classList.add("theparagraph");
  startdateParagraph.innerText = yearstart;
  startdatewrap.append(startdateheader, startdateParagraph);

  let enddatewrap = document.createElement("div");
  enddatewrap.classList.add("wraptheelements");
  let enddateheader = document.createElement("p");
  enddateheader.classList.add("Institutionhead");
  enddateheader.innerText = "End Year";
  let enddateParagraph = document.createElement("p");
  enddateParagraph.classList.add("theparagraph");
  enddateParagraph.innerText = yearend;
  enddatewrap.append(enddateheader, enddateParagraph);

  iconsHolder.append(qadelete);
  headcarrier.append(iconsHolder);
  allDatesWrap.append(startdatewrap, enddatewrap);
  thequizcarrier.append(
    headcarrier,
    theeducationwrap,
    thedegreewrap,
    allDatesWrap
  );
  thecaseslider5.append(thequizcarrier);
}

function reloadWindowAndPreserveScroll() {
  // Save current scroll position
  localStorage.setItem("scrollY-ps", window.scrollY);
  console.log("scrollY-ps before reload", window.scrollY);
  // Reload the page
  setTimeout(function () {
    location.reload();
  }, 50);
}

function loadSwiperJS() {
  return new Promise((resolve) => {
    if (window.Swiper) {
      resolve();
      return;
    }

    // Load Swiper CSS if not already loaded
    if (!document.getElementById("swiper-css")) {
      const swiperCSS = document.createElement("link");
      swiperCSS.id = "swiper-css";
      swiperCSS.rel = "stylesheet";
      swiperCSS.href =
        "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css";
      document.head.appendChild(swiperCSS);
    }

    const swiperScript = document.createElement("script");
    swiperScript.src =
      "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js";
    swiperScript.onload = resolve;
    document.body.appendChild(swiperScript);
  });
}

// Function to handle media and press mentions section
function setupMediaAndPress(jsonUser) {
  let themediaandPress = jsonUser["media press mentions"];
  let themediacontainer = document.getElementById("mediawrapper");
  themediacontainer.innerHTML = "";

  if (themediaandPress && themediaandPress.length > 0) {
    function extractDomain(url) {
      try {
        const urlObj = new URL(url);
        return urlObj.hostname.replace("www.", "");
      } catch (e) {
        return url;
      }
    }

    function getMetadataByDomain(url, domain) {
      if (url.includes("youtube.com") || url.includes("youtu.be")) {
        return {
          title: "YouTube Video",
          description: "Click to watch this video on YouTube",
          imageUrl: "https://placehold.co/300x200/FF0000/FFFFFF?text=YouTube",
          favicon: "https://www.youtube.com/favicon.ico",
          host: "youtube.com",
        };
      } else if (url.includes("linkedin.com")) {
        return {
          title: "LinkedIn Article",
          description: "Professional content shared on LinkedIn",
          imageUrl: "https://placehold.co/300x200/0077B5/FFFFFF?text=LinkedIn",
          favicon: "https://www.linkedin.com/favicon.ico",
          host: "linkedin.com",
        };
      } else if (url.includes("medium.com")) {
        return {
          title: "Medium Article",
          description: "Read this story on Medium",
          imageUrl: "https://placehold.co/300x200/000000/FFFFFF?text=Medium",
          favicon: "https://medium.com/favicon.ico",
          host: "medium.com",
        };
      } else if (url.includes("twitter.com") || url.includes("x.com")) {
        return {
          title: "Tweet",
          description: "View this post on Twitter/X",
          imageUrl: "https://placehold.co/300x200/1DA1F2/FFFFFF?text=Twitter",
          favicon: "https://twitter.com/favicon.ico",
          host: "twitter.com",
        };
      } else if (url.includes("instagram.com")) {
        return {
          title: "Instagram Post",
          description: "View this post on Instagram",
          imageUrl: "https://placehold.co/300x200/E1306C/FFFFFF?text=Instagram",
          favicon: "https://www.instagram.com/favicon.ico",
          host: "instagram.com",
        };
      } else if (url.includes("facebook.com")) {
        return {
          title: "Facebook Post",
          description: "View this content on Facebook",
          imageUrl: "https://placehold.co/300x200/4267B2/FFFFFF?text=Facebook",
          favicon: "https://www.facebook.com/favicon.ico",
          host: "facebook.com",
        };
      } else {
        return {
          title: `Article on ${domain}`,
          description: `View this content on ${domain}`,
          imageUrl: `https://placehold.co/300x200/333333/cccccc?text=${domain}`,
          favicon: null,
          host: domain,
        };
      }
    }

    // Create Swiper container
    const swiperContainer = document.createElement("div");
    swiperContainer.classList.add("swiper", "media-swiper-ps");

    // Create pagination
    const pagination = document.createElement("div");
    pagination.className = "swiper-pagination";

    const swiperWrapper = document.createElement("div");
    swiperWrapper.classList.add("swiper-wrapper", "swipper-wrapper-media-ps");

    // Add cards
    themediaandPress.forEach((mediaItem) => {
      const url = mediaItem.url || "#";
      const domain = extractDomain(url);
      const meta = getMetadataByDomain(url, domain);

      const swiperSlide = document.createElement("div");
      swiperSlide.classList.add("swiper-slide", "swiper-slide-ps");

      const card = document.createElement("a");
      card.classList.add("media-card-ps");
      card.href = url;

      // Image
      const img = document.createElement("img");
      img.src = meta.imageUrl;
      img.alt = meta.title;
      img.classList.add("media-image-ps");

      // Content
      const content = document.createElement("div");
      content.classList.add("media-content-ps");

      const title = document.createElement("h3");
      title.classList.add("media-heading-ps");
      title.textContent = meta.title;

      const desc = document.createElement("p");
      desc.classList.add("media-descrip-ps");
      desc.textContent = meta.description;

      const host = document.createElement("p");
      host.classList.add("media-host-ps");
      host.textContent = meta.host;

      content.appendChild(title);
      content.appendChild(desc);
      content.appendChild(host);

      card.appendChild(img);
      card.appendChild(content);
      swiperSlide.appendChild(card);
      swiperWrapper.appendChild(swiperSlide);
    });

    swiperContainer.appendChild(swiperWrapper);
    themediacontainer.appendChild(swiperContainer, pagination);

    // Load and initialize Swiper
    if (window.innerWidth < 1024) {
      loadSwiperJS().then(() => {
        new Swiper(swiperContainer, {
          slidesPerView: 1.2,
          spaceBetween: 20,
          centeredSlides: false,
          allowTouchMove: true,
          navigation: false,
          pagination: {
            el: pagination,
            clickable: true,
          },
          breakpoints: {
            768: {
              slidesPerView: 2,
              spaceBetween: 25,
              allowTouchMove: true,
            },
          },
          on: {
            touchStart: function () {
              this.el.style.transition = "none";
            },
            touchEnd: function () {
              this.el.style.transition = "";
            },
          },
        });
      });
    }
  } else {
    document.getElementById("mediawrapper").style.display = "none";
  }
}
