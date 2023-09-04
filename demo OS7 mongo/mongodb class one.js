// 创建或切换数据库
use articledb

// 显示集合
show dbs

// 显性创建新集合
db.createCollection("myCollection")

// 删除集合
db.myCollection.drop()

// 隐性创建新集合+单文档插入
db.comment.insert(
{"id":"100000","age":"20","createdatetime":new Date(),"likenum":NumberInt(10),"state":null}
)

// 查询所有文档
db.comment.find()

// 修改文档
db.comment.update({"age":"20"},{$set:{"age":"201"}})

//删除文档
db.comment.remove({"age":"20"})

//多行文档插入
db.comment.insert(
[
{"id":"100000","age":"20","createdatetime":new Date(),"likenum":NumberInt(10),"state":null},
{"id":"100050","age":"18","createdatetime":new Date(),"likenum":NumberInt(10),"state":null},
{"id":"100010","age":"3","createdatetime":new Date(),"likenum":NumberInt(10),"state":null}
]
)

// 与操作符    需要同时满足两个条件
db.comment.find({$and:[{"id":"100000"},{"age":"20"}]})

// 或操作符    两个条件满足其中之一
db.comment.find({$or:[{"id":"100000"},{"age":"18"}]})

//大于操作符
db.comment.find({"id":{$gt:"100010"}})

//小于操作符
db.comment.find({"id":{$lt:"100010"}})

//大于等于操作符
db.comment.find({"id":{$gte:"100010"}})