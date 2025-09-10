#!/usr/bin/env python3
import sqlite3

class DatabaseConnection:
    """Custom context manager for handling DB connection"""
    def __enter__(self):
        self.conn = sqlite3.connect("users.db")
        return self.conn

    def __exit__(self, exc_type, exc_value, traceback):
        if self.conn:
            self.conn.close()

if __name__ == "__main__":
    with DatabaseConnection() as conn:
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM users")
        results = cursor.fetchall()
        print(results)
