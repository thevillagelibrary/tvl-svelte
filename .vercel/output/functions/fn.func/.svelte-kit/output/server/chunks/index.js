const SHEET_ID = "1ChDwCiw-Nqv5MQo59T7xkQciZuolnzT1_B0GKh_2OSY";
const API_KEY = "AIzaSyA4Mf2QT86HVpZtcB8GQS9YRICrL4Pd4q8";
const BASE_URL = "https://sheets.googleapis.com/v4/spreadsheets/";
const KEY = "?key=" + API_KEY;
const BATCH_KEY = "&key=" + API_KEY;
const HOME_URL = BASE_URL + SHEET_ID + "/values:batchGet?ranges=Hours&ranges=Upcoming_Events" + BATCH_KEY;
const BOARD_URL = BASE_URL + SHEET_ID + "/values/Organization" + KEY;
const DONATIONS_URL = BASE_URL + SHEET_ID + "/values/Donations" + KEY;
const NEWARRIVALS_URL = BASE_URL + SHEET_ID + "/values:batchGet?ranges=Just_Off_Rental&ranges=Books&ranges=Youth" + BATCH_KEY;
const pages = [
  {
    name: "Home",
    path: "home",
    subPages: []
  },
  {
    name: "About",
    path: "about",
    subPages: [
      {
        name: "Board",
        path: "board"
      },
      {
        name: "Mission Statement",
        path: "missionstatement"
      },
      {
        name: "Membership",
        path: "membership"
      },
      {
        name: "Collection",
        path: "collection"
      },
      {
        name: "Children's Program",
        path: "childrensprogram"
      },
      {
        name: "Art for Sale",
        path: "artforsale"
      },
      {
        name: "Book Donations",
        path: "bookdonations"
      },
      {
        name: "Grab-&-Go",
        path: "grabandgo"
      }
    ]
  },
  {
    name: "News",
    path: "newsevents",
    subPages: [
      {
        name: "Outgoing Board Members",
        path: "outgoingboardmembers"
      },
      {
        name: "Literary Prizes",
        path: "literaryprizes"
      },
      {
        name: "Reading Lists on the Web",
        path: "readinglistsontheweb"
      }
    ]
  },
  {
    name: "New Arrivals",
    path: "newarrivals",
    subPages: []
  },
  {
    name: "Donate",
    path: "donate",
    subPages: [
      {
        name: "Recent Donors",
        path: "recentdonors"
      },
      {
        name: "Supporters",
        path: "supporters"
      }
    ]
  }
];
export {
  BOARD_URL as B,
  DONATIONS_URL as D,
  HOME_URL as H,
  NEWARRIVALS_URL as N,
  pages as p
};
