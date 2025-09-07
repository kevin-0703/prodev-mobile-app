#!/usr/bin/python3
import mysql.connector
from mysql.connector import Error


def stream_users_in_batches(batch_size):
    """Generator that yields rows from user_data table in batches."""
    try:
        connection = mysql.connector.connect(
            host="localhost",
            user="alxprodevadmin",        # change if needed
            password="alxprodev",    # change if needed
            database="ALX_prodev"
        )
        cursor = connection.cursor(dictionary=True)
        cursor.execute("SELECT * FROM user_data;")

        while True:
            batch = cursor.fetchmany(batch_size)
            if not batch:
                break
            yield batch  # yield one batch at a time

        cursor.close()
        connection.close()

    except Error as e:
        print(f"Error streaming batches: {e}")
        return


def batch_processing(batch_size):
    """Process batches to filter users with age > 25."""
    for batch in stream_users_in_batches(batch_size):        # loop 1
        for user in batch:                                   # loop 2
            if int(user["age"]) > 25:
                print(user)
