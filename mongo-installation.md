# - MongoDB installation on Ubuntu 20.04 - 

##### Get repo
`curl -fsSL https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -`

##### Test its added
`apt-key list`

##### Add the package location to list
`echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list`

##### Update packages
`sudo apt update`

##### Install mongo
`sudo apt install mongodb-org`

# - MongoDB service common commands - 
##### Start mongod
`sudo systemctl start mongod.service`
##### Stop mongod
`sudo systemctl stop mongod`
##### Enable mongod booting on load
`sudo systemctl enable mongod`
##### Disable mongod booting on load
`sudo systemctl disable mongod`
##### Check mongod status
`sudo systemctl status mongod`
##### Restart mongod
`sudo systemctl restart mongod`

# - MongoDB Healthcheck -
`mongo --eval 'db.runCommand({ connectionStatus: 1 })'`
