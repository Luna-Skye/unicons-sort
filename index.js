// ----------------------------- //
// UNICONS SORT | SORTING SCRIPT //
// ----------------------------- //

// Require modules
const fs = require('fs-extra')


// Get Icon Data (src/icons.json)
const iconData = JSON.parse(fs.readFileSync('src/icons.json', 'utf8'))

// Loop through each Category
iconData.categories.forEach(cat => {
    
    // Loop through each Icon in Category
    cat.icons.forEach(icon => {
        
        // Get Icon SVG data
        fs.readFile(`src/icons/${icon.name}.svg`, 'utf8', (err, svg) => {
            
            // Ouput Icon SVG to dist category folder
            fs.outputFile(`dist/${cat.name}/${icon.name}.svg`, svg, err => {
                if (err) return console.error(err)
                console.log(`Successfully output ${cat.name}/${icon.name}.svg`)
            })
        })
    })
})
