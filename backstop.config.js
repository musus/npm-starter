const fs = require('fs')
let allScenarios = []

function loadScenarios (dirname) {
  const files = fs.readdirSync(dirname)
  files.forEach ((file) => {
    const content = JSON.parse(fs.readFileSync(dirname + file, 'utf-8'))
    if (Array.isArray(content)) {
      content.forEach((scenario) => {
        allScenarios.push(scenario)
      })
    } else {
      allScenarios.push(content)
    }
  })
}

loadScenarios('backstop_data/scenarios/')

module.exports={
  "id": "backstop_default",
  "viewports": [
    {
      "label": "phone",
      "width": 320,
      "height": 480
    },
    {
      "label": "tablet",
      "width": 1024,
      "height": 768
    },
    {
      "label": "PC",
      "width": 1440,
      "height": 1200
    }
  ],
  "onBeforeScript": "puppet/onBefore.js",
  "onReadyScript": "puppet/onReady.js",
  "scenarios": allScenarios,
  "paths": {
    "bitmaps_reference": "backstop_data/bitmaps_reference",
    "bitmaps_test": "backstop_data/bitmaps_test",
    "engine_scripts": "backstop_data/engine_scripts",
    "html_report": "backstop_data/html_report",
    "ci_report": "backstop_data/ci_report"
  },
  "report": ["browser"],
  "engine": "puppeteer",
  "engineOptions": {
    "args": ["--no-sandbox"]
  },
  "asyncCaptureLimit": 5,
  "asyncCompareLimit": 50,
  "debug": false,
  "debugWindow": false
}
