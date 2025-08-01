'use server'
import { google } from 'googleapis'
import { createPrivateKey } from 'crypto'

async function getAuthClient() {
  // grab & un-escape your env
  let rawKey = process.env.GOOGLE_SA_PRIVATE_KEY || ''
  const clientEmail = process.env.GOOGLE_SA_CLIENT_EMAIL

  if (!rawKey || !clientEmail) {
    throw new Error('GOOGLE_SA_PRIVATE_KEY and GOOGLE_SA_CLIENT_EMAIL are required')
  }

  const privateKey = rawKey.replace(/\\n/g, '\n').replace('\"','')
 

  // build a normalized KeyObject → PEM (PKCS#8)
  const keyObject = createPrivateKey({
    key: privateKey,
    format: 'pem',
    type: 'pkcs8',
  })
  const normalizedPem = keyObject.export({
    format: 'pem',
    type: 'pkcs8',
  })

  // now feed that into the JWT client
  const jwt = new google.auth.JWT({
    email: clientEmail,
    key: normalizedPem,
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  })

  // this step should now succeed without OpenSSL errors
  await jwt.authorize()
  return jwt
}

export async function fetchSheetData(spreadsheetId, sheetName) {
  if (!spreadsheetId) throw new Error('⚠️ spreadsheetId is required')

  const authClient = await getAuthClient()
  const sheets = google.sheets({ version: 'v4', auth: authClient })

  const res = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: sheetName,
  })

  const rows = res.data.values || []
  if (rows.length < 2) return rows.slice(1).map(r => ({}))

  const [headers, ...dataRows] = rows
  return dataRows.map(row =>
    headers.reduce((o, h, i) => {
      o[h] = row[i] || ''
      return o
    }, {})
  )
}

export async function getPageHeaderDetails(pageName){
    const spreadsheetId = process.env.CONTENT_SPREADSHEET_ID;
    if (!spreadsheetId) {
        throw new Error('Missing CONTENT_SPREADSHEET_ID in your .env.local');
    }
    const sheetName = process.env.HEADERS_SHEET_NAME;
    if (!sheetName) {
        throw new Error('Missing HEADERS_SHEET_NAME in your .env.local');
    }
    const content = await fetchSheetData(spreadsheetId, sheetName);
    const headerDetails = {}
    for (const obj of content){
        if (obj["Page"] === pageName) {
            headerDetails.pageName = pageName;
            headerDetails.title = obj["Title"] || "";
            headerDetails.subtitle = obj["Subtitle"] || "";
            headerDetails.backgroundImgPath = obj["Image Link"] || "";
            headerDetails.portraitPaths = [
                obj["Portrait Path 1"] || "",
                obj["Portrait Path 2"] || "",
                obj["Portrait Path 3"] || "",
                obj["Portrait Path 4"] || ""
            ];
            break;
        }
    }
    return headerDetails;
} 

export async function getHomePageSections() {
  const spreadsheetId = process.env.CONTENT_SPREADSHEET_ID;
  if (!spreadsheetId) {
    throw new Error('Missing CONTENT_SPREADSHEET_ID in your .env.local');
  }

  const sheetName = process.env.HOME_PAGE_SECTIONS_SHEET_NAME;
  if (!sheetName) {
    throw new Error('Missing HOME_PAGE_SECTIONS_SHEET_NAME in your .env.local');
  }

  const content = await fetchSheetData(spreadsheetId, sheetName);
  const sections = [];

  for (const obj of content){
    const section = {};
    section.title = obj["Title"] || "";
    section.heroImagePath = obj["Image"] || "";
    section.reelLink = obj["Reel Link"] || "";
    section.reelLabel = obj["Reel Label"] || "";
    section.seeMore = obj["See More"] || "";
    sections.push(section);
  }
  return sections;
}

