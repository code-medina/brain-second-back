# create idea
curl -X POST \
  -H "Content-type: application/json" \
  "http://localhost:8888/api/v1/ideas" \
  -d '{"title":"title test","description":"descript test"}'

# get ideas
  curl -X GET \
  "http://localhost:8888/api/v1/ideas