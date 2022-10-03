while true
do
        curl -s -w %{time_total}\\n -o /dev/null $1
done
