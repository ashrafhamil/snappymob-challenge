npx thingy:
npx ts-node challenge-a/generate.ts
npx ts-node challenge-b/process.ts


Docker Thingy:
run for first time or after do changes:
docker build -t snappymob-challenge .
docker run --rm -v ${PWD}\output:/app/output snappymob-challenge

other notes:
docker build -t snappymob-challenge .
docker build	-Build a new Docker image
-t snappymob-challenge	-Tags the image with the name snappymob-challenge
.	-Tells Docker to look for the Dockerfile in the current directory

docker run --rm -v ${PWD}\output:/app/output snappymob-challenge
docker run	Start a new container
--rm	Automatically remove the container after it finishes (keeps things clean)
-v ${PWD}\output:/app/output	Mounts your local output/ folder into the container’s /app/output path
snappymob-challenge	The image name to run