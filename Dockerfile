FROM node:22

WORKDIR /calculator

COPY index.html .
COPY style.css .
COPY script.js .
COPY server.js .

EXPOSE 4000

CMD ["node", "server.js"]