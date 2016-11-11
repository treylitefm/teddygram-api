# teddygram-be

[Teddygram] -- the latest and greatest open source attempt at an Instagram clone.

### Running the api locally

[Docker] is not required, but highly recommended

Once that's installed, run

```
$ docker-compose up -d
```

from the root directory of the project. Now, navigate to localhost:8080 or try
```
curl localhost:8080/users
```
If you receive a response, then you're good to go.

[Docker]: <https://docs.docker.com/docker-for-mac/>
[Teddygram]: <https://github.com/paulmun/Teddygram>
