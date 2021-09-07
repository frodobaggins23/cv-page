
const ALLOWED_HEADERS = new Map(
  [
    ['intro', ['name', 'intro', 'introLong']],
    ['work', ['title', 'employer', 'dateFrom', 'dateTo', 'description', 'workType']],
    ['vision', ['visionTitle', 'visionClaim', 'visionText']],
    ['icons', ['iconText', 'iconType', 'iconUrl', 'iconAlt']],
    ['other', ['otherText', 'otherValue1', 'otherValue2', 'otherValue3']]
  ])

const getSectionData = (rows, headers) => {
  const sectionData = new Set()
  for (let i = 0; i < rows.length; i++) {
    const data = headers.reduce((acc, header) => {
      if (rows[i][header]) {
        acc[header] = rows[i][header]
      }
      return acc
    }, {})
    if (Object.keys(data).length) {
      sectionData.add(data)
    }
  }
  return sectionData
}

const getRowData = (rows) => {
  const rowData = new Map()
  ALLOWED_HEADERS.forEach((headers, section) => {
    const sectionData = getSectionData(rows, headers)
    rowData.set(section, sectionData)
  })
  return rowData
}

module.exports = { getRowData }
