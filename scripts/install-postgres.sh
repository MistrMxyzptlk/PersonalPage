#!/bin/bash

apk update
apk add postgresql

# Load postgres home dir
read -rp 'Where to run from (default: /run/postgresql) ' pgsql_home
if [ "$pgsql_home" -eq "" ]
then
  pgsql_home="/run/postgresql"
fi
mkdir $pgsql_home

# create file to run postgres from
apk add postgresql
mkdir /run/postgresql
chown postgres:postgres /run/postgresql/

# Change to postgres user, and navigate to its home directory
su postgres -
cd
pwd

# Create the data directory, and make it less permissive
mkdir /var/lib/postgresql/data
chmod 0700 /var/lib/postgresql/data
initdb -D /var/lib/postgresql/data

echo "host all all 0.0.0.0/0 md5" >> /var/lib/postgresql/data/pg_hba.conf
echo "listen_addresses='*'" >> /var/lib/postgresql/data/postgresql.conf
