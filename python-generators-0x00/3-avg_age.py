#!/usr/bin/python3
import mysql.connector
from mysql.connector import Error


def stream_user_ages():
    """Generator that yields user ages one by one."""
    try:
        connection = mysql.connector.connect(
            host="localhost",
            user="root",        # change if needed
            password="root",    # change if needed
            database="ALX_prodev"
        )
        cursor = connection.cursor(dictionary=True)
        cursor.execute("SELECT age FROM user_data;")

        for row in cursor:   # loop 1
            yield int(row["age"])

        cursor.close()
        connection.close()

    except Error as e:
        print(f"Error streaming ages: {e}")
        return


def calculate_average_age():
    """Calculate average age using generator without loading everything in memory."""
    total_age = 0
    count = 0

    for age in stream_user_ages():   # loop 2
        total_age += age
        count += 1

    if count > 0:
        average_age = total_age / count
        print(f"Average age of users: {average_age:.2f}")
    else:
        print("No users found")
