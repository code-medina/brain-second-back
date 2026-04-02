# create idea
curl -X POST \
  -H "Content-type: application/json" \
  "http://localhost:8888/api/v1/ideas" \
  -d '{"title":"title test","description":"descript test"}'

# create idea failed

curl -X POST \
  -H "Content-type: application/json" \
  "http://localhost:8888/api/v1/ideas" \
  -d '{"title":"","description":"descript test"}'

# get ideas
  curl -X GET \
  "http://localhost:8888/api/v1/ideas"

# put

curl -X PUT \
-H "Content-Type: application/json" \
"http://localhost:8888/api/v1/ideas" \
-d '{"_id":"4fc239a3-c6b0-47ff-817d-61119290e59b"}'