#!/bin/sh
# for easy deploying react project
npm run build
$HOME = /Users/jiribrtnik/Documents/code/work/Evolution/2022/hostings/public
# $file = 
for file in * .* 
do
  test -f "$file" && mv "$file" "$HOME"/
done
cd /Users/jiribrtnik/Documents/code/work/Evolution/2022/VistaHotel/vista
mv -f ./build/* /Users/jiribrtnik/Documents/code/work/Evolution/2022/hostings/public
cd /Users/jiribrtnik/Documents/code/work/Evolution/2022/hostings/public
firebase deploy
cd /Users/jiribrtnik/Documents/code/work/Evolution/2022/VistaHotel/vista