export async function getResumeDetails() {
  const spreadsheetId = process.env.CONTENT_SPREADSHEET_ID;
  if (!spreadsheetId) {
    throw new Error('Missing CONTENT_SPREADSHEET_ID in your .env.local');
  }

  const sheetName = process.env.RESUME_DETAILS_SHEET_NAME;
  if (!sheetName) {
    throw new Error('Missing RESUME_DETAILS_SHEET_NAME in your .env.local');
  }

  const content = await fetchSheetData(spreadsheetId, sheetName);
  const resumeDetails = {};

  for (const obj of content){
    resumeDetails.pdfUrl = obj["Resume Link"] || "";
    resumeDetails.headshot1 = obj["Image 1"] || "";
    resumeDetails.headshot2 = obj["Image 2"] || "";
  }
  return resumeDetails;
}

export async function getGalleryVideos(section) {
  const spreadsheetId = process.env.CONTENT_SPREADSHEET_ID;
  if (!spreadsheetId) {
    throw new Error('Missing CONTENT_SPREADSHEET_ID in your .env.local');
  }

  let sheetName = process.env.GALLERY_REELS_SHEET_NAME;
  if (section.toLowerCase() === "parodies"){
    sheetName = process.env.GALLERY_PARODIES_SHEET_NAME;
  }
  if (!sheetName) {
    throw new Error('Missing GALLERY_' + section.toUpperCase() + '_SHEET_NAME  in your .env.local');
  }

  const content = await fetchSheetData(spreadsheetId, sheetName);
  const videoDetails = [];
  
  for (const obj of content){
        const videoDetail = {}
        videoDetail.thumbnail = obj["Thumbnail Image"] || "";
        videoDetail.videoUrl = obj["Link"] || "";
        videoDetail.description = obj["Description"] || "";
        videoDetails.push(videoDetail);
    }
  return videoDetails;
}

export async function getContactDetails() {
  const spreadsheetId = process.env.CONTENT_SPREADSHEET_ID;
  if (!spreadsheetId) {
    throw new Error('Missing CONTENT_SPREADSHEET_ID in your .env.local');
  }

  let sheetName = process.env.CONTACT_DETAILS_SHEET_NAME;

  if (!sheetName) {
    throw new Error('Missing CONTACT_DETAILS_SHEET_NAME in your .env.local');
  }

  const content = await fetchSheetData(spreadsheetId, sheetName);
  const contactDetails = {};
  
  for (const obj of content){
        contactDetails.portrait = obj["Portrait"] || "";
        contactDetails.email = obj["Email"] || "";
        contactDetails.phone = obj["Phone"] || "";
    }
  return contactDetails;
}

export async function getSocials() {
  const spreadsheetId = process.env.CONTENT_SPREADSHEET_ID;
  if (!spreadsheetId) {
    throw new Error('Missing CONTENT_SPREADSHEET_ID in your .env.local');
  }

  let sheetName = process.env.SOCIALS_SHEET_NAME;

  if (!sheetName) {
    throw new Error('Missing SOCIALS_SHEET_NAME in your .env.local');
  }

  const content = await fetchSheetData(spreadsheetId, sheetName);
  const socials = [];
  
  for (const obj of content){
        const social = {}
        social.site = obj["Site"] || "";
        social.url = obj["URL"] || "";
        social.icon = obj["Icon"] || "";
        socials.push(social);
    }
  return socials;
}

export async function getTheNews() {
  const spreadsheetId = process.env.CONTENT_SPREADSHEET_ID;
  if (!spreadsheetId) {
    throw new Error('Missing CONTENT_SPREADSHEET_ID in your .env.local');
  }

  let sheetName = process.env.IN_THE_NEWS_SHEET_NAME;

  if (!sheetName) {
    throw new Error('Missing IN_THE_NEWS_SHEET_NAME in your .env.local');
  }

  const content = await fetchSheetData(spreadsheetId, sheetName);
  const news = [];
  
  for (const obj of content){
        const newsItem = {}
        newsItem.image = obj["Image"] || "";
        newsItem.title = obj["Title"] || "";
        newsItem.url = obj["URL"] || "";
        newsItem.alt = obj["Description"] || "";
        newsItem.preview = obj["Preview"] || "";
        news.push(newsItem);
    }
  return news;
}