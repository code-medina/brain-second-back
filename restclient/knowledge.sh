# create idea
curl -X POST \
  -H "Content-type: application/json" \
  "http://localhost:8888/api/v1/knowledge" \
  -d '{"title":"title test","content":"content test"}'

# create idea failed

curl -X POST \
  -H "Content-type: application/json" \
  "http://localhost:8888/api/v1/ideas" \
  -d '{"title":"","description":"descript test"}'

# get ideas
  curl -X GET \
  "http://localhost:8888/api/v1/knowledge"

# put

curl -X PUT \
-H "Content-Type: application/json" \
"http://localhost:8888/api/v1/knowledge" \
-d '{"_id":"795c8b7b-d5da-4f3d-8581-5c70b0b644ec","title":"title edit","content":"content edit","createdAt":"2026-04-08T00:03:04.345Z"}'


# DELETE

curl -X DELETE "http://localhost:8888/api/v1/knowledge/f150a313-6c56-4933-93fd-5864029493c3"
