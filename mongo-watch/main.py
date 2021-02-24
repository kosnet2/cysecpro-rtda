import os
from pymongo import MongoClient
from pymongo.collection import Collection
from pymongo.errors import PyMongoError


print(os.environ.get('MONGODB_URI'))
client = MongoClient(os.environ.get('MONGODB_URI'))
print('Connection established')
db = client.get_default_database()
assert db.name == 'nnids'
print('Database found')
try:
    with db.pcapLogs.watch(
            [{'$match': {'operationType': 'insert'}}]) as stream:
        for insert_change in stream:
            print('Insert detected')
except PyMongoError as e:
    # The ChangeStream encountered an unrecoverable error or the
    # resume attempt failed to recreate the cursor.
    print(e)
except Exception as e:
    print(e)
