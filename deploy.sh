#!/bin/bash
printf "building packages: \n"
ng build

printf "clearing directory: \n"
ssh -i ~/.ssh/pipeline_rsa pipeline@mixspitlick.tech 'rm -rf ./public/*'

printf "deploying packages\n"
cd ./dist/personal-page && tar -cvzf ../build.tar.gz  . && cd ../../
scp -i ~/.ssh/pipeline_rsa ./dist/build.tar.gz pipeline@mixspitlick.tech:
ssh -i ~/.ssh/pipeline_rsa pipeline@mixspitlick.tech 'tar -xvf ./build.tar.gz -C ./public && rm ./build.tar.gz'

printf 'build complete!\n'
rm -rf ./dist
