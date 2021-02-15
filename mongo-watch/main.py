from pymongo import MongoClient
from pymongo.collection import Collection
from pymongo.errors import PyMongoError
client = MongoClient('mongodb://localhost:27017')

db = client.nnids
col: Collection = db.nnids_data

try:
    with col.watch(
            [{'$match': {'operationType': 'insert'}}]) as stream:
        for insert_change in stream:
            print(insert_change)
except PyMongoError as e:
    # The ChangeStream encountered an unrecoverable error or the
    # resume attempt failed to recreate the cursor.
    print(e)
