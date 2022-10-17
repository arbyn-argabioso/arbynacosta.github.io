import datetime


year = int(input("Enter year: "))
month = int(input("Enter month: "))
day = int(input("Enter day: "))

try:
    datetime.datetime(year=year, month=month, day=day)
    print("Date valid")
except ValueError:
    print("Date invalid")
