Some commands for running this docker image

**To copy the image from docker**
Syntax -```docker run -it <image_name>```
```docker run --it first-nodejs```

**To perform port Mapping after copy of the image**
Syntax -```docker exec -it -p <local_port>:<host_port> <image_name>```
```docker exec -it -p 8000:8000 first-nodejs```

**To run docker compose for running multiple_containers at same time**
Syntax -```docker compose us``` #basically, composes all the multiple containers up and running for the specific image
```docker compose up -d``` #To run in background
```docker compose down``` #To remove the multilayer composed containers

Note - 'After running above commands, if you get any error, please clone the repository and try to again run the server'