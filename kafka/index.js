const express = require("express");
const { Kafka } = require("kafkajs");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//kafka client setup
const kafka = new Kafka({
  clientId: "kafka-producer",
  brokers: ["localhost:9092"],
});

const producer = kafka.producer();

const initKafkaProducer = async () => {
  try {
    await producer.connect();
    console.log("producer connected");
  } catch (error) {
    console.log(error, "connection failed");
    process.exit(1);
  }
};

app.post("/send", async (req, res) => {
  try {
    await producer.send({
      topic: "order",
      messages: [
        {
          value: "test",
        },
      ],
    });
    res.status(200).send({ message: "success" });
  } catch (error) {
    console.log(error, "error message");
    res.status(500).send({ message: "failed" });
  }
});

app.listen(8000, async () => {
  await initKafkaProducer();
  console.log("ayaktayiz");
});
