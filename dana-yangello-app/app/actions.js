'use server';
import fs   from 'fs';
import path from 'path';
import { google } from 'googleapis';

async function getAuthClient() {
  const credPath = path.join(process.cwd(), 'credentials.json');
  if (!fs.existsSync(credPath)) {
    throw new Error(`⚠️ credentials.json not found at ${credPath}`);
  }

  // Let GoogleAuth read your JSON key for you:
  const auth = new google.auth.GoogleAuth({
    keyFile: credPath,
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  });

  return auth.getClient();
}

export async function fetchSheetData(spreadsheetId, sheetName) {
  const authClient = await getAuthClient();
  const sheets = google.sheets({ version: 'v4', auth: authClient });

  const res = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: sheetName,
  });

  const allRows = res.data.values || [];
  if (allRows.length === 0) return [];
  const [headers, ...dataRows] = allRows;
  const objects = dataRows.map(row =>
    headers.reduce((obj, header, idx) => {
      obj[header] = row[idx] ?? ''; 
      return obj;
    }, {})
  );
  return objects;
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