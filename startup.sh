PID=`ps -eaf | grep lala-profile-web | grep -v grep | awk '{print $2}'`
if [[ "" !=  "$PID" ]]; then
  echo "killing $PID"
  kill -9 $PID
fi
serve -s /home/muzi/lala-profile-web/build