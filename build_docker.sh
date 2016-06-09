#! /bin/bash

##########################################################
#                                                        #
# This file contains a series of commands to build and   #
# mount an image on docker.                              #
# Although while running this file as a bash executable  #
# is easier, you are ADVICED to run each command in this #
# file independently, so as to manage any error that may #
# occur from each command.                               #
#                                                        #
##########################################################

# build Dockerfile image
docker build -t elasticsearch_sdp .

# launch the image in a container
docker run --rm -p 9200:9200 elasticsearch_sdp

# create a volume for persistence
docker volume create --name esdata

# mount the volume image
docker run --rm -ti -p 9200:9200 -v esdata:/usr/share/elasticsearch/data elasticsearch_sdp
