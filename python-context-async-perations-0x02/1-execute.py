#!/usr/bin/env python3
import sqlite3

class ExecuteQuery:
    """Context manager to execute a query with params"""
    def __init__(self, query, params=None):
        self.query = query
        self.params = params if params else []
        self.results = None

    def __enter__(self):
        self.conn = sqlite3.connect("users.db")
        self.cursor = self.conn.cursor()
        self.cursor.execute(self.query, self.params)
        self.results = self.cursor.fetchall()
        return self.results

    def __exit__(self, exc_type, exc_value, traceback):
        if self.conn:
            self.conn.close()

if __name__ == "__main__":
    query = "SELECT * FROM users WHERE age > ?"
    with ExecuteQuery(query, [25]) as results:
        print(results)
