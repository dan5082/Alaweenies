import pymysql



db = pymysql.connect(host="localhost", port=3306, user="alaweenies_api", passwd="alaweenies1", db="alaweenies_alaweenies_test")

cursor = db.cursor()



cursor.execute("""

UPDATE Orders
SET Delivered = 1
WHERE Delivered = 0 AND DriverID = 0
ORDER BY OrderId ASC
LIMIT 1

""")

cursor.execute("""

UPDATE Orders
SET Delivered = 1
WHERE Delivered = 0 AND DriverID = 1
ORDER BY OrderId ASC
LIMIT 1

""")

cursor.execute("""

UPDATE Orders
SET Delivered = 1
WHERE Delivered = 0 AND DriverID = 2
ORDER BY OrderId ASC
LIMIT 1

""")

cursor.execute("""

UPDATE Orders
SET Delivered = 1
WHERE Delivered = 0 AND DriverID = 3
ORDER BY OrderId ASC
LIMIT 1

""")

cursor.execute("""

UPDATE Orders
SET Delivered = 1
WHERE Delivered = 0 AND DriverID = 4
ORDER BY OrderId ASC
LIMIT 1

""")


cursor.execute("""

UPDATE Orders
SET Delivered = 1
WHERE Delivered = 0 AND DriverID = 5
ORDER BY OrderId ASC
LIMIT 1

""")


cursor.execute("""

UPDATE Orders
SET Delivered = 1
WHERE Delivered = 0 AND DriverID = 6
ORDER BY OrderId ASC
LIMIT 1

""")


cursor.execute("""

UPDATE Orders
SET Delivered = 1
WHERE Delivered = 0 AND DriverID = 7
ORDER BY OrderId ASC
LIMIT 1

""")


#print("ran")

for row in cursor:
    print(row)

db.commit()

db.close()

