const lawyerState = {
  // Basic Info
  pronouns: [],
  name: null,
  minRate: null,
  maxRate: null,
  firmUrl: null,
  areaOfExpertise: [],
  allEducation: [],
  dynamicBio: null,

  // Profile Media
  profileImage: null,
  profileBanner: null,
  profileVideo: null,
  testimonials: [],
  caseStudies: [],
  certificates: [],

  // Address & Location
  userGeoLocationDetails: null,

  // Consultation & Offer
  offerConsultation: null,
  offerContingency: null,
  proBonoWork: null,

  // Social Media
  Linkedin: null,
  Twitter: null,
  Facebook: null,
  Instagram: null,

  // Languages & Hobbies
  languages: [],
  interestsAndHobbies: [],

  // Notable Case Wins
  notableCaseWins: [],

  // Media Press
  mediaPressMentions: [],

  // Personal QA
  personalQA: [],
};

let activefileuploaderId = "";
let theLawyerPronouns = [];
let theCategory2 = [];
let theSubcategory2 = [];
let thecasefiles = [];
let thecertificates = [];
let theuserGeolocation;
let thelawyercerticates = [];
let theLawyersHobbies = [];

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
    theselectedelement = document.getElementById("expertiseSelect");
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

  inputs.forEach((input, index) => {
    const widget = uploadcare.Widget(input);
    const uploaderId = input.id;

    widget.onUploadComplete(async (info) => {
      document.getElementById("theloadingwait").style.display = "flex";
      let url, urls;

      if (info.uuid.includes("~")) {
        try {
          const group = await uploadcare.loadFileGroup(info.uuid);
          const fileInfos = await group.files();
          urls = await Promise.all(
            fileInfos.map((file) =>
              typeof file.then === "function"
                ? file.then((f) => f.cdnUrl)
                : file.cdnUrl
            )
          );
        } catch (error) {
          console.error("❌ Failed to load file group:", error);
        }
      } else {
        url = info.cdnUrl;
      }

      if (uploaderId == "uploadfile") {
        lawyerState.profileVideo = url;
      }

      if (uploaderId == "uploadtestimonials") {
        let thisuniqueId = await generateUniqueId();
        lawyerState.testimonials.push({
          url,
          "unique id": thisuniqueId,
        });
        // Update DOM to show testimonial preview (implement as needed)
      }

      if (uploaderId == "casestudywalkthroughuploader") {
        let thisuniqueId = await generateUniqueId();
        lawyerState.caseStudies.push({
          url,
          "unique id": thisuniqueId,
        });
        // Update DOM to show case study preview (implement as needed)
      }

      if (uploaderId == "certicateUpload") {
        if (!info.uuid.includes("~")) {
          let thisuniqueId = await generateUniqueId();
          lawyerState.certificates.push({
            url,
            "unique id": thisuniqueId,
          });
        } else if (urls && Array.isArray(urls)) {
          for (let fileUrl of urls) {
            let thisuniqueId = await generateUniqueId();
            lawyerState.certificates.push({
              url: fileUrl,
              "unique id": thisuniqueId,
            });
          }
        }
        // Update DOM to show certificate preview (implement as needed)
      }

      if (uploaderId == "uploadprofileimage") {
        lawyerState.profileImage = url;
      }

      if (uploaderId == "uploadbannerimage") {
        lawyerState.profileBanner = url;
      }

      updateallthefields(localStorage.getItem("userEmail"));
      document.getElementById("theloadingwait").style.display = "none";
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
        lawyerState.offerConsultation = "yes";
        updateOfferConsultationCheckboxImages();
      }

      if (buttonId == "freeconsultationno") {
        lawyerState.offerConsultation = "no";
        updateOfferConsultationCheckboxImages();
      }
      if (buttonId == "offercontingencyyes") {
        lawyerState.offerContingency = "yes";
        updateOfferContingencyCheckboxImages();
      }
      if (buttonId == "offercontingencyno") {
        lawyerState.offerContingency = "no";
        updateOfferContingencyCheckboxImages();
      }
      if (buttonId == "probonoyes") {
        lawyerState.proBonoWork = "yes";
        updateProBonoCheckboxImages();
      }
      if (buttonId == "probonono") {
        lawyerState.proBonoWork = "no";
        updateProBonoCheckboxImages();
      }
    });
  });

  $("#addEducation").click(async function () {
    displayLoading();
    let theinstitution = document.getElementById("institutioneducation").value;
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
      lawyerState.allEducation.push(youreducation);
      console.warn("Education added:", lawyerState.allEducation);
      if (
        theinstitution == null ||
        theinstitution == undefined ||
        theinstitution == ""
      ) {
        theinstitution = "N/A";
      }
      if (thedregree == null || thedregree == undefined || thedregree == "") {
        thedregree = "N/A";
      }
      if (
        thestartDate == null ||
        thestartDate == undefined ||
        thestartDate == ""
      ) {
        thestartDate = "N/A";
      }
      if (theenddate == null || theenddate == undefined || theenddate == "") {
        theenddate = "N/A";
      }

      let createeducation = createEducationBox(
        theinstitution,
        thedregree,
        thestartDate,
        theenddate,
        lawyerState.allEducation.length - 1
      );

      // Clear the input fields after capturing their values
      document.getElementById("institutioneducation").value = "";
      document.getElementById("degreeinput").value = "";
      document.getElementById("thestartdate").value = "";
      document.getElementById("endyear").value = "";

      hideLoading();
      document.getElementById("thesavededucation").style.display = "none";
    }
  });

  $("#save-cases").click(async function () {
    displayLoading();
    let caseTitle = document.getElementById("casewinstitle").value;
    let caseDescription = document.getElementById("casewinsdescription").value;
    if (caseTitle && caseDescription) {
      let theuniqueId = await generateUniqueId();
      let thiscase = {
        uniqueId: theuniqueId,
        title: caseTitle,
        description: caseDescription,
      };
      lawyerState.notableCaseWins.push(thiscase);
      console.log("All case wins:", lawyerState.notableCaseWins);
    }
    document.getElementById("casewinstitle").value = "";
    document.getElementById("casewinsdescription").value = "";
    updateallthefields(localStorage.getItem("userEmail"));
    document.getElementById("addCase").style.display = "none";
    hideLoading();
  });

  $("#addMediaPress").click(async function () {
    displayLoading();
    let mediapresslink = document.getElementById("thepreviewlinkinput").value;
    let theuniqueId = await generateUniqueId();
    let thismediapressdata = {
      uniqueId: theuniqueId,
      url: mediapresslink,
    };
    lawyerState.mediaPressMentions.push(thismediapressdata);
    document.getElementById("thepreviewlinkinput").value = "";
    updateallthefields(localStorage.getItem("userEmail"));
    hideLoading();
  });

  $("#addInterests").click(async function () {
    displayLoading();
    let interestOrHobby = document.getElementById("interestedinput").value;
    if (interestOrHobby) {
      theuniqueId = await generateUniqueId();
      let thiscase = {
        uniqueId: theuniqueId,
        title: interestOrHobby,
      };
      lawyerState.interestsAndHobbies.push(thiscase);
    }
    document.getElementById("interestedinput").value = "";
    updateallthefields(localStorage.getItem("userEmail"));
    document.getElementById("interestAdd").style.display = "none";
    hideLoading();
  });

  $("#addQA").click(async function () {
    displayLoading();
    let qaquiz = document.getElementById("theqaquizinput").value;
    let qaanswer = document.getElementById("qaanswerinput").value;
    if (qaanswer && qaquiz) {
      let theuniqueId = await generateUniqueId();
      let thisqadata = {
        uniqueId: theuniqueId,
        title: qaquiz,
        description: qaanswer,
      };
      lawyerState.personalQA.push(thisqadata);
    }
    document.getElementById("theqaquizinput").value = "";
    document.getElementById("qaanswerinput").value = "";
    updateallthefields(localStorage.getItem("userEmail"));
    hideLoading();
    $("#thesaveqa").hide();
  });

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
    lawyerState.userGeoLocationDetails = theuserGeolocation;

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
        lawyerState.allEducation.splice(theindextodelete, 1);

        let thefirsteducationObject = lawyerState.allEducation[0];
        let updateemail = localStorage.getItem("userEmail");
        let savedata = {
          AllEducation: lawyerState.allEducation,
        };

        updateduser = await updateItem(updateemail, savedata);
        updatedom = await updateallthefields(updateemail);
        document.getElementById("thesavealertshow").style.display = "flex";
        await delaysomeminutes();
      }

      if (buttonIdentifier == "casewins") {
        let theindextodeletetext = document
          .getElementById("deletecasesmaindiv")
          .getAttribute("itemindex");
        let theindextodelete = Number(theindextodeletetext);

        console.log("🕌🕌🕌😄🏄🏽", typeof theindextodelete, theindextodelete);
        document.getElementById("theloadingwait").style.display = "flex";

        lawyerState.notableCaseWins.splice(theindextodelete, 1);

        let toChangeData = { "notable case wins": lawyerState.notableCaseWins };
        console.log(toChangeData);
        let updateemail = localStorage.getItem("userEmail");
        await updateItem(updateemail, toChangeData);
        await updateallthefields(localStorage.getItem("userEmail"));
        document.getElementById("thesavealertshow").style.display = "flex";
        await delaysomeminutes();
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
        updatedom = await updateallthefields(updateemail);
        document.getElementById("thesavealertshow").style.display = "flex";
        let hidepopup = await delaysomeminutes();
      }
      if (buttonIdentifier == "mediapress") {
        let theindextodelete = document
          .getElementById("deleteclientstestimonials")
          .getAttribute("itemindex");
        document.getElementById("theloadingwait").style.display = "flex";

        lawyerState.mediaPressMentions.splice(theindextodelete, 1);

        let toChangeData = { "media press mentions": mediapressbriefings };
        console.log(toChangeData);
        await updateItem(thisUserId, toChangeData);
        await updateallthefields(thisUserId);
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
        updatedom = await updateallthefields(updateemail);
        document.getElementById("thesavealertshow").style.display = "flex";
        let hidepopup = await delaysomeminutes();
      }
      if (buttonIdentifier == "qa") {
        let theindextodelete = document
          .getElementById("personalqacontainer")
          .getAttribute("itemindex");
        document.getElementById("theloadingwait").style.display = "flex";
        lawyerState.personalQA.splice(theindextodelete, 1);

        let toChangeData = { "personal qa": qaquestions };
        console.log(toChangeData);
        await updateItem(thisUserId, toChangeData);
        await updateallthefields(thisUserId);
        document.getElementById("thesavealertshow").style.display = "flex";
        await delaysomeminutes();
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
        let updatenewestdom = await updateallthefields(thisUserId);
        document.getElementById("thesavealertshow").style.display = "flex";
        let todelay = await delaysomeminutes();
      }
    });
  });

  // Universal save button for all sections
  // ...existing code...
  document
    .getElementById("universalSaveBtn")
    .addEventListener("click", async () => {
      document.getElementById("theloadingwait").style.display = "flex";
      let updateemail = localStorage.getItem("userEmail");

      // Fetch current user data
      let dbuser = await getItem(updateemail);
      let mongodbuser = JSON.parse(dbuser);
      let userData = mongodbuser.data.body;
      let jsonUser = JSON.parse(JSON.parse(userData));

      // Merge pending uploads with existing data
      let thedata = {
        "profile image": lawyerState.profileImage || jsonUser["profile image"],
        "profile banner":
          lawyerState.profileBanner || jsonUser["profile banner"],
        "profile video": lawyerState.profileVideo || jsonUser["profile video"],
        "client video testimonials": [
          ...(jsonUser["client video testimonials"] ?? []),
          ...lawyerState.testimonials,
        ],
        "case study walkthroughs": [
          ...(jsonUser["case study walkthroughs"] ?? []),
          ...lawyerState.caseStudies,
        ],
        certificates: [
          ...(jsonUser["certificates"] ?? []),
          ...lawyerState.certificates,
        ],

        pronouns: await readselectnoImage("selectpronouns"),
        name: document.getElementById("firstlastname").value,
        "min hourly rate": document.getElementById("minRate").value,
        "max hourly rate": document.getElementById("maxRate").value,
        "firm url": document.getElementById("firmurl").value,
        "area of expertise": await readselectnoImage("expertiseSelect"),
        AllEducation: [...lawyerState.allEducation],
        "dynamic bio": document.getElementById("dynamicbio").value,
        address: lawyerState.userGeoLocationDetails,
        "free consultation": lawyerState.offerConsultation,
        "offer contingency": lawyerState.offerContingency,
        "community pro bono work": lawyerState.proBonoWork,
        "social media": [
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
        ],
        languages: await readselect("thelanguage"),
        "interests and hobbies": lawyerState.interestsAndHobbies,
        "media press mentions": lawyerState.mediaPressMentions,
        "notable case wins": lawyerState.notableCaseWins,
        "personal qa": lawyerState.personalQA,
        // Add other fields as needed
      };

      let theupdatedItem = await updateItem(updateemail, thedata);

      // Clear pending uploads after successful save
      lawyerState.profileImage = null;
      lawyerState.profileBanner = null;
      lawyerState.profileVideo = null;
      lawyerState.testimonials = [];
      lawyerState.caseStudies = [];
      lawyerState.certificates = [];

      await updateallthefields(updateemail);
      document.getElementById("thesavealertshow").style.display = "flex";
      await delaysomeminutes();
      document.getElementById("theloadingwait").style.display = "none";
    });

  //Memberstack read
  window.$memberstackDom.getCurrentMember().then(async ({ data: member }) => {
    if (member) {
      const allMemberPlans = member.planConnections;

      console.log("Logged in Memberstack Member:", member);
      console.log("All Active Memberstack Subscriptions:", allMemberPlans);

      const memberemail = member.auth.email;
      localStorage.setItem("userEmail", member.auth.email);

      const thegetuser = await updateallthefields(memberemail, member);
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
          document.getElementById("expertiseSelect").innerHTML = "";
          await addSubCategories(["Business & Corporate Law"]);
          await configureSelect("expertiseSelect", "#expertiseContain");
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
      id: "expertiseSelect",
      container: "#expertiseContain",
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
      lawyerState.languages = jsonUser["languages"];
      for (let eachlangy in lawyerState.languages) {
        languagelist.push(lawyerState.languages[eachlangy].value);
      }
      let awards = jsonUser["awards recognition"];
      document.getElementById("awardsrecognition").value = awards;
      let clientcentricMission = jsonUser["client centric mission"];
      document.getElementById("clientcentricMission").value =
        clientcentricMission;
      let dynamicBio = jsonUser["dynamic bio"];
      document.getElementById("dynamicbio").value = dynamicBio;

      let thegeolocationaddress;
      if (
        lawyerState.userGeoLocationDetails === null ||
        lawyerState.userGeoLocationDetails === undefined
      ) {
        thegeolocationaddress = jsonUser["address"];
        lawyerState.userGeoLocationDetails = thegeolocationaddress;
      } else {
        thegeolocationaddress = lawyerState.userGeoLocationDetails;
      }

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

      let bannerImageUrl =
        lawyerState.profileBanner || jsonUser["profile banner"];

      if (
        bannerImageUrl != null &&
        bannerImageUrl != "" &&
        bannerImageUrl != undefined
      ) {
        let bannerMainImage = document.getElementById("thebannerimage");
        bannerMainImage.style.backgroundImage = `url(${bannerImageUrl})`;
        bannerMainImage.style.backgroundSize = "cover";
        bannerMainImage.style.backgroundPosition = "center";
        bannerMainImage.style.backgroundRepeat = "no-repeat";
      }

      let profileImageUrl =
        lawyerState.profileImage || jsonUser["profile image"];

      if (
        profileImageUrl != null &&
        profileImageUrl != "" &&
        profileImageUrl != undefined
      ) {
        let theprofyImage = document.getElementById("theprofileimage");
        theprofyImage.style.backgroundImage = `url(${profileImageUrl})`;
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

          qaedit.addEventListener("click", async (event) => {
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

      // Configure yes/no checkboxes
      lawyerState.offerConsultation = jsonUser["free consultation"];
      updateOfferConsultationCheckboxImages();
      lawyerState.offerContingency = jsonUser["offer contingency"];
      updateOfferContingencyCheckboxImages();
      lawyerState.proBonoWork = jsonUser["community pro bono work"];
      updateProBonoCheckboxImages();

      $(`#BlogSelect`).val(jsonUser["blog contributor"]).trigger("change");
      $(`#HobbySelect`)
        .val(lawyerState.interestsAndHobbies ?? [])
        .trigger("change");
      $(`#thelanguage`).val(languagelist).trigger("change");
      $(`#selectpronouns`).val(jsonUser["pronouns"]).trigger("change");
      $(`#mySelect`).val(jsonUser["expertise category"]).trigger("change");
      document.getElementById("expertiseSelect").innerHTML = "";
      let recreate = await addSubCategories("");
      $(`#expertiseSelect`)
        .val(jsonUser["area of expertise"])
        .trigger("change");

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

      // Profile Video
      let profileVideoUrl =
        lawyerState.profileVideo || jsonUser["profile video"];
      if (
        profileVideoUrl != null &&
        profileVideoUrl != undefined &&
        profileVideoUrl != ""
      ) {
        document.getElementById("showcaseprofile").src = profileVideoUrl;
        document.getElementById("uploadfilesprompt").style.display = "none";
        document.getElementById("profileimagecontainer").style.display = "flex";
      } else {
        document.getElementById("uploadfilesprompt").style.display = "flex";
      }

      if (lawyerState.interestsAndHobbies.length === 0) {
        lawyerState.interestsAndHobbies =
          jsonUser["interests and hobbies"] || [];
      }

      let theusersHobbies = lawyerState.interestsAndHobbies;
      let thehobbyCarrier = document.getElementById("Hobbymaincontainer");
      thehobbyCarrier.innerHTML = "";
      thehobbyCarrier.classList.remove("hide-container");

      if (theusersHobbies.length > 0) {
        for (let thehobby of theusersHobbies) {
          console.log(thehobby);
          let theHobbycontainer = document.createElement("div");
          theHobbycontainer.classList.add("theqadiv");
          thehobbyheader = document.createElement("div");
          thehobbyheader.classList.add("qaheader");
          let thehobbyiconholder = document.createElement("div");
          thehobbyiconholder.classList.add("qaiconsholder");
          let thehobbyname = document.createElement("p");
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

      if (lawyerState.notableCaseWins.length === 0) {
        lawyerState.notableCaseWins = jsonUser["notable case wins"] || [];
      }
      let caseWins = lawyerState.notableCaseWins;
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

      // Testimonials (example for video testimonials)
      let clientTestimonials = [
        ...lawyerState.testimonials,
        ...(jsonUser["client video testimonials"] ?? []),
      ];
      if (clientTestimonials.length > 0) {
        let testimonialSlider = document.getElementById("testimonial-swiper");
        testimonialSlider.innerHTML = "";
        testimonialSlider.classList.add("swiper", "testimonial-container");
        console.warn("reached editclientvideotestimonials");
        // Create pagination
        const pagination = document.createElement("div");
        pagination.className = "swiper-pagination";

        let swiperWrapper = document.createElement("div");
        swiperWrapper.classList.add(
          "swiper-wrapper",
          "swiper-wrapper-testimonial"
        );

        for (let testimonialvideos in clientTestimonials) {
          let slide = document.createElement("div");
          slide.classList.add("swiper-slide", "testimonial-video-wrap");

          let testimonial = document.createElement("video");
          testimonial.classList.add("testimonial-video-ps");
          testimonial.src = clientTestimonials[testimonialvideos].url;
          testimonial.controls = true;
          testimonial.playsInline = true;

          let theimagecheck = document.createElement("img");
          theimagecheck.classList.add("deletebriefs-3");
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

          slide.append(testimonial, theimagecheck);
          swiperWrapper.append(slide);
        }

        testimonialSlider.append(swiperWrapper, pagination);

        if (window.innerWidth < 1024) {
          loadSwiperJS().then(() => {
            new Swiper(testimonialSlider, {
              slidesPerView: 1.1,
              spaceBetween: 25,
              centeredSlides: false,
              allowTouchMove: true,
              navigation: false,
              pagination: false,
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
        let thecaseslider2 = document.getElementById("testimonialholder");
        thecaseslider2.innerHTML = "";
        thecaseslider2.style.display = "none";
      }
      setupMediaAndPress(jsonUser);

      // Case Studies
      let caseStudyWalkthroughs = [
        ...lawyerState.caseStudies,
        ...(jsonUser["case study walkthroughs"] ?? []),
      ];

      console.warn(
        "caseStudyWalkthroughs length",
        caseStudyWalkthroughs.length
      );
      if (caseStudyWalkthroughs.length > 0) {
        let videocaseslider = document.getElementById("case-study-swiper");
        videocaseslider.innerHTML = "";
        videocaseslider.classList.add("swiper", "case-study-container");
        videocaseslider.style.cssText = `width: 100%;`;

        let swiperWrapper = document.createElement("div");
        swiperWrapper.classList.add("swiper-wrapper");

        for (let eachcase in caseStudyWalkthroughs) {
          console.warn("earch case", eachcase);

          let caseSlide = document.createElement("div");
          caseSlide.classList.add("swiper-slide", "case-study-video-wrap");

          let caseVideo = document.createElement("video");
          caseVideo.classList.add("case-study-video-ps");
          caseVideo.src = caseStudyWalkthroughs[eachcase].url;
          caseVideo.controls = true;
          caseVideo.playsInline = true;
          caseVideo.poster =
            "https://cdn.prod.website-files.com/67e360f08a15ef65d8814b41/683031d15554289474aca28d_case%20study%20banner.png";

          let casetheimagecheck = document.createElement("img");
          casetheimagecheck.classList.add("deletebriefs-3");
          casetheimagecheck.src =
            "https://cdn.prod.website-files.com/67e360f08a15ef65d8814b41/67f6dfbc2b16d9977c85eeb2_Group%201597881168.png";
          casetheimagecheck.setAttribute("itemindex", eachcase);

          casetheimagecheck.addEventListener("click", async () => {
            let thedeleteButton = event.target;
            let todeleteindex = thedeleteButton.getAttribute("itemindex");
            let thedeletecontainer = document.getElementById(
              "casestudiesdeletecontainer"
            );
            thedeletecontainer.style.display = "flex";
            thedeletecontainer.setAttribute("itemindex", todeleteindex);
          });

          caseSlide.append(caseVideo, casetheimagecheck);

          swiperWrapper.append(caseSlide);
        }
        videocaseslider.append(swiperWrapper);

        if (window.innerWidth < 1024) {
          loadSwiperJS().then(() => {
            new Swiper(videocaseslider, {
              slidesPerView: 1.1,
              spaceBetween: 25,
              centeredSlides: false,
              allowTouchMove: true,
              navigation: false,
              pagination: false,
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
        let thecaseslider4 = document.getElementById("casestudyeditshowcase");
        thecaseslider4.innerHTML = "";
      }

      if (lawyerState.personalQA.length === 0) {
        lawyerState.personalQA = jsonUser["personal qa"] || [];
      }
      let questionsAndAnswers = lawyerState.personalQA;
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

          qaedit.addEventListener("click", async (event) => {
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

      let certificates = [
        ...lawyerState.certificates,
        ...(jsonUser["certificates"] ?? []),
        ,
      ];

      if (certificates.length > 0) {
        let certificateSlider = document.getElementById("certificate-swiper");
        certificateSlider.innerHTML = "";
        certificateSlider.classList.add("swiper", "certificate-swiper-ps");
        certificateSlider.style.cssText = `width: 100%; overflow: hidden;`;

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

        const swiperWrapper = document.createElement("div");
        swiperWrapper.classList.add("swiper-wrapper");

        for (let eachcert in certificates) {
          const swiperSlide = document.createElement("div");
          swiperSlide.classList.add("swiper-slide");
          swiperSlide.style.cssText = `width: auto; flex-shrink: 0; padding: 0 10px;`;

          let imageContainer = document.createElement("div");
          imageContainer.classList.add("certificate-img-wrap");

          const imageConatiner2 = document.createElement("div");

          let certimage = document.createElement("img");
          certimage.classList.add("cert-image-ps");
          certimage.src = certificates[eachcert].url;
          certimage.style.width = "auto";
          /*
                theimageWrap.style.backgroundImage = `url('${mongodbcertificates[eachcert]}')`;
                theimageWrap.style.backgroundSize = "cover"; // Makes the image cover the div
                theimageWrap.style.backgroundPosition = "center"; // Centers the image
                */
          let certdelete = document.createElement("img");
          certdelete.classList.add("deletebriefs-2");
          certdelete.src =
            "https://cdn.prod.website-files.com/67e360f08a15ef65d8814b41/67f6dfbc2b16d9977c85eeb2_Group%201597881168.png";
          certdelete.setAttribute("itemindex", eachcert);

          certdelete.addEventListener("click", async (event) => {
            let thedeleteButton = event.target;
            let todeleteindex = thedeleteButton.getAttribute("itemindex");
            let thedeletecontainer = document.getElementById(
              "certdeletecontainer"
            );
            thedeletecontainer.style.display = "flex";
            thedeletecontainer.setAttribute("itemindex", todeleteindex);
          });

          imageConatiner2.append(certdelete, certimage);
          imageContainer.append(imageConatiner2);
          swiperSlide.append(imageContainer);
          swiperWrapper.append(swiperSlide);
        }

        certificateSlider.append(prevBtn, nextBtn, swiperWrapper, pagination);

        loadSwiperJS().then(() => {
          new Swiper(certificateSlider, {
            spaceBetween: 16,
            slidesOffsetAfter: 30,
            centeredSlides: false,
            pagination: {
              el: pagination,
              clickable: true,
            },
            navigation: {
              nextEl: nextBtn,
              prevEl: prevBtn,
            },
            // Disable swiping on desktop, enable on mobile
            allowTouchMove: window.innerWidth < 1024,
            breakpoints: {
              0: {
                slidesPerView: 1.1,
                allowTouchMove: true,
                centeredSlides: false,
                slidesOffsetAfter: 30,
              },
              1024: {
                slidesPerView: 1,
                allowTouchMove: false,
                centeredSlides: true, // Center the single slide
                slidesOffsetAfter: 0, // Remove offset for true centering
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
      } else {
        document.getElementById("certificate-swiper").style.display = "none";
      }

      document.getElementById("thepageloader").style.display = "none";
    }
    if (mongodbuser.status == "false") {
      data = {
        "canada-or-usa": member.customFields["canada-or-usa"],
        email: member.auth.email,
        "firm-name": member.customFields["firm-name"],
        name: `${member.customFields["first-name"]} ${member.customFields["last-name"]}`,
        "profile image": "",
        id: member.id,
        memberstackid: member.id,
        membership: member.planConnections[0].planId,
        Phone: member.customFields.phone,
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

  qadelete.addEventListener("click", async (event) => {
    let thedeleteButton = event.target;
    let todeleteindex = thedeleteButton.getAttribute("itemindex");
    lawyerState.allEducation.splice(todeleteindex, 1);

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
  if (lawyerState.mediaPressMentions.length === 0) {
    lawyerState.mediaPressMentions = jsonUser["media press mentions"] || [];
  }
  let themediaandPress = lawyerState.mediaPressMentions;
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

      // delete icon
      const deleteIcon = document.createElement("img");
      deleteIcon.src =
        "https://cdn.prod.website-files.com/67e360f08a15ef65d8814b41/67f6dfbc2b16d9977c85eeb2_Group%201597881168.png";
      deleteIcon.classList.add("deletebriefs-4");

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

      card.appendChild(deleteIcon);
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

function updateOfferConsultationCheckboxImages() {
  if (lawyerState.offerConsultation == "yes") {
    document.getElementById("offerconsultancyimageno").src =
      "https://cdn.prod.website-files.com/67e360f08a15ef65d8814b41/67f688109c8eaf330c0f0e34_icons8-unchecked-checkbox-50.png";
    document.getElementById("offerconsultancyimageyes").src =
      "https://cdn.prod.website-files.com/67e360f08a15ef65d8814b41/67f689ee9a1a8514a23f8919_icons8-checked-box-24.png";
  } else if (lawyerState.offerConsultation == "no") {
    document.getElementById("offerconsultancyimageno").src =
      "https://cdn.prod.website-files.com/67e360f08a15ef65d8814b41/67f689ee9a1a8514a23f8919_icons8-checked-box-24.png";
    document.getElementById("offerconsultancyimageyes").src =
      "https://cdn.prod.website-files.com/67e360f08a15ef65d8814b41/67f688109c8eaf330c0f0e34_icons8-unchecked-checkbox-50.png";
  }
}

function updateOfferContingencyCheckboxImages() {
  if (lawyerState.offerContingency == "yes") {
    document.getElementById("offercontingencyimageno").src =
      "https://cdn.prod.website-files.com/67e360f08a15ef65d8814b41/67f688109c8eaf330c0f0e34_icons8-unchecked-checkbox-50.png";
    document.getElementById("offercontingencyimageyes").src =
      "https://cdn.prod.website-files.com/67e360f08a15ef65d8814b41/67f689ee9a1a8514a23f8919_icons8-checked-box-24.png";
  } else if (lawyerState.offerContingency == "no") {
    document.getElementById("offercontingencyimageno").src =
      "https://cdn.prod.website-files.com/67e360f08a15ef65d8814b41/67f689ee9a1a8514a23f8919_icons8-checked-box-24.png";
    document.getElementById("offercontingencyimageyes").src =
      "https://cdn.prod.website-files.com/67e360f08a15ef65d8814b41/67f688109c8eaf330c0f0e34_icons8-unchecked-checkbox-50.png";
  }
}

function updateProBonoCheckboxImages() {
  if (lawyerState.proBonoWork == "yes") {
    document.getElementById("probonoimageno").src =
      "https://cdn.prod.website-files.com/67e360f08a15ef65d8814b41/67f688109c8eaf330c0f0e34_icons8-unchecked-checkbox-50.png";
    document.getElementById("probonoimageyes").src =
      "https://cdn.prod.website-files.com/67e360f08a15ef65d8814b41/67f689ee9a1a8514a23f8919_icons8-checked-box-24.png";
  } else if (lawyerState.proBonoWork == "no") {
    document.getElementById("probonoimageno").src =
      "https://cdn.prod.website-files.com/67e360f08a15ef65d8814b41/67f689ee9a1a8514a23f8919_icons8-checked-box-24.png";
    document.getElementById("probonoimageyes").src =
      "https://cdn.prod.website-files.com/67e360f08a15ef65d8814b41/67f688109c8eaf330c0f0e34_icons8-unchecked-checkbox-50.png";
  }
}

function displayLoading() {
  $("#theloadingwait").css("display", "flex");
}

function hideLoading() {
  $("#theloadingwait").css("display", "none");
}
