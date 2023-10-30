#!/usr/bin/env bash

cd ./src/views/quiz/quiz-app && yarn && yarn build && rm -rf ../build && mv build ../build && cd ../../../../
pwd && cd ./src/views/leader-board/leader-board-app && yarn && yarn build  && rm -rf ../build && mv build ../build && cd ../../../../

if [[ "$1" == "dist" ]]; then
  yarn dist
fi
