# Kafka JS WS
[![Run on Repl.it](https://repl.it/badge/github/Allan-Nava/KafkaJS-WS)](https://repl.it/github/Allan-Nava/KafkaJS-WS)
[![Publish Package to npmjs](https://github.com/Allan-Nava/KafkaJS-WS/actions/workflows/npm.yml/badge.svg)](https://github.com/Allan-Nava/KafkaJS-WS/actions/workflows/npm.yml)

### About the project

KafkaJS WS is a modern [Apache Kafka](https://kafka.apache.org/) client for Node js. It is compatible with Kafka 0.10+ offers native support 0.11 features.

Kafka is a registered trademark of The Apache Software Foundation and has been licensed for use by KafkaJS. KafkaJS has no affiliation with and is not endorsed by The Apache Software Foundation.

### Features

It use Socket.IO, it consists of:

- a Node.js server (this repository)
- a Javascript client library for the browser (or a Node.js client)


### Example Usage

```javascript

import { Confluent, Consumer, Subject } from "kafkajs-ws";
import { randomBytes } from "crypto";

const io = new Server(res.socket.server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
      credentials: true
    },
});

const kafka = new Confluent(
    "",
    "",
    KAFKA_BROKERS as string[],
  ).create("client-id");

const groupId = "test-consumer-group-" + randomBytes(16).toString("base64");
const kafkaConsumer = kafka.consumer({ groupId: groupId });
const kafkaSocksConsumer = new Consumer(kafkaConsumer, 'consumer_topic', 'event_name');
const kafkaSocksSubject = new Subject(io, '');
kafkaSocksSubject.add(kafkaSocksConsumer);
kafkaSocksSubject.connect();
//
```

### Documentation

Please see the documnetation [here](https://allan-nava.github.io/KafkaJS-WS/)

