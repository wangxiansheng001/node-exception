

// // var a = require("./1");

// // console.log(module);

// // console.log(a);
// // console.log(process.argv)

// // process.stdin.on('data',function(){

// // })

// // process.stdin.resume();
// // process.stdin.on('data',function(){
// //     console.log('用户输入');
// // })
// // var a;
// // var b;
// // process.stdout.write('请输入a的值');

// // process.stdin.on('data',function(chunk){
// //     if(!a){
// //         a = Number(chunk);
// //         process.stdout.write('请输入b的值');
// //     }else{
// //         b = Number(chunk)
// //         process.stdout.write('结果是'+(a + b));
// //     }
// // })
// var bf = new Buffer(5);
// console.log(bf);
// bf[6] = 10;
// console.log(bf);

// var bf1 = new Buffer([1,2,3]);
// console.log(bf1);
// bf1[1] = 10;
// console.log(bf1);
// var bf3 = new Buffer('mm','utf-8');

// console.log(bf3);
// for(var i =0; i<bf3.length;i++){
//     // console.log(bf3[i].toString(16));
//     console.log(String.fromCharCode(bf3[i]))
// }
// var bf = new Buffer(5);
// bf[0]= 45;
// var bf4 = new Buffer(10);
// bf4[0]=2;
// bf.copy(bf4);
// console.log(bf4);
// console.log(bf);
// var fs = require('fs');

// fs.open('1.txt','r+',function(err,fd){

//     if(err){
//         console.log('打开文件失败')
//     }else{

//         var bf = new Buffer('123');

//         fs.write(fd, bf, 0, 3, 0,function(){
//             console.log(arguments);
//         })
//     }


// })


// fs.exists(filename, function(isExists){
//     if(!isExists){
//         fs.writeFile(filename,'sfsf',function(err){
//             if(err){
//                 console
//             }
//         })
//     }
// })
// fs.unlink('1.txt',function(chunk){
//     if(chunk){
//         console.log('删除失败')
//     }else{
//         console.log('删除成功')
//     }
// })
// fs.rename('1.txt','4.txt',function(){
//     console.log(arguments)
// })
// fs.stat('4.txt',function(){
//     console.log(arguments)
// })
// fs.watch('1.txt',function(ev, fn){
//     console.log(ev);
//     if(fn){
//         console.log(fn);
//     }else{
//         console.log('...')
//     }
// })

// fs.readdir('../nodejs',function(err, fileList){
//     fileList.forEach(function(f){
//         fs.stat(f,function(err,info){

//             console.log(arguments)
//         })
//     })
// })


// var projectData = {
//     'name': 'xiaming',
//     'fileData': [
//         { 'name': 'css', 'type': 'dir' },
//         { 'name': 'js', 'type': 'dir' },
//         { 'name': 'images', 'type': 'dir' },
//         { 'name': 'index.html', 'type': 'file', 'content': '<html>\n\t<head>\n\t\t<title>title</title>\n\t</head>\n\t<body>\n\t\t<h1>Hello</h1>\n\t</body>\n</html>' }
//     ]
// }
// var fs = require('fs');
// if (projectData.name) {
//     fs.mkdir(projectData.name);

//     var fileData = projectData.fileData;
//     if (fileData && fileData.forEach) {
//         fileData.forEach(function (f) {
//             f.path = projectData.name + '/' + f.name;
//             f.content = f.content || '';
//             switch (f.type) {
//                 case 'dir':
//                     fs.mkdirSync(f.path);
//                     break;
//                 case 'file':
//                     fs.writeFileSync(f.path, f.content);
//                     break;
//                 default:
//                       break;

//             }
//         })
//     }


// }

// var fs = require('fs');
// var filedir = './xiaming/js';

// fs.watch(filedir,function(ev,filelist){
//     // console.log(ev)
//     fs.readdir(filedir,function(err,datalist){
        
//         var arr = [];
//         datalist.forEach(function(f){
//             var inf= fs.statSync(filedir+'/'+f);
//              console.log(inf)    

//             if(inf.mode = 33188){
//                 arr.push(filedir+ "/" + f);
//             }
//          });

//          var content = '';
//          arr.forEach(function(f){
//              var c = fs.readFileSync(f);

//              content+= c.toString()+ '\n';
             
//          })
//          console.log(content)
//     })
// })
var fs = require('fs');
var filedir  =  './xiaming/js';

fs.watch(filedir, function(ev, file){
    // console.log(ev +'/' + file); 不需要判断file是否有内容
    //只需要一个文件发生了变化  我们就需要对这个文件夹下的所有文件进行读取 然后合并
    fs.readdir(filedir,function(err, datalist){
        var arr = [];
        datalist.forEach(function(f){

            // arr.push()
            var info = fs.statSync(filedir + '/' +f);
            if(info.mode == 33188){
                arr.push(filedir+'/'+f);
            }
        })
        console.log(arr);

        //读取数组中的文件内容,并合并
        var content = '';
        arr.forEach(function(data){
            var c = fs.readFileSync(data);
            content+= c.toString()+ '\n';
        })
        console.log(content);
        fs.writeFile('./xiaming/css/index.js',content);
    })

})
