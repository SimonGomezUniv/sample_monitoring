# get elasticsearch running

```
docker pull elasticsearch:8.4.0
docker run -d --name elasticsearch  -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" elasticsearch:8.4.0
```



```
docker pull grafana/grafana
docker run -d --name=grafana -p 3000:3000 grafana/grafana

```

docker pull influxdb
docker run -d -p 8086:8086 -name docker -e DOCKER_INFLUXDB_INIT_USERNAME=admin -e DOCKER_INFLUXDB_INIT_PASSWORD=admin -v influxdb:/var/lib/influxdb influxdb  