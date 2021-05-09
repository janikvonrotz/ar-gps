const fs = require('fs');

fs.copyFile('node_modules/aframe/dist/aframe.min.js', 'dist/aframe.min.js', (err) => {
    if (err) throw err
    console.log('aframe.min.js was copied to dist folder.')
})

fs.copyFile('node_modules/aframe-look-at-component/dist/aframe-look-at-component.min.js',
    'dist/aframe-look-at-component.min.js', (err) => {
        if (err) throw err
        console.log('aframe-look-at-component.min.js was copied to dist folder.')
    })
