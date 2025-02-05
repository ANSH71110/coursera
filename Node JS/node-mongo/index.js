const MongoClient=require('mongodb').MongoClient;
const assert=require('assert');
const dbupper=require('./operations');

const url='mongodb://localhost:27017';
const dbname='conFusion';

MongoClient.connect(url).then((client,err)=>{
    assert.equal(err,null);

    const db =client.db(dbname);
    console.log('Connected correctly to the server');

    dbupper.insertDocument(db,{name:'ansh',description:'text'},'dishes')
    .then((result)=>{
        console.log("Insert Document:\n",result.ops);
        return dbupper.findDocument(db,'dishes');
    })
    .then((docs)=>{
        console.log('Found Documents:\n',docs);

        return dbupper.updateDocument(db,{name:'ansh'},{description:'updates text'},'dishes');
    })
    .then((result)=>{
        console.log('Updated Documents:\n',result.result);

        return dbupper.findDocument(db,'dishes');
    })
    .then((docs)=>{
        console.log('Found Documents:\n',docs);

        return db.dropCollection('dishes')
    })
    .then((result)=>{
        console.log('Dropped Collection: ',result);
        client.close();
    })
    .catch((err)=> console.log(err));
})               
.catch((err)=> console.log(err));

/*MongoClient.connect(url,(err,client)=>{
    assert.equal(err,null);

    const db =client.db(dbname);

    dbupper.insertDocument(db,{name:'ansh',description:'text'},'dishes',(result)=>{
        console.log("Insert Document:\n",result.ops);

        dbupper.findDocument(db,'dishes',(docs)=>{
            console.log('Found Documents:\n',docs);

            dbupper.updateDocument(db,{name:'ansh'},{description:'updates text'},'dishes',(result)=>{
                console.log('Updated Documents:\n',result.result);

                dbupper.findDocument(db,'dishes',(docs)=>{
                    console.log('Found Documents:\n',docs);

                    db.dropCollection('dishes',(result)=>{
                        console.log('Dropped Collection: ',result);
                        client.close();
                    });
                });
            });
        });
    });

    const collection=db.collection('dishes');

    collection.insertOne({"name":"ballui","description":"test"},(err,result)=>{
        assert.equal(err,null);

        console.log("After Insert:\n");
        console.log(result.ops);

        collection.find({}).toArray((err,docs)=>{
            assert.equal(err,null);

            console.log('Found:\n');
            console.log(docs);

            db.dropCollection('dishes',(err,result)=>{
                assert.equal(err,null);

                client.close();
            });
        });
    });
});*/