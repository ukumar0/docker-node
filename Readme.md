Some commands for running this docker image

**To copy the image from docker**
Syntax -```docker run -it <image_name>```
```docker run --it first-nodejs```

**To perform port Mapping after copy of the image**
Syntax -```docker exec -it -p <local_port>:<host_port> <image_name>```
```docker exec -it -p 8000:8000 first-nodejs```

Note - 'After running above commands, if you get any error, please clone the repository and try to again run the server'