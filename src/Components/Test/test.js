
let fileName = 'Nitin.mp4'

let checkFileType = [{"fileType": ".pdf", "value": "pdf"},{"fileType": ".docx", "value": "word"},{"fileType": ".xls", "value": "excel"},{"fileType": ".zip", "value": "zip"},{"fileType": ".mp3", "value": "audio"},{"fileType": ".mp4", "value": "video"},{"fileType": ".txt", "value": "note"},{"fileType": ".jpg", "value": "jpg"},{"fileType": ".png", "value": "jpg"},{"fileType": ".java", "value": "java"},{"fileType": ".js", "value": "js"},{"fileType": ".html", "value": "html"},{"fileType": ".css", "value": "css"}];

let fileType = 'other'

let myData = [{"name": "Nitin", "age": "26", "email": "nitin.nadar5@gmail.com", "fileType": 
                checkFileType.filter((fil) => {
                    if(JSON.stringify(fileName).includes(fil.fileType)){
                        fileType = fil.value
                        return fil.value
                    }
                }).length == 0 ? fileType : fileType }
              ]

// console.log(checkFileType.filter((fil) => {
//     if(JSON.stringify(fileName).includes(fil.fileType)){
//         fileType = fil.value
//         return fil.value
//     }
// }).length == 0);

// console.log(myData);

let data = {sec0: [{name: "nitin", age: 5},{name: "nitin", age: 15},{name: "nitin", age: 20}], sec1: [{name: "nitin", age: 25},{name: "nitin", age: 30},{name: "nitin", age: 35}]}

console.log([data].forEach(element => {
    return element
}).map((res) => {
    return res
}));


