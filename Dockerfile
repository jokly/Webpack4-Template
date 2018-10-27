FROM node:carbon

ENV WORK_DIR /usr/src/app

WORKDIR ${WORK_DIR}

EXPOSE 8080
CMD ["bash"]
