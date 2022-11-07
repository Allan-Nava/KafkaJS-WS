---
layout: default
title: Home
nav_order: 1
description: "KafkaJS WS Docs"
permalink: /
last_modified_date: 2022-10-19T17:54:08+0000
---

# Kafka JS WebSocket Official Documentation

It use Socket.IO and Kafka JS libraries


### About the project

KafkaJS WS is a modern [Apache Kafka](https://kafka.apache.org/) client for Node js. It is compatible with Kafka 0.10+ offers native support 0.11 features.

Kafka is a registered trademark of The Apache Software Foundation and has been licensed for use by KafkaJS. KafkaJS has no affiliation with and is not endorsed by The Apache Software Foundation.


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