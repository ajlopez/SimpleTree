
function Tree() {
    this.values = {};
}

Tree.prototype.getData = function(path)
{
    return getDataValue(this.values, path);
}

Tree.prototype.setData = function(path, data)
{
    setDataValue(this.values, path, data);
}

Tree.prototype.createNode = function(path, data)
{
    createNodeValue(this.values, path, data);
}

function createNodeValue(values, path, data)
{
    if (path == null || path[0] != '/')
        throw "Invalid path " + path;

    if (path == '/') {
        setDataValue(values, path, data);
        return;
    }

    path = path.slice(1);
    
    var p = path.indexOf('/');
    
    if (p < 0) {
        if (!values.children)
            values.children = {};
            
        if (!values.children[path])
            values.children[path] = {};
            
        setDataValue(values, '/' + path, data);
        return;
    }

    var subpath = path.slice(p);
    path = path.slice(0, p);
    
    if (!values.children)
        values.children = {};        
    if (!values.children[path])
        values.children[path] = {};
        
    createNodeValue(values.children[path], subpath, data);
}

function getDataValue(values, path)
{
    if (path == null || path[0] != '/')
        throw "Invalid path " + path;

    if (path == '/')
        return values.data;
        
    path = path.slice(1);
    
    var p = path.indexOf('/');
    
    if (p < 0)
        return values.children[path].data;
    
    var subpath = path.slice(p);
    path = path.slice(0, p);
    
    return getDataValue(values.children[path], subpath);
}

function setDataValue(values, path, data)
{
    if (path == null || path[0] != '/')
        throw "Invalid path " + path;

    if (path == '/') {
        values.data = data;
        return;
    }
        
    path = path.slice(1);
    
    var p = path.indexOf('/');
    
    if (p < 0) {
        values.children[path].data = data;
        return;
    }
    
    var subpath = path.slice(p);
    path = path.slice(0, p);
    
    return setDataValue(values.children[path], subpath, data);
}

exports.Tree = Tree;

