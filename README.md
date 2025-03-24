# snappymob-challenge
practise dockerize

To run using npx:
npx ts-node challenge-a/generate.ts
npx ts-node challenge-b/process.ts

To run in Docker Container:
docker build -t snappymob-challenge .
docker run --rm -v ${PWD}\output:/app/output snappymob-challenge
