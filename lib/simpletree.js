
function Tree() {
    this.values = {};
}

Tree.prototype.getData = function(path)
{
    if (path == null || path[0] != '/')
        throw "Invalid path " + path;

    if (path == '/')
        return this.values.data;

    path = path.slice(1);
    
    if (!this.values.children)
        return null;
    
    if (!this.values.children[path])
        return null;
        
    return this.values.children[path].data;
}

Tree.prototype.setData = function(path, data)
{
    if (path == null || path[0] != '/')
        throw "Invalid path " + path;

    if (path == '/')
        return this.values.data;

    path = path.slice(1);
    
    this.values.children[path].data = data;
}

Tree.prototype.createNode = function(path, data)
{
    if (path == null || path[0] != '/')
        throw "Invalid path " + path;

    if (path == '/') {
        this.values.data = data;
        return;
    }
    
    path = path.slice(1);
    
    if (!this.values.children)
        this.values.children = {};
        
    if (!this.values.children[path])
        this.values.children[path] = {};
        
    this.values.children[path].data = data;
}

exports.Tree = Tree;

