#!/bin/bash

# clear

FILE_NAME="build.sh"

# relative path
BABEL_PATH="$PWD/babel"
REACT_PATH="$PWD/react"
ISOMORPHIC_PATH="$PWD/react-isomophic"
# TYPESCRIPT_PATH="$PWD/typescript"

echo "Start excute $FILE_NAME at $PWD"
echo ""

# build babel
echo "================================"
echo "Start building at $BABEL_PATH"
cd "$BABEL_PATH"
yarn && bower install && npm run build
echo "Building process has been done"
echo ""

# build react
echo "================================"
echo "Start building at $REACT_PATH"
cd "$REACT_PATH"
yarn && bower install && npm run build
echo "Building process has been done"
echo ""

# build react-isomophic
echo "================================"
echo "Start building at $ISOMORPHIC_PATH"
cd "$ISOMORPHIC_PATH"
yarn && bower install && npm run client.build.prod && npm run server.build.prod
echo "Building process has been done"
echo ""
