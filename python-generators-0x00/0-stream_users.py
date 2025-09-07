#!/usr/bin/python3
import mysql.connector
from mysql.connector import Error


def stream_users():
    """Generator that streams rows from user_data table one by one."""
    try:
        # connect to the ALX_prodev database
        connection = mysql.connector.connect(
            host="localhost",
            user="alxprodevadmin",        # change if needed
            password="alxprodev",    # change if needed
            database="ALX_prodev"
        )

        cursor = connection.cursor(dictionary=True)
        cursor.execute("SELECT * FROM user_data;")

        # single loop yielding rows one by one
        for row in cursor:
            yield row

        cursor.close()
        connection.close()

    except Error as e:
        print(f"Error streaming users: {e}")
        return
