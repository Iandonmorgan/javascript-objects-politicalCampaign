/*

You have volunteered your time to a local political candidate,
Elizabeth Sanger, who wants to become a US representative in
Congress for your district. Unfortunately, the team discovered
that you're a software developer, so they have begged you to build
an application that lets them track volunteers, and store information
about Elizabeth and her campaign.

Your job is to define the different objects and arrays, their
structure, and the corresponding properties for each, to represent
the following information about Elizabeth's campaign.
*/


// Her congressional district (you can use yours here)

let congressionalDistrict = "";

// Her platform statements for the following issues.
// Taxes
// Jobs
// Infrastructure
// Health care
// Crime and enforcement

let politicalPlatform = {
    taxes:"",
    jobs:"",
    infrastructure:"",
    healthCare:"",
    crime:""
};

// URL for donation form

let donationLink = "";

// Calendar of events

let eventsCalendar = [];

// Volunteer information
    // Name
    // Address
    // Email
    // Phone number
    // Availability
    // What activities each one is willing to do
        // (e.g. answering phone calls, taking polls, etc.)

let volunteerInfo = {
    name:"",
    address:"",
    email:"",
    phone:"",
    avail:"",
    activities:""

};

// Biography

let bio = "";

// Image gallery
    // Head shot
    // Picture of family
    // Picture of constituents

let imageGallery = {
    headShot:"",
    family:"",
    constituents:""
}

// Mission statement

let missionStatement = "";

// URL for registering to vote

let voterRegistrationURL = "";

/*
Advanced challanges are intended to be difficult and the
expectation is for you to use your imagination, and research
skills to make your own decisions about which code should be written.

After you have defined all the objects for representing the
data about Elizabeth's campaign, write a corresponding function
for each one whose purpose is to change the state of the object.
Then use your functions to modify the existing data.

Things to think about:

Am I modifying an array? Then the function argument should be added
to the target array with the push() method.

Am I modifying an object? Then I should pass both the key name to
be modified, and its corresponding value.

This challenge is for you to practice writing functions,
so the more you can write, the better. It helps make neural
connections in your brain at this point since you're still
building your software vocabulary.
*/

// Her congressional district (you can use yours here)

const updateCongressionalDistrict = (value) => {
    congressionalDistrict = value;
}

updateCongressionalDistrict("Tennessee's 5th Congressional District");

// Her platform statements for the following issues.
// Taxes
// Jobs
// Infrastructure
// Health care
// Crime and enforcement

const updatePlatform = (topic, newStatement) => {
    politicalPlatform[topic] = newStatement;
}

updatePlatform("taxes", "No new taxes!");
updatePlatform("jobs", "Create new jobs!");
updatePlatform("infrastructure", "Bridge and highway repairs needed.");
updatePlatform("healthcare", "Healthcare For All!");
updatePlatform("crime", "Legalize weed and commute sentences.");

console.table(politicalPlatform);

// URL for donation form

const updateDonationForm = (value) => {
    donationLink = value;
}

updateDonationForm("https://berniesanders.com");

// Calendar of events

const updateEventsCalendar = (value) => {
    eventsCalendar.push(value);
}

console.log(eventsCalendar);

// Volunteer information
    // Name
    // Address
    // Email
    // Phone number
    // Availability
    // What activities each one is willing to do
        // (e.g. answering phone calls, taking polls, etc.)

const updateVolunteerInfo = (key, value) => {
    volunteerInfo[key] = value;
}
        
updateVolunteerInfo("name", "Landon Morgan");
updateVolunteerInfo("address", "1202 N. 5th St.");
updateVolunteerInfo("email", "morganlandon@gmail.com");
updateVolunteerInfo("phone", "615-516-0343");
updateVolunteerInfo("avail", "Available!");
updateVolunteerInfo("activities", "phonecalls, canvasing");

console.table(volunteerInfo);

// Biography

const updateBio = (value) => {
    bio = value;
}

updateBio("Here is an updated biography. Here is an updated biography. Here is an updated biography. Here is an updated biography. ");

// Image gallery
    // Head shot
    // Picture of family
    // Picture of constituents

const updateImageGallery = (key, value) => {
    imageGallery[key] = value;
}
        
updateImageGallery("headShot", "https://estorms.github.io/img/profpic.jpeg");
updateImageGallery("family", "https://www.nobelprize.org/uploads/2018/06/blackburn_autobio_2.jpg");
updateImageGallery("constituents", "https://s3.amazonaws.com/lowres.cartoonstock.com/politics-politician-constituent-voter-electorate-population-amrn1697_low.jpg");

console.table(imageGallery);

// Mission statement

const updateMissionStatement = (value) => {
    missionStatement = value;
}

updateMissionStatement("Here is an updated Mission Statement. Here is an updated Mission Statement. Here is an updated Mission Statement. ");


// URL for registering to vote

const updateVoterRegistration = (value) => {
    voterRegistrationURL = value;
}

updateVoterRegistration("https://tnmap.tn.gov/voterlookup/");
