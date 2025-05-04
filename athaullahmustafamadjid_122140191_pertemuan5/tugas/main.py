from Library import Library

print("========= Library Management System ========")

library = Library()

while True:
    print("\n")
    print("Choose an option:")
    print("1. Add Item")
    print("2. Remove Item")
    print("3. Show All Items")
    print("4. Search Item")
    print("5. Exit")
    
    option = int(input("Enter your choice :"))
    
    if option == 1:
        print("\n======= Add Item ========\n")
        title = input("Enter title : ")
        author = input("Enter author : ")
        publisher = input("Enter publisher : ")
        year = int(input("Enter year : "))
        pages = int(input("Enter pages : "))
        item_category = input("Enter item category (Book/Magazine) : ")
        item_code = input("Enter item code : ")
        library.add_item(title,author,publisher,year,pages,item_category,item_code)
    elif option == 2:
        print("\n======= Remove Item ========\n")
        item = input("Enter item title : ")
        library.remove_item_by_title(item)
    elif option == 3:
        print("\n======= Show All Items ========\n")
        library.show_all_items()
    elif option == 4:
        print("\n======= Search Item ========\n")
        item = input("Enter item title : ")
        library.search_item_by_title(item)
    elif option == 5:
        print("\n======= Thank You ========\n")
        break