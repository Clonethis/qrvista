@REM //https://www.tutorialspoint.com/batch_script/batch_script_commands.htm usefull link
@echo on
call npm run build
echo "FINished react build"
copy C:\Users\jirib\Documents\MyProgramming\Work\Evolution\2022\VistaHotel\vista\build C:\Users\jirib\Documents\MyProgramming\Work\Evolution\hosting\vista\public
cd C:\Users\jirib\Documents\MyProgramming\Work\Evolution\hosting\vista 
echo "deploying firebase"
call firebase deploy 
cd C:\Users\jirib\Documents\MyProgramming\Work\Evolution\2022\VistaHotel\vista