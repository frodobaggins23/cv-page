exports.getCopyHandler = async ({ spreadsheetService, spreadsheetHelper }, res) => {
  try {
    const sheetsCount = await spreadsheetService.init()
    if (!sheetsCount) {
      return res.status(404).send({ message: 'no sheets' })
    }
    const rows = await spreadsheetService.getRows()
    const data = spreadsheetHelper.getRowData(rows)
    return res.status(200).send({
      intro: Array.from(data.get('intro')),
      work: Array.from(data.get('work')),
      vision: Array.from(data.get('vision')),
      icons: Array.from(data.get('icons')),
      other: Array.from(data.get('other'))
    })
  } catch (error) {
    console.error(error)
    return res.status(500).send({ message: 'server error', err: error })
  }
}
