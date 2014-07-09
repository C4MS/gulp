var fs = require('fs');
var symlinks = [
  {
    src: 'gulp/gulpfile.js',
    dest: 'gulpfile.js'
  },
  {
    src: 'gulp/package.json',
    dest: 'package.json'
  }
];

var rmdirRecursiveSync = function(path) {
  fs.readdirSync(path).forEach(function(file, index) {
    var curPath = path + "/" + file;

    if(fs.statSync(curPath).isDirectory()) {
      rmdirRecursiveSync(curPath);
    } else {
      fs.unlinkSync(curPath);
    }
  });
  fs.rmdirSync(path);
};

for (var i = symlinks.length - 1; i >= 0; i--) {
  var symlink = symlinks[i];
  var srcExists = fs.existsSync(symlink.src);
  var destExists = fs.existsSync(symlink.dest);
  var destIsSymlink;

  if(!srcExists) {
    continue;
  }

  if(destExists) {
    destIsSymlink = fs.lstatSync(symlink.dest).isSymbolicLink();
  }

  if(destExists && !destIsSymlink) {
    console.log('Remove: ', symlink.dest);
    rmdirRecursiveSync(symlink.dest);
  }

  if(destExists && destIsSymlink) {
    console.log('Unlink: ', symlink.dest);
    fs.unlinkSync(symlink.dest);
  }

  console.log('symlinking: ', symlink.dest);
  fs.symlinkSync(symlink.src, symlink.dest);
};
