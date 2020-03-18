for i in {1..1000}; do
  echo "Generating $i markdown"
  curl "https://jaspervdj.be/lorem-markdownum/markdown.txt" -o "$(date +%Y-%m-%d)-${i}"
  sleep 1
done
