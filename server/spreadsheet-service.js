require('dotenv').config()
const { GoogleSpreadsheet } = require('google-spreadsheet')
let doc

const init = async () => {
  if (doc && doc.title) return doc.sheetCount

  try {
    doc = new GoogleSpreadsheet(process.env.SPREADSHEET_ID)

    await doc.useServiceAccountAuth({
      client_email: process.env.SPREADSHEET_CLIENT_EMAIL,
      private_key: process.env.SPREADSHEET_PRIVATE_KEY.replace(/\\n/gm, '\n')
    })
    await doc.loadInfo()
    return doc.sheetCount
  } catch (error) {
    console.error(error)
    return 0
  }
}

const getRows = async () => {
  if (!doc) await init()
  const sheet = doc.sheetsByIndex[0]
  return await sheet.getRows()
}

module.exports = {
  init,
  getRows
}
