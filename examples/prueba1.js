
const dcmjsDimse = require('dcmjs-dimse');
const { Client } = dcmjsDimse;
const { CEchoRequest } = dcmjsDimse.requests;
const { Status } = dcmjsDimse.constants;

const client = new Client();
const request = new CEchoRequest();

request.on('response', (response) => {
  if (response.getStatus() === Status.Success) {
    console.log('Todo bien!');
  }
});

client.addRequest(request);

client.on('networkError', (e) => {
  console.log('Red error: ', e);
});
client.send('192.168.1.71', 11112, 'TC', '192');