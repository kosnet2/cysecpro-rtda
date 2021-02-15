# - Docker installation on Ubuntu 20.04 -

##### Update packages
`sudo apt update`

##### Install prerequisites
`sudo apt install apt-transport-https ca-certificates curl software-properties-common`

##### Add the GPG key for the official Docker repository
`curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -`

##### Add the Docker repository
`sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"`

##### Update packages
`sudo apt update`

##### Check policies
`apt-cache policy docker-ce`

##### Install Docker
`sudo apt install docker-ce`

##### Add your user to docker group
`sudo usermod -aG docker ${USER}`

##### Or other users as well
`sudo usermod -aG docker some_other_user`

##### Log out and back in
`su - ${USER}`
