# Oracle Database example with Node and Docker

This is the basis for making a successful connection to Oracle Database, Node and Docker.

## Recommended actions

From now on, try to run all node commands from inside the Node application container.

**See an example of how to install express**

1. Start the container in attach mode;

```bash
docker container exec -it api bash
```

2. Now for the other commands, run from the container

```bash
npm i express #or any other command configured in scripts "npm run test"
```

## Alternative

Or if you prefer, you can also do this with a single command;

```bash
docker container exec -i api bash sh -c "npm i express"
```
