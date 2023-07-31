FROM postgres:14

LABEL author="Douglas Baltazar"
LABEL description="PostgreSQL for Dev"
LABEL version="1.0"

COPY *.sql /docker-entrypoint-initdb.d/