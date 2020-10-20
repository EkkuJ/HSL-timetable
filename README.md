# HSL-timetable
An info screen, which displays the public transportation timetable between Lauttasaari and Aalto University (Otakaari 1).

## Deployment
Get-to-Work! is deployed to [Netlify](https://frosty-shirley-b6d4ea.netlify.com "frosty-shirley-b6d4ea.netlify.com")

## Docker

[Docker Hub -repository](https://hub.docker.com/r/ekkuj/timetable "hub.docker.com/r/ekkuj/timetable")  

Pulled with command `$ docker pull ekkuj/timetable`  
Tag _install-build-prod_ contains the App installed and built. It also configures the server to run when the container starts.  
Run `$ docker run -p 8000:80` and open [port 8000](http://localhost:8000 "localhost:8000").

### Site by EkkuJ  
