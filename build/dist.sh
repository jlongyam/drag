#!/usr/bin/env bash
VER=$(cat "./version.txt")
JS=$(cat "../src/drag.min.js")
TO="../dist/drag.min.js"
# build
echo "$VER" > $TO
echo "$JS" >>  $TO
