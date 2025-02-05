const assert=require('assert');

exports.insertDocument=(db,document,collection,callback)=>{
    const coll=db.collection(collection);
    return coll.insert(document);
    /*coll.insert(document,(err,result)=>{
        assert.equal(err,null);
        console.log("Inserted "+result.result.n+" documents into the collection"+collection);
        callback(result);
    });*/
};
exports.findDocument=(db,collection,callback)=>{
    const coll=db.collection(collection);
    return  coll.find({}).toArray();
    /*coll.find({}).toArray((err,docs)=>{
        assert.equal(err,null);
        callback(docs);
    });*/
    
};
exports.removeDocument=(db,document,collection,callback)=>{
    const coll=db.collection(collection);
    return coll.deleteOne(document);
/*    coll.deleteOne(document,(err,result)=>{
        assert.equal(err,null);
        console.log("Removed the document ",document);
        callback(result);
    });    */
};
exports.updateDocument=(db,document,update,collection,callback)=>{
    const coll=db.collection(collection);
    return coll.updateOne(document,{$set:update},null);
/*    coll.updateOne(document,{$set:update},null,(err,result)=>{
        assert.equal(err,null);
        console.log("Update the document with",update);
        callback(result);
    });*/
};