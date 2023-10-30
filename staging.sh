#!/usr/bin/env bash

cd ./src/views/quiz/quiz-app && yarn && yarn build && mv build/* ../ && cd ../../../.. && rm -rf ./src/views/quiz/quiz-app
cd ./src/views/leader-board/leader-board-app && yarn && yarn build && mv build/* ../ && cd ../../../../ && rm -rf ./src/views/leader-board/leader-board-app