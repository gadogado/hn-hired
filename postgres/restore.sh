DOCKER_DB_NAME="$(docker-compose ps -q db)"
DB_HOSTNAME=test
DB_USER=test
DB_NAME=hnhired-test
LOCAL_DUMP_PATH=postgres/test.sql


docker exec -i "${DOCKER_DB_NAME}" /bin/bash -c "PGPASSWORD=test psql --username ${DB_USER} ${DB_NAME}" < "${LOCAL_DUMP_PATH}"

# To debug:
# docker exec -it "${DOCKER_DB_NAME}" psql -U test hnhired-